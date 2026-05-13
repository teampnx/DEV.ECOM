# DEV.ECOM

Premium dark-mode marketing site (Astro) and merchant dashboard (Next.js) with a **Supabase-backed template CMS**.

## Repository layout

| Path | Stack | Purpose |
|------|--------|---------|
| `apps/web` | Astro 4 + `@astrojs/vercel`, Tailwind, TS, Framer Motion | Marketing site, `/templates`, dynamic `/templates/[slug]` |
| `apps/dashboard` | Next.js 14, Clerk, Stripe, Supabase admin API | Merchant UI + **`/admin/templates`** CMS + Stripe checkout |
| `supabase/migrations` | SQL | `templates` table schema |

## Template CMS (important)

- **Database**: Run `supabase/migrations/001_templates.sql` in the Supabase SQL editor (optional: `supabase/seed.sql`).
- **Admin UI**: `https://<dashboard-host>/admin/templates` — create / edit / delete templates (Clerk required unless middleware keys unset locally).
- **Storefront**: Reads published rows via Supabase anon key (`PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY` on Astro).
- **Fallback**: If env vars are missing, `apps/web/src/data/templates.ts` supplies offline demo data.

Detail URLs work for **any slug present in the database** — no new Astro pages required.

**No accounts yet?** You can still run and deploy: see [docs/ENV-WHEN-READY.md](docs/ENV-WHEN-READY.md) (what each key is for + where to paste it later).

## Quick start

### Astro storefront

```bash
cd apps/web
cp .env.example .env
npm install
npm run dev
```

After `npm run build`, use **`npx vercel`** from `apps/web` or connect the repo in the Vercel dashboard. See **[docs/VERCEL.md](docs/VERCEL.md)** for two-project setup (storefront + dashboard).

### Dashboard + CMS + Checkout

```bash
cd apps/dashboard
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000/admin/templates` after signing in (configure Clerk + `SUPABASE_SERVICE_ROLE_KEY`).

Set **`PUBLIC_DASHBOARD_URL=http://localhost:3000`** in `apps/web/.env` so Login / Buy links hit the dashboard.

## Deployment notes

- **Vercel (recommended)**: Step-by-step for **two projects** (Astro storefront + Next dashboard) — [docs/VERCEL.md](docs/VERCEL.md). The Astro app uses **`@astrojs/vercel`** (build output goes to `.vercel/output/`).
- **Stripe checkout**: `POST /api/checkout/create-session` — set `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_SITE_URL` (success/cancel URLs to your live storefront).

## Environment variables

See `apps/web/.env.example` and `apps/dashboard/.env.example`.

## Design tokens

Background `#050505`, cards `#111111`, accent `#7CFF4F`, borders `rgba(255,255,255,0.08)`.
