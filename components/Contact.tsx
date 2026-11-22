'use client';

import { useState, type FormEvent } from 'react';
import { needs, site } from '../lib/content';
import { Arrow, Check } from './ui/Icons';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [picks, setPicks] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');

  const toggle = (t: string) =>
    setPicks((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, needs: picks }),
      });
      setStatus(res.ok ? 'sent' : 'error');
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
              <div><span>Phone</span><b>{site.phone}</b></div>
              <div><span>Office</span><b>{site.city}</b></div>
            </div>
          </div>

          <div className="contact__card reveal">
            {status === 'sent' ? (
              <div className="thanks">
                <span className="thanks__icon"><Check size={28} color="currentColor" /></span>
                <h3>Got it — thank you.</h3>
                <p>Your enquiry is with the team. We’ll reply with next steps shortly.</p>
                <button type="button" className="btn btn--ghost" onClick={() => { setStatus('idle'); setPicks([]); }}>Send another</button>
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
                {status === 'error' && <p role="alert" style={{ color: '#B42318', fontSize: 14 }}>Something went wrong. Please email us at {site.email}.</p>}
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
