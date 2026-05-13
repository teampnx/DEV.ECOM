import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export function isSupabaseAdminConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

/** Returns null if env vars are missing — APIs can respond without throwing. */
export function getSupabaseAdminOrNull(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Throws if not configured — use only when you know Supabase is set. */
export function getSupabaseAdmin(): SupabaseClient {
  const client = getSupabaseAdminOrNull();
  if (!client) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required for this operation.');
  }
  return client;
}
