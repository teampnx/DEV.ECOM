import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const sb = getSupabaseAdmin();
    const { data, error } = await sb.from('templates').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json({ templates: data ?? [] });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Failed to load templates';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = (await req.json()) as Record<string, unknown>;
    const sb = getSupabaseAdmin();

    const insert = {
      slug: String(body.slug ?? '').trim(),
      title: String(body.title ?? ''),
      short_description: String(body.short_description ?? ''),
      full_description: String(body.full_description ?? ''),
      category: String(body.category ?? 'Storefront'),
      platforms: body.platforms ?? ['Shopify'],
      price: Number(body.price ?? 0),
      sale_price: body.sale_price != null && body.sale_price !== '' ? Number(body.sale_price) : null,
      featured_image: body.featured_image ?? null,
      gallery_images: body.gallery_images ?? [],
      live_demo_url: body.live_demo_url ?? null,
      preview_video_url: body.preview_video_url ?? null,
      features: body.features ?? [],
      tech_stack: body.tech_stack ?? [],
      included_pages: body.included_pages ?? [],
      seo_score: body.seo_score != null ? Number(body.seo_score) : 99,
      speed_score: body.speed_score != null ? Number(body.speed_score) : 98,
      mobile_score: body.mobile_score != null ? Number(body.mobile_score) : 99,
      conversion_score: body.conversion_score != null ? Number(body.conversion_score) : 97,
      rating: body.rating != null ? Number(body.rating) : 4.9,
      review_count: body.review_count != null ? Number(body.review_count) : 0,
      is_featured: Boolean(body.is_featured),
      published: body.published !== false,
    };

    if (!insert.slug) {
      return NextResponse.json({ error: 'slug required' }, { status: 400 });
    }

    const { data, error } = await sb.from('templates').insert(insert).select('*').single();
    if (error) throw error;
    return NextResponse.json({ template: data });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Create failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
