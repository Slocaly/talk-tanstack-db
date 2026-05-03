import { useQuery } from '@tanstack/react-query'
import { listRecipes } from '@/lib/api'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { LIST_FETCH_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'

export function useRecipesCatalogQuery(
  prefix: AppPathPrefix,
  filtersActive: boolean,
) {
  return useQuery({
    queryKey: queryKeys.recipesCatalog(prefix),
    queryFn: () =>
      listRecipes(prefix, { fetchPageSize: LIST_FETCH_PAGE_SIZE }),
    enabled: filtersActive,
  })
}
