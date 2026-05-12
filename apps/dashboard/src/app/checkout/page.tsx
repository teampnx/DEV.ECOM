'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function CheckoutInner() {
  const sp = useSearchParams();
  const slug = sp.get('slug') ?? '';
  const [status, setStatus] = useState<string | null>(null);

  async function pay() {
    setStatus('Redirecting…');
    const res = await fetch('/api/checkout/create-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    });
    const data = (await res.json()) as { url?: string; error?: string };
    if (!res.ok) {
      setStatus(data.error ?? 'Checkout failed');
      return;
    }
    if (data.url) window.location.href = data.url;
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-white">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <p className="mt-2 text-sm text-zinc-400">Template: {slug || '—'}</p>
      <button
        type="button"
        onClick={pay}
        disabled={!slug}
        className="mt-8 w-full rounded-xl bg-accent py-3 text-sm font-semibold text-black disabled:opacity-40"
      >
        Pay with Stripe
      </button>
      {status && <p className="mt-4 text-sm text-zinc-400">{status}</p>}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<p className="p-8 text-white">Loading…</p>}>
      <CheckoutInner />
    </Suspense>
  );
}
