import { createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '@/components/layout/AppLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const Route = createRootRoute({
  component: AppLayout,
  notFoundComponent: NotFoundPage,
});
