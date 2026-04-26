import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getIngredient } from '@/lib/api'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { queryKeys } from '@/lib/queryKeys'
import { IngredientDetailPage } from '@/pages/IngredientDetailPage'

export function IngredientDetailPageDBProvider() {
  const prefix = useAppPathPrefix()
  const { id } = useParams({ strict: false })
  const ingredientQuery = useQuery({
    queryKey: queryKeys.ingredient(prefix, id ?? ''),
    queryFn: () => getIngredient(prefix, id!),
    enabled: Boolean(id),
  })
  return <IngredientDetailPage id={id} ingredientQuery={ingredientQuery} />
}
