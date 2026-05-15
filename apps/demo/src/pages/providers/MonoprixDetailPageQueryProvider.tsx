import { useParams } from '@tanstack/react-router';
import { useMonoprixIngredientByIdQuery } from '@/hooks/useMonoprixIngredientByIdQuery';
import { MonoprixProductDetailPage } from '@/pages/MonoprixProductDetailPage';

export function MonoprixDetailPageQueryProvider() {
  const { id } = useParams({ strict: false });
  const {
    data: ingredient,
    isPending,
    error,
    refetch,
  } = useMonoprixIngredientByIdQuery(id ?? '');

  return (
    <MonoprixProductDetailPage
      id={id}
      ingredient={ingredient ?? null}
      isPending={isPending}
      error={error}
      refetch={refetch}
    />
  );
}
