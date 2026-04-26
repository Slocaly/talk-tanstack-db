import { useQuery } from '@tanstack/react-query'
import { listIngredients } from '@/lib/api'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { LIST_FETCH_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'
import { IngredientsPage } from '@/pages/IngredientsPage'

export function IngredientsPageQueryProvider() {
  const prefix = useAppPathPrefix()
  const ingredientsQuery = useQuery({
    queryKey: queryKeys.ingredients(prefix, LIST_FETCH_PAGE_SIZE),
    queryFn: () =>
      listIngredients(prefix, { fetchPageSize: LIST_FETCH_PAGE_SIZE }),
  })
  return <IngredientsPage ingredientsQuery={ingredientsQuery} />
}
