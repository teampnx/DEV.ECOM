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

  useEffect(() => {
    void (async () => {
      const res = await fetch('/api/admin/templates');
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? 'Failed to load');
        return;
      }
      setRows(data.templates ?? []);
    })();
  }, []);

  return (
    <div className="min-h-dvh bg-bg px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Templates CMS</h1>
          <Link
            href="/admin/templates/new"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black hover:bg-accent/90"
          >
            Add template
          </Link>
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Manage storefront templates. Changes sync to the Astro site via Supabase (no redeploy required for dynamic
          routes).
        </p>

        {err && <p className="mt-6 text-sm text-red-400">{err}</p>}

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
