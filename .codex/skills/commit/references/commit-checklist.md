# Commit Checklist

## Before Commit

- Run `git status --short`.
- Inspect changed files and diffs.
- Confirm no secrets are staged.
- Confirm no unrelated files are included.
- Confirm migrations match Prisma schema changes.
- Confirm generated client changes are intentional if present.
- Run relevant validation or explain why it was skipped.

## Files To Treat Carefully

- `.env`, `.env.*`: usually do not commit real secrets.
- `prisma/migrations/**`: commit only intentional migration history.
- `src/generated/prisma/**`: commit only if this repo intentionally tracks generated Prisma client.
- Lockfiles: commit when dependency manager changes are intentional.

## Recommended Commands

Use these depending on the changed files:

```bash
git status --short
git diff
npm run db:check
npm run build
```

## Commit Message Examples

```txt
Add project-local review and commit skills
Split Prisma schema into domain files
Add Prisma workflow scripts
Document backend validation error shape
```
