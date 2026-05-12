'use client';

import { motion } from 'framer-motion';
import { HeroDashboard } from '@/components/landing/HeroDashboard';

const avatars = ['https://i.pravatar.cc/80?img=12', 'https://i.pravatar.cc/80?img=33', 'https://i.pravatar.cc/80?img=47', 'https://i.pravatar.cc/80?img=59'];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pb-28 lg:pt-32">
      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
              Next-Gen Shopify Store Templates
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Launch premium Shopify brands faster with professionally designed e-commerce templates.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#templates"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Explore Templates
              </a>
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                View Demo
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 rounded-full border-2 border-bg object-cover"
                    style={{ zIndex: 4 - i }}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">4.9/5 stars</p>
                <p className="text-xs text-muted">Trusted by Shopify merchants worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
