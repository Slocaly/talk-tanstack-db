import { QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'leaflet/dist/leaflet.css';
import './index.css';
import { applyDocumentLocale } from '@/i18n';
import { tsqQueryClient } from '@/lib/tsqQueryClient';
import { routeTree } from './routeTree.gen';

applyDocumentLocale();

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={tsqQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
