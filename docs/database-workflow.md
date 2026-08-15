# Database Workflow

Prisma schema is the source of truth. This project uses multi-file Prisma schema.

## Folder Structure

```txt
prisma/
  schema.prisma
  models/
    user.prisma
    party.prisma
    debt.prisma
    payment.prisma
    audit-log.prisma
  migrations/
  seed.ts
```

`prisma/schema.prisma` contains only `generator` and `datasource`.

Domain models and enums live under `prisma/models/`.

Prisma config is in:

```txt
prisma.config.ts
```

The config points Prisma CLI to the folder:

```ts
schema: 'prisma/';
```

## Add A Field Or Table

1. Edit a file in `prisma/models/`.
2. Create and apply a migration:

```bash
npm run db:migrate
```

3. Commit these files:

```txt
prisma/models/*.prisma
prisma/migrations/<timestamp>_<migration_name>/migration.sql
```

4. Do not commit:

```txt
src/generated/prisma
dist
.env
```

## After Pulling Teammate Changes

```bash
npm install
npm run db:migrate
```

This applies pending migrations and regenerates Prisma Client.

## Before Pushing Prisma Changes

```bash
npm run db:check
npm run build
```

## Production Deploy

Apply migrations:

```bash
npm run db:deploy
```

Build the API:

```bash
npm run build
```

## Rules

- Do not edit migrations that were already pushed or applied by other environments.
- Every schema change should have a matching migration.
- Keep enums near the domain that owns them.
- Move an enum to a new domain file only when multiple domains truly share it.

## Useful Commands

| Command                   | Purpose                                          |
| ------------------------- | ------------------------------------------------ |
| `npm run db:migrate`      | Dev migration and Prisma generate.               |
| `npm run db:deploy`       | Production migration deploy and Prisma generate. |
| `npm run db:check`        | Validate schema and generate client.             |
| `npm run prisma:generate` | Generate Prisma Client only.                     |
| `npm run prisma:studio`   | Inspect database in Prisma Studio.               |
| `npm run db:seed`         | Seed default admin user.                         |
