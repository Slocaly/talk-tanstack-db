import { createFileRoute } from '@tanstack/react-router'
import { RecipeDetailPageDBProvider } from '@/pages/providers/RecipeDetailPageDBProvider'

export const Route = createFileRoute('/tsdb/recipes/$id')({
  component: RecipeDetailPageDBProvider,
})
