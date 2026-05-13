'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Row = {
  id: string;
  slug: string;
  title: string;
  price: number;
  published: boolean;
  created_at: string;
};

export default function AdminTemplatesPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [supabaseConfigured, setSupabaseConfigured] = useState(true);

  useEffect(() => {
    void (async () => {
      const res = await fetch('/api/admin/templates');
      const data = await res.json();
      if (data.supabaseConfigured === false) {
        setSupabaseConfigured(false);
        setRows([]);
        setErr(null);
        return;
      }
      if (!res.ok) {
        setErr(data.error ?? 'Failed to load');
        setRows([]);
        return;
      }
      setSupabaseConfigured(true);
      setRows(data.templates ?? []);
    })();
  }, []);

  return (
    <div className="min-h-dvh bg-bg px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Templates CMS</h1>
          {supabaseConfigured ? (
            <Link
              href="/admin/templates/new"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black hover:bg-accent/90"
            >
              Add template
            </Link>
          ) : (
            <span className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-zinc-500">
              Add template (needs Supabase)
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Manage storefront templates. When Supabase is connected, changes sync to the Astro site automatically.
        </p>

        {!supabaseConfigured && (
          <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-zinc-200">
            <p className="font-semibold text-accent">Supabase is not configured yet</p>
            <p className="mt-2 leading-relaxed">
              The storefront still works using built-in demo data. To enable this CMS, add{' '}
              <code className="rounded bg-black/40 px-1">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
              <code className="rounded bg-black/40 px-1">SUPABASE_SERVICE_ROLE_KEY</code> (and run the SQL migration).
            </p>
            <p className="mt-2">
              Full instructions: open <code className="rounded bg-black/40 px-1">docs/ENV-WHEN-READY.md</code> in this
              project.
            </p>
          </div>
        )}

        {supabaseConfigured && err && <p className="mt-6 text-sm text-red-400">{err}</p>}

        <div className="mt-10 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-white/[0.08] text-xs uppercase text-zinc-500">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Published</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {rows.length === 0 && supabaseConfigured && !err && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-zinc-500">
                    No templates yet. Add Clerk + sign in, then create one with &quot;Add template&quot;.
                  </td>
                </tr>
              )}
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="px-4 py-3 font-medium">{r.title}</td>
                  <td className="px-4 py-3 text-zinc-400">{r.slug}</td>
                  <td className="px-4 py-3">${r.price}</td>
                  <td className="px-4 py-3">{r.published ? 'yes' : 'no'}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/templates/${r.id}`} className="text-accent hover:underline">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
