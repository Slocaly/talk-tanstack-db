import { createFileRoute } from '@tanstack/react-router'
import { IngredientsPage } from '@/pages/IngredientsPage'

export const Route = createFileRoute('/ingredients/')({
  component: IngredientsPage,
})
