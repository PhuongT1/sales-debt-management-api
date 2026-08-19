# Sales Debt Management API

NestJS backend API for Debt Flow / Sales Debt Management.

## Important: After Changing A Prisma Model

Whenever you add, remove, rename, or change a field in `prisma/models/*.prisma`, follow this
workflow before continuing NestJS development:

```text
Edit a Prisma model
        ↓
npm run db:migrate -- --name describe_your_change
        ↓
npm run db:generate
        ↓
npm run dev
        ↓
Commit the model and generated migration
```

Example after adding `phone` to `prisma/models/user.prisma`:

```bash
npm run db:migrate -- --name add_phone_to_user
npm run db:generate
npm run dev
```

The migration command updates the development database. The generate command updates Prisma
Client and its TypeScript types. Commit both:

```text
prisma/models/<changed-model>.prisma
prisma/migrations/<timestamp>_<migration-name>/migration.sql
```

## Run Backend

First setup:

```bash
npm install
cp .env.example .env
npm run setup:dev
```

Daily development:

```bash
npm run dev
```

`npm run setup:dev` performs the initial migration, generates Prisma Client, seeds the admin
account, and starts NestJS. After setup, `npm run dev` starts NestJS in watch mode.

## Important Links

Open these after the backend starts:

```txt
API base URL:  http://localhost:4000/api
Swagger UI:    http://localhost:4000/docs
OpenAPI JSON:  http://localhost:4000/docs-json
```

Frontend API env:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## Default Login

Created by `npm run db:seed`:

```txt
Email:    admin@debtflow.local
Password: Admin@123456
Role:     ADMIN
```

## Common Commands

| Command                  | Purpose                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `npm run dev`            | Start backend in watch mode.                                  |
| `npm run setup:dev`      | Migrate, generate Prisma Client, seed, and start development. |
| `npm run build`          | Generate Prisma Client and build backend.                     |
| `npm run db:migrate`     | Create and apply migrations in development.                   |
| `npm run db:generate`    | Regenerate Prisma Client from the current models.             |
| `npm run db:deploy`      | Apply committed migrations in staging or production.          |
| `npm run db:validate`    | Validate all Prisma schema files.                             |
| `npm run db:check`       | Validate Prisma models and regenerate Prisma Client.          |
| `npm run db:studio`      | Open Prisma Studio.                                           |
| `npm run db:seed`        | Seed the default admin user.                                  |
| `npm run import:parties` | Import 100 demo customers/suppliers directly into PostgreSQL. |

## Changing Prisma Models

Prisma models are stored in `prisma/models/`. Whenever you add, remove, or change a field,
create a new migration and regenerate Prisma Client.

For example, after adding this field to `prisma/models/party.prisma`:

```prisma
model Party {
  // Existing fields...
  website String?
}
```

Run:

```bash
npm run db:migrate -- --name add_party_website
npm run db:generate
```

The first command creates a new SQL migration and applies it to the development database. The
second command updates the generated TypeScript client and types.

Then start or restart the API:

```bash
npm run dev
```

Use a short migration name that describes the change, for example:

```bash
npm run db:migrate -- --name add_party_address
npm run db:migrate -- --name make_party_email_unique
npm run db:migrate -- --name add_debt_reminder_date
```

Do not edit a migration that has already been applied. Change the Prisma model and create another
migration instead. Commit both the changed `.prisma` file and the generated migration directory.

For staging or production, apply committed migrations with:

```bash
npm run db:deploy
```

`db:deploy` does not create a migration and does not regenerate Prisma Client. The `build` command
generates Prisma Client before compiling the application.

## More Docs

- [Run Source](docs/run-source.md)
- [API And Swagger](docs/api-and-swagger.md)
- [API Response Format](docs/api-response-format.md)
- [Request Flow](docs/request-flow.md)
- [Database Workflow](docs/database-workflow.md)
- [Project Structure](docs/project-structure.md)
- [Validation And Errors](docs/validation-and-errors.md)
- [Import Aliases](docs/import-aliases.md)
- [Project Codex Skills](.codex/skills/SKILLS.md)

## Tech Stack

- NestJS 11
- Prisma 7
- PostgreSQL / Neon
- JWT auth
- Swagger / OpenAPI
