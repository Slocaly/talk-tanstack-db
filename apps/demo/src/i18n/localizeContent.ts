import type { DashboardSummary, Ingredient, Recipe } from '@/types/domain';
import { locale } from '@/i18n';
import {
  ingredientContentEn,
  type IngredientContentOverlay,
} from '@/i18n/content/en-ingredients';
import {
  recipeContentEn,
  type RecipeContentOverlay,
} from '@/i18n/content/en-recipes';

function applyIngredientOverlay(
  ingredient: Ingredient,
  overlay: IngredientContentOverlay | undefined,
): Ingredient {
  if (!overlay) return ingredient;
  return {
    ...ingredient,
    name: overlay.name,
    whereToFind: overlay.whereToFind,
    howToHarvest: overlay.howToHarvest,
    unit: overlay.unit ?? ingredient.unit,
  };
}

function applyRecipeOverlay(
  recipe: Recipe,
  overlay: RecipeContentOverlay | undefined,
): Recipe {
  if (!overlay) return recipe;
  return {
    ...recipe,
    name: overlay.name,
    description: overlay.description ?? recipe.description,
  };
}

/** Overlay English copy onto API entities when `VITE_LOCALE=en`. */
export function localizeIngredient(ingredient: Ingredient): Ingredient {
  if (locale !== 'en') return ingredient;
  return applyIngredientOverlay(
    ingredient,
    ingredientContentEn[ingredient.id],
  );
}

export function localizeIngredients(
  ingredients: Ingredient[],
): Ingredient[] {
  if (locale !== 'en') return ingredients;
  return ingredients.map(localizeIngredient);
}

export function localizeRecipe(recipe: Recipe): Recipe {
  if (locale !== 'en') return recipe;
  return applyRecipeOverlay(recipe, recipeContentEn[recipe.id]);
}

export function localizeRecipes(recipes: Recipe[]): Recipe[] {
  if (locale !== 'en') return recipes;
  return recipes.map(localizeRecipe);
}

export function localizeDashboardSummary(
  summary: DashboardSummary,
): DashboardSummary {
  if (locale !== 'en' || !summary.nextExpiring) return summary;
  return {
    ...summary,
    nextExpiring: localizeIngredient(summary.nextExpiring),
  };
}
