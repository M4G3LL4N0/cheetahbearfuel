# Project Recovery Notes

## Startup Identity
- Startup name: Cheetah Bear Fuel
- Project folder: /Users/joshuadavis/startups/cheetahbearfuel
- Domain:
- One-line description: A high-octane American performance drink brand for energy, protein, electrolytes, mushroom focus, and sports health drinks.
- Category: Performance beverage and lifestyle brand.
- Stage: MVP

## Product Vision
- Target user: Gym users, athletes, motorsports fans, extreme sports fans, builders, nightlife users, and American performance culture consumers.
- Core problem: Most functional beverages feel generic, soft, corporate, or boring.
- Core solution: A bold lifestyle beverage brand combining speed, strength, hydration, and focus under the Cheetah Bear identity.
- Differentiation: Mascot-driven identity, Miami Vice neon visuals, Pit Viper-style attitude, and multi-category performance drinks.
- MVP goal: Launch a premium landing page with waitlist capture.
- Long-term vision: Build a viral beverage, merch, creator, and event ecosystem around speed plus power.

## Website/App Structure
- Main routes: `/`, `/api/waitlist`
- Key components: `src/components/WaitlistForm.tsx`
- Data/content files: Brand and product-line content currently lives in `src/app/page.tsx`.
- API routes: `src/app/api/waitlist/route.ts`
- Auth/database needs: No auth. Supabase is optional for waitlist storage when env vars exist.

## Design Direction
- Visual style: Dark premium landing page with neon Miami Vice gradients, bold mascot art, heat, speed, gym, and motorsports energy.
- Tone: Aggressive, premium, high-octane, American, humorous but powerful.
- Layout principles: Giant hero, minimal copy, strong contrast, mobile responsive, direct waitlist CTA.
- Brand notes: Preserve `CHEETAH BEAR FUEL`, `TWO BEAST ONE CAN`, and `Why be one beast when you can be two?`

## What Was Preserved
- Useful pages: Homepage and waitlist route concept.
- Useful components: Waitlist form.
- Useful copy: Core Cheetah Bear Fuel brand name, slogan, and product-line direction.
- Useful assets: `public/hero-cheetah-bear.png`
- Useful technical decisions: Next.js App Router, TypeScript, Tailwind CSS, Vercel, pnpm, optional Supabase waitlist.

## What Was Fixed
- Build issues: Removed empty root `app/` directory that caused Next to ignore `src/app`; production build now lists `/` and `/api/waitlist`.
- TypeScript issues: Removed strict Supabase schema generics and added a `typecheck` script.
- Dependency issues: Kept pnpm as the only package manager and preserved `pnpm-lock.yaml`.
- Routing issues: Removed unused placeholder checkout route and kept the required waitlist route.
- Design/content issues: Rebuilt homepage as Cheetah Bear Fuel beverage/lifestyle positioning instead of generic SaaS/founder copy.

## What Was Removed
- Generated artifacts: `node_modules`, `.next`, `tsconfig.tsbuildinfo`, log files.
- Duplicate files: Root duplicate `hero-cheetah-bear.png`.
- Broken code: Root-level placeholder Supabase shim and placeholder checkout route.
- Unused dependencies: None removed from `package.json`.
- Large files: None over 25 MB remain.

## Current Build Status
- pnpm install: Passed before cleanup.
- pnpm lint: Passed.
- pnpm typecheck: Passed.
- pnpm build: Passed. Route table includes `/` static and `/api/waitlist` dynamic.
- Vercel readiness: Ready for manual deploy after reinstall/build. Add Supabase env vars if waitlist storage should work.

## Manual Deploy Command

cd /Users/joshuadavis/startups/cheetahbearfuel
pnpm install
pnpm build
vercel --prod

## Return-Later Commands

cd /Users/joshuadavis/startups/cheetahbearfuel
pnpm install
pnpm build

## Next Best Tasks
1. Confirm Vercel env vars and waitlist submission.
2. Optimize hero image size without losing visual impact.
3. Add product mockup section for Energy, Protein, Electrolytes, and Mushroom/Focus.
4. Add coming-soon flavor/drop section.
5. Add Open Graph image and SEO metadata polish.

## Autobuilder Guardrails
- Do not: Use npm, deploy automatically, push automatically, expose Autobuilder internals, delete the public hero image, or turn the site into SaaS.
- Preserve: Cheetah Bear Fuel identity, core hero copy, `public/hero-cheetah-bear.png`, pnpm, App Router, Tailwind, Vercel readiness.
- Improve next: Waitlist validation, brand visuals, product mockups, SEO, performance, ecommerce-ready structure.
- Avoid drift toward: Wellness blog, corporate B2B SaaS, fake checkout, generic startup template, or unrelated products.
