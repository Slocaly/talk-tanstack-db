import { QueryClient } from '@tanstack/query-core';

/** QueryClient backing TanStack DB collections (`query-db-collection`). */
export const dbQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});
