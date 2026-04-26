import { useQuery } from '@tanstack/react-query'
import { listIngredients, listRecipes } from '@/lib/api'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { LIST_FETCH_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'
import { RecipesPage } from '@/pages/RecipesPage'

export function RecipesPageDBProvider() {
  const prefix = useAppPathPrefix()
  const recipesQuery = useQuery({
    queryKey: queryKeys.recipes(prefix, LIST_FETCH_PAGE_SIZE),
    queryFn: () => listRecipes(prefix, { fetchPageSize: LIST_FETCH_PAGE_SIZE }),
  })
  const ingredientsQuery = useQuery({
    queryKey: queryKeys.ingredients(prefix, LIST_FETCH_PAGE_SIZE),
    queryFn: () =>
      listIngredients(prefix, { fetchPageSize: LIST_FETCH_PAGE_SIZE }),
  })
  return (
    <RecipesPage recipesQuery={recipesQuery} ingredientsQuery={ingredientsQuery} />
  )
}
