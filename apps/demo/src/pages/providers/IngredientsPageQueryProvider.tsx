import { useIngredientsQuery } from '@/hooks/useIngredientsQuery';
import { IngredientsPage } from '@/pages/IngredientsPage';

export function IngredientsPageQueryProvider() {
  const { data, isPending, error, refetch } = useIngredientsQuery();

  return (
    <IngredientsPage
      ingredients={data?.items ?? []}
      totalItems={data?.totalItems ?? 0}
      totalPages={data?.totalPages ?? 0}
      isPending={isPending}
      refetch={refetch}
      error={error}
    />
  );
}
