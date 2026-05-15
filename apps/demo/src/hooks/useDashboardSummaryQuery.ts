import { useQuery } from '@tanstack/react-query';
import { getDashboardSummary } from '@/lib/api';
import type { AppPathPrefix } from '@/lib/appPathPrefix';
import { queryKeys } from '@/lib/queryKeys';

export function useDashboardSummaryQuery(prefix: AppPathPrefix) {
  return useQuery({
    queryKey: queryKeys.dashboard(prefix),
    queryFn: () => getDashboardSummary(prefix),
  });
}
