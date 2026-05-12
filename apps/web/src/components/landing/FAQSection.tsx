'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

type Cat = 'All' | 'Billing' | 'Technical' | 'General';

const faqs: { q: string; a: string; cat: Exclude<Cat, 'All'> }[] = [
  {
    q: 'Do templates include Shopify OS 2.0 sections?',
    a: 'Yes. Every theme ships with JSON templates, app blocks, and reusable sections you can remix without writing Liquid from scratch.',
    cat: 'Technical',
  },
  {
    q: 'Can I transfer a license between stores?',
    a: 'Licenses are per storefront. Contact support if you are migrating domains or consolidating brands—we offer migration credits for annual plans.',
    cat: 'Billing',
  },
  {
    q: 'How do updates work?',
    a: 'Push notifications inside your dashboard when a new version drops. One-click diff review before you publish to production.',
    cat: 'General',
  },
  {
    q: 'Is Stripe checkout included?',
    a: 'Checkout uses Shopify’s native flows. We integrate Stripe for template licensing and subscription add-ons through our dashboard.',
    cat: 'Billing',
  },
  {
    q: 'Do you support Hydrogen or headless setups?',
    a: 'Components include exported design tokens and documentation for headless teams running custom storefront APIs.',
    cat: 'Technical',
  },
];

const pills: Cat[] = ['All', 'Billing', 'Technical', 'General'];

export function FAQSection() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Cat>('All');
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCat = filter === 'All' || f.cat === filter;
      const qlow = query.trim().toLowerCase();
      const matchesQuery =
        qlow.length === 0 ||
        f.q.toLowerCase().includes(qlow) ||
        f.a.toLowerCase().includes(qlow);
      return matchesCat && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="faq" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Got Questions?
        </h2>

        <div className="relative mt-10">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for questions..."
            className="w-full rounded-xl border border-white/[0.08] bg-[#0c0c0c] py-4 pl-12 pr-4 text-sm text-white outline-none ring-accent/30 placeholder:text-muted focus:ring-2"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {pills.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setFilter(p)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                filter === p
                  ? 'border-accent/50 bg-accent/15 text-accent'
                  : 'border-white/[0.08] bg-white/[0.02] text-muted hover:border-white/[0.14]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-3">
          {filtered.map((f) => {
            const isOpen = open === f.q;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0c]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white sm:text-base"
                >
                  {f.q}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-muted"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-white/[0.06]"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-accent/35 bg-[#0a0a0a] p-8 text-center shadow-glow"
        >
          <p className="text-lg font-semibold">Still have questions?</p>
          <a
            href="mailto:support@dev.ecom"
            className="mt-5 inline-flex rounded-full border border-white/[0.1] bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
