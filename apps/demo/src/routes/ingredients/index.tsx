import { createFileRoute } from '@tanstack/react-router'
import { IngredientsPageQueryProvider } from '@/pages/providers/IngredientsPageQueryProvider'

export const Route = createFileRoute('/ingredients/')({
  component: IngredientsPageQueryProvider,
})
