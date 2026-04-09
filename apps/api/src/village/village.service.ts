import { Injectable, NotFoundException } from '@nestjs/common';
import { seedIngredients, seedRecipes } from './seed.data';
import type {
  DashboardSummary,
  Ingredient,
  Recipe,
} from './village.types';

function cloneIngredient(i: Ingredient): Ingredient {
  return { ...i };
}

function cloneRecipe(r: Recipe): Recipe {
  return {
    ...r,
    ingredients: r.ingredients.map((x) => ({ ...x })),
  };
}

function daysUntil(dateIso: string): number {
  const d = new Date(dateIso);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  return Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

@Injectable()
export class VillageService {
  private ingredients: Ingredient[] = seedIngredients.map(cloneIngredient);
  private recipes: Recipe[] = seedRecipes.map(cloneRecipe);

  findAllIngredients(): Ingredient[] {
    return this.ingredients.map(cloneIngredient);
  }

  findIngredient(id: string): Ingredient {
    const found = this.ingredients.find((i) => i.id === id);
    if (!found) {
      throw new NotFoundException('Ingrédient introuvable');
    }
    return cloneIngredient(found);
  }

  updateIngredientQuantity(id: string, rawQuantity: number): Ingredient {
    const idx = this.ingredients.findIndex((i) => i.id === id);
    if (idx === -1) {
      throw new NotFoundException('Ingrédient introuvable');
    }
    const next = Math.max(0, Math.round(rawQuantity * 100) / 100);
    this.ingredients[idx] = { ...this.ingredients[idx], quantity: next };
    return cloneIngredient(this.ingredients[idx]);
  }

  findAllRecipes(): Recipe[] {
    return this.recipes.map(cloneRecipe);
  }

  findRecipe(id: string): Recipe {
    const found = this.recipes.find((r) => r.id === id);
    if (!found) {
      throw new NotFoundException('Recette introuvable');
    }
    return cloneRecipe(found);
  }

  getDashboardSummary(): DashboardSummary {
    const list = this.ingredients;
    const inStock = list.filter((i) => i.quantity > 0);
    const totalStockUnits = inStock.reduce((s, i) => s + i.quantity, 0);
    const sortedByDue = [...inStock].sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    );
    const nextExpiring = sortedByDue[0] ?? null;
    const expiringWithin7Days = inStock.filter((i) => {
      const d = daysUntil(i.dueDate);
      return d >= 0 && d <= 7;
    }).length;
    const lowStockCount = inStock.filter((i) => i.quantity <= 2).length;

    return {
      totalIngredientKinds: inStock.length,
      totalStockUnits,
      nextExpiring: nextExpiring ? cloneIngredient(nextExpiring) : null,
      expiringWithin7Days,
      lowStockCount,
    };
  }
}
