# Demo app — Stock du village gaulois

Small front-end for the **talk-tanstack-db** monorepo: a playful “Gaulish village pantry” UI to browse **ingredients**, **recipes**, and a **dashboard** of stock and expiry signals. Data is loaded from the repo’s NestJS API (`apps/api`) over REST.

## What you can do

- **Village (dashboard)** — Counts, low-stock hints, and the next ingredient nearing expiry.
- **Ingredients** — List of ingredients with categories; open a row for **detail**, a **map** (where to find / harvest), and **adjust stock** (PATCH quantity, then lists and dashboard refresh).
- **Recipes** — Recipes with required ingredients; the UI can tell whether a recipe is **makable** from current stock.

## Internationalization

UI copy is localized via a small i18n helper (`src/i18n`). Locale is selected at build/dev time with:

```bash
VITE_LOCALE=en   # English
VITE_LOCALE=fr   # French (default if unset)
```

Copy `.env.example` to `.env` to switch languages, then restart the Vite dev server.

API seed content (ingredient/recipe names and blurbs) stays French on the server. When `VITE_LOCALE=en`, the demo overlays English copy by entity `id` in `src/i18n/content/` as responses are parsed (`src/lib/api.ts`).

## Routes

The app lives under **`/tsq`** (e.g. `/tsq`, `/tsq/ingredients`). The home route `/` redirects to `/tsq`.

## Stack

- [Vite](https://vitejs.dev/) + React 19 + TypeScript
- [TanStack Router](https://tanstack.com/router) (file-based routes)
- [TanStack Query](https://tanstack.com/query) for server state and mutations
- Tailwind CSS 4, shadcn-style UI primitives, [Leaflet](https://leafletjs.com/) / react-leaflet for maps
- [React Compiler](https://react.dev/learn/react-compiler) (see `vite.config.ts`)

## Run it

From the monorepo root (with dependencies installed, e.g. `pnpm install`):

1. Start the API (default **port 3001**, global prefix `/api`):

   ```bash
   pnpm --filter api dev
   ```

2. Start the demo (Vite dev server):

   ```bash
   pnpm --filter demo dev
   ```

3. Open the URL Vite prints (often `http://localhost:5173`). You should land on `/tsq` after the root redirect.

The dev server **proxies** `/api` to `http://localhost:${API_PORT:-3001}` (see `vite.config.ts`). To point the browser at another API base, set `VITE_API_BASE_URL` (see `src/lib/api.ts`).

## Build

```bash
pnpm --filter demo build
pnpm --filter demo preview   # optional: serve production build
```
