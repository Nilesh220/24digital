import { NextResponse } from 'next/server';

/**
 * Contact form endpoint.
 * Logs inquiries and optionally forwards to a webhook if CONTACT_WEBHOOK_URL is configured.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body?.name || !body?.email) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    console.log('[contact:inquiry]', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      needs: body.needs,
      message: body.message,
      submittedAt: new Date().toISOString(),
    });

    // Optional webhook forwarding (Slack, Discord, Zapier, Make, CRM)
    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New 24digital inquiry from *${body.name}* (${body.email})\nPhone: ${body.phone || 'N/A'}\nNeeds: ${(body.needs || []).join(', ') || 'General'}\nDetails: ${body.message || 'None provided'}`,
          ...body,
        }),
      }).catch((err) => console.error('[contact:webhook_error]', err));
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact:error]', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
