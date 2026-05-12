import { marketplaceTemplates, type MarketplaceTemplate } from '@/data/templates';
import type { TemplateFeatureBlock, TemplateRecord } from '@/types/template';

const DEFAULT_FEATURES: TemplateFeatureBlock[] = [
  { title: 'SEO optimized', description: 'Structured data, meta templates, and Core Web Vitals tuned sections.' },
  { title: 'High conversion design', description: 'Above-the-fold merchandising, trust bands, and urgency slots.' },
  { title: 'Mobile responsive', description: 'Touch-first layouts across breakpoints with adaptive imagery.' },
  { title: 'Fast checkout', description: 'Shopify Checkout aligned flows with drawer cart patterns.' },
  { title: 'Premium animations', description: 'Subtle motion via CSS + section-level choreography hooks.' },
];

function fakeId(slug: string): string {
  return `fb-${slug}`;
}

export function marketplaceItemToRecord(m: MarketplaceTemplate): TemplateRecord {
  const price = m.priceValue;
  const platforms = m.platforms.map((p) => (p === 'Shopify Plus' ? 'Shopify Plus' : 'Shopify'));

  return {
    id: fakeId(m.slug),
    slug: m.slug,
    title: m.name,
    short_description: m.description,
    full_description: `${m.description}\n\nShip with opinionated sections, JSON templates, and developer-friendly Liquid snippets. Includes global theme settings, reusable blocks, and documentation for merchant handoff.`,
    category: m.marketplaceCategory,
    platforms,
    price,
    sale_price: null,
    featured_image: m.image,
    gallery_images: [m.image],
    live_demo_url: m.demoHref ?? '/#demo',
    preview_video_url: '',
    features: DEFAULT_FEATURES,
    tech_stack: ['Shopify OS 2.0', 'Liquid', 'JSON Templates', 'App blocks'],
    included_pages: ['Home', 'Product', 'Collection', 'Cart', 'Blog', 'About'],
    seo_score: 99,
    speed_score: 98,
    mobile_score: 99,
    conversion_score: 97,
    rating: 4.9,
    review_count: 128,
    is_featured: Boolean(m.pro),
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

export function getFallbackTemplateRecord(slug: string): TemplateRecord | null {
  const m = marketplaceTemplates.find((t) => t.slug === slug);
  if (!m) return null;
  return marketplaceItemToRecord(m);
}

export function getFallbackRelated(currentSlug: string, category: string, limit = 3): TemplateRecord[] {
  return marketplaceTemplates
    .filter((t) => t.slug !== currentSlug && t.marketplaceCategory === category)
    .slice(0, limit)
    .map(marketplaceItemToRecord);
}

export function getFallbackRelatedAny(currentSlug: string, limit = 3): TemplateRecord[] {
  return marketplaceTemplates.filter((t) => t.slug !== currentSlug).slice(0, limit).map(marketplaceItemToRecord);
}
