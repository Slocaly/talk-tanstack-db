import { useQuery } from '@tanstack/react-query'
import { listIngredients, listRecipes } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { RecipesPage } from '@/pages/RecipesPage'

export function RecipesPageDBProvider() {
  const recipesQuery = useQuery({
    queryKey: queryKeys.recipes,
    queryFn: listRecipes,
  })
  const ingredientsQuery = useQuery({
    queryKey: queryKeys.ingredients,
    queryFn: listIngredients,
  })
  return (
    <RecipesPage recipesQuery={recipesQuery} ingredientsQuery={ingredientsQuery} />
  )
}
