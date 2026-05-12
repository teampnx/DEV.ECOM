/**
 * FALLBACK catalog when Supabase env vars are not set, or the DB is empty.
 * Primary source of truth: Supabase `templates` table (managed in /admin/templates).
 * When connected, the homepage, marketplace, and detail pages read from the database;
 * this file is only used as a dev/offline fallback.
 */

export type TemplatePlatform = 'Shopify' | 'Shopify Plus';

/** Used for marketplace filters (“All” is UI-only). */
export type MarketplaceCategory = 'Dashboard' | 'Landing' | 'Storefront' | 'Portfolio';

export type MarketplaceTemplate = {
  slug: string;
  name: string;
  /** Shown on cards, e.g. "$89" */
  price: string;
  /** Numeric for sorting */
  priceValue: number;
  /** One or more pills under the preview */
  platforms: TemplatePlatform[];
  /** White PRO pill when true */
  pro?: boolean;
  marketplaceCategory: MarketplaceCategory;
  /** Short blurb shown on marketplace grid (2 lines) */
  description: string;
  image: string;
  /** External or in-app demo target */
  demoHref?: string;
};

export const marketplaceTemplates: MarketplaceTemplate[] = [
  {
    slug: 'nova-commerce',
    name: 'Nova Commerce',
    price: '$89',
    priceValue: 89,
    platforms: ['Shopify'],
    pro: false,
    marketplaceCategory: 'Dashboard',
    description: 'Executive dashboard storefront with KPIs, revenue ribbons, and real-time orders.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'financial-dashboard',
    name: 'Financial Dashboard',
    price: '$79',
    priceValue: 79,
    platforms: ['Shopify Plus'],
    pro: true,
    marketplaceCategory: 'Dashboard',
    description: 'Fintech-ready layout with billing highlights, subscriptions, and trust signals.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'lumen-atelier',
    name: 'Lumen Atelier',
    price: '$64',
    priceValue: 64,
    platforms: ['Shopify'],
    pro: false,
    marketplaceCategory: 'Landing',
    description: 'Editorial commerce landing with looks, sizing guides, and shoppable drops.',
    image: 'https://images.unsplash.com/photo-1441986300917-e647400661af?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'obsidian-haus',
    name: 'Obsidian Haus',
    price: '$99',
    priceValue: 99,
    platforms: ['Shopify Plus'],
    pro: true,
    marketplaceCategory: 'Storefront',
    description: 'Luxury grid with editorial hero, lookbooks, and elevated checkout moments.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'pulse-gadgetry',
    name: 'Pulse Gadgetry',
    price: '$59',
    priceValue: 59,
    platforms: ['Shopify'],
    pro: false,
    marketplaceCategory: 'Storefront',
    description: 'High-spec electronics merchandising with compare tables and spec accordions.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'meridian-saas',
    name: 'Meridian SaaS',
    price: '$74',
    priceValue: 74,
    platforms: ['Shopify', 'Shopify Plus'],
    pro: false,
    marketplaceCategory: 'Landing',
    description: 'B2B-style landing tuned for demos, testimonials, and plan comparison CTAs.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'apex-minimal',
    name: 'Apex Minimal',
    price: '$49',
    priceValue: 49,
    platforms: ['Shopify'],
    pro: false,
    marketplaceCategory: 'Portfolio',
    description: 'Restrained typography, generous whitespace, and story-first PDP layouts.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'velvet-runtime',
    name: 'Velvet Runtime',
    price: '$84',
    priceValue: 84,
    platforms: ['Shopify Plus'],
    pro: true,
    marketplaceCategory: 'Dashboard',
    description: 'Ops-heavy admin-style homepage for brands running flash sales daily.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'nimbus-skincare',
    name: 'Nimbus Skincare',
    price: '$69',
    priceValue: 69,
    platforms: ['Shopify'],
    pro: false,
    marketplaceCategory: 'Landing',
    description: 'Ingredient storytelling, routine builder, and subscription-friendly cart.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'forge-streetwear',
    name: 'Forge Streetwear',
    price: '$54',
    priceValue: 54,
    platforms: ['Shopify'],
    pro: false,
    marketplaceCategory: 'Storefront',
    description: 'Drop calendar, size matrix, and community lookbook feed out of the box.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'quartz-studio',
    name: 'Quartz Studio',
    price: '$92',
    priceValue: 92,
    platforms: ['Shopify Plus'],
    pro: false,
    marketplaceCategory: 'Portfolio',
    description: 'Design-studio portfolio fused with PDPs—ideal for limited-run makers.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    demoHref: '/#demo',
  },
  {
    slug: 'ember-conversion',
    name: 'Ember Conversion',
    price: '$44',
    priceValue: 44,
    platforms: ['Shopify'],
    pro: false,
    marketplaceCategory: 'Landing',
    description: 'CRO-first sections: sticky ATC, social proof bands, urgency timers.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80',
    demoHref: '/#demo',
  },
];

export const MARKETPLACE_CATEGORIES: { id: 'All' | MarketplaceCategory; label: string }[] = [
  { id: 'All', label: 'All' },
  { id: 'Dashboard', label: 'Dashboard' },
  { id: 'Landing', label: 'Landing' },
  { id: 'Storefront', label: 'Storefront' },
  { id: 'Portfolio', label: 'Portfolio' },
];

/** Items per page on /templates — change if you prefer more cards per row set. */
export const MARKETPLACE_PAGE_SIZE = 9;
