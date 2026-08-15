# Project Skills

This folder contains project-local Codex skills for `sales-debt-management-api`.

Custom skills are triggered by name, usually with `$skill-name` or natural language. This repo also documents slash-like aliases such as `/review` and `/commit`, but they are text conventions, not custom Codex UI menu items.

## Quick Commands

```txt
 /review
 /commit
Use $review to review my current changes
Use $commit to prepare a commit
```

Natural language also works:

```txt
review code
check my changes
commit this
prepare a commit message
```

## Skills

| Skill | Use For | Safe Behavior |
| --- | --- | --- |
| `/review` or `$review` | Review code changes, Prisma changes, NestJS/API/auth/validation risks, migration issues, test gaps | Read-only. Does not edit, commit, or push. |
| `/commit` or `$commit` | Prepare or create commits, check changed files, avoid secrets/unrelated changes, propose commit messages | Commits only when explicitly asked. Does not push unless explicitly asked. |

## Suggested Workflow

```txt
/review current changes
/commit reviewed changes
```

## Adding More Skills Later

Use short names that are easy to remember:

```txt
.codex/skills/debug/
.codex/skills/refactor/
.codex/skills/test/
.codex/skills/prisma/
.codex/skills/security/
```

Each skill should keep one clear responsibility and include its own `SKILL.md`.
