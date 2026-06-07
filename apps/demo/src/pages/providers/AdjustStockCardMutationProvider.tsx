import { useUpdateIngredientQuantityMutation } from '@/hooks/useUpdateIngredientQuantityMutation';
import { AdjustStockCard } from '@/pages/AdjustStockCard';

type AdjustStockCardMutationProviderProps = {
  ingredientId: string;
  quantity: number;
};

export function AdjustStockCardMutationProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationProviderProps) {
  const { mutate, isPending } = useUpdateIngredientQuantityMutation(
    '/tsq',
    ingredientId
  );

  return (
    <AdjustStockCard
      quantity={quantity}
      onMutate={mutate}
      isPending={isPending}
    />
  );
}
