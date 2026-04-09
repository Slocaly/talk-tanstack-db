import { createFileRoute } from '@tanstack/react-router'
import { RecipeDetailPageQueryProvider } from '@/pages/providers/RecipeDetailPageQueryProvider'

export const Route = createFileRoute('/tsq/recipes/$id')({
  component: RecipeDetailPageQueryProvider,
})
