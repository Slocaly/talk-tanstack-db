import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/tsdb')({
  component: TsdbLayout,
})

function TsdbLayout() {
  return <Outlet />
}
