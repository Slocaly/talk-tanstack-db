import { useQuery } from '@tanstack/react-query'
import { getDashboardSummary } from '@/lib/api'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { queryKeys } from '@/lib/queryKeys'
import { DashboardPage } from '@/pages/DashboardPage'

export function DashboardPageDBProvider() {
  const prefix = useAppPathPrefix()
  const dashboardQuery = useQuery({
    queryKey: queryKeys.dashboard(prefix),
    queryFn: () => getDashboardSummary(prefix),
  })
  return <DashboardPage dashboardQuery={dashboardQuery} />
}
