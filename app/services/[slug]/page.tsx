import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import ServiceVisual from '../../../components/ServiceVisual';
import { services, site } from '../../../lib/content';
import { Arrow, WhatsApp, Plus } from '../../../components/ui/Icons';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const siteUrl = site.url;
  const canonicalUrl = `${siteUrl}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: canonicalUrl,
      type: 'article',
      siteName: '24digital',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDesc,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const siteUrl = site.url;
  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));
  const waPrefill = `Hi 24digital, I'm interested in ${service.name}.`;
  const waUrl = `https://wa.me/918699260386?text=${encodeURIComponent(waPrefill)}`;

  // Structured Data JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.desc,
    provider: {
      '@type': 'ProfessionalService',
      name: site.name,
      url: siteUrl,
      telephone: site.primaryPhone,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${siteUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main>
        {/* Service Hero */}
        <section className="service-hero">
          <div className="wrap service-hero__inner">
            <div>
              <p className="eyebrow">{service.pillar} · 24digital Mumbai</p>
              <h1 className="service-hero__title">
                {service.name} in Mumbai
              </h1>
              <p className="service-hero__lede">{service.heroIntro}</p>
              <div className="service-hero__actions">
                <a href="#contact" className="btn btn--ink">
                  Get a quote <Arrow />
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                >
                  <WhatsApp size={18} /> WhatsApp us
                </a>
              </div>
            </div>
            <div>
              <ServiceVisual service={service} />
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="wrap section">
          <div>
            <p className="eyebrow">Deliverables &amp; Scope</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              What’s included in {service.short}
            </h2>
            <p className="lede">
              Clear scope, production-grade assets, and measurable outcomes. No hidden line items.
            </p>
          </div>
          <div className="service-feature-grid">
            {service.whatIsIncluded.map((feat) => (
              <div key={feat.title} className="service-feature-card">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works (Process) */}
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="wrap">
            <p className="eyebrow">Execution Methodology</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              How the process runs with us
            </h2>
            <p className="lede">
              Structured stages from initial brief to deployment and metric tracking.
            </p>
            <div className="steps-list">
              {service.howItWorks.map((st) => (
                <div key={st.step} className="step-card">
                  <span className="step-card__num">{st.step}</span>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="wrap section">
          <div>
            <p className="eyebrow">Ideal Fit</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Who this is for
            </h2>
            <p className="lede">
              Built for businesses that prioritize speed, craft, and accountability.
            </p>
          </div>
          <div className="who-grid">
            {service.whoItIsFor.map((item) => (
              <div key={item.profile} className="who-card">
                <h3>{item.profile}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service FAQs */}
        <section className="faq">
          <div className="wrap section faq__inner">
            <div className="faq__head">
              <p className="eyebrow">Frequently Asked</p>
              <h2 className="h2">Common questions about {service.short}.</h2>
            </div>
            <div className="faq__list">
              {service.faqs.map((f, i) => (
                <div key={f.q} className="faq__item">
                  <div style={{ padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
                    <h3 style={{ font: '600 19px/1.3 var(--font-display)', letterSpacing: '-0.02em', margin: '0 0 10px' }}>
                      {f.q}
                    </h3>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="wrap section" style={{ borderTop: '1px solid var(--line)' }}>
            <div>
              <p className="eyebrow">Complementary Capabilities</p>
              <h2 className="h2" style={{ marginTop: 8 }}>
                Related services
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 32 }}>
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="service-feature-card"
                  style={{ textDecoration: 'none', color: 'var(--ink)' }}
                >
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase' }}>
                    {rel.pillar}
                  </span>
                  <h3 style={{ marginBlock: '8px 6px' }}>{rel.name}</h3>
                  <p style={{ margin: 0 }}>{rel.desc}</p>
                  <span style={{ marginTop: 'auto', paddingTop: 16, fontSize: 14, fontWeight: 600, color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Learn more <Arrow size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Contact Form CTA */}
        <Contact initialService={service.name} />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
