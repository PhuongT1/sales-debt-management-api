# Sales Debt Management API

NestJS backend API for Debt Flow / Sales Debt Management.

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

`npm run dev` generates Prisma Client, then starts NestJS in watch mode.

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
| `npm run setup:dev`      | Migrate DB, seed admin user, then start backend.              |
| `npm run build`          | Generate Prisma Client and build backend.                     |
| `npm run db:migrate`     | Apply local Prisma migrations and regenerate client.          |
| `npm run db:seed`        | Seed default admin user.                                      |
| `npm run import:parties` | Import 100 demo customers/suppliers directly into PostgreSQL. |
| `npm run db:check`       | Validate Prisma schema and regenerate client.                 |
| `npm run prisma:studio`  | Open Prisma Studio.                                           |

## More Docs

- [Run Source](docs/run-source.md)
- [API And Swagger](docs/api-and-swagger.md)
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
