'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('24digital_consent');
      if (!consent) {
        setShow(true);
      }
    } catch {
      // Ignore in private browsing
    }
  }, []);

  const handleConsent = (status: 'granted' | 'denied') => {
    try {
      localStorage.setItem('24digital_consent', status);
      window.dispatchEvent(new Event('cookie_consent_updated'));
    } catch {
      // Ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie consent">
      <p>
        We use cookies to improve performance, provide WhatsApp chat services, and analyze anonymous traffic in accordance with our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-banner__actions">
        <button
          type="button"
          className="btn btn--paper btn--sm"
          onClick={() => handleConsent('granted')}
        >
          Accept
        </button>
        <button
          type="button"
          className="btn btn--line-light btn--sm"
          onClick={() => handleConsent('denied')}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
