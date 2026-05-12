import { getSupabaseServer } from '@/lib/supabase/server';
import { mapTemplateRow } from '@/lib/templates/map-row';
import type { TemplateRecord } from '@/types/template';

export async function getTemplateBySlug(slug: string): Promise<TemplateRecord | null> {
  const sb = getSupabaseServer();
  if (!sb) return null;
  const { data, error } = await sb
    .from('templates')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error || !data) return null;
  return mapTemplateRow(data as Record<string, unknown>);
}

export async function listTemplatesPublished(): Promise<TemplateRecord[]> {
  const sb = getSupabaseServer();
  if (!sb) return [];
  const { data, error } = await sb
    .from('templates')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  if (error || !data?.length) return [];
  return data.map((r) => mapTemplateRow(r as Record<string, unknown>));
}

export async function getRelatedTemplates(category: string, excludeId: string, limit = 3): Promise<TemplateRecord[]> {
  const sb = getSupabaseServer();
  if (!sb) return [];
  const { data, error } = await sb
    .from('templates')
    .select('*')
    .eq('published', true)
    .eq('category', category)
    .neq('id', excludeId)
    .limit(limit);
  if (error || !data?.length) return [];
  return data.map((r) => mapTemplateRow(r as Record<string, unknown>));
}

/** Broader fallback if same category has few matches */
export async function getRelatedTemplatesLoose(
  category: string,
  excludeId: string,
  limit = 3,
): Promise<TemplateRecord[]> {
  let rows = await getRelatedTemplates(category, excludeId, limit);
  if (rows.length >= limit) return rows;
  const sb = getSupabaseServer();
  if (!sb) return rows;
  const { data } = await sb
    .from('templates')
    .select('*')
    .eq('published', true)
    .neq('id', excludeId)
    .limit(limit + 5);
  if (!data?.length) return rows;
  const mapped = data.map((r) => mapTemplateRow(r as Record<string, unknown>));
  const merged = [...rows];
  for (const m of mapped) {
    if (merged.length >= limit) break;
    if (!merged.some((x) => x.id === m.id)) merged.push(m);
  }
  return merged.slice(0, limit);
}
