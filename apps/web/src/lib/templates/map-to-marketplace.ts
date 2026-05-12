import type { MarketplaceCategory, MarketplaceTemplate, TemplatePlatform } from '@/data/templates';
import type { TemplateRecord } from '@/types/template';

function platformsFromRecord(t: TemplateRecord): TemplatePlatform[] {
  const out: TemplatePlatform[] = [];
  const seen = new Set<string>();
  for (const p of t.platforms.length ? t.platforms : ['Shopify']) {
    const plat: TemplatePlatform = p.includes('Plus') ? 'Shopify Plus' : 'Shopify';
    if (!seen.has(plat)) {
      seen.add(plat);
      out.push(plat);
    }
  }
  return out.length ? out : ['Shopify'];
}

export function templateRecordToMarketplace(t: TemplateRecord): MarketplaceTemplate {
  const platforms = platformsFromRecord(t);

  return {
    slug: t.slug,
    name: t.title,
    price: `$${Math.round(t.sale_price ?? t.price)}`,
    priceValue: Number(t.sale_price ?? t.price),
    platforms,
    pro: t.is_featured,
    marketplaceCategory: (t.category as MarketplaceCategory) || 'Storefront',
    description: t.short_description,
    image: t.featured_image ?? '',
    demoHref: t.live_demo_url ?? '/#demo',
  };
}
