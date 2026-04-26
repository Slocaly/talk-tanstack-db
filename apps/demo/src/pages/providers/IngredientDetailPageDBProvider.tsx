import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getIngredient } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { IngredientDetailPage } from '@/pages/IngredientDetailPage'

export function IngredientDetailPageDBProvider() {
  const { id } = useParams({ strict: false })
  const ingredientQuery = useQuery({
    queryKey: queryKeys.ingredient(id ?? ''),
    queryFn: () => getIngredient(id!),
    enabled: Boolean(id),
  })
  return <IngredientDetailPage id={id} ingredientQuery={ingredientQuery} />
}
