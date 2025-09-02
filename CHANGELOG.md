## Changelog

This file tracks notable changes made during setup and debugging of the Slide app.

### [Unreleased]
- Keep adding entries below as we make changes.

### 2025-09-02
- Move suppressHydrationWarning to `html` in `src/app/layout.tsx` to resolve hydration warning.
- Add `priority` to hero `Image` in `src/app/(website)/page.tsx` to fix LCP warning.
- Update Clerk sign-in page `src/app/(auth)/sign-in/[[...sign-in]]/page.tsx` to render only for signed-out users and redirect signed-in users.
- Align Prisma versions and regenerate client: install `prisma@6.15.0` and `@prisma/client@6.15.0`.
- Add safe Stripe initialization:
  - `src/lib/stripe.ts`: export `stripe` as `null` if `STRIPE_CLIENT_SECRET` is missing; otherwise initialize with apiVersion `2024-06-20`.
  - `src/app/(protected)/api/payments/route.ts`: return a mock session URL when Stripe/env is not configured so app runs without Stripe.
- Fix billing component runtime error by adding `"use client"` directive to `src/components/global/billing/index.tsx`.
- Create comprehensive `README.md` with setup instructions, tech stack, and troubleshooting guide.

### 2025-09-01
- Git author set locally: `tushartime <timetusharindia@gmail.com>`; last commit amended.

Notes:
- Dev server run with Bun: `bun run dev` (optional `--port 3001`).
- Prisma generate: `bunx prisma generate`.

