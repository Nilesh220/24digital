'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { needs, site } from '../lib/content';
import { Arrow, Check, WhatsApp } from './ui/Icons';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact({ initialService }: { initialService?: string }) {
  const [picks, setPicks] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [waLink, setWaLink] = useState<string>('');
  const [routedPhone, setRoutedPhone] = useState<string>('918699260386');

  useEffect(() => {
    if (initialService) {
      const match = needs.find(
        (n) => n.toLowerCase() === initialService.toLowerCase() ||
               initialService.toLowerCase().includes(n.toLowerCase())
      );
      if (match && !picks.includes(match)) {
        setPicks([match]);
      }
    }
  }, [initialService]);

  const toggle = (t: string) =>
    setPicks((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Bot honeypot check
    if (data.b_company_hp) {
      setStatus('sent');
      return;
    }

    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const phone = String(data.phone || '').trim();
    const message = String(data.message || '').trim();
    const selectedNeeds = picks.length > 0 ? picks.join(', ') : 'Not specified';

    const waText =
      `*New Project Enquiry — 24digital*\n\n` +
      `*Name:* ${name}\n` +
      `*Work Email:* ${email}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Services Needed:* ${selectedNeeds}\n` +
      `*Details:* ${message || 'None provided'}\n\n` +
      `Sent via 24digital.store`;

    const isAppOrSms =
      picks.some((p) => ['App', 'SMS / Email', 'Hosting & domain'].includes(p)) &&
      !picks.some((p) => ['Website', 'Performance marketing', 'Branding', 'Social', 'College activation', 'Corporate activation', 'Creators'].includes(p));

    const targetPhone = isAppOrSms ? '918235849776' : '918699260386';
    setRoutedPhone(targetPhone);
    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waText)}`;
    setWaLink(waUrl);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, needs: picks, targetPhone }),
      });

      if (res.ok) {
        setStatus('sent');
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
          (window as unknown as { gtag: Function }).gtag('event', 'contact_submit', {
            event_category: 'engagement',
            event_label: selectedNeeds,
          });
        }
        try {
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        } catch {
          // Handled via button
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__panel">
        <div className="wrap contact__inner">
          <div className="contact__copy reveal">
            <p className="eyebrow" style={{ color: 'var(--blue-tint)' }}>Start a project</p>
            <h2 className="contact__title">Got a launch, a fest, or a site that needs fixing?</h2>
            <p className="contact__lede">Tell us what you’re working on. We’ll come back with a plan and a quote.</p>
            <div className="contact__details">
              <div>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <span>Phone / WhatsApp</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <a href={`tel:${site.primaryPhone.replace(/\s+/g, '')}`}>
                    <b>{site.primaryPhone}</b> <span style={{ fontSize: 13, opacity: 0.8 }}>(Marketing &amp; Websites)</span>
                  </a>
                  <a href={`tel:${site.secondaryPhone.replace(/\s+/g, '')}`}>
                    <b>{site.secondaryPhone}</b> <span style={{ fontSize: 13, opacity: 0.8 }}>(App Dev &amp; SMS)</span>
                  </a>
                </div>
              </div>
              <div>
                <span>Office</span>
                <b>{site.city}</b>
              </div>
            </div>
          </div>

          <div className="contact__card reveal">
            {status === 'sent' ? (
              <div className="thanks">
                <span className="thanks__icon"><Check size={28} color="currentColor" /></span>
                <h3>Got it — thank you.</h3>
                <p>
                  Your enquiry is with the team. You can also send the details directly to{' '}
                  <b>
                    {routedPhone === '918235849776'
                      ? '+91 82358 49776 (App Dev & SMS)'
                      : '+91 86992 60386 (Marketing & Websites)'}
                  </b>{' '}
                  on WhatsApp for immediate priority response.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 360 }}>
                  {waLink && (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--whatsapp btn--block"
                    >
                      <WhatsApp size={20} /> Open chat on WhatsApp
                    </a>
                  )}
                  <button
                    type="button"
                    className="btn btn--ghost btn--block"
                    onClick={() => { setStatus('idle'); setPicks([]); setWaLink(''); }}
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="b_company_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, width: 0 }}
                  aria-hidden="true"
                />

                <div className="form__row">
                  <label>Your name<input className="field" type="text" name="name" placeholder="Full name" required autoComplete="name" /></label>
                  <label>Work email<input className="field" type="email" name="email" placeholder="you@company.com" required autoComplete="email" /></label>
                </div>
                <label>Phone<input className="field" type="tel" name="phone" placeholder="+91" autoComplete="tel" /></label>
                <fieldset>
                  <legend>What do you need?</legend>
                  <div className="picks">
                    {needs.map((t) => (
                      <button key={t} type="button" className="pick" aria-pressed={picks.includes(t)} onClick={() => toggle(t)}>{t}</button>
                    ))}
                  </div>
                </fieldset>
                <label>Tell us a bit more<textarea className="field" name="message" rows={4} placeholder="Timelines, budget, links — anything that helps." /></label>
                {status === 'error' && (
                  <p role="alert" style={{ color: '#B42318', fontSize: 14 }}>
                    Something went wrong. Please WhatsApp us directly at {site.primaryPhone}.
                  </p>
                )}
                <button type="submit" className="btn btn--ink btn--block" style={{ minHeight: 56, fontSize: 16 }} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Send enquiry <Arrow /></>}
                </button>

                {/* Direct WhatsApp fast links */}
                <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(18, 18, 18, 0.1)', fontSize: 14, color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 12px' }}>
                  <span>Prefer WhatsApp? Message us:</span>
                  <a
                    href="https://wa.me/918699260386?text=Hi%2024digital,%20I'd%20like%20to%20discuss%20a%20website%20or%20marketing%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                  >
                    +91 86992 60386 (Marketing &amp; Websites)
                  </a>
                  <span>·</span>
                  <a
                    href="https://wa.me/918235849776?text=Hi%2024digital,%20I'd%20like%20to%20discuss%20app%20development%20or%20SMS%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--blue)', fontWeight: 600 }}
                  >
                    +91 82358 49776 (App Dev &amp; SMS)
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
