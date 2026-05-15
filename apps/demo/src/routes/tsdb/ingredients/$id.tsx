import { createFileRoute } from '@tanstack/react-router';
import { IngredientDetailPageDBProvider } from '@/pages/providers/IngredientDetailPageDBProvider';

export const Route = createFileRoute('/tsdb/ingredients/$id')({
  component: IngredientDetailPageDBProvider,
});
