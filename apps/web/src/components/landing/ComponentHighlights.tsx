'use client';

import { motion } from 'framer-motion';

export function ComponentHighlights() {
  return (
    <section id="demo" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Component Highlights
          </h2>
          <p className="mt-4 text-muted">
            Deployment telemetry, analytics, and storefront diagnostics in one premium shell.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {/* Large deploy card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 lg:col-span-7 lg:row-span-1"
          >
            <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
              <div className="flex-1 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Deploy</p>
                <h3 className="text-xl font-semibold tracking-tight">Ship your Shopify storefront</h3>
                <div className="rounded-xl border border-white/[0.06] bg-black/50 p-4 font-mono text-[11px] leading-relaxed text-muted">
                  <span className="text-accent">theme</span> deploy --store dev-ecom
                  <br />
                  <span className="text-white/50">○</span> bundling sections...
                  <br />
                  <span className="text-accent">✓</span> uploaded <span className="text-white">nova-commerce.zip</span>
                </div>
              </div>
              <div className="flex w-full flex-col justify-between rounded-xl border border-white/[0.06] bg-[#090909] p-5 lg:max-w-[220px]">
                <p className="text-[11px] text-muted">Performance</p>
                <p className="mt-2 text-4xl font-bold text-accent">99%</p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-accent to-emerald-300" />
                </div>
                <p className="mt-3 text-[11px] text-muted">Core Web Vitals pass</p>
              </div>
            </div>
          </motion.div>

          {/* Deployment status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 lg:col-span-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Deployment status</p>
            <ul className="mt-6 space-y-4">
              {['Build succeeded', 'Theme validated', 'DNS propagated'].map((label) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                    ✓
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* File tree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 font-mono text-[11px] text-muted lg:col-span-4"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white">/templates/nova</p>
            <pre className="space-y-1 whitespace-pre-wrap">
{`sections/
  hero-split.liquid
  product-grid.liquid
  cart-drawer.liquid
snippets/
  icon-cart.svg
config/
  settings_schema.json`}
            </pre>
          </motion.div>

          {/* Visitor chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 lg:col-span-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Visitor activity</p>
              <span className="text-[11px] text-accent">+24%</span>
            </div>
            <svg viewBox="0 0 280 100" className="mt-6 h-28 w-full" aria-hidden>
              <defs>
                <linearGradient id="vgrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(124,255,79,0.35)" />
                  <stop offset="100%" stopColor="rgba(124,255,79,0)" />
                </linearGradient>
              </defs>
              <path
                d="M0 80 L40 60 L80 70 L120 35 L160 45 L200 25 L240 40 L280 20 L280 100 L0 100 Z"
                fill="url(#vgrad)"
              />
              <path
                d="M0 80 L40 60 L80 70 L120 35 L160 45 L200 25 L240 40 L280 20"
                fill="none"
                stroke="#7CFF4F"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 lg:col-span-4"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,255,79,0.15),transparent_55%)]" />
            <p className="relative text-sm font-semibold">Global edge cache</p>
            <div className="relative mx-auto mt-6 flex h-36 w-36 items-center justify-center rounded-full border border-white/[0.08] bg-[#050505] shadow-[0_0_60px_rgba(124,255,79,0.12)]">
              <GlobeSvg />
            </div>
            <p className="relative mt-4 text-center text-[11px] text-muted">Low-latency delivery worldwide</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlobeSvg() {
  return (
    <svg viewBox="0 0 100 100" className="h-28 w-28 text-accent" aria-hidden>
      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="rgba(255,255,255,0.06)" />
      <ellipse cx="50" cy="50" rx="14" ry="38" fill="none" stroke="rgba(255,255,255,0.06)" />
      <path
        d="M12 50h76M50 12v76"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
      {[18, 42, 66, 82].map((x, i) => (
        <circle key={i} cx={x} cy={28 + i * 12} r="2.5" fill="#7CFF4F" opacity={0.85 - i * 0.12} />
      ))}
    </svg>
  );
}
