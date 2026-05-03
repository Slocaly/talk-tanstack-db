import { useDashboardSummaryQuery } from '@/hooks/useDashboardSummaryQuery'
import { useAppPathPrefix } from '@/lib/appPathPrefix'
import { DashboardPage } from '@/pages/DashboardPage'

export function DashboardPageQueryProvider() {
  const prefix = useAppPathPrefix()
  const dashboardQuery = useDashboardSummaryQuery(prefix)
  return <DashboardPage dashboardQuery={dashboardQuery} />
}
