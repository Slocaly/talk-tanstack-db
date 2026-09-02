# Build from the repo root: docker build -f apps/slides/Dockerfile .
# (needed so pnpm can see the workspace's pnpm-lock.yaml / pnpm-workspace.yaml)

FROM node:22-bookworm-slim AS builder
RUN corepack enable
WORKDIR /repo

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages/slidev-theme-comics/package.json packages/slidev-theme-comics/package.json
COPY apps/slides/package.json apps/slides/package.json
RUN pnpm install --frozen-lockfile --filter=slides...

COPY packages/slidev-theme-comics packages/slidev-theme-comics
COPY apps/slides apps/slides
RUN pnpm --filter=slides build

FROM nginx:1.27-alpine AS runtime
COPY apps/slides/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /repo/apps/slides/dist /usr/share/nginx/html
EXPOSE 80
