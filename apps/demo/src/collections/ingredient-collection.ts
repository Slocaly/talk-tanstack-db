import { createCollection } from '@tanstack/react-db';
import { queryCollectionOptions } from '@tanstack/query-db-collection';
import { listIngredientsDB } from '@/lib/api';
import { QueryClient } from '@tanstack/query-core';

const queryClient = new QueryClient();

export const ingredientCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['ingredients'],
    queryFn: async () => {
      return await listIngredientsDB();
    },
    queryClient,
    staleTime: Infinity,
    getKey: (item) => item.id,
  }),
);
