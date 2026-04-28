import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIngredientQuantity } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";
import { AdjustStockCard } from "@/pages/AdjustStockCard";
import { useAppPathPrefix } from "@/lib/appPathPrefix";

type AdjustStockCardMutationDBProviderProps = {
  ingredientId: string;
  quantity: number;
};

export function AdjustStockCardMutationDBProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationDBProviderProps) {
  const queryClient = useQueryClient();
  const prefix = useAppPathPrefix();
  const updateQuantityMutation = useMutation({
    mutationFn: (newQuantity: number) =>
      updateIngredientQuantity(prefix, ingredientId, newQuantity),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.ingredientsScope(prefix),
      });
      void queryClient.invalidateQueries({
        queryKey: queryKeys.ingredient(prefix, ingredientId),
      });
      void queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard(prefix),
      });
      void queryClient.invalidateQueries({
        queryKey: queryKeys.recipesScope(prefix),
      });
    },
  });

  return (
    <AdjustStockCard
      quantity={quantity}
      updateQuantityMutation={updateQuantityMutation}
    />
  );
}
