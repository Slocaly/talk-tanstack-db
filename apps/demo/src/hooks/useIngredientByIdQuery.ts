import { useQuery } from '@tanstack/react-query'
import { getIngredient } from '@/lib/api'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { queryKeys } from '@/lib/queryKeys'

export function useIngredientByIdQuery(
  prefix: AppPathPrefix,
  id: string | undefined,
) {
  return useQuery({
    queryKey: queryKeys.ingredient(prefix, id ?? ''),
    queryFn: () => getIngredient(prefix, id!),
    enabled: Boolean(id),
  })
}
