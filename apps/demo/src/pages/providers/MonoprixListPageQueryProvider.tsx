import { useMonoprixIngredientsQuery } from '@/hooks/useMonoprixIngredientsQuery';
import { MonoprixPage } from '@/pages/MonoprixPage';

export function MonoprixListPageQueryProvider() {
  const { data, isPending, error, refetch } = useMonoprixIngredientsQuery();

  return (
    <MonoprixPage
      ingredients={data?.items ?? []}
      totalItems={data?.totalItems ?? 0}
      totalPages={data?.totalPages ?? 0}
      isPending={isPending}
      error={error}
      refetch={refetch}
    />
  );
}
