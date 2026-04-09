import { createFileRoute } from '@tanstack/react-router'
import { IngredientDetailPageQueryProvider } from '@/pages/providers/IngredientDetailPageQueryProvider'

export const Route = createFileRoute('/ingredients/$id')({
  component: IngredientDetailPageQueryProvider,
})
