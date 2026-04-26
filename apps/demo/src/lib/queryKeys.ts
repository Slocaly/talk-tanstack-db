import type { AppPathPrefix } from '@/lib/appPathPrefix'

export const queryKeys = {
  /** Prefix match for invalidating any ingredients query for this app tree. */
  ingredientsScope: (prefix: AppPathPrefix) => ['ingredients', prefix] as const,
  ingredients: (prefix: AppPathPrefix, fetchPageSize: number) =>
    ['ingredients', prefix, fetchPageSize] as const,
  ingredient: (prefix: AppPathPrefix, id: string) =>
    ['ingredient', prefix, id] as const,
  recipesScope: (prefix: AppPathPrefix) => ['recipes', prefix] as const,
  recipes: (prefix: AppPathPrefix, fetchPageSize: number) =>
    ['recipes', prefix, fetchPageSize] as const,
  recipe: (prefix: AppPathPrefix, id: string) => ['recipe', prefix, id] as const,
  dashboard: (prefix: AppPathPrefix) => ['dashboard', prefix] as const,
}
