import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getSupabaseAdminOrNull, isSupabaseAdminConfigured } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json(
      { error: 'Supabase not configured', code: 'MISSING_SUPABASE' },
      { status: 503 },
    );
  }

  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const id = params.id;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  try {
    const sb = getSupabaseAdminOrNull()!;
    const { data, error } = await sb.from('templates').select('*').eq('id', id).maybeSingle();
    if (error) throw error;
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ template: data });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Load failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ error: 'Supabase not configured', code: 'MISSING_SUPABASE' }, { status: 503 });
  }

  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const id = params.id;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  try {
    const body = (await req.json()) as Record<string, unknown>;
    const sb = getSupabaseAdminOrNull()!;

    const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
    const keys = [
      'slug',
      'title',
      'short_description',
      'full_description',
      'category',
      'platforms',
      'price',
      'sale_price',
      'featured_image',
      'gallery_images',
      'live_demo_url',
      'preview_video_url',
      'features',
      'tech_stack',
      'included_pages',
      'seo_score',
      'speed_score',
      'mobile_score',
      'conversion_score',
      'rating',
      'review_count',
      'is_featured',
      'published',
    ] as const;

    for (const k of keys) {
      if (k in body) patch[k] = body[k];
    }

    const { data, error } = await sb.from('templates').update(patch).eq('id', id).select('*').single();
    if (error) throw error;
    return NextResponse.json({ template: data });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Update failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ error: 'Supabase not configured', code: 'MISSING_SUPABASE' }, { status: 503 });
  }

  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const id = params.id;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  try {
    const sb = getSupabaseAdminOrNull()!;
    const { error } = await sb.from('templates').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Delete failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
