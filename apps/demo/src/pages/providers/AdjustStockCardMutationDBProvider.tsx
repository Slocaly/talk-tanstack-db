import { useUpdateIngredientQuantityMutation } from '@/hooks/useUpdateIngredientQuantityMutation'
import { AdjustStockCard } from '@/pages/AdjustStockCard'

type AdjustStockCardMutationDBProviderProps = {
  ingredientId: string
  quantity: number
}

export function AdjustStockCardMutationDBProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationDBProviderProps) {
  const updateQuantityMutation = useUpdateIngredientQuantityMutation(
    '/tsdb',
    ingredientId,
  )

  return (
    <AdjustStockCard
      quantity={quantity}
      updateQuantityMutation={updateQuantityMutation}
    />
  )
}
