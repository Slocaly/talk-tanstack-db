import { queryCollectionOptions } from '@tanstack/query-db-collection';
import { createCollection } from '@tanstack/react-db';
import { QueryClient } from '@tanstack/query-core';
import { createRecipe, listRecipesDB } from '@/lib/api';

const queryClient = new QueryClient();

export const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['recipes'],
    queryFn: async () => {
      return await listRecipesDB();
    },
    queryClient,
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
