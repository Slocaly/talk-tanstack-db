import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateIngredientQuantity } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { AdjustStockCard } from '@/pages/AdjustStockCard'

type AdjustStockCardMutationProviderProps = {
  ingredientId: string
  quantity: number
}

export function AdjustStockCardMutationProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationProviderProps) {
  const queryClient = useQueryClient()
  const updateQuantityMutation = useMutation({
    mutationFn: (newQuantity: number) =>
      updateIngredientQuantity(ingredientId, newQuantity),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.ingredients })
      void queryClient.invalidateQueries({
        queryKey: queryKeys.ingredient(ingredientId),
      })
      void queryClient.invalidateQueries({ queryKey: queryKeys.dashboard })
      void queryClient.invalidateQueries({ queryKey: queryKeys.recipes })
    },
  })

  return (
    <AdjustStockCard
      quantity={quantity}
      updateQuantityMutation={updateQuantityMutation}
    />
  )
}
