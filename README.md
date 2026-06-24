# Sales Debt Management API

NestJS backend for the Sales Debt Management product.

## Quick Start

```bash
cp .env.example .env
pnpm install
pnpm prisma:generate
pnpm prisma:migrate
pnpm db:seed
pnpm dev
```

Default API base URL:

```txt
http://localhost:4000/api
```

Swagger docs:

```txt
http://localhost:4000/docs
```

## Current Scope

Core APIs are scaffolded/ported for:

- parties
- debts
- payments
- dashboard
- reports aging
- users
- exports debts

Auth and import Excel endpoints are scaffolded and should be completed before switching production traffic fully from the Next.js API routes.
