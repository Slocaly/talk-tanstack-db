import { ingredientCollection } from '@/collections/ingredient-collection';
import { t } from '@/i18n';
import { showErrorToast } from '@/lib/errorToast';
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
    try {
      const tx = ingredientCollection.update(ingredientId, (draft) => {
        draft.quantity = newQuantity;
      });

      void tx.isPersisted.promise.catch((error: unknown) => {
        showErrorToast(
          error instanceof Error
            ? error.message
            : t('ingredients.updateFailed'),
        );
      });
    } catch (error) {
      showErrorToast(
        error instanceof Error
          ? error.message
          : t('ingredients.updateFailed'),
      );
    }
  };

  return (
    <AdjustStockCard
      quantity={quantity}
      onMutate={onMutate}
      isPending={false}
    />
  );
}
