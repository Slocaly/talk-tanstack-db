import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateIngredientQuantity } from '@/lib/api';
import type { AppPathPrefix } from '@/lib/appPathPrefix';
import { queryKeys } from '@/lib/queryKeys';

export function useUpdateIngredientQuantityMutation(
  prefix: AppPathPrefix,
  ingredientId: string,
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newQuantity: number) =>
      updateIngredientQuantity(prefix, ingredientId, newQuantity),
    onSuccess: () => {
      void queryClient.resetQueries({
        queryKey: queryKeys.ingredientsScope(prefix),
      });
      void queryClient.resetQueries({
        queryKey: queryKeys.ingredient(prefix, ingredientId),
      });
      void queryClient.resetQueries({
        queryKey: queryKeys.dashboard(prefix),
      });
      void queryClient.resetQueries({
        queryKey: queryKeys.recipesScope(prefix),
      });
    },
  });
}
