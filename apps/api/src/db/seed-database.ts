import type Database from 'better-sqlite3';
import { seedIngredients, seedRecipes } from '../village/seed.data';

export function seedFromSeedData(db: Database.Database): void {
  const insertIngredient = db.prepare(`
    INSERT INTO ingredients (
      id, name, quantity, unit, due_date, where_to_find, how_to_harvest, lat, lng, category
    ) VALUES (
      @id, @name, @quantity, @unit, @due_date, @where_to_find, @how_to_harvest, @lat, @lng, @category
    )
  `);

  const insertRecipe = db.prepare(`
    INSERT INTO recipes (id, name, description)
    VALUES (@id, @name, @description)
  `);

  const insertRecipeIngredient = db.prepare(`
    INSERT INTO recipe_ingredients (recipe_id, ingredient_id, amount)
    VALUES (@recipe_id, @ingredient_id, @amount)
  `);

  const tx = db.transaction(() => {
    db.exec('DELETE FROM recipe_ingredients');
    db.exec('DELETE FROM recipes');
    db.exec('DELETE FROM ingredients');

    for (const i of seedIngredients) {
      insertIngredient.run({
        id: i.id,
        name: i.name,
        quantity: i.quantity,
        unit: i.unit,
        due_date: i.dueDate,
        where_to_find: i.whereToFind,
        how_to_harvest: i.howToHarvest,
        lat: i.lat,
        lng: i.lng,
        category: i.category,
      });
    }

    for (const r of seedRecipes) {
      insertRecipe.run({
        id: r.id,
        name: r.name,
        description: r.description ?? null,
      });
      for (const ri of r.ingredients) {
        insertRecipeIngredient.run({
          recipe_id: r.id,
          ingredient_id: ri.ingredientId,
          amount: ri.amount,
        });
      }
    }
  });

  tx();
}
