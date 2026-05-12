import type { TemplateFeatureBlock, TemplateRecord } from '@/types/template';

/** Normalize Supabase JSON fields into typed arrays */
export function mapTemplateRow(row: Record<string, unknown>): TemplateRecord {
  const gallery = row.gallery_images;
  const gallery_images = Array.isArray(gallery)
    ? (gallery as string[])
    : typeof gallery === 'string'
      ? safeJsonParse<string[]>(gallery, [])
      : [];

  const feat = row.features;
  let features: TemplateRecord['features'];
  if (Array.isArray(feat)) {
    if (feat.length === 0) features = [];
    else if (typeof feat[0] === 'string') features = feat as string[];
    else features = feat as TemplateFeatureBlock[];
  } else if (typeof feat === 'string') {
    const parsed = safeJsonParse<unknown>(feat, []);
    features = Array.isArray(parsed)
      ? parsed.length && typeof parsed[0] === 'string'
        ? (parsed as string[])
        : (parsed as TemplateFeatureBlock[])
      : [];
  } else {
    features = [];
  }

  const tech = row.tech_stack;
  const tech_stack = Array.isArray(tech)
    ? (tech as string[])
    : typeof tech === 'string'
      ? safeJsonParse<string[]>(tech, [])
      : [];

  const pages = row.included_pages;
  const included_pages = Array.isArray(pages)
    ? (pages as string[])
    : typeof pages === 'string'
      ? safeJsonParse<string[]>(pages, [])
      : [];

  const plats = row.platforms;
  const platforms = Array.isArray(plats)
    ? (plats as string[])
    : typeof plats === 'string'
      ? safeJsonParse<string[]>(plats, ['Shopify'])
      : ['Shopify'];

  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title ?? ''),
    short_description: String(row.short_description ?? ''),
    full_description: String(row.full_description ?? ''),
    category: String(row.category ?? 'Storefront'),
    platforms: platforms.length ? platforms : ['Shopify'],
    price: Number(row.price ?? 0),
    sale_price: row.sale_price != null ? Number(row.sale_price) : null,
    featured_image: row.featured_image != null ? String(row.featured_image) : null,
    gallery_images,
    live_demo_url: row.live_demo_url != null ? String(row.live_demo_url) : null,
    preview_video_url: row.preview_video_url != null ? String(row.preview_video_url) : null,
    features,
    tech_stack,
    included_pages,
    seo_score: row.seo_score != null ? Number(row.seo_score) : null,
    speed_score: row.speed_score != null ? Number(row.speed_score) : null,
    mobile_score: row.mobile_score != null ? Number(row.mobile_score) : null,
    conversion_score: row.conversion_score != null ? Number(row.conversion_score) : null,
    rating: row.rating != null ? Number(row.rating) : null,
    review_count: row.review_count != null ? Number(row.review_count) : null,
    is_featured: Boolean(row.is_featured),
    published: Boolean(row.published ?? true),
    created_at: String(row.created_at ?? ''),
    updated_at: String(row.updated_at ?? ''),
  };
}

function safeJsonParse<T>(s: string, fallback: T): T {
  try {
    return JSON.parse(s) as T;
  } catch {
    return fallback;
  }
}
