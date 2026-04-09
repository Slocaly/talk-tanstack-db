import { createFileRoute } from '@tanstack/react-router'
import { RecipeDetailPageQueryProvider } from '@/pages/providers/RecipeDetailPageQueryProvider'

export const Route = createFileRoute('/tsdb/recipes/$id')({
  component: RecipeDetailPageQueryProvider,
})
