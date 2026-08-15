# Review Checklist

Use this checklist only when relevant to the changed files.

## NestJS API

- Controllers should keep routing, guards, request binding, and Swagger docs.
- Services should contain business logic and data access orchestration.
- DTOs should define request shape, validation decorators, and field docs.
- Global pipes and filters should preserve a stable API error shape.
- Guards must protect endpoints that depend on authenticated identity.
- Avoid leaking internal errors, password hashes, tokens, or DB details.

## Validation And Error Shape

- Unknown fields should be handled intentionally through `whitelist` and `forbidNonWhitelisted`.
- Field-level errors should be easy for FE to map: `field`, `message`, `code`.
- Top-level error messages should be stable and not require FE to parse text.
- Machine-readable codes should be constants when reused.

## Prisma

- Schema changes must have matching migrations.
- Never edit migrations already shared or applied by other environments.
- Multi-file schema should keep models/enums near their owning domain.
- Shared enums should move to a domain file only when they truly have multiple owners.
- Running `npm run db:check` should validate schema and generate the client.
- Generated Prisma client imports should still resolve to `src/generated/prisma`.
- Seed changes should be idempotent.

## Data And Money

- Validate amounts, dates, currency, statuses, and ownership.
- Check decimal handling for money.
- Check state transitions such as debt paid/cancelled/partial.
- Avoid destructive updates without explicit intent.

## Security

- Passwords must be hashed and never returned.
- Auth errors should not reveal whether an email exists.
- JWT secret and database URLs must not be committed.
- CORS and token handling should match FE usage.

## Verification

- For Prisma changes: `npm run db:check`.
- For backend changes: `npm run build`.
- For risky logic: targeted tests or a clear manual verification path.
