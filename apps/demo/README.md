# Demo app — Stock du village gaulois

Small front-end for the **talk-tanstack-db** monorepo: a playful “Gaulish village pantry” UI to browse **ingredients**, **recipes**, and a **dashboard** of stock and expiry signals. Data is loaded from the repo’s NestJS API (`apps/api`) over REST.

## What you can do

- **Village (dashboard)** — Counts, low-stock hints, and the next ingredient nearing expiry.
- **Ingrédients** — List of ingredients with categories; open a row for **detail**, a **map** (where to find / harvest), and **adjust stock** (PATCH quantity, then lists and dashboard refresh).
- **Recettes** — Recipes with required ingredients; the UI can tell whether a recipe is **makable** from current stock.

The copy and labels are mostly in French to match the theme.

## Two URL trees: `/tsq` and `/tsdb`

The same screens exist under two prefixes:

| Prefix   | Role in the talk                          |
| -------- | ----------------------------------------- |
| `/tsq`   | “TanStack Query” route tree               |
| `/tsdb`  | “TanStack DB” route tree (parallel pages) |

The home route `/` redirects to `/tsq`. While **not** typing in an input, press **`$`** to jump between the matching `/tsq/...` and `/tsdb/...` URL (same path, other prefix)—handy when comparing how each tree wires data.

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
