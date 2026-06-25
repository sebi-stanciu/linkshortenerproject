# Authentication — Clerk

All authentication in this app is handled exclusively by **Clerk**. Do not implement any other auth mechanism (JWT from scratch, NextAuth, custom sessions, etc.).

## Rules

- Use `@clerk/nextjs` — never `@clerk/clerk-react` or `@clerk/react`.
- `auth()` from `@clerk/nextjs/server` is async — always `await auth()`.
- Never expose `CLERK_SECRET_KEY` in client-side code or logs.

## Protected Routes

- `/dashboard` is a protected route. Users who are **not** signed in must be redirected to sign in.
- Enforce this in `middleware.ts` using Clerk's `clerkMiddleware` with `createRouteMatcher`.

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtected = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) await auth.protect();
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

## Homepage Redirect for Signed-In Users

- If a signed-in user visits `/` (the homepage), redirect them to `/dashboard`.
- Implement this in the homepage Server Component using `auth()` and `redirect()`.

```ts
// app/page.tsx
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect('/dashboard');
  // render landing page for signed-out users
}
```

## Sign-In and Sign-Up — Modal Mode Only

- Sign-in and sign-up flows must **always** launch as a modal, never as a full page redirect.
- Use Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` in client components.
- The `app/sign-in/` and `app/sign-up/` catch-all routes exist only as fallbacks; do not link to them directly.

```tsx
import { SignInButton, SignUpButton } from '@clerk/nextjs';

<SignInButton mode="modal">
  <button>Sign in</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign up</button>
</SignUpButton>
```

## Checking Auth State in Components

- **Server Components / Route Handlers:** use `auth()` from `@clerk/nextjs/server`.
- **Client Components:** use `useAuth()` or `useUser()` from `@clerk/nextjs`.
- Use `<SignedIn>` / `<SignedOut>` wrappers from `@clerk/nextjs` for conditional UI rendering.
