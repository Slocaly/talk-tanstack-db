import { useQuery } from '@tanstack/react-query'
import { listIngredients } from '@/lib/api'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { LIST_FETCH_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'

export function useIngredientsCatalogQuery(
  prefix: AppPathPrefix,
  filtersActive: boolean,
) {
  return useQuery({
    queryKey: queryKeys.ingredientsCatalog(prefix),
    queryFn: () =>
      listIngredients(prefix, { fetchPageSize: LIST_FETCH_PAGE_SIZE }),
    enabled: filtersActive,
  })
}
