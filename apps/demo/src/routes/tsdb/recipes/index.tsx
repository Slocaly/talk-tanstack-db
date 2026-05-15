import { createFileRoute } from '@tanstack/react-router';
import { RecipesPageDBProvider } from '@/pages/providers/RecipesPageDBProvider';

export const Route = createFileRoute('/tsdb/recipes/')({
  component: RecipesPageDBProvider,
});
