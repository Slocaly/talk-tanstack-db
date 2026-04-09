import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/ingredients/$id')({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: '/tsq/ingredients/$id',
      params,
    })
  },
})
