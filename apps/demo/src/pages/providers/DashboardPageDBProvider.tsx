import { useDashboardSummaryQuery } from '@/hooks/useDashboardSummaryQuery'
import { DashboardPage } from '@/pages/DashboardPage'

export function DashboardPageDBProvider() {
  const dashboardQuery = useDashboardSummaryQuery('/tsdb')
  return <DashboardPage dashboardQuery={dashboardQuery} />
}
