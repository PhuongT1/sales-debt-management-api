# Validation And Errors

Global validation is configured in:

```txt
src/configure-app.ts
```

Important options:

```ts
whitelist: true;
forbidNonWhitelisted: true;
transform: true;
```

Unknown request fields are rejected instead of silently ignored.

## Validation Error Shape

```json
{
  "success": false,
  "code": "VALIDATION_ERROR",
  "message": "Dữ liệu không hợp lệ.",
  "errors": [
    {
      "field": "email",
      "message": "Vui lòng nhập email.",
      "code": "AUTH_EMAIL_REQUIRED"
    }
  ],
  "statusCode": 400
}
```

## Frontend Mapping

The frontend can map field errors like this:

```ts
const fieldErrors = Object.fromEntries(
  response.errors.map((error) => [error.field, error.message]),
);
```

## Prisma Errors

Prisma known errors are handled by:

```txt
src/common/filters/prisma-exception.filter.ts
```
