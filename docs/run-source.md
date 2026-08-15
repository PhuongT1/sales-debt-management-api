# Run Source

## First Setup

```bash
npm install
cp .env.example .env
npm run setup:dev
```

Before running `setup:dev`, update `.env` with a real PostgreSQL / Neon connection string.

`setup:dev` runs:

```bash
npm run db:migrate
npm run db:seed
npm run dev
```

## Daily Development

```bash
npm run dev
```

This command runs:

```bash
npm run prisma:generate
nest start --watch
```

## Build

```bash
npm run build
```

This command runs:

```bash
npm run prisma:generate
nest build
tsc-alias -p tsconfig.json
```

`tsc-alias` rewrites TypeScript path aliases in `dist` so compiled Node.js output can run.

## Run Compiled Output

```bash
npm run start
```

This runs:

```bash
node dist/main.js
```

## Environment

Create `.env`:

```bash
cp .env.example .env
```

Required values:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST-pooler.REGION.aws.neon.tech/DB_NAME?sslmode=require&channel_binding=require"
DIRECT_URL="postgresql://USER:PASSWORD@HOST.REGION.aws.neon.tech/DB_NAME?sslmode=require&channel_binding=require"
PORT=4000
JWT_SECRET="change-me-with-openssl-rand-base64-32"
JWT_EXPIRES_IN="7d"
CORS_ORIGIN="http://localhost:3000"
```

Do not commit real `.env` values.

## Troubleshooting

### `P1001: Can't reach database server`

Check `.env`:

```env
DATABASE_URL
DIRECT_URL
```

### `Cannot find module '@generated/prisma'`

Run:

```bash
npm run prisma:generate
```

### `EMFILE: too many open files, watch`

Close extra dev servers or increase the macOS file watcher limit. This project disables Nest asset watching in `nest-cli.json`:

```json
"watchAssets": false
```
