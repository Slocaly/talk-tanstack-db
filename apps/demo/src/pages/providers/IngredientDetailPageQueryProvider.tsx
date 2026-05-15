import { useParams } from '@tanstack/react-router';
import { useIngredientByIdQuery } from '@/hooks/useIngredientByIdQuery';
import { IngredientDetailPage } from '@/pages/IngredientDetailPage';

export function IngredientDetailPageQueryProvider() {
  const { id } = useParams({ strict: false });

  const {
    data: ingredient,
    isPending,
    error,
    refetch,
  } = useIngredientByIdQuery('/tsq', id ?? '');

  return (
    <IngredientDetailPage
      id={id}
      ingredient={ingredient ?? null}
      isPending={isPending}
      error={error}
      refetch={refetch}
    />
  );
}
