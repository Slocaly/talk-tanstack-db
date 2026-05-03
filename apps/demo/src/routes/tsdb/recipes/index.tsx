import { RecipesPageQueryProvider } from '@/pages/providers/RecipesPageQueryProvider';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tsdb/recipes/')({
    component: RecipesPageQueryProvider,
})

