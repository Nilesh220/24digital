import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { services } from '../lib/content';
import { Arrow } from '../components/ui/Icons';

export default function NotFound() {
  return (
    <div className="page">
      <Header />
      <main className="wrap section" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p className="eyebrow" style={{ color: 'var(--coral)' }}>404 · Page Not Found</p>
        <h1 className="h2" style={{ marginBlock: '12px 16px', fontSize: 'clamp(36px, 6vw, 64px)' }}>
          This page isn’t in our sitemap.
        </h1>
        <p className="lede" style={{ maxWidth: 560, marginBottom: 32 }}>
          The link you followed might be broken, or the page was moved to a new home. Explore our services below or head back to the main site.
        </p>

        <div style={{ marginBottom: 40, display: 'flex', gap: 14 }}>
          <Link href="/" className="btn btn--ink">
            Back to homepage <Arrow />
          </Link>
          <Link href="/services" className="btn btn--ghost">
            View all services
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32 }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: 16 }}>
            Popular Services
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="chip"
                style={{ textDecoration: 'none' }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
