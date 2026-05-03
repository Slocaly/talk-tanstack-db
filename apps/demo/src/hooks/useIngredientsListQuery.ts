import { useQuery } from '@tanstack/react-query'
import { listIngredients } from '@/lib/api'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { LIST_FETCH_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'

export function useIngredientsListQuery(prefix: AppPathPrefix) {
  return useQuery({
    queryKey: queryKeys.ingredients(prefix, LIST_FETCH_PAGE_SIZE),
    queryFn: () => listIngredients(prefix),
  })
}
