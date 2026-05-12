'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormState = Record<string, string | boolean>;

const initial: FormState = {
  slug: '',
  title: '',
  short_description: '',
  full_description: '',
  category: 'Storefront',
  platforms: '["Shopify"]',
  price: '49',
  sale_price: '',
  featured_image: '',
  gallery_images: '[]',
  live_demo_url: '/#demo',
  preview_video_url: '',
  features: JSON.stringify(
    [
      { title: 'SEO optimized', description: 'Structured data and meta templates.' },
      { title: 'Mobile responsive', description: 'Touch-first layouts.' },
    ],
    null,
    2,
  ),
  tech_stack: JSON.stringify(['Shopify OS 2.0', 'Liquid', 'JSON Templates']),
  included_pages: JSON.stringify(['Home', 'Product', 'Collection', 'Cart']),
  seo_score: '99',
  speed_score: '98',
  mobile_score: '99',
  conversion_score: '97',
  rating: '4.9',
  review_count: '120',
  is_featured: false,
  published: true,
};

export default function NewTemplatePage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [err, setErr] = useState<string | null>(null);

  function set(k: string, v: string | boolean) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    try {
      const payload = {
        slug: String(form.slug).trim(),
        title: form.title,
        short_description: form.short_description,
        full_description: form.full_description,
        category: form.category,
        platforms: JSON.parse(String(form.platforms || '["Shopify"]')),
        price: Number(form.price || 0),
        sale_price: form.sale_price === '' ? null : Number(form.sale_price),
        featured_image: form.featured_image || null,
        gallery_images: JSON.parse(String(form.gallery_images || '[]')),
        live_demo_url: form.live_demo_url || null,
        preview_video_url: form.preview_video_url || null,
        features: JSON.parse(String(form.features || '[]')),
        tech_stack: JSON.parse(String(form.tech_stack || '[]')),
        included_pages: JSON.parse(String(form.included_pages || '[]')),
        seo_score: Number(form.seo_score),
        speed_score: Number(form.speed_score),
        mobile_score: Number(form.mobile_score),
        conversion_score: Number(form.conversion_score),
        rating: Number(form.rating),
        review_count: Number(form.review_count),
        is_featured: Boolean(form.is_featured),
        published: Boolean(form.published),
      };

      const res = await fetch('/api/admin/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Save failed');
      router.push('/admin/templates');
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Invalid JSON in array fields');
    }
  }

  return (
    <div className="min-h-dvh bg-bg px-4 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold">New template</h1>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {(
            [
              ['slug', 'Slug (URL)'],
              ['title', 'Title'],
              ['category', 'Category'],
              ['price', 'Price (USD)'],
              ['sale_price', 'Sale price (optional)'],
              ['featured_image', 'Featured image URL'],
              ['live_demo_url', 'Live demo URL'],
              ['preview_video_url', 'YouTube / video URL'],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="block">
              <span className="text-xs text-zinc-400">{label}</span>
              <input
                className="mt-1 w-full rounded-lg border border-white/[0.1] bg-black/40 px-3 py-2 text-sm"
                value={String(form[key] ?? '')}
                onChange={(e) => set(key, e.target.value)}
              />
            </label>
          ))}

          {(
            [
              ['short_description', 'Short description', 2],
              ['full_description', 'Full description', 8],
              ['gallery_images', 'Gallery image URLs (JSON array)', 3],
              ['features', 'Features (JSON: [{title, description}])', 8],
              ['tech_stack', 'Tech stack (JSON array of strings)', 3],
              ['included_pages', 'Included pages (JSON array)', 3],
              ['platforms', 'Platforms (JSON e.g. ["Shopify","Shopify Plus"])', 1],
            ] as const
          ).map(([key, label, rows]) => (
            <label key={key} className="block">
              <span className="text-xs text-zinc-400">{label}</span>
              <textarea
                className="mt-1 w-full rounded-lg border border-white/[0.1] bg-black/40 px-3 py-2 font-mono text-sm"
                rows={rows}
                value={String(form[key] ?? '')}
                onChange={(e) => set(key, e.target.value)}
              />
            </label>
          ))}

          {(
            [
              ['seo_score', 'SEO score'],
              ['speed_score', 'Speed score'],
              ['mobile_score', 'Mobile score'],
              ['conversion_score', 'Conversion score'],
              ['rating', 'Rating'],
              ['review_count', 'Review count'],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="block">
              <span className="text-xs text-zinc-400">{label}</span>
              <input
                type="number"
                className="mt-1 w-full rounded-lg border border-white/[0.1] bg-black/40 px-3 py-2 text-sm"
                value={String(form[key] ?? '')}
                onChange={(e) => set(key, e.target.value)}
              />
            </label>
          ))}

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(form.is_featured)}
              onChange={(e) => set('is_featured', e.target.checked)}
            />
            Featured on homepage
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(form.published)}
              onChange={(e) => set('published', e.target.checked)}
            />
            Published
          </label>

          {err && <p className="text-sm text-red-400">{err}</p>}
          <button type="submit" className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black">
            Save template
          </button>
        </form>
      </div>
    </div>
  );
}
