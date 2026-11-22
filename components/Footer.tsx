import Link from 'next/link';
import { Logo, BRAND } from './brand/Logo';
import { footerCols, site } from '../lib/content';

export default function Footer() {
  const activeSocial = site.social.filter((s) => s.href && s.href !== '#');

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" aria-label="24digital home">
              <Logo width={170} ink={BRAND.paper} title="24digital" />
            </Link>
            <p>Websites, apps, hosting, messaging, activations and performance marketing — built, run and grown by one team in Mumbai.</p>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: 'var(--muted-dark)' }}>
              <div>
                <span>Email: </span>
                <a className="flink" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <span>Phone / WhatsApp: </span>
                <a className="flink" href={`tel:${site.primaryPhone.replace(/\s+/g, '')}`}>
                  {site.primaryPhone} <span style={{ opacity: 0.7 }}>(Marketing &amp; Websites)</span>
                </a>
                <span style={{ margin: '0 6px' }}>·</span>
                <a className="flink" href={`tel:${site.secondaryPhone.replace(/\s+/g, '')}`}>
                  {site.secondaryPhone} <span style={{ opacity: 0.7 }}>(App Dev &amp; SMS)</span>
                </a>
              </div>
              <div>
                <span>Location: </span>
                <span>{site.city}</span>
              </div>
            </div>
          </div>
          <div className="footer__cols">
            {footerCols.map((c) => (
              <div key={c.h}>
                <h4>{c.h}</h4>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link className="flink" href={l.href}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big sign-off: the drawn logo at full width */}
        <div className="footer__big" aria-hidden="true">
          <Logo width="100%" ink={BRAND.paper} title="" />
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} 24digital. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link className="flink" href="/privacy">Privacy Policy</Link>
            <Link className="flink" href="/terms">Terms of Service</Link>
            {activeSocial.length > 0 && (
              <nav aria-label="Social" style={{ display: 'flex', gap: 16 }}>
                {activeSocial.map((s) => (
                  <a key={s.label} className="flink" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
