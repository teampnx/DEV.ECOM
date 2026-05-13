# Environment variables (add when you’re ready)

You can **run and deploy without** Supabase, Clerk, or Stripe. The storefront uses **fallback data** in `apps/web/src/data/templates.ts`. The dashboard CMS shows an empty list until Supabase is connected.

When you are ready, create accounts and paste keys in the places below.

---

## Where to put each variable

| Where | What |
|--------|------|
| **Local Astro** | `apps/web/.env` (copy from `apps/web/.env.example`) |
| **Local dashboard** | `apps/dashboard/.env.local` (copy from `apps/dashboard/.env.example`) |
| **Vercel → Astro project** | Project → **Settings** → **Environment Variables** (same names as `apps/web/.env`) |
| **Vercel → Dashboard project** | Same for `apps/dashboard` |

Use **Production** (and **Preview** if you want PR previews to work too).

---

## 1. Supabase (database + optional file storage)

**Get it**

1. Go to [https://supabase.com](https://supabase.com) → sign up → **New project**.
2. Wait for the database to finish provisioning.
3. In the project: **Settings** (gear) → **API**.
   - **Project URL** → this is `PUBLIC_SUPABASE_URL` (Astro) and `NEXT_PUBLIC_SUPABASE_URL` (dashboard).
   - **anon public** key → `PUBLIC_SUPABASE_ANON_KEY` (Astro) and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (dashboard).
   - **service_role** key (secret) → **`SUPABASE_SERVICE_ROLE_KEY` on the dashboard only** — never put this in the Astro site or in the browser.

**Apply schema**

In Supabase: **SQL Editor** → paste and run `supabase/migrations/001_templates.sql` from this repo.

**Optional:** run `supabase/seed.sql` for a sample row.

**Why**

- Astro reads **published** templates with the **anon** key (safe for the public).
- The Next.js admin uses the **service role** key to insert/update/delete (bypasses RLS for CMS).

---

## 2. Clerk (login on the dashboard)

**Get it**

1. [https://dashboard.clerk.com](https://dashboard.clerk.com) → create application.
2. **API Keys** → copy **Publishable key** and **Secret key**.

**Add**

- Dashboard only: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`.

**Clerk dashboard settings**

Add your production URLs under **Allowed origins** and **Redirect URLs** (e.g. `https://your-dashboard.vercel.app`).

Without Clerk, local middleware often still runs the app in “open” mode for development; on Vercel you should set Clerk for real auth.

---

## 3. Stripe (checkout)

**Get it**

1. [https://dashboard.stripe.com](https://dashboard.stripe.com) → **Developers** → **API keys**.
2. Use **Test** keys first (`sk_test_…`).

**Add**

- Dashboard: `STRIPE_SECRET_KEY`, and for webhooks `STRIPE_WEBHOOK_SECRET` (after you create an endpoint pointing to `https://<dashboard>/api/webhooks/stripe`).

**Storefront return URLs**

- Dashboard: `NEXT_PUBLIC_SITE_URL` = your **live Astro URL** (e.g. `https://your-storefront.vercel.app`) so Stripe success/cancel links go to the right place.

Without `STRIPE_SECRET_KEY`, “Pay with Stripe” returns **not configured** — the rest of the site still works.

---

## 4. Astro ↔ Dashboard links

**On the Astro project (and local `apps/web/.env`):**

- `PUBLIC_DASHBOARD_URL` = full URL of the deployed dashboard, e.g. `https://your-dashboard.vercel.app`  
  Used for **Login** and **Buy now** links.

**Same Supabase public keys on Astro** (when you add Supabase):

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

---

## 5. Resend (optional email)

[https://resend.com](https://resend.com) → API key → `RESEND_API_KEY`, `RESEND_FROM` on the dashboard only.

---

## Quick checklist (later)

- [ ] Supabase project + run SQL migration  
- [ ] Same project URL + anon key on **both** Astro and dashboard; service role **dashboard only**  
- [ ] Clerk keys on dashboard + Clerk URLs updated  
- [ ] Stripe keys + webhook + `NEXT_PUBLIC_SITE_URL`  
- [ ] `PUBLIC_DASHBOARD_URL` on Astro  

Full deploy steps: [VERCEL.md](./VERCEL.md).
