import { createFileRoute } from '@tanstack/react-router'
import { RecipesPageQueryProvider } from '@/pages/providers/RecipesPageQueryProvider'

export const Route = createFileRoute('/recipes/')({
  component: RecipesPageQueryProvider,
})
