import { NextResponse } from 'next/server';

const WHATSAPP_RECIPIENT = '918699260386';

/**
 * Contact form endpoint.
 * Logs inquiries, returns a WhatsApp click-to-chat URL for 8699260386,
 * and optionally dispatches server notifications via webhook or CallMeBot.
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

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const needs = Array.isArray(body.needs) ? body.needs : [];
    const message = String(body.message || '').trim();
    const formattedNeeds = needs.length > 0 ? needs.join(', ') : 'General Enquiry';
    const submittedAt = new Date().toISOString();

    console.log('[contact:inquiry]', {
      name,
      email,
      phone,
      needs,
      message,
      targetWhatsApp: WHATSAPP_RECIPIENT,
      submittedAt,
    });

    const waText =
      `*New Project Enquiry — 24digital*\n\n` +
      `*Name:* ${name}\n` +
      `*Work Email:* ${email}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Services Needed:* ${formattedNeeds}\n` +
      `*Details:* ${message || 'None provided'}\n\n` +
      `Sent via 24digital.in`;

    const waUrl = `https://wa.me/${WHATSAPP_RECIPIENT}?text=${encodeURIComponent(waText)}`;

    // 1. Optional Webhook (Slack, Discord, Zapier, Make, CRM, or WhatsApp Gateway)
    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientWhatsApp: WHATSAPP_RECIPIENT,
          text: waText,
          data: { name, email, phone, needs, message, submittedAt },
        }),
      }).catch((err) => console.error('[contact:webhook_error]', err));
    }

    // 2. Optional direct WhatsApp dispatch via CallMeBot (if CALLMEBOT_API_KEY is set)
    if (process.env.CALLMEBOT_API_KEY) {
      const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_RECIPIENT}&text=${encodeURIComponent(waText)}&apikey=${process.env.CALLMEBOT_API_KEY}`;
      await fetch(callMeBotUrl).catch((err) => console.error('[contact:callmebot_error]', err));
    }

    return NextResponse.json({
      ok: true,
      recipient: WHATSAPP_RECIPIENT,
      waUrl,
    });
  } catch (error) {
    console.error('[contact:error]', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
