import { createFileRoute } from '@tanstack/react-router';
import { MonoprixListPageQueryProvider } from '@/pages/providers/MonoprixListPageQueryProvider';

export const Route = createFileRoute('/tsq/monoprix/')({
  component: MonoprixListPageQueryProvider,
});
