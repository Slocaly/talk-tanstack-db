import { useIngredientsListQuery } from '@/hooks/useIngredientsListQuery'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { RecipesPage } from '@/pages/RecipesPage'

export function RecipesPageQueryProvider() {
  const prefix = useAppPathPrefix()
  const ingredientsQuery = useIngredientsListQuery(prefix)
  return <RecipesPage ingredientsQuery={ingredientsQuery} />
}
