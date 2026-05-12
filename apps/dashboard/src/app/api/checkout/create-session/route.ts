import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Sign in to purchase' }, { status: 401 });
  }


  const key = process.env.STRIPE_SECRET_KEY;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:4321';

  if (!key) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 501 });
  }

  const body = (await req.json()) as { slug?: string };
  const slug = body.slug?.trim();
  if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 });

  let title = slug;
  let amount = 4900;
  if (url && serviceKey) {
    const sb = createClient(url, serviceKey);
    const { data } = await sb.from('templates').select('title, price, sale_price').eq('slug', slug).maybeSingle();
    if (data) {
      title = String(data.title);
      const price = Number(data.sale_price ?? data.price ?? 49);
      amount = Math.round(price * 100);
    }
  }

  const stripe = new Stripe(key, { typescript: true });

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: undefined,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: amount,
          product_data: {
            name: `DEV.ECOM — ${title}`,
            metadata: { slug },
          },
        },
      },
    ],
    metadata: { clerk_user_id: userId, slug },
    success_url: `${siteUrl}/templates/${slug}?paid=1`,
    cancel_url: `${siteUrl}/templates/${slug}`,
  });

  return NextResponse.json({ url: session.url });
}
