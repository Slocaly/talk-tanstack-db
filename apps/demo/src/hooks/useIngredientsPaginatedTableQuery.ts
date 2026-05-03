import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { listIngredientsPaginated } from '@/lib/api'
import type { AppPathPrefix } from '@/lib/appPathPrefix'
import { TABLE_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'

export function useIngredientsPaginatedTableQuery(
  prefix: AppPathPrefix,
  tablePage: number,
  filtersActive: boolean,
) {
  return useQuery({
    queryKey: queryKeys.ingredientsPage(prefix, tablePage, TABLE_PAGE_SIZE),
    queryFn: () => listIngredientsPaginated(prefix, tablePage, TABLE_PAGE_SIZE),
    enabled: !filtersActive,
    placeholderData: keepPreviousData,
  })
}
