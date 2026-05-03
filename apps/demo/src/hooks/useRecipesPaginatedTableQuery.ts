import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { listRecipesPaginated } from '@/lib/api'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { TABLE_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'

export function useRecipesPaginatedTableQuery(
  prefix: AppPathPrefix,
  tablePage: number,
  filtersActive: boolean,
) {
  return useQuery({
    queryKey: queryKeys.recipesPage(prefix, tablePage, TABLE_PAGE_SIZE),
    queryFn: () => listRecipesPaginated(prefix, tablePage, TABLE_PAGE_SIZE),
    enabled: !filtersActive,
    placeholderData: keepPreviousData,
  })
}
