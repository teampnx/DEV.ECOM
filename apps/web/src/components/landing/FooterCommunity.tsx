'use client';

import { motion } from 'framer-motion';

const social = [
  { label: 'X', href: 'https://twitter.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Discord', href: 'https://discord.com' },
];

export function FooterCommunity({ dashboardUrl = '/dashboard' }: { dashboardUrl?: string }) {
  return (
    <footer id="community" className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#030303] py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(124,255,79,0.16) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '120px 120px, 24px 24px',
          backgroundPosition: 'center top',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,255,79,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(124,255,79,0.06),transparent_40%)]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <span className="font-display text-[clamp(4rem,18vw,14rem)] font-black uppercase leading-none text-white/[0.04]">
          DEV.ECOM
        </span>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border border-white/[0.08] bg-[#0b0b0b]/90 p-8 shadow-card backdrop-blur-xl"
        >
          <h2 className="text-center font-display text-2xl font-bold tracking-tight">Global merchant community</h2>
          <p className="mt-3 text-center text-sm text-muted">
            Tell us about your storefront goals — we respond within one business day.
          </p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              name="name"
              placeholder="Name"
              className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-muted focus:ring-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-muted focus:ring-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-muted focus:ring-2"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <div className="mt-20 grid gap-10 border-t border-white/[0.06] pt-12 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Product</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href="#templates" className="hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white">
                  Components
                </a>
              </li>
              <li>
                <a href={dashboardUrl} className="hover:text-white">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href="#community" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Legal</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-semibold text-muted transition hover:border-white/[0.14] hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-muted">
          © {new Date().getFullYear()} DEV.ECOM. Built for Shopify merchants.
        </p>
      </div>
    </footer>
  );
}
