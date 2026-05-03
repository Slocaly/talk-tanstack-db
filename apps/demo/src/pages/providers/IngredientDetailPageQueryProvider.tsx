import { useParams } from '@tanstack/react-router'
import { useIngredientByIdQuery } from '@/hooks/useIngredientByIdQuery'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { IngredientDetailPage } from '@/pages/IngredientDetailPage'

export function IngredientDetailPageQueryProvider() {
  const prefix = useAppPathPrefix()
  const { id } = useParams({ strict: false })
  const ingredientQuery = useIngredientByIdQuery(prefix, id)
  return <IngredientDetailPage id={id} ingredientQuery={ingredientQuery} />
}
