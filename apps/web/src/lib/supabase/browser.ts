import { createClient } from '@supabase/supabase-js';

/** Browser client for islands — uses public anon key + RLS. */
export function getSupabaseBrowser() {
  const url = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;
  if (!url || !key) return null;
  return createClient(url, key);
}
