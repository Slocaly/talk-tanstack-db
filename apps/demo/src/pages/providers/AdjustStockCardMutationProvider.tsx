import { useUpdateIngredientQuantityMutation } from '@/hooks/useUpdateIngredientQuantityMutation'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { AdjustStockCard } from '@/pages/AdjustStockCard'

type AdjustStockCardMutationProviderProps = {
  ingredientId: string
  quantity: number
}

export function AdjustStockCardMutationProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationProviderProps) {
  const prefix = useAppPathPrefix()
  const updateQuantityMutation = useUpdateIngredientQuantityMutation(
    prefix,
    ingredientId,
  )

  return (
    <AdjustStockCard
      quantity={quantity}
      updateQuantityMutation={updateQuantityMutation}
    />
  )
}
