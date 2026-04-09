import { createFileRoute } from '@tanstack/react-router'
import { DashboardPageQueryProvider } from '@/pages/providers/DashboardPageQueryProvider'

export const Route = createFileRoute('/')({
  component: DashboardPageQueryProvider,
})
