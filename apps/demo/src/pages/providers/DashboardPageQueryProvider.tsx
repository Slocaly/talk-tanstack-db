import { useDashboardSummaryQuery } from '@/hooks/useDashboardSummaryQuery';
import { DashboardPage } from '@/pages/DashboardPage';

export function DashboardPageQueryProvider() {
  const dashboardQuery = useDashboardSummaryQuery('/tsq');
  return <DashboardPage dashboardQuery={dashboardQuery} />;
}
