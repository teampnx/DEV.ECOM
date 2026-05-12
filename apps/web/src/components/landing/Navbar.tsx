'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/templates', label: 'Templates' },
  { href: '/#faq', label: 'Blog' },
  { href: '/#demo', label: 'Docs' },
];

function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a5 5 0 0 0-5 5v2.1L5.5 13v1h13v-1L17 10.1V8a5 5 0 0 0-5-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 18a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 19c1.2-2.5 3.6-4 6-4s4.8 1.5 6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function linkIsActive(pathname: string, hash: string, href: string): boolean {
  if (href === '/' || href === '') {
    return pathname === '/' || pathname === '';
  }
  if (href === '/templates') {
    return pathname === '/templates' || pathname.startsWith('/templates/');
  }
  if (href.includes('#')) {
    const parts = href.split('#');
    const expectedHash = parts.length > 1 ? `#${parts[1]}` : '';
    return pathname === '/' && hash === expectedHash;
  }
  return false;
}

export function Navbar({ dashboardUrl = '/dashboard' }: { dashboardUrl?: string }) {
  const [{ pathname, hash }, setLoc] = useState({ pathname: '', hash: '' });

  useEffect(() => {
    setLoc({
      pathname: window.location.pathname,
      hash: window.location.hash,
    });
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-bg/55 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.2em] text-white"
        >
          DEV<span className="mx-0.5 text-accent">.</span>ECOM
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {links.map((l) => {
            const active = linkIsActive(pathname, hash, l.href);
            return (
              <a
                key={l.label}
                href={l.href}
                className={
                  active
                    ? 'text-sm font-semibold text-white'
                    : 'text-sm font-medium text-muted transition-colors hover:text-white'
                }
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-muted transition-colors hover:border-white/[0.14] hover:text-white"
            aria-label="Notifications"
          >
            <IconBell />
          </button>
          <a
            href={dashboardUrl}
            className="inline-flex rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-muted transition-colors hover:border-white/[0.14] hover:text-white"
            aria-label="Account"
          >
            <IconUser />
          </a>
          <a
            href={dashboardUrl}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Login
          </a>
        </div>
      </div>
    </motion.header>
  );
}
