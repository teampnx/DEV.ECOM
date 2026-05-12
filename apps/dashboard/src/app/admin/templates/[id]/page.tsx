'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type FormState = Record<string, string | boolean>;

export default function EditTemplatePage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [form, setForm] = useState<FormState | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const res = await fetch(`/api/admin/templates/${id}`);
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? 'Load failed');
        return;
      }
      const t = data.template as Record<string, unknown>;
      setForm({
        slug: String(t.slug ?? ''),
        title: String(t.title ?? ''),
        short_description: String(t.short_description ?? ''),
        full_description: String(t.full_description ?? ''),
        category: String(t.category ?? ''),
        platforms: JSON.stringify(t.platforms ?? ['Shopify']),
        price: String(t.price ?? '0'),
        sale_price: t.sale_price != null ? String(t.sale_price) : '',
        featured_image: String(t.featured_image ?? ''),
        gallery_images: JSON.stringify(t.gallery_images ?? [], null, 2),
        live_demo_url: String(t.live_demo_url ?? ''),
        preview_video_url: String(t.preview_video_url ?? ''),
        features: JSON.stringify(t.features ?? [], null, 2),
        tech_stack: JSON.stringify(t.tech_stack ?? [], null, 2),
        included_pages: JSON.stringify(t.included_pages ?? [], null, 2),
        seo_score: String(t.seo_score ?? '99'),
        speed_score: String(t.speed_score ?? '98'),
        mobile_score: String(t.mobile_score ?? '99'),
        conversion_score: String(t.conversion_score ?? '97'),
        rating: String(t.rating ?? '4.9'),
        review_count: String(t.review_count ?? '0'),
        is_featured: Boolean(t.is_featured),
        published: Boolean(t.published),
      });
    })();
  }, [id]);

  function set(k: string, v: string | boolean) {
    setForm((prev) => (prev ? { ...prev, [k]: v } : prev));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
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

      const res = await fetch(`/api/admin/templates/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Save failed');
      router.push('/admin/templates');
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Invalid JSON');
    }
  }

  async function remove() {
    if (!confirm('Delete this template?')) return;
    const res = await fetch(`/api/admin/templates/${id}`, { method: 'DELETE' });
    if (res.ok) router.push('/admin/templates');
  }

  if (!form) {
    return <div className="p-8 text-white">{err ?? 'Loading…'}</div>;
  }

  return (
    <div className="min-h-dvh bg-bg px-4 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Edit template</h1>
          <Link href="/admin/templates" className="text-sm text-accent hover:underline">
            ← Back
          </Link>
        </div>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {(
            [
              ['slug', 'Slug'],
              ['title', 'Title'],
              ['category', 'Category'],
              ['price', 'Price'],
              ['sale_price', 'Sale price'],
              ['featured_image', 'Featured image URL'],
              ['live_demo_url', 'Live demo'],
              ['preview_video_url', 'Video URL'],
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
              ['gallery_images', 'Gallery JSON', 3],
              ['features', 'Features JSON', 8],
              ['tech_stack', 'Tech stack JSON', 3],
              ['included_pages', 'Pages JSON', 3],
              ['platforms', 'Platforms JSON', 1],
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
              ['seo_score', 'SEO'],
              ['speed_score', 'Speed'],
              ['mobile_score', 'Mobile'],
              ['conversion_score', 'CRO'],
              ['rating', 'Rating'],
              ['review_count', 'Reviews'],
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
            Featured
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
          <div className="flex flex-wrap gap-4">
            <button type="submit" className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black">
              Save changes
            </button>
            <button type="button" onClick={remove} className="rounded-full border border-red-500/40 px-8 py-3 text-sm text-red-400">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
