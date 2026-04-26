import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateIngredientQuantity } from "@/lib/api";
import { useAppPathPrefix } from "@/lib/appPathPrefix";
import { AdjustStockCard } from "@/pages/AdjustStockCard";
import { queryKeys } from "@/lib/queryKeys";

type AdjustStockCardMutationProviderProps = {
  ingredientId: string;
  quantity: number;
};

export function AdjustStockCardMutationProvider({
  ingredientId,
  quantity,
}: AdjustStockCardMutationProviderProps) {
  const prefix = useAppPathPrefix();
  const queryClient = useQueryClient();
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
