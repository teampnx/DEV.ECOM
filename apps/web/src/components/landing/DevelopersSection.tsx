'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Optimized Performance',
    desc: 'Hydrogen-ready patterns, lazy media, and Lighthouse tuned sections out of the box.',
    metric: '99/100 Score',
    icon: SpeedIcon,
  },
  {
    title: 'Developer Experience',
    desc: 'Liquid snippets, JSON templates, and semantic sections designed for maintainability.',
    metric: '< 0.5s TTFB',
    icon: CodeIcon,
  },
  {
    title: 'Composable Sections',
    desc: 'Swap hero, story, and merchandising blocks without rebuilding your storefront.',
    metric: '40+ Sections',
    icon: LayersIcon,
  },
  {
    title: 'Enterprise Security',
    desc: 'Checkout-safe integrations, CSP-friendly scripts, and audited third-party slots.',
    metric: 'SOC2-ready',
    icon: ShieldIcon,
  },
];

export function DevelopersSection() {
  return (
    <section className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Designed for Developers
          </h2>
          <p className="mt-4 text-muted">
            Opinionated Shopify architecture with escape hatches — ship faster without sacrificing craft.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="flex flex-col rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-card"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                <f.icon />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{f.desc}</p>
              <div className="mt-8 border-t border-white/[0.08] pt-4 text-sm font-semibold text-accent">
                {f.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpeedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 3 5 15h6l-2 6 10-14h-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m8 7-4 5 4 5M16 7l4 5-4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 5 6v6c0 5 4 8 7 9 3-1 7-4 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
