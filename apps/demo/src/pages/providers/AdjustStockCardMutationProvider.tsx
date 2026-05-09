import { useUpdateIngredientQuantityMutation } from '@/hooks/useUpdateIngredientQuantityMutation'
import { AdjustStockCard } from '@/pages/AdjustStockCard'

type AdjustStockCardMutationProviderProps = {
  ingredientId: string
  quantity: number
}

export function AdjustStockCardMutationProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationProviderProps) {
  const updateQuantityMutation = useUpdateIngredientQuantityMutation(
    '/tsq',
    ingredientId,
  )

  return (
    <AdjustStockCard
      quantity={quantity}
      updateQuantityMutation={updateQuantityMutation}
    />
  )
}
