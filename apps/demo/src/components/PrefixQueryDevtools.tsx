import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useAppPathPrefix } from '@/lib/appPathPrefix';
import { dbQueryClient } from '@/lib/dbQueryClient';

export function PrefixQueryDevtools() {
  const prefix = useAppPathPrefix();

  if (prefix === '/tsdb') {
    return (
      <ReactQueryDevtools
        key="tsdb"
        client={dbQueryClient}
        initialIsOpen={false}
      />
    );
  }

  // Use the QueryClient from context (same instance as useQuery on /tsq routes).
  return <ReactQueryDevtools key="tsq" initialIsOpen={false} />;
}
