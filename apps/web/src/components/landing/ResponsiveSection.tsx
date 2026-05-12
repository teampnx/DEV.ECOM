'use client';

import { motion } from 'framer-motion';

const bullets = [
  'Fluid breakpoints tuned for Shopify themes',
  'Touch-first interactions for mobile commerce',
  'Cross-browser verified components',
  'Performance budgets enforced per section',
];

export function ResponsiveSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          <div className="relative aspect-[4/3]">
            {/* Laptop */}
            <div className="absolute left-1/2 top-4 w-[88%] -translate-x-1/2 rounded-xl border border-white/[0.1] bg-[#111] p-2 shadow-card">
              <div className="flex gap-2 rounded-lg border border-white/[0.06] bg-[#0a0a0a] p-3">
                <div className="hidden w-14 shrink-0 flex-col gap-1 border-r border-white/[0.06] pr-2 sm:flex">
                  <span className="h-1.5 w-full rounded bg-accent/60" />
                  <span className="h-1 w-full rounded bg-white/10" />
                  <span className="h-1 w-full rounded bg-white/10" />
                </div>
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-16 rounded-md bg-gradient-to-br from-accent/20 to-transparent" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 rounded bg-white/[0.04]" />
                    <div className="h-10 rounded bg-white/[0.04]" />
                    <div className="h-10 rounded bg-white/[0.04]" />
                  </div>
                </div>
              </div>
            </div>
            {/* Tablet */}
            <div className="absolute bottom-6 left-4 w-[42%] rounded-xl border border-white/[0.1] bg-[#111] p-2 shadow-card sm:left-8">
              <div className="aspect-[3/4] rounded-lg border border-white/[0.06] bg-[#0a0a0a] p-2">
                <div className="h-4 rounded bg-accent/30" />
                <div className="mt-2 grid grid-cols-2 gap-1">
                  <div className="h-8 rounded bg-white/[0.05]" />
                  <div className="h-8 rounded bg-white/[0.05]" />
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="absolute bottom-2 right-4 w-[22%] rounded-[1.25rem] border border-white/[0.12] bg-[#111] p-1.5 shadow-card sm:right-10">
              <div className="aspect-[9/18] rounded-[1rem] border border-white/[0.06] bg-[#080808] p-2">
                <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/10" />
                <div className="h-12 rounded-lg bg-gradient-to-b from-accent/25 to-transparent" />
                <div className="mt-2 space-y-1">
                  <div className="h-2 rounded bg-white/[0.06]" />
                  <div className="h-2 w-[80%] rounded bg-white/[0.06]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Responsive and Cross-Platform
          </h2>
          <p className="mt-5 text-muted">
            Every DEV.ECOM template is stress-tested across breakpoints so your brand feels intentional on any surface.
          </p>
          <ul className="mt-10 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] font-bold text-accent">
                  ✓
                </span>
                <span className="text-muted">{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#community"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
