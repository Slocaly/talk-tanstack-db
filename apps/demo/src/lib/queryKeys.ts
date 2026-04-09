export const queryKeys = {
  ingredients: ['ingredients'] as const,
  ingredient: (id: string) => ['ingredient', id] as const,
  recipes: ['recipes'] as const,
  recipe: (id: string) => ['recipe', id] as const,
  dashboard: ['dashboard'] as const,
}
