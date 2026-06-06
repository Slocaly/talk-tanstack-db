import { createRootRoute } from '@tanstack/react-router';
import { PrefixQueryDevtools } from '@/components/PrefixQueryDevtools';
import { AppLayout } from '@/components/layout/AppLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';

function RootComponent() {
  return (
    <>
      <AppLayout />
      <PrefixQueryDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});
