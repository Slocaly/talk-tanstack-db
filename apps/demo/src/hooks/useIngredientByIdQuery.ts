import { useQuery } from "@tanstack/react-query";
import { getIngredient } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

export function useIngredientByIdQuery(id: string) {
  return useQuery({
    queryKey: queryKeys.ingredient("/tsq", id),
    queryFn: () => getIngredient("/tsq", id),
  });
}
