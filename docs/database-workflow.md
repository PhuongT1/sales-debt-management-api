# Database workflow

Prisma schema is the source of truth. Generated Prisma Client files in
`src/generated/prisma` are local build artifacts and must not be committed.

## Add a field or table

1. Edit `prisma/schema.prisma`.
2. Create and apply a migration locally:

```bash
pnpm db:migrate --name add_party_segment
```

3. Commit these files:

```txt
prisma/schema.prisma
prisma/migrations/<timestamp>_<migration_name>/migration.sql
```

4. Do not commit:

```txt
src/generated/prisma
dist
.env
```

## After pulling teammate changes

```bash
pnpm install
pnpm db:sync
```

`db:sync` applies pending local migrations and regenerates Prisma Client.

## Production or Vercel deploy

Run migrations against the production database before or during deployment:

```bash
pnpm db:deploy
```

Then deploy/build the API:

```bash
pnpm build
```

## Useful scripts

```bash
pnpm db:migrate --name <migration_name>  # dev creates a migration
pnpm db:sync                             # teammate syncs local DB
pnpm db:deploy                           # production applies migrations
pnpm db:generate                         # regenerate Prisma Client only
pnpm db:check                            # validate schema and generate client
pnpm db:seed                             # seed test admin account
pnpm prisma:studio                       # inspect database
```
