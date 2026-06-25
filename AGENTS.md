# Agent Instructions — LinkShortener

This file is the entry point for LLM agents working in this codebase. Read this file first, then follow the links to the detailed instruction files in `/docs/` before writing any code.

> **CRITICAL — MANDATORY FIRST STEP:**
> You MUST read the relevant `/docs/` instruction file(s) BEFORE writing, editing, or generating ANY code whatsoever.
> Do NOT skip this step. Do NOT assume you know the conventions. Reading the docs first is non-negotiable — no exceptions.

## Project Overview

A URL shortener built with Next.js App Router, Clerk authentication, Drizzle ORM, and Neon PostgreSQL. The UI uses Tailwind CSS v4 and shadcn/ui (radix-nova style).

## Instruction Files

Detailed coding standards live in `/docs/`. **You MUST read the relevant file before touching that layer of the stack — no exceptions, no shortcuts.**

> ⚠️ **STOP. Before you write a single line of code:** identify which area(s) below apply to your task, open each linked file using your file-reading tool, and read it in full. Only then may you proceed with code generation.

- **Authentication:** [`/docs/auth.md`](/docs/auth.md) — Clerk-only auth, protected routes, modal sign-in/sign-up, homepage redirect.
- **UI Components:** [`/docs/ui.md`](/docs/ui.md) — All UI uses shadcn/ui; never create custom components.


## Non-Negotiable Rules

- **ALWAYS read the relevant `docs/` file(s) before generating ANY code — this is the most important rule in this file.**
- Never expose `CLERK_SECRET_KEY` in client code or log it anywhere.
- Never read or print `.env` / `.env.local` values — ask the user if a value is needed.
- `auth()` from `@clerk/nextjs/server` is async — always `await auth()`.
- This project uses the Next.js **App Router** (`app/` directory). Do not use Pages Router patterns.
- Use `@clerk/nextjs`, not `@clerk/clerk-react` or `@clerk/react`.
- TypeScript strict mode is on. Do not use `any` or `// @ts-ignore` without justification.
- All database access goes through Drizzle ORM — no raw SQL strings via template literals unless using `sql` tagged template from drizzle-orm.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
