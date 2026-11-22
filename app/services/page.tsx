import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { services } from '../../lib/content';
import { Arrow } from '../../components/ui/Icons';

export const metadata: Metadata = {
  title: 'All Digital Agency Services in Mumbai | 24digital',
  description:
    'Explore all 10 digital services by 24digital: websites, mobile apps, managed cloud hosting, bulk SMS, email marketing, brand identity, college & corporate activations, and performance marketing in Mumbai.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'All Digital Agency Services in Mumbai | 24digital',
    description:
      'Websites, apps, hosting, bulk SMS, branding, and activations — built, run, and grown by one full-stack team in Mumbai.',
    url: 'https://24digital.store/services',
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="page">
      <Header />
      <main>
        {/* Index Hero */}
        <section className="service-hero">
          <div className="wrap">
            <p className="eyebrow">Full-Stack Capabilities</p>
            <h1 className="service-hero__title" style={{ maxWidth: 840 }}>
              Ten services. One team that runs all of them.
            </h1>
            <p className="service-hero__lede">
              Pick one service or hand us the whole launch. Either way, the people who plan it are the people who build it, host it, and run it across Mumbai and India.
            </p>
          </div>
        </section>

        {/* Services Directory */}
        <section className="wrap section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {services.map((s) => (
              <div
                key={s.slug}
                className="service-feature-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 24,
                  padding: '32px 28px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ font: '800 18px/1 var(--font-display)', color: 'var(--blue)' }}>{s.num}</span>
                    <span className="svc-panel__pillar" style={{ fontSize: 11, padding: '3px 10px' }}>{s.pillar}</span>
                  </div>
                  <h2 style={{ font: '700 24px/1.2 var(--font-display)', letterSpacing: '-0.03em', marginBottom: 12 }}>
                    {s.name}
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', marginBottom: 20 }}>
                    {s.desc}
                  </p>
                  <div className="chips" style={{ marginBottom: 24 }}>
                    {s.items.slice(0, 4).map((item) => (
                      <span key={item} className="chip" style={{ fontSize: 12, padding: '5px 10px' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="btn btn--ink btn--block"
                  style={{ minHeight: 48, fontSize: 14 }}
                >
                  Explore {s.short} <Arrow />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
