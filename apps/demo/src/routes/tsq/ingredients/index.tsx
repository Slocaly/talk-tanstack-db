import { createFileRoute } from '@tanstack/react-router';
import { IngredientsPageQueryProvider } from '@/pages/providers/IngredientsPageQueryProvider';

export const Route = createFileRoute('/tsq/ingredients/')({
  component: IngredientsPageQueryProvider,
});
