'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

const templates = [
  { name: 'Nova Commerce', status: 'Live', version: '2.4.1' },
  { name: 'Lumen Atelier', status: 'Staging', version: '1.8.0' },
  { name: 'Pulse Gadgetry', status: 'Draft', version: '0.9.3' },
];

const orders = [
  { id: '#10432', buyer: 'Aurora Capsule', total: '$249', state: 'Paid' },
  { id: '#10431', buyer: 'Northwind Supply', total: '$129', state: 'Paid' },
  { id: '#10430', buyer: 'Velvet Row', total: '$89', state: 'Processing' },
];

export function DashboardApp({ clerkEnabled }: { clerkEnabled: boolean }) {
  if (!clerkEnabled) {
    return (
      <DashboardShell
        title="Command center"
        badge="Clerk disabled — add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
        userSlot={null}
      />
    );
  }
  return <DashboardWithClerk />;
}

function DashboardWithClerk() {
  const { user, isLoaded } = useUser();
  const title =
    isLoaded && user?.firstName ? `Welcome back, ${user.firstName}` : 'Command center';

  return (
    <DashboardShell
      title={title}
      badge={null}
      userSlot={
        <UserButton
          appearance={{
            elements: {
              avatarBox: 'h-9 w-9 ring-2 ring-accent/30',
            },
          }}
        />
      }
    />
  );
}

function DashboardShell({
  title,
  badge,
  userSlot,
}: {
  title: string;
  badge: string | null;
  userSlot: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh bg-bg">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none fixed -left-40 top-24 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,255,79,0.18),transparent_65%)] blur-3xl" />

      <div className="relative mx-auto flex max-w-[1440px] gap-6 px-4 py-8 lg:px-8">
        <aside className="hidden w-64 shrink-0 flex-col rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-4 lg:flex">
          <div className="mb-8 flex items-center gap-2 px-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(124,255,79,0.55)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">DEV.ECOM</span>
          </div>
          <nav className="flex flex-col gap-1 text-sm">
            {['Overview', 'Templates', 'Orders', 'Downloads', 'Billing'].map((item, i) => (
              <button
                key={item}
                type="button"
                className={`rounded-xl px-3 py-2 text-left transition ${
                  i === 0 ? 'bg-white/[0.06] text-white' : 'text-muted hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-xl border border-white/[0.06] bg-black/40 p-4">
            <p className="text-[11px] text-muted">Workspace</p>
            <p className="mt-1 text-sm font-semibold">Production</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-[72%] rounded-full bg-accent" />
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-8">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 px-5 py-4 backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted">Dashboard</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              {badge && (
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {badge}
                </span>
              )}
              <Link
                href="/admin/templates"
                className="hidden text-sm font-semibold text-accent hover:underline sm:inline"
              >
                Template CMS
              </Link>
              {userSlot}
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-3">
            {[
              { label: 'Net revenue', value: '$284,920', delta: '+18.4%', accent: true },
              { label: 'Orders', value: '1,284', delta: '+6.1%', accent: false },
              { label: 'Template downloads', value: '38.4k', delta: '+12.8%', accent: false },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-5 shadow-card"
              >
                <p className="text-xs text-muted">{m.label}</p>
                <p className={`mt-3 text-3xl font-semibold ${m.accent ? 'text-accent' : 'text-white'}`}>
                  {m.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-accent">{m.delta}</p>
                <div className="mt-4 h-16 w-full rounded-xl bg-gradient-to-br from-accent/15 to-transparent">
                  <svg viewBox="0 0 120 40" className="h-full w-full opacity-90" aria-hidden>
                    <path
                      d="M0 28 L30 18 L60 24 L90 10 L120 14"
                      fill="none"
                      stroke="#7CFF4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 xl:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Orders</h2>
                <button type="button" className="text-xs font-semibold text-accent">
                  Export CSV
                </button>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="text-xs uppercase tracking-wide text-muted">
                    <tr>
                      <th className="pb-3 font-medium">Order</th>
                      <th className="pb-3 font-medium">Buyer</th>
                      <th className="pb-3 font-medium">Total</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {orders.map((o) => (
                      <tr key={o.id} className="text-muted">
                        <td className="py-3 font-medium text-white">{o.id}</td>
                        <td className="py-3">{o.buyer}</td>
                        <td className="py-3">{o.total}</td>
                        <td className="py-3">
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-xs font-semibold text-accent">
                            {o.state}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6">
              <h2 className="text-lg font-semibold">Templates</h2>
              <ul className="mt-6 space-y-4">
                {templates.map((t) => (
                  <li
                    key={t.name}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted">v{t.version}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">{t.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-dashed border-white/[0.12] bg-black/40 p-6 font-mono text-xs leading-relaxed text-muted">
            <span className="text-accent">$</span> shopify theme deploy --store dev-ecom --theme nova-commerce
            <br />
            <span className="text-white/70">✓</span> bundled sections · assets uploaded · perf score{' '}
            <span className="text-accent">99</span>
          </section>
        </main>
      </div>
    </div>
  );
}
