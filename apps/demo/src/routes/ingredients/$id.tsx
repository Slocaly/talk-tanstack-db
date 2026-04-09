import { createFileRoute } from '@tanstack/react-router'
import { IngredientDetailPage } from '@/pages/IngredientDetailPage'

export const Route = createFileRoute('/ingredients/$id')({
  component: IngredientDetailPage,
})
