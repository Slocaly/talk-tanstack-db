import { RecipeDetailPageQueryProvider } from '@/pages/providers/RecipeDetailPageQueryProvider';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tsdb/recipes/$id')({
    component: RecipeDetailPageQueryProvider,
})
