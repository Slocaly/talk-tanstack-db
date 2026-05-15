import type { IngredientsFilters } from '@/hooks/useIngredientsFilters';
import type { RecipesFilters } from '@/hooks/useRecipesFilters';
import type { AppPathPrefix } from '@/lib/appPathPrefix';
import type { DashboardSummary, Ingredient, Recipe } from '@/types/domain';

export type PaginatedList<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

/** Required when calling `listIngredients` / `listRecipes` with prefix `/tsq` (API page walk). */
export type TsqListFetchOptions = {
  fetchPageSize: number;
};

const rawBase = import.meta.env.VITE_API_BASE_URL as string | undefined;
const base = (rawBase?.replace(/\/$/, '') || '/api').replace(/\/$/, '');

function apiRoot(prefix: AppPathPrefix): string {
  const segment = prefix === '/tsdb' ? 'tsdb' : 'tsq';
  return `${base}/${segment}`;
}

async function readErrorMessage(res: Response): Promise<string> {
  const text = await res.text();
  try {
    const j = JSON.parse(text) as { message?: unknown };
    if (typeof j.message === 'string') return j.message;
    if (Array.isArray(j.message)) return j.message.join(', ');
  } catch {
    /* ignore */
  }
  return text || res.statusText;
}

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }
  return res.json() as Promise<T>;
}

function tsqListParams(filters: IngredientsFilters, pageSize: number): string {
  const q = new URLSearchParams();
  q.set('page', String(filters.page));
  q.set('pageSize', String(pageSize));
  q.set('search', filters.search.trim());
  q.set('category', filters.category);
  q.set('expiringSoon', filters.expiringSoon ? 'true' : 'false');
  q.set('inStockOnly', filters.inStockOnly ? 'true' : 'false');
  return q.toString();
}

function tsqRecipeListParams(
  filters: RecipesFilters,
  pageSize: number,
): string {
  const q = new URLSearchParams();
  q.set('page', String(filters.page));
  q.set('pageSize', String(pageSize));
  q.set('search', filters.search.trim());
  q.set('makableOnly', filters.makableOnly ? 'true' : 'false');
  return q.toString();
}

export async function listIngredientsDB(): Promise<Ingredient[]> {
  const res = await fetch(`${apiRoot('/tsdb')}/ingredients`);
  return parseJson(res);
}

export async function listIngredients(
  prefix: AppPathPrefix,
  filters: IngredientsFilters,
): Promise<PaginatedList<Ingredient>> {
  const res = await fetch(
    `${apiRoot(prefix)}/ingredients?${tsqListParams(filters, filters?.pageSize ?? 10)}`,
  );

  return parseJson(res);
}

export async function getIngredient(
  prefix: AppPathPrefix,
  id: string,
): Promise<Ingredient | null> {
  const res = await fetch(
    `${apiRoot(prefix)}/ingredients/${encodeURIComponent(id)}`,
  );
  if (res.status === 404) return null;
  return parseJson(res);
}

export async function updateIngredientQuantity(
  prefix: AppPathPrefix,
  id: string,
  newQuantity: number,
): Promise<Ingredient> {
  const res = await fetch(
    `${apiRoot(prefix)}/ingredients/${encodeURIComponent(id)}/quantity`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: newQuantity }),
    },
  );
  return parseJson(res);
}

export async function listRecipesDB(): Promise<Recipe[]> {
  const res = await fetch(`${apiRoot('/tsdb')}/recipes`);
  return parseJson(res);
}

export async function listRecipes(
  prefix: AppPathPrefix,
  filters: RecipesFilters,
): Promise<PaginatedList<Recipe>> {
  const res = await fetch(
    `${apiRoot(prefix)}/recipes?${tsqRecipeListParams(filters, filters.pageSize)}`,
  );
  return parseJson(res);
}

export async function getRecipe(
  prefix: AppPathPrefix,
  id: string,
): Promise<Recipe | null> {
  const res = await fetch(
    `${apiRoot(prefix)}/recipes/${encodeURIComponent(id)}`,
  );
  if (res.status === 404) return null;
  return parseJson(res);
}

export async function getDashboardSummary(
  prefix: AppPathPrefix,
): Promise<DashboardSummary> {
  const res = await fetch(`${apiRoot(prefix)}/dashboard/summary`);
  return parseJson(res);
}

export function isRecipeMakable(
  recipe: Recipe,
  stockById: Map<string, number>,
): boolean {
  return recipe.ingredients.every((line) => {
    const q = stockById.get(line.ingredientId) ?? 0;
    return q >= line.amount;
  });
}
