'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { MarketplaceTemplate } from '@/data/templates';
import { marketplaceTemplates } from '@/data/templates';
import { getSupabaseBrowser } from '@/lib/supabase/browser';
import { mapTemplateRow } from '@/lib/templates/map-row';
import { templateRecordToMarketplace } from '@/lib/templates/map-to-marketplace';

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className ?? ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className ?? ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TemplatesSection() {
  const [items, setItems] = useState<MarketplaceTemplate[]>(() => marketplaceTemplates.slice(0, 4));

  useEffect(() => {
    const sb = getSupabaseBrowser();
    if (!sb) return;
    void (async () => {
      let { data } = await sb.from('templates').select('*').eq('published', true).eq('is_featured', true).limit(4);
      if (!data?.length) {
        const res = await sb.from('templates').select('*').eq('published', true).order('created_at', { ascending: false }).limit(4);
        data = res.data;
      }
      if (!data?.length) return;
      try {
        const mapped = data.map((row) => templateRecordToMarketplace(mapTemplateRow(row as Record<string, unknown>)));
        setItems(mapped.slice(0, 4));
      } catch {
        /* keep fallback */
      }
    })();
  }, []);

  return (
    <section id="templates" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Templates</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Premium Website Templates
          </h2>
          <p className="mt-4 text-muted">
            Production-ready Shopify themes with storefront polish, speed scores that rank, and sections built for
            conversion.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((t) => (
            <motion.article
              key={t.slug}
              variants={item}
              transition={{ duration: 0.45 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-card shadow-card transition-transform duration-300 hover:z-[1] hover:scale-[1.02] hover:border-white/[0.14] hover:shadow-glow"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={t.image}
                  alt=""
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex min-h-[22px] flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {t.platforms.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-muted"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  {t.pro ? (
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                      PRO
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="min-w-0 flex-1 text-[17px] font-bold leading-snug tracking-tight text-white sm:text-lg">
                    {t.name}
                  </h3>
                  <span className="shrink-0 text-[17px] font-bold tracking-tight text-white sm:text-lg">{t.price}</span>
                </div>

                <div className="mt-6 grid min-w-0 grid-cols-2 gap-2">
                  <a
                    href={t.demoHref ?? '/#demo'}
                    target={t.demoHref?.startsWith('http') ? '_blank' : undefined}
                    rel={t.demoHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex h-8 min-w-0 flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.18] bg-transparent px-2.5 py-0 text-[11px] font-semibold leading-none tracking-tight text-white transition hover:border-white/[0.28] hover:bg-white/[0.04] sm:h-9 sm:gap-2 sm:px-4 sm:text-xs"
                  >
                    <EyeIcon />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={`/templates/${t.slug}`}
                    className="inline-flex h-8 min-w-0 flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2.5 py-0 text-[11px] font-semibold leading-none tracking-tight text-black transition hover:bg-white/90 sm:h-9 sm:gap-2 sm:px-4 sm:text-xs"
                  >
                    <LayoutIcon className="text-black" />
                    <span>View Template</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center sm:mt-16">
          <a
            href="/templates"
            className="inline-flex rounded-full border border-white/[0.22] bg-transparent px-10 py-3.5 text-sm font-semibold text-white transition hover:border-white/[0.35] hover:bg-white/[0.04] sm:px-12 sm:py-4 sm:text-base"
          >
            Browse All Templates
          </a>
        </div>
      </div>
    </section>
  );
}
