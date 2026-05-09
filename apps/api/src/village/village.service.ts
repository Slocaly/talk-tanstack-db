import { Injectable, NotFoundException } from '@nestjs/common';
import { seedIngredients, seedRecipes } from './seed.data';
import type {
  DashboardSummary,
  Ingredient,
  IngredientCategory,
  PaginatedList,
  Recipe,
} from './village.types';

export type IngredientsListFilters = {
  search: string;
  category: IngredientCategory | 'tous';
  expiringSoon: boolean;
  inStockOnly: boolean;
};

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

const MAX_PAGE_SIZE = 200;

function normalizePagination(
  page: number,
  pageSize: number,
): { page: number; pageSize: number } {
  const pageSizeClamped = Math.min(
    MAX_PAGE_SIZE,
    Math.max(1, Number.isFinite(pageSize) ? Math.floor(pageSize) : 20),
  );
  const pageClamped = Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1);
  return { page: pageClamped, pageSize: pageSizeClamped };
}

function paginateArray<T>(
  source: T[],
  mapItem: (item: T) => T,
  page: number,
  pageSize: number,
): PaginatedList<T> {
  const { page: p, pageSize: ps } = normalizePagination(page, pageSize);
  const totalItems = source.length;
  const totalPages = totalItems === 0 ? 0 : Math.ceil(totalItems / ps);
  const pageSafe = totalPages === 0 ? 1 : Math.min(Math.max(1, p), totalPages);
  const start = (pageSafe - 1) * ps;
  const items = source.slice(start, start + ps).map(mapItem);
  return {
    items,
    page: pageSafe,
    pageSize: ps,
    totalItems,
    totalPages,
    hasNextPage: totalPages > 0 && pageSafe < totalPages,
    hasPreviousPage: pageSafe > 1,
  };
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

  findRecipesPaginated(page: number, pageSize: number): PaginatedList<Recipe> {
    return paginateArray(this.recipes, cloneRecipe, page, pageSize);
  }

  findIngredientsPaginated(
    page: number,
    pageSize: number,
    filters: IngredientsListFilters,
  ): PaginatedList<Ingredient> {
    const source = this.filterIngredientsForList(this.ingredients, filters);
    return paginateArray(source, cloneIngredient, page, pageSize);
  }

  private filterIngredientsForList(
    list: Ingredient[],
    f: IngredientsListFilters,
  ): Ingredient[] {
    let out = list;
    if (f.inStockOnly) {
      out = out.filter((i) => i.quantity > 0);
    }
    if (f.expiringSoon) {
      out = out.filter((i) => {
        if (i.quantity <= 0) return false;
        const d = daysUntil(i.dueDate);
        return d >= 0 && d <= 7;
      });
    }
    if (f.category !== 'tous') {
      out = out.filter((i) => i.category === f.category);
    }
    const q = f.search.trim().toLowerCase();
    if (q.length > 0) {
      out = out.filter((i) => {
        const hay =
          `${i.name} ${i.whereToFind} ${i.howToHarvest} ${i.category}`.toLowerCase();
        return hay.includes(q);
      });
    }
    return out;
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
