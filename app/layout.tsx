import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter_Tight } from 'next/font/google';
import './globals.css';
import { site, services } from '../lib/content';
import CookieConsent from '../components/CookieConsent';
import Analytics from '../components/Analytics';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const siteUrl = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '24digital — We build it, host it, and get people talking',
    template: '%s | 24digital',
  },
  description:
    'Full-stack digital agency based in Mumbai, India. We build websites & mobile apps, manage cloud hosting, deploy bulk SMS & email, and run on-ground campus activations and performance marketing.',
  keywords: [
    '24digital',
    'digital agency Mumbai',
    'web development Mumbai',
    'mobile app development India',
    'cloud hosting Mumbai',
    'VPS servers',
    'bulk SMS Mumbai',
    'email marketing India',
    'college activations Mumbai',
    'corporate popups',
    'performance marketing agency',
    'Meta ads agency',
    'Google ads Mumbai',
    'branding agency India',
  ],
  authors: [{ name: '24digital', url: siteUrl }],
  creator: '24digital',
  publisher: '24digital',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '24digital — We build it, host it, and get people talking',
    description:
      'Websites, apps, hosting, bulk SMS, email, activations, and performance marketing — built, run and grown by one team in Mumbai.',
    url: siteUrl,
    siteName: '24digital',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/brand/24digital-og.png',
        width: 1200,
        height: 630,
        alt: '24digital — Build · Host · Reach · Activate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '24digital — We build it, host it, and get people talking',
    description:
      'Websites, apps, hosting, bulk SMS & email, plus campus tours and creator campaigns. One team for the whole launch.',
    creator: '@24digital',
    images: ['/brand/24digital-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/brand/24digital-app-icon-1024.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: [
      { url: '/brand/24digital-app-icon-1024.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

// Viewport: allows user zoom (no user-scalable=no)
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F1EA' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  legalName: site.legalName,
  alternateName: '24 Digital Agency Mumbai',
  url: siteUrl,
  logo: `${siteUrl}/brand/24digital-logo-primary.png`,
  image: `${siteUrl}/brand/24digital-og.png`,
  email: site.email,
  telephone: site.primaryPhone,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: site.primaryPhone,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: site.secondaryPhone,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '24digital Full-Stack Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.desc,
        url: `${siteUrl}/services/${s.slug}`,
      },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${interTight.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
