'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  MARKETPLACE_CATEGORIES,
  MARKETPLACE_PAGE_SIZE,
  type MarketplaceCategory,
  type MarketplaceTemplate,
  marketplaceTemplates,
} from '@/data/templates';
import { Navbar } from '@/components/landing/Navbar';
import { getSupabaseBrowser } from '@/lib/supabase/browser';
import { mapTemplateRow } from '@/lib/templates/map-row';
import { templateRecordToMarketplace } from '@/lib/templates/map-to-marketplace';

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className ?? ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 3h7v7M10 14 21 3M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className ?? ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type SortKey = 'popular' | 'price-asc' | 'price-desc' | 'name';

function sortList(list: MarketplaceTemplate[], key: SortKey): MarketplaceTemplate[] {
  const copy = [...list];
  if (key === 'popular') return copy;
  if (key === 'price-asc') return copy.sort((a, b) => a.priceValue - b.priceValue);
  if (key === 'price-desc') return copy.sort((a, b) => b.priceValue - a.priceValue);
  return copy.sort((a, b) => a.name.localeCompare(b.name));
}

function matchesSearch(t: MarketplaceTemplate, q: string): boolean {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  return (
    t.name.toLowerCase().includes(s) ||
    t.description.toLowerCase().includes(s) ||
    t.platforms.some((p) => p.toLowerCase().includes(s))
  );
}

export function TemplatesMarketplacePage({ dashboardUrl = '/dashboard' }: { dashboardUrl?: string }) {
  const [catalog, setCatalog] = useState<MarketplaceTemplate[]>(marketplaceTemplates);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'All' | MarketplaceCategory>('All');
  const [sort, setSort] = useState<SortKey>('popular');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const sb = getSupabaseBrowser();
    if (!sb) return;
    void (async () => {
      const { data, error } = await sb.from('templates').select('*').eq('published', true).order('created_at', {
        ascending: false,
      });
      if (error || !data?.length) return;
      try {
        const mapped = data.map((row) => templateRecordToMarketplace(mapTemplateRow(row as Record<string, unknown>)));
        setCatalog(mapped);
      } catch {
        /* ignore malformed rows */
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    let list = catalog.filter((t) => matchesSearch(t, search));
    if (category !== 'All') {
      list = list.filter((t) => t.marketplaceCategory === category);
    }
    return sortList(list, sort);
  }, [catalog, search, category, sort]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / MARKETPLACE_PAGE_SIZE));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * MARKETPLACE_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + MARKETPLACE_PAGE_SIZE);

  return (
    <div className="relative min-h-dvh bg-bg text-white">
      {/* Grid + green glow — matches home */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none fixed left-1/2 top-0 h-[min(70vh,640px)] w-[min(100vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,255,79,0.14),transparent_62%)] blur-3xl" />

      <Navbar dashboardUrl={dashboardUrl} />

      <main className="relative mx-auto max-w-[1320px] px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-zinc-400">Browse All Templates · Shopify OS 2.0</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Premium Shopify{' '}
            <span className="bg-gradient-to-r from-accent to-[#B8FF8A] bg-clip-text text-transparent">
              Templates
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-zinc-400">
            High-converting storefront kits for Shopify and Shopify Plus — search, preview, and launch in minutes.
          </p>

          {/* Search pill */}
          <div className="relative mx-auto mt-10 flex max-w-xl items-center rounded-full border border-white/[0.1] bg-[#111]/90 py-1.5 pl-5 pr-1.5 shadow-[0_0_0_1px_rgba(124,255,79,0.12)] backdrop-blur">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search templates, stacks, merchants…"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition hover:bg-accent/90"
            >
              Search
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mt-16 flex flex-col gap-4 border-b border-white/[0.06] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {MARKETPLACE_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCategory(c.id);
                  setPage(1);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                  category === c.id
                    ? 'bg-accent/15 text-accent ring-1 ring-accent/40'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort-templates" className="text-xs text-zinc-500">
              Sort by
            </label>
            <select
              id="sort-templates"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-xl border border-white/[0.1] bg-[#111] px-3 py-2 text-xs font-medium text-white outline-none ring-accent/30 focus:ring-2"
            >
              <option value="popular">Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        {/* Grid — 3 columns */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((t) => (
            <article
              key={t.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111]/90 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition hover:border-accent/35 hover:shadow-[0_0_48px_rgba(124,255,79,0.1)]"
            >
              <div className="aspect-video overflow-hidden bg-[#0a0a0a]">
                <img
                  src={t.image}
                  alt=""
                  width={900}
                  height={507}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  {t.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-zinc-300"
                    >
                      {p}
                    </span>
                  ))}
                  {t.pro ? (
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase text-black">
                      PRO
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <h2 className="min-w-0 flex-1 text-lg font-bold leading-snug">{t.name}</h2>
                  <span className="shrink-0 text-lg font-bold">{t.price}</span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-500">{t.description}</p>

                <div className="mt-6 grid min-w-0 grid-cols-2 gap-2">
                  <a
                    href={t.demoHref ?? '/#demo'}
                    target={t.demoHref?.startsWith('http') ? '_blank' : undefined}
                    rel={t.demoHref?.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className="inline-flex h-8 min-w-0 flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.14] px-2.5 text-[11px] font-semibold leading-none text-white transition hover:border-white/25 hover:bg-white/[0.04] sm:h-9 sm:gap-2 sm:px-4 sm:text-xs"
                  >
                    <ExternalIcon />
                    Live Demo
                  </a>
                  <a
                    href={`/templates/${t.slug}`}
                    className="inline-flex h-8 min-w-0 flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#EDEDED] px-2.5 text-[11px] font-semibold leading-none text-black transition hover:bg-white sm:h-9 sm:gap-2 sm:px-4 sm:text-xs"
                  >
                    <ArrowIcon className="text-black" />
                    View Template
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {pageItems.length === 0 && (
          <p className="mt-16 text-center text-zinc-500">No templates match your filters. Try clearing search.</p>
        )}

        {/* Pagination */}
        {total > 0 && (
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
            <p className="text-sm text-zinc-500">
              Showing {total === 0 ? 0 : start + 1}-{Math.min(start + MARKETPLACE_PAGE_SIZE, total)} of {total}{' '}
              results
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-full border border-white/[0.1] px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-white/[0.05] disabled:opacity-30"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`h-9 min-w-[2.25rem] rounded-full px-2 text-xs font-semibold ${
                    n === safePage
                      ? 'bg-accent text-black'
                      : 'text-zinc-400 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-full border border-white/[0.1] px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-white/[0.05] disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Newsletter */}
        <section className="mt-24 grid gap-10 rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 p-8 backdrop-blur lg:grid-cols-2 lg:items-center lg:p-12">
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {catalog.slice(0, 12).map((t) => (
              <div key={t.slug} className="aspect-square overflow-hidden rounded-lg border border-white/[0.06]">
                <img src={t.image} alt="" className="h-full w-full object-cover opacity-90" loading="lazy" />
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Get notified about new premium templates
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Drops, discounts, and section packs — no spam.
            </p>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                required
                placeholder="you@store.com"
                className="min-w-0 flex-1 rounded-xl border border-white/[0.1] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-zinc-600 focus:ring-2"
              />
              <button
                type="submit"
                className="rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-black hover:bg-accent/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-[#111] px-8 py-10 text-center">
            <h3 className="text-xl font-bold">Need a custom solution?</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Migration, bespoke sections, or white-label rollout — talk to our team.
            </p>
            <a
              href="/#community"
              className="mt-6 inline-flex rounded-full border border-accent/40 bg-accent/10 px-8 py-3 text-sm font-semibold text-accent hover:bg-accent/20"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/[0.06] pt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-zinc-500">
            <a href="#" className="transition hover:text-accent">
              Discord
            </a>
            <a href="#" className="transition hover:text-accent">
              Twitter
            </a>
            <a href="#" className="transition hover:text-accent">
              GitHub
            </a>
          </div>
          <p className="mt-10 font-display text-5xl font-black uppercase tracking-tight text-white/[0.06] sm:text-7xl">
            DEV.ECOM
          </p>
          <p className="mt-6 text-xs text-zinc-600">
            © {new Date().getFullYear()} DEV.ECOM · Premium Shopify templates
          </p>
        </footer>
      </main>
    </div>
  );
}
