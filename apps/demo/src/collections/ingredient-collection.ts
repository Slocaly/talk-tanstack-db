import { createCollection } from '@tanstack/react-db';
import { queryCollectionOptions } from '@tanstack/query-db-collection';
import { listIngredientsDB, updateIngredientQuantity } from '@/lib/api';
import { dbQueryClient } from '@/lib/dbQueryClient';

export const ingredientCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['ingredients'],
    queryFn: async () => {
      return await listIngredientsDB();
    },
    queryClient: dbQueryClient,
    staleTime: Infinity,
    getKey: (item) => item.id,
    onUpdate: async ({ transaction }) => {
      await Promise.all(
        transaction.mutations.map(({ modified }) =>
          updateIngredientQuantity('/tsdb', modified.id, modified.quantity),
        ),
      );
    },
  }),
);
