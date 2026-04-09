import { useQuery } from '@tanstack/react-query'
import { listIngredients } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { IngredientsPage } from '@/pages/IngredientsPage'

export function IngredientsPageQueryProvider() {
  const ingredientsQuery = useQuery({
    queryKey: queryKeys.ingredients,
    queryFn: listIngredients,
  })
  return <IngredientsPage ingredientsQuery={ingredientsQuery} />
}
