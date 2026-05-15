import type { IngredientsFilters } from '@/hooks/useIngredientsFilters';
import type { RecipesFilters } from '@/hooks/useRecipesFilters';
import type { AppPathPrefix } from '@/lib/appPathPrefix';

export const queryKeys = {
  /** Prefix match for invalidating any ingredients query for this app tree. */
  ingredientsScope: (prefix: AppPathPrefix) => ['ingredients', prefix] as const,
  /** Full ingredients list for client-side filtering (e.g. search). */
  ingredientsCatalog: (prefix: AppPathPrefix, filters: IngredientsFilters) =>
    ['ingredients', prefix, 'catalog', filters] as const,
  /** Server-paginated ingredients table. */
  ingredientsPage: (prefix: AppPathPrefix, page: number, pageSize: number) =>
    ['ingredients', prefix, 'page', page, pageSize] as const,
  ingredients: (prefix: AppPathPrefix, fetchPageSize: number) =>
    ['ingredients', prefix, fetchPageSize] as const,
  ingredient: (prefix: AppPathPrefix, id: string) =>
    ['ingredient', prefix, id] as const,
  recipesScope: (prefix: AppPathPrefix) => ['recipes', prefix] as const,
  recipesCatalog: (prefix: AppPathPrefix, filters: RecipesFilters) =>
    ['recipes', prefix, 'catalog', filters] as const,
  recipesPage: (prefix: AppPathPrefix, page: number, pageSize: number) =>
    ['recipes', prefix, 'page', page, pageSize] as const,
  recipes: (prefix: AppPathPrefix, fetchPageSize: number) =>
    ['recipes', prefix, fetchPageSize] as const,
  recipe: (prefix: AppPathPrefix, id: string) =>
    ['recipe', prefix, id] as const,
  dashboard: (prefix: AppPathPrefix) => ['dashboard', prefix] as const,
};
