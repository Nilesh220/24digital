'use client';

import { useState, type FormEvent } from 'react';
import { needs, site } from '../lib/content';
import { Arrow, Check, WhatsApp } from './ui/Icons';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [picks, setPicks] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [waLink, setWaLink] = useState<string>('');

  const toggle = (t: string) =>
    setPicks((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

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
      `Sent via 24digital.in`;

    const targetPhone = '918699260386';
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
        try {
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        } catch {
          // If browser popup blocker intercepts, the user can click the button on screen
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
              <div><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
              <div>
                <span>Phone / WhatsApp</span>
                <a href={`https://wa.me/918699260386`} target="_blank" rel="noopener noreferrer">
                  <b>{site.phone}</b>
                </a>
              </div>
              <div><span>Office</span><b>{site.city}</b></div>
            </div>
          </div>

          <div className="contact__card reveal">
            {status === 'sent' ? (
              <div className="thanks">
                <span className="thanks__icon"><Check size={28} color="currentColor" /></span>
                <h3>Got it — thank you.</h3>
                <p>
                  Your enquiry is with the team. You can also send the details directly to <b>+91 8699260386</b> on WhatsApp for immediate response.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 360 }}>
                  {waLink && (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--whatsapp btn--block"
                    >
                      <WhatsApp size={20} /> Send details on WhatsApp
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
                {status === 'error' && <p role="alert" style={{ color: '#B42318', fontSize: 14 }}>Something went wrong. Please WhatsApp us directly at {site.phone}.</p>}
                <button type="submit" className="btn btn--ink btn--block" style={{ minHeight: 56, fontSize: 16 }} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Send enquiry <Arrow /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
