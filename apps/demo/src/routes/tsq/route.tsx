import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/tsq')({
  component: TsqLayout,
})

function TsqLayout() {
  return <Outlet />
}
