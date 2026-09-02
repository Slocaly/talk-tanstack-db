# Build from the repo root: docker build -f apps/demo/Dockerfile .
# (needed so pnpm can see the workspace's pnpm-lock.yaml / pnpm-workspace.yaml)

FROM node:22-bookworm-slim AS builder
RUN corepack enable
WORKDIR /repo

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/demo/package.json apps/demo/package.json
RUN pnpm install --frozen-lockfile --filter=demo...

COPY apps/demo apps/demo
RUN pnpm --filter=demo build

FROM nginx:1.27-alpine AS runtime
COPY apps/demo/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /repo/apps/demo/dist /usr/share/nginx/html
EXPOSE 80
