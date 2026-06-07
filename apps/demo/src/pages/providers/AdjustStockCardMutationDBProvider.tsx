import { ingredientCollection } from '@/collections/ingredient-collection';
import { AdjustStockCard } from '@/pages/AdjustStockCard';

type AdjustStockCardMutationDBProviderProps = {
  ingredientId: string;
  quantity: number;
};

export function AdjustStockCardMutationDBProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationDBProviderProps) {
  const onMutate = (newQuantity: number) => {
    ingredientCollection.update(ingredientId, (draft) => {
      draft.quantity = newQuantity;
    });
  }

  return (
    <AdjustStockCard
      quantity={quantity}
      onMutate={onMutate}
      isPending={false}
    />
  );
}
