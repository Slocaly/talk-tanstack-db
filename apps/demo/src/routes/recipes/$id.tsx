import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/recipes/$id')({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: '/tsq/recipes/$id',
      params,
    })
  },
})
