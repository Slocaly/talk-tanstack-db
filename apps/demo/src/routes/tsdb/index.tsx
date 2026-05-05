import { createFileRoute } from '@tanstack/react-router'
import { DashboardPageDBProvider } from '@/pages/providers/DashboardPageDBProvider'

export const Route = createFileRoute('/tsdb/')({
  component: DashboardPageDBProvider,
})
