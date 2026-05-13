# Deploy DEV.ECOM on Vercel

You can **deploy both projects with zero secrets** first: the storefront uses built-in fallback templates; the dashboard loads with an empty CMS until you add Supabase. Later, add variables in Vercel → **Settings** → **Environment Variables** (see [ENV-WHEN-READY.md](./ENV-WHEN-READY.md) for how to obtain each key).

Use **two Vercel projects** from this monorepo (one for the Astro storefront, one for the Next.js dashboard + CMS + Stripe).

## 1. Astro storefront (`apps/web`)

1. [Vercel](https://vercel.com) → **Add New** → **Project** → import your Git repo.
2. **Root Directory**: `apps/web`
3. **Framework Preset**: Vercel should detect **Astro** (we use `@astrojs/vercel` in `astro.config.mjs`).
4. **Build Command**: `npm run build` (default).
5. **Output**: Handled by the Vercel adapter (do **not** set a static `dist` output like Cloudflare Pages).

### Environment variables (add when ready — optional at first deploy)

| Name | Notes |
|------|--------|
| `PUBLIC_SUPABASE_URL` | Supabase project URL (enables live template list from DB) |
| `PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (safe for browser) |
| `PUBLIC_DASHBOARD_URL` | Full URL of your **deployed** dashboard, e.g. `https://dev-ecom-dashboard.vercel.app` |

After the dashboard is live, set `PUBLIC_DASHBOARD_URL` on the Astro project so **Login** and **Buy now** point to production.

---

## 2. Next.js dashboard (`apps/dashboard`)

1. **Add New Project** again (second project), same repo.
2. **Root Directory**: `apps/dashboard`
3. **Framework Preset**: Next.js (auto).
4. Add variables from `apps/dashboard/.env.example` **when you need them** (Clerk, Supabase, Stripe, Resend). Until then the app still builds and runs.

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (optional until checkout is live)
- `NEXT_PUBLIC_SITE_URL` → **your Astro production URL**, e.g. `https://dev-ecom-web.vercel.app` (used for Stripe success/cancel URLs)
- Resend keys if you use email

### Clerk on Vercel

In the Clerk dashboard, add your Vercel URLs to **Allowed origins** and **Redirect URLs** (e.g. `https://<dashboard>.vercel.app`).

### Stripe webhooks

Point Stripe webhook URL to:

`https://<dashboard>.vercel.app/api/webhooks/stripe`

---

## Why two projects?

- **Different runtimes**: Astro (Vercel serverless via `@astrojs/vercel`) vs Next.js App Router.
- **Clear env separation**: public storefront keys vs service role on the dashboard only.

---

## Optional: single repo, one project

If you only deploy the **dashboard** to Vercel and host the Astro site on **Cloudflare Pages** or another host, skip the Astro Vercel project and set `NEXT_PUBLIC_SITE_URL` to that storefront URL.
