# Project Structure

## Main Folders

```txt
src/
  common/
    dto/
    filters/
    validation/
  config/
  database/
  generated/
    prisma/
  auth/
    auth.module.ts
    auth-api.decorator.ts
    auth.service.ts
    current-user.decorator.ts
    jwt-auth.guard.ts
    public.decorator.ts
  modules/
    public/
      public.module.ts
      auth/
    protected/
      protected.module.ts
      account/
      users/
      parties/
      debts/
      payments/
      dashboard/
      reports/
      exports/
      imports/
      audit-logs/
prisma/
  schema.prisma
  models/
  migrations/
  seed.ts
docs/
.codex/
  skills/
```

## Responsibilities

| Folder                  | Purpose                                                                         |
| ----------------------- | ------------------------------------------------------------------------------- |
| `src/auth`              | Shared auth service, guard, decorators, and request-user helpers.               |
| `src/modules/public`    | Public HTTP modules that do not require login, grouped by `PublicModule`.       |
| `src/modules/protected` | Protected HTTP modules that require Bearer token, grouped by `ProtectedModule`. |
| `src/common`            | Shared DTOs, filters, validation helpers.                                       |
| `src/config`            | Environment validation and config helpers.                                      |
| `src/database`          | Prisma service and database module.                                             |
| `src/generated/prisma`  | Generated Prisma Client. Do not edit manually.                                  |
| `prisma/models`         | Domain Prisma models and enums.                                                 |
| `prisma/migrations`     | Database migration history.                                                     |
| `.codex/skills`         | Project-local Codex skills.                                                     |

## Current Modules

- Public: Auth login
- Protected: Account, Users, Parties, Debts, Payments, Dashboard, Reports, Exports, Imports, Audit logs

## API Auth Layout

Modules are split by auth boundary first, then by business domain:

```txt
src/modules/public   -> does not require login
src/modules/protected  -> requires Bearer token
```

Controllers still use explicit decorators for Swagger and readability:

```txt
@PublicApi()  -> public route
@ProtectedApi() -> route requires Bearer token
```

Auth helpers live in:

```txt
src/auth/auth-api.decorator.ts
src/auth/auth.module.ts
src/auth/auth.service.ts
src/auth/current-user.decorator.ts
src/auth/jwt-auth.guard.ts
src/auth/public.decorator.ts
```

Most controllers are protected. Public APIs should be rare and explicit, usually only login or health-check style endpoints.
