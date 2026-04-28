import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getRecipe, listIngredients } from '@/lib/api'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { LIST_FETCH_PAGE_SIZE } from '@/lib/listPaginationConfig'
import { queryKeys } from '@/lib/queryKeys'
import { RecipeDetailPage } from '@/pages/RecipeDetailPage'

export function RecipeDetailPageDBProvider() {
  const prefix = useAppPathPrefix()
  const { id } = useParams({ strict: false })
  const recipeQuery = useQuery({
    queryKey: queryKeys.recipe(prefix, id ?? ''),
    queryFn: () => getRecipe(prefix, id!),
    enabled: Boolean(id),
  })
  const ingredientsQuery = useQuery({
    queryKey: queryKeys.ingredients(prefix, LIST_FETCH_PAGE_SIZE),
    queryFn: () =>
      listIngredients(prefix, { fetchPageSize: LIST_FETCH_PAGE_SIZE }),
  })
  return (
    <RecipeDetailPage
      id={id}
      recipeQuery={recipeQuery}
      ingredientsQuery={ingredientsQuery}
    />
  )
}
