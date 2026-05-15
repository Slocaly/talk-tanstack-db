import { useQuery } from '@tanstack/react-query';
import type { AppPathPrefix } from '@/lib/appPathPrefix';
import { getIngredient } from '@/lib/api';
import { queryKeys } from '@/lib/queryKeys';

export function useIngredientByIdQuery(prefix: AppPathPrefix, id: string) {
  return useQuery({
    queryKey: queryKeys.ingredient(prefix, id),
    queryFn: () => getIngredient(prefix, id),
  });
}
