import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getRecipe, listIngredients } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { RecipeDetailPage } from '@/pages/RecipeDetailPage'

export function RecipeDetailPageDBProvider() {
  const { id } = useParams({ strict: false })
  const recipeQuery = useQuery({
    queryKey: queryKeys.recipe(id ?? ''),
    queryFn: () => getRecipe(id!),
    enabled: Boolean(id),
  })
  const ingredientsQuery = useQuery({
    queryKey: queryKeys.ingredients,
    queryFn: listIngredients,
  })
  return (
    <RecipeDetailPage
      id={id}
      recipeQuery={recipeQuery}
      ingredientsQuery={ingredientsQuery}
    />
  )
}
