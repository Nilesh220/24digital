'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { services, site } from '../lib/content';
import { WhatsApp } from './ui/Icons';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Determine current context for prefilled message
  let currentServiceName = '';
  if (pathname && pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '').replace(/\/$/, '');
    const found = services.find((s) => s.slug === slug);
    if (found) {
      currentServiceName = found.name;
    }
  }

  const prefilledText = currentServiceName
    ? `Hi 24digital, I'm interested in ${currentServiceName}.`
    : `Hi 24digital, I'd like to discuss a project.`;

  // First-load entrance flag
  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation & accessibility (Escape to close, focus trap)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handleClickOutside(e: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Focus management when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [open]);

  return (
    <div className={`floating-wa ${hasEntered ? 'is-ready' : 'is-entering'}`}>
      {/* WhatsApp Menu Card */}
      {open && (
        <div
          ref={menuRef}
          role="dialog"
          aria-label="WhatsApp options"
          aria-modal="true"
          className="wa-card"
        >
          <div className="wa-card__head">
            <span className="wa-card__indicator" aria-hidden="true" />
            <div>
              <p className="wa-card__title">Chat on WhatsApp</p>
              <p className="wa-card__sub">Typically replies in a few minutes</p>
            </div>
          </div>

          <div className="wa-card__list">
            {site.whatsapps.map((wa) => {
              const waUrl = `https://wa.me/${wa.raw}?text=${encodeURIComponent(prefilledText)}`;
              return (
                <a
                  key={wa.raw}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-card__item"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
                      (window as unknown as { gtag: Function }).gtag('event', 'whatsapp_click', {
                        event_category: 'engagement',
                        event_label: wa.number,
                      });
                    }
                  }}
                >
                  <div className="wa-card__item-icon">
                    <WhatsApp size={18} />
                  </div>
                  <div className="wa-card__item-meta">
                    <span className="wa-card__number">{wa.number}</span>
                    <span className="wa-card__label">
                      {wa.primary ? 'Main line · Nilesh' : 'Direct line · Support'}
                    </span>
                  </div>
                  {wa.primary && <span className="wa-card__badge">MAIN</span>}
                </a>
              );
            })}
          </div>

          <p className="wa-card__footer">
            24digital · Tech, Hosting &amp; Marketing
          </p>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        className="wa-btn"
        aria-label="Chat on WhatsApp"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="wa-btn__pulse" aria-hidden="true" />
        <WhatsApp size={28} />
      </button>
    </div>
  );
}
