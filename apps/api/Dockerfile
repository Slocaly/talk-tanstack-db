# Build from the repo root: docker build -f apps/api/Dockerfile .
# (needed so pnpm can see the workspace's pnpm-lock.yaml / pnpm-workspace.yaml)

FROM node:22-bookworm-slim AS builder
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ \
    && rm -rf /var/lib/apt/lists/*
RUN corepack enable
WORKDIR /repo

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/api/package.json apps/api/package.json
RUN pnpm install --frozen-lockfile --filter=api...

COPY apps/api apps/api
RUN pnpm --filter=api build

FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /repo

COPY --from=builder /repo/node_modules ./node_modules
COPY --from=builder /repo/package.json /repo/pnpm-workspace.yaml /repo/pnpm-lock.yaml ./
COPY --from=builder /repo/apps/api/node_modules apps/api/node_modules
COPY --from=builder /repo/apps/api/package.json apps/api/package.json
COPY --from=builder /repo/apps/api/dist apps/api/dist

WORKDIR /repo/apps/api
ENV PORT=3001
ENV DATABASE_PATH=/data/village.sqlite
EXPOSE 3001
VOLUME ["/data"]

# Reseeds on every start (the seed script clears + reinserts, so it's idempotent)
# so the demo data is always in a known state.
CMD ["sh", "-c", "node dist/db/seed.js && node dist/main.js"]
