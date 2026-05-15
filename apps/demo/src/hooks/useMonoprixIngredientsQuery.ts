import { useQuery } from '@tanstack/react-query';
import { listIngredients } from '@/lib/api';
import { shuffleMonoprixProducts } from '@/lib/monoprixShuffle';
import { queryKeys } from '@/lib/queryKeys';
import { useMonoprixFilters } from './useMonoprixFilters';

export function useMonoprixIngredientsQuery() {
  const { filters } = useMonoprixFilters();

  return useQuery({
    queryKey: queryKeys.monoprixCatalog(filters),
    queryFn: () =>
      listIngredients('/tsq', {
        page: filters.page,
        pageSize: filters.pageSize,
        search: filters.search,
        category: 'tous',
        expiringSoon: false,
        inStockOnly: false,
      }),
    select: (data) => ({
      ...data,
      items: shuffleMonoprixProducts(data.items, filters.page, filters.search),
    }),
  });
}
