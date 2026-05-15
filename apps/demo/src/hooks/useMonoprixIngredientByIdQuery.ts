import { useQuery } from '@tanstack/react-query';
import { getIngredient } from '@/lib/api';
import { queryKeys } from '@/lib/queryKeys';

export function useMonoprixIngredientByIdQuery(id: string) {
  return useQuery({
    queryKey: queryKeys.ingredient('/tsq', id),
    queryFn: () => getIngredient('/tsq', id),
    enabled: Boolean(id),
  });
}
