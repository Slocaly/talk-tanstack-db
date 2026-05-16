import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRecipe, type CreateRecipeInput } from '@/lib/api';
import type { AppPathPrefix } from '@/lib/appPathPrefix';
import { queryKeys } from '@/lib/queryKeys';

export function useCreateRecipeMutation(prefix: AppPathPrefix) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateRecipeInput) => createRecipe(prefix, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.recipesScope(prefix),
      });
    },
  });
}
