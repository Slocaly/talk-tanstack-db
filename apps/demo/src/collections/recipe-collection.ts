import { queryCollectionOptions } from '@tanstack/query-db-collection';
import { createCollection } from '@tanstack/react-db';
import { createRecipe, listRecipesDB } from '@/lib/api';
import { dbQueryClient } from '@/lib/dbQueryClient';

export const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['recipes'],
    queryFn: async () => {
      return await listRecipesDB();
    },
    queryClient: dbQueryClient,
    staleTime: Infinity,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {
      await Promise.all(
        transaction.mutations.map(({ modified }) =>
          createRecipe('/tsdb', modified),
        ),
      );
    },
  }),
);
