import { NextResponse } from 'next/server';

const WHATSAPP_RECIPIENT = '918699260386';

// In-memory rate limiting map: ip -> { count, timestamp }
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

/**
 * Contact form endpoint with Resend email delivery, honeypot shielding,
 * rate limiting, and WhatsApp click-to-chat forwarding.
 */
export async function POST(req: Request) {
  try {
    // 1. Rate limiting by IP
    const forwardedFor = req.headers.get('x-forwarded-for') || '';
    const clientIp = forwardedFor.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();

    if (clientIp !== 'unknown') {
      const record = rateLimitMap.get(clientIp);
      if (record) {
        if (now - record.firstRequest < RATE_LIMIT_WINDOW_MS) {
          if (record.count >= MAX_REQUESTS_PER_WINDOW) {
            return NextResponse.json(
              { ok: false, error: 'Too many submissions. Please contact us directly on WhatsApp.' },
              { status: 429 }
            );
          }
          record.count += 1;
        } else {
          rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
        }
      } else {
        rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
      }
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ ok: false, error: 'Invalid request payload.' }, { status: 400 });
    }

    // 2. Anti-spam Honeypot Check
    // If hidden honeypot field is filled, silently pretend success to discard bot spam
    if (body.b_company_hp) {
      console.warn('[contact:honeypot_triggered]', { ip: clientIp });
      return NextResponse.json({ ok: true });
    }

    // 3. Server-side validation
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const needs = Array.isArray(body.needs) ? body.needs : [];
    const message = String(body.message || '').trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid name.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const formattedNeeds = needs.length > 0 ? needs.join(', ') : 'General Inquiry';
    const submittedAt = new Date().toISOString();

    console.log('[contact:inquiry]', {
      name,
      email,
      phone,
      needs,
      message,
      ip: clientIp,
      submittedAt,
    });

    const waText =
      `*New Project Enquiry — 24digital*\n\n` +
      `*Name:* ${name}\n` +
      `*Work Email:* ${email}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Services Needed:* ${formattedNeeds}\n` +
      `*Details:* ${message || 'None provided'}\n\n` +
      `Sent via 24digital.store`;

    const waUrl = `https://wa.me/${WHATSAPP_RECIPIENT}?text=${encodeURIComponent(waText)}`;

    // 4. Send Email via Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      const fromEmail = process.env.RESEND_FROM_EMAIL || '24digital Inquiries <onboarding@resend.dev>';
      const toEmail = process.env.RESEND_TO_EMAIL || 'support@24digital.store';

      const htmlBody = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #121212; padding: 20px;">
          <h2 style="color: #2733FF; margin-bottom: 8px;">New 24digital Website Enquiry</h2>
          <p style="font-size: 14px; color: #666; margin-top: 0;">Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Work Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Phone / WhatsApp:</td><td>${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</td></tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Services Needed:</td>
              <td>
                ${needs.length > 0 ? needs.map((n: string) => `<span style="display: inline-block; background: #e8eaff; color: #2733FF; padding: 3px 10px; border-radius: 999px; font-size: 13px; margin: 2px 4px 2px 0;">${n}</span>`).join('') : 'General Consultation'}
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; background: #f9f9f9; padding: 16px; border-radius: 8px; border-left: 4px solid #2733FF;">
            <p style="margin: 0; font-weight: 600; font-size: 14px; color: #444;">Project Brief / Message:</p>
            <p style="margin: 8px 0 0; font-size: 15px; white-space: pre-wrap; line-height: 1.5;">${message || 'No additional message provided.'}</p>
          </div>
          <p style="margin-top: 28px; font-size: 12px; color: #999;">
            Submitted from 24digital.store | Client IP: ${clientIp}
          </p>
        </div>
      `;

      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: email,
            subject: `New Lead: ${name} — ${formattedNeeds}`,
            html: htmlBody,
            text: `New 24digital Enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nServices: ${formattedNeeds}\nMessage:\n${message || 'N/A'}`,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.json().catch(() => ({}));
          console.error('[contact:resend_error]', errData);
        } else {
          console.log('[contact:resend_success]', { to: toEmail });
        }
      } catch (emailErr) {
        console.error('[contact:resend_fetch_failed]', emailErr);
      }
    }

    // 5. Optional Webhook dispatch (Slack/Discord/Make/Zapier/CRM)
    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientWhatsApp: WHATSAPP_RECIPIENT,
          text: waText,
          data: { name, email, phone, needs, message, submittedAt, clientIp },
        }),
      }).catch((err) => console.error('[contact:webhook_error]', err));
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
