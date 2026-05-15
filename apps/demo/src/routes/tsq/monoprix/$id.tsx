import { createFileRoute } from '@tanstack/react-router';
import { MonoprixDetailPageQueryProvider } from '@/pages/providers/MonoprixDetailPageQueryProvider';

export const Route = createFileRoute('/tsq/monoprix/$id')({
  component: MonoprixDetailPageQueryProvider,
});
