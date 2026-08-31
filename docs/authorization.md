# Authentication and Authorization

The API uses two independent global guards:

1. `JwtAuthGuard` verifies the access token and writes the authenticated identity to `request.user`.
2. `RolesGuard` reads `@Roles(...)` metadata and enforces the endpoint's role policy.

`@PublicApi()` is reserved for routes such as login and health checks. A protected controller should
use `@ProtectedApi()` and declare a narrower role policy only for operations that mutate sensitive
data.

## Role matrix

| Capability | ADMIN | ACCOUNTANT | VIEWER |
| --- | --- | --- | --- |
| Read parties, debts, payments, reports | Yes | Yes | Yes |
| Create or update parties and debts | Yes | Yes | No |
| Record or reverse payments | Yes | Yes | No |
| Run imports | Yes | Yes | No |
| Update or deactivate users | Yes | No | No |
| Read audit logs | Yes | No | No |

Controllers declare policy; services enforce business invariants. Never rely on hiding buttons in
the frontend as authorization.

## Adding a protected endpoint

```ts
@Post()
@Roles(UserRole.ADMIN, UserRole.ACCOUNTANT)
create(@Body() input: CreateExampleDto) {
  return this.service.create(input);
}
```

Use a DTO with `class-validator` for every external request body. Do not accept
`Record<string, unknown>` and cast values into Prisma enums: that bypasses runtime validation.

## Token trade-offs

The access token contains the user's role and expires quickly. A role change can therefore remain in
an already-issued access token until it expires. Sensitive systems should add token revocation or a
server-side authorization lookup; this project accepts the short access-token window and validates
the user's active status whenever a refresh token is exchanged.
