import { createFileRoute } from '@tanstack/react-router';
import { IngredientsPageDBProvider } from '@/pages/providers/IngredientsPageDBProvider';

export const Route = createFileRoute('/tsdb/ingredients/')({
  component: IngredientsPageDBProvider,
});
