import { useQuery } from '@tanstack/react-query';
import { getRecipe } from '@/lib/api';
import type { AppPathPrefix } from '@/lib/appPathPrefix';
import { queryKeys } from '@/lib/queryKeys';

export function useRecipeByIdQuery(
  prefix: AppPathPrefix,
  id: string | undefined,
) {
  return useQuery({
    queryKey: queryKeys.recipe(prefix, id ?? ''),
    queryFn: () => getRecipe(prefix, id!),
    enabled: Boolean(id),
  });
}
