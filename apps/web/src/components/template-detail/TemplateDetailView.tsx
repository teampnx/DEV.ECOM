'use client';

import { FooterCommunity } from '@/components/landing/FooterCommunity';
import { GridBackdrop } from '@/components/landing/GridBackdrop';
import { Navbar } from '@/components/landing/Navbar';
import type { TemplateFeatureBlock, TemplateRecord } from '@/types/template';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

type Props = {
  template: TemplateRecord;
  related: TemplateRecord[];
  dashboardUrl?: string;
  checkoutBaseUrl?: string;
};

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45 },
};

function youtubeEmbed(url: string | null): string | null {
  if (!url?.trim()) return null;
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  if (url.includes('youtube.com/embed')) return url;
  return null;
}

function normalizeFeatures(f: TemplateRecord['features']): TemplateFeatureBlock[] {
  if (!f?.length) return [];
  const first = f[0];
  if (typeof first === 'string') return (f as string[]).map((title) => ({ title, description: '' }));
  return f as TemplateFeatureBlock[];
}

function formatMoney(n: number) {
  return `$${n.toFixed(0)}`;
}

export function TemplateDetailView({
  template,
  related,
  dashboardUrl = '/dashboard',
  checkoutBaseUrl = '/dashboard',
}: Props) {
  const [openFeature, setOpenFeature] = useState<number | null>(0);
  const videoSrc = youtubeEmbed(template.preview_video_url);
  const features = normalizeFeatures(template.features);
  const displayFeatures = features.length
    ? features
    : [
        { title: 'SEO optimized', description: 'Built-in schema, meta objects, and Lighthouse-minded sections.' },
        { title: 'Conversion layout', description: 'Hero, proof, and PDP flows tuned for AOV.' },
      ];

  const effectivePrice = template.sale_price != null && template.sale_price < template.price ? template.sale_price : template.price;
  const showStrike = template.sale_price != null && template.sale_price < template.price;

  const checkoutHref = `${checkoutBaseUrl.replace(/\/$/, '')}/checkout?slug=${encodeURIComponent(template.slug)}`;

  const metrics = useMemo(
    () => [
      { label: 'SEO score', value: template.seo_score ?? 99 },
      { label: 'Speed', value: template.speed_score ?? 98 },
      { label: 'Mobile', value: template.mobile_score ?? 99 },
      { label: 'CRO', value: template.conversion_score ?? 97 },
    ],
    [template],
  );

  const advantages = [
    { title: 'Performance driven', body: 'Lazy media, section budgets, and storefront telemetry baked in.' },
    { title: 'SEO ready', body: 'Structured headlines, canonical helpers, and crawl-friendly hierarchy.' },
    { title: 'Premium UI', body: 'Glass panels, neon accents, and editorial grids matching DEV.ECOM DNA.' },
    { title: 'Easy customization', body: 'Theme settings, modular sections, and snippet-level overrides.' },
  ];

  const techRows = [
    { k: 'Framework', v: 'Shopify Online Store 2.0' },
    { k: 'Shopify', v: '2.0 sections · JSON templates' },
    { k: 'Optimization', v: 'Critical CSS patterns · defer scripts' },
    { k: 'Responsive', v: 'Breakpoint QA across core devices' },
    { k: 'Browsers', v: 'Chrome · Safari · Firefox · Edge (latest)' },
  ];

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg">
      <GridBackdrop className="fixed" />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.12]"
        aria-hidden
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
        }}
      />

      <Navbar dashboardUrl={dashboardUrl} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pb-24 lg:pt-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
          <motion.div {...fade}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{template.category}</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
              {template.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{template.short_description}</p>

            <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#111]/90 p-6 shadow-card">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Standard license</p>
                  <div className="mt-2 flex items-baseline gap-3">
                    {showStrike && (
                      <span className="text-lg text-muted line-through">{formatMoney(template.price)}</span>
                    )}
                    <span className="text-4xl font-bold text-accent">{formatMoney(effectivePrice)}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={checkoutHref}
                    className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-accent/90"
                  >
                    Buy now
                  </a>
                  <a
                    href={template.live_demo_url ?? '/#demo'}
                    className="rounded-full border border-white/[0.14] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                  >
                    Live demo
                  </a>
                </div>
              </div>
              <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-6 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Shopify OS 2.0 sections & JSON templates
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Performance-minded assets & lazy loading hooks
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Merchant docs + developer migration notes
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[12, 33, 47].map((id) => (
                    <img
                      key={id}
                      src={`https://i.pravatar.cc/48?img=${id}`}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border-2 border-bg object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {template.rating ?? 4.9}/5 · {template.review_count ?? 120}+ reviews
                  </p>
                  <p className="text-xs text-muted">Trusted by Shopify Plus merchants</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative lg:justify-self-end"
          >
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(124,255,79,0.18),transparent_65%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-card">
                {template.featured_image ? (
                  <img
                    src={template.featured_image}
                    alt=""
                    width={1100}
                    height={620}
                    className="aspect-video w-full object-cover"
                    loading="eager"
                  />
                ) : null}
              </div>
              {/* Floating mini cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 hidden w-[min(100%,280px)] rounded-xl border border-white/[0.08] bg-[#111]/95 p-4 shadow-glow sm:block"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted">Live revenue</p>
                <p className="mt-1 text-2xl font-semibold text-accent">$284k</p>
                <div className="mt-2 h-10 w-full rounded-md bg-gradient-to-r from-accent/30 to-transparent" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-2 top-8 hidden w-44 rounded-xl border border-white/[0.08] bg-[#111]/95 p-3 shadow-card sm:block"
              >
                <p className="text-[10px] text-muted">Perf</p>
                <p className="text-xl font-bold text-white">{template.speed_score ?? 98}/100</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative py-12">
        <div className="mx-auto grid max-w-[1320px] gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              {...fade}
              className="rounded-2xl border border-white/[0.08] bg-[#111] p-6 text-center shadow-card"
            >
              <p className="text-xs uppercase tracking-wider text-muted">{m.label}</p>
              <p className="mt-3 font-display text-4xl font-bold text-accent">{m.value}</p>
              <div className="mx-auto mt-4 h-1.5 max-w-[120px] overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-accent" style={{ width: `${m.value}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video */}
      {videoSrc ? (
        <section className="relative py-12">
          <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
            <motion.div {...fade} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black shadow-card">
              <iframe
                title="Preview video"
                src={videoSrc}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>
      ) : null}

      {/* Social proof */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fade}
            className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 shadow-[0_0_60px_rgba(124,255,79,0.06)]"
          >
            <div className="flex gap-4">
              <img src="https://i.pravatar.cc/56?img=68" alt="" width={48} height={48} className="h-12 w-12 rounded-full" />
              <div>
                <p className="font-semibold text-white">@merchantpulse</p>
                <p className="text-xs text-muted">Verified Shopify Plus brand</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-300">
              “We migrated to {template.title} in a weekend — Lighthouse scores jumped and checkout feels incredible on
              mobile.”
            </p>
            {template.gallery_images[1] ? (
              <img
                src={template.gallery_images[1]}
                alt=""
                className="mt-6 max-h-56 w-full rounded-xl border border-white/[0.06] object-cover"
                loading="lazy"
              />
            ) : null}
          </motion.div>
        </div>
      </section>

      {/* Full description */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="rounded-2xl border border-white/[0.08] bg-[#111]/80 p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-white">Overview</h2>
            <div className="prose prose-invert prose-sm mt-6 max-w-none whitespace-pre-wrap text-zinc-400">
              {template.full_description}
            </div>
            <div className="mt-10 grid gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Tech stack</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {template.tech_stack.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-accent">•</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Included pages</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {template.included_pages.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accordion features */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">Template highlights</h2>
          <div className="mt-8 space-y-3">
            {displayFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={false}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0c]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFeature(openFeature === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white"
                >
                  {f.title}
                  <span className="text-muted">{openFeature === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {openFeature === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/[0.06]"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-muted">{f.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">Technical specifications</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {techRows.map((row) => (
              <motion.div
                key={row.k}
                {...fade}
                className="rounded-xl border border-white/[0.08] bg-[#111] p-5"
              >
                <p className="text-xs uppercase tracking-wider text-muted">{row.k}</p>
                <p className="mt-2 text-sm font-medium text-white">{row.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">Related templates</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.slice(0, 3).map((r) => (
              <a
                key={r.slug}
                href={`/templates/${r.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111] transition hover:border-accent/35 hover:shadow-glow"
              >
                {r.featured_image ? (
                  <div className="aspect-video overflow-hidden">
                    <img src={r.featured_image} alt="" className="h-full w-full object-cover transition group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                ) : null}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-white">{r.title}</p>
                    <span className="text-sm font-bold text-accent">{formatMoney(r.sale_price ?? r.price)}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs text-muted">{r.short_description}</p>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[10px] text-muted">
                      {r.platforms[0] ?? 'Shopify'}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="relative py-12">
        <div className="mx-auto grid max-w-[1320px] gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          {advantages.map((a) => (
            <motion.div key={a.title} {...fade} className="rounded-2xl border border-white/[0.08] bg-[#111] p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                ✦
              </div>
              <h3 className="font-semibold text-white">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[720px] px-4 text-center sm:px-6">
          <motion.div
            {...fade}
            className="rounded-2xl border border-white/[0.1] bg-[#0a0a0a] px-8 py-12 shadow-[0_0_80px_rgba(124,255,79,0.08)]"
          >
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Need customization for this template?</h2>
            <p className="mt-4 text-muted">White-glove setup, migrations, and bespoke sections — our team ships fast.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/#community" className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black hover:bg-accent/90">
                Request customization
              </a>
              <a
                href="/#faq"
                className="rounded-full border border-white/[0.14] px-8 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                Contact support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterCommunity dashboardUrl={dashboardUrl} />
    </div>
  );
}
