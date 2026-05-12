'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function HeroDashboard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(mx, [-120, 120], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(my, [-120, 120], [-8, 8]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const el = document.getElementById('hero-parallax-zone');
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx.set(e.clientX - cx);
      my.set(e.clientY - cy);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [mx, my]);

  const transform = useMotionTemplate`perspective(1200px) rotateX(${ry}deg) rotateY(${rx}deg)`;

  return (
    <motion.div
      id="hero-parallax-zone"
      className="relative w-full max-w-[640px] lg:justify-self-end"
      style={{ transform }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-3 shadow-card"
      >
        <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-accent/15 via-transparent to-purple-500/10 opacity-60 blur-sm" />
        <div className="relative flex gap-3">
          {/* Sidebar */}
          <aside className="hidden w-36 shrink-0 flex-col gap-2 rounded-lg border border-white/[0.06] bg-[#080808] p-2 sm:flex">
            <div className="mb-1 flex items-center gap-2 px-1">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(124,255,79,0.6)]" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Store
              </span>
            </div>
            {['Overview', 'Orders', 'Analytics', 'Downloads'].map((x, i) => (
              <div
                key={x}
                className={`rounded-md px-2 py-1.5 text-[11px] ${i === 0 ? 'bg-white/[0.06] text-white' : 'text-muted'}`}
              >
                {x}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Revenue</p>
                <p className="text-2xl font-semibold tracking-tight text-accent">$284,920</p>
              </div>
              <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent">
                +18.4%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/[0.06] bg-[#0e0e0e] p-2">
                <p className="text-[10px] text-muted">Sessions</p>
                <p className="text-lg font-semibold">48.2k</p>
                <MiniChart tone="green" />
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-[#0e0e0e] p-2">
                <p className="text-[10px] text-muted">Conversion</p>
                <p className="text-lg font-semibold text-accent">4.8%</p>
                <MiniChart tone="muted" />
              </div>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-[#0c0c0c] p-2">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-medium">Recent activity</span>
                <span className="text-[10px] text-accent">Live</span>
              </div>
              <ul className="space-y-2">
                {[
                  'Theme “Nova” deployed to production',
                  'Checkout conversion up 12%',
                  'New order — Aurora Capsule',
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 border-l border-accent/40 pl-2 text-[10px] text-muted"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-dashed border-white/[0.1] bg-black/40 p-2 font-mono text-[9px] leading-relaxed text-muted">
              <span className="text-accent">$</span> shopify theme push
              <br />
              <span className="text-white/70">✓</span> assets compiled ·{' '}
              <span className="text-accent">99%</span> perf score
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MiniChart({ tone }: { tone: 'green' | 'muted' }) {
  const stroke = tone === 'green' ? '#7CFF4F' : 'rgba(156,163,175,0.5)';
  return (
    <svg viewBox="0 0 120 32" className="mt-1 h-8 w-full" aria-hidden>
      <path
        d="M0 24 L20 18 L40 22 L60 10 L80 16 L100 8 L120 12"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
