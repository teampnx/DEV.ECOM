'use client';

import { Navbar } from '@/components/landing/Navbar';
import { GridBackdrop } from '@/components/landing/GridBackdrop';
import { Hero } from '@/components/landing/Hero';
import { TemplatesSection } from '@/components/landing/TemplatesSection';
import { DevelopersSection } from '@/components/landing/DevelopersSection';
import { ComponentHighlights } from '@/components/landing/ComponentHighlights';
import { ResponsiveSection } from '@/components/landing/ResponsiveSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { FooterCommunity } from '@/components/landing/FooterCommunity';

export function Landing({ dashboardUrl }: { dashboardUrl: string }) {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <GridBackdrop className="fixed" />
      {/* subtle particles */}
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
      <main className="relative">
        <Hero />
        <TemplatesSection />
        <DevelopersSection />
        <ComponentHighlights />
        <ResponsiveSection />
        <FAQSection />
        <FooterCommunity dashboardUrl={dashboardUrl} />
      </main>
    </div>
  );
}
