'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from './brand/Logo';
import { Arrow, WhatsApp } from './ui/Icons';
import { nav, services, site } from '../lib/content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Escape key closes mobile menu
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!menuOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="progress" aria-hidden="true" />
      <div className="wrap header__inner">
        <Link href="/" className="header__logo" aria-label="24digital home">
          <Logo width={150} title="24digital" />
        </Link>
        <nav className="header__nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} className="navlink" href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/#contact" className="btn btn--ink btn--sm">
            Start a project <Arrow />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="header__mobile-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="mobile-drawer"
          onClick={(e) => {
            if (e.target === drawerRef.current) setMenuOpen(false);
          }}
        >
          <div className="mobile-drawer__panel">
            <div className="mobile-drawer__top">
              <Link href="/" onClick={() => setMenuOpen(false)} aria-label="24digital home">
                <Logo width={130} title="24digital" />
              </Link>
              <button
                type="button"
                className="header__mobile-toggle"
                style={{ display: 'inline-flex' }}
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="mobile-drawer__nav" aria-label="Mobile Navigation">
              {nav.map((n) => (
                <div key={n.href}>
                  <Link
                    className="mobile-drawer__link"
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {n.label}
                  </Link>
                  {n.label === 'Services' && (
                    <div className="mobile-drawer__sublist">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          className="mobile-drawer__sublink"
                          href={`/services/${s.slug}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                      <Link
                        className="mobile-drawer__sublink"
                        href="/services"
                        style={{ color: 'var(--blue)', fontWeight: 700 }}
                        onClick={() => setMenuOpen(false)}
                      >
                        All services index →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href={`https://wa.me/918699260386?text=Hi%2024digital,%20I'd%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--block"
                onClick={() => setMenuOpen(false)}
              >
                <WhatsApp size={18} /> WhatsApp {site.primaryPhone}
              </a>
              <a
                href="/#contact"
                className="btn btn--ink btn--block"
                onClick={() => setMenuOpen(false)}
              >
                Start a project <Arrow />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
