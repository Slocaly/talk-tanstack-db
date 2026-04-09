import { useQuery } from '@tanstack/react-query'
import { getDashboardSummary } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import { DashboardPage } from '@/pages/DashboardPage'

export function DashboardPageQueryProvider() {
  const dashboardQuery = useQuery({
    queryKey: queryKeys.dashboard,
    queryFn: getDashboardSummary,
  })
  return <DashboardPage dashboardQuery={dashboardQuery} />
}
