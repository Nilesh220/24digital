import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter_Tight } from 'next/font/google';
import './globals.css';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://24digital.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '24digital — We build it, host it, and get people talking',
    template: '%s | 24digital',
  },
  description:
    'Full-stack digital agency in India: websites, web & mobile apps, cloud hosting, bulk SMS, email marketing, and on-ground college & corporate activations. One team for the whole launch.',
  keywords: [
    '24digital',
    'digital agency India',
    'web development agency',
    'app development',
    'cloud hosting India',
    'VPS servers',
    'bulk SMS India',
    'email marketing',
    'college activations',
    'campus marketing',
    'corporate activations',
    'creator marketing',
    'branding agency',
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
      'Websites, apps, hosting, bulk SMS & email, plus campus tours and creator campaigns. One team for the whole launch.',
    url: siteUrl,
    siteName: '24digital',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24digital — We build it, host it, and get people talking',
    description:
      'Websites, apps, hosting, bulk SMS & email, plus campus tours and creator campaigns. One team for the whole launch.',
    creator: '@24digital',
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
  name: '24digital',
  alternateName: '24 Digital Agency',
  url: siteUrl,
  logo: `${siteUrl}/brand/24digital-logo-primary.png`,
  image: `${siteUrl}/brand/24digital-app-icon-1024.png`,
  description:
    'Full-stack digital agency in India providing web development, mobile apps, managed hosting, SMS/email marketing, and on-ground activations.',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.instagram.com',
    'https://www.linkedin.com',
    'https://www.youtube.com',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '24digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Websites & E-commerce',
          description: 'Custom, high-speed websites and e-commerce stores designed to convert.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'App Development',
          description: 'Android and iOS apps engineered with intuitive UX and scalable back ends.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hosting & Domains',
          description: 'High-availability web hosting, VPS, domain registration, and business email.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SMS & Email Marketing',
          description: 'Promotional and transactional SMS blasts, OTP gateways, and automated newsletters.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'College & Corporate Activations',
          description: 'On-ground brand experiences, campus ambassador networks, tech-park demos, and UGC creator campaigns.',
        },
      },
    ],
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
      <body>{children}</body>
    </html>
  );
}
