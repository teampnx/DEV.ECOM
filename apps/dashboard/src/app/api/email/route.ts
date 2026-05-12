import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Resend not configured' }, { status: 501 });
  }

  const body = (await req.json()) as { to?: string; subject?: string; html?: string };
  if (!body.to || !body.subject || !body.html) {
    return NextResponse.json({ error: 'Missing to, subject, or html' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? 'DEV.ECOM <onboarding@resend.dev>';

  const { data, error } = await resend.emails.send({
    from,
    to: body.to,
    subject: body.subject,
    html: body.html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data?.id });
}
