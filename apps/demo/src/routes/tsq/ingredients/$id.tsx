import { createFileRoute } from '@tanstack/react-router'
import { IngredientDetailPageQueryProvider } from '@/pages/providers/IngredientDetailPageQueryProvider'

export const Route = createFileRoute('/tsq/ingredients/$id')({
  component: IngredientDetailPageQueryProvider,
})
