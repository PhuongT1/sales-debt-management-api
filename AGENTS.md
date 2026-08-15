# Project Agent Guide

This repository uses project-local Codex skills in `.codex/skills/`.

## Skill Menu

Read `.codex/skills/SKILLS.md` when the user asks what skills are available or how to use project skills.

Available project skills:

- `/review` or `$review`: review current changes. Read-only; do not edit, commit, or push.
- `/commit` or `$commit`: prepare or create commits. Commit only when the user explicitly asks.

Slash-style names such as `/review` and `/commit` are project text conventions. They may not appear in the Codex slash-command UI, but treat them as aliases for the matching project skill.

## Recommended Flow

Use review before commit:

```txt
/review current changes
/commit reviewed changes
```

## Safety

- Do not commit `.env` files or secrets.
- Do not push unless the user explicitly asks.
- Do not revert user changes unless the user explicitly asks.
- For Prisma changes, prefer `npm run db:check`.
- For backend changes, prefer `npm run build`.
