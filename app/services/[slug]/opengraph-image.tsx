import { ImageResponse } from 'next/og';
import { services } from '../../../lib/content';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug) || services[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#2733FF',
          padding: '70px 80px',
          fontFamily: 'sans-serif',
          color: '#FFFFFF',
        }}
      >
        {/* Top bar with Logo */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* 24digital Mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <svg width="52" height="40" viewBox="-4 4 150.2 100" fill="none">
              <path
                d="M6 35 A21 21 0 1 1 44.20 47.05 L11.32 94 L108.17 94"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="14"
                strokeLinejoin="miter"
              />
              <polygon
                points="93.52,8.00 108.17,8.00 68.95,64.00 142.17,64.00 142.17,76.00 45.90,76.00"
                fill="#FFFFFF"
              />
              <rect x="118.17" y="32" width="14" height="68" fill="#FFFFFF" />
              <rect x="118.17" y="8" width="14" height="14" fill="#FF6A3D" />
            </svg>
            <span
              style={{
                fontSize: 38,
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: '#FFFFFF',
              }}
            >
              24digital
            </span>
          </div>

          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#DCDEFF',
              background: 'rgba(255, 255, 255, 0.12)',
              padding: '8px 18px',
              borderRadius: 999,
            }}
          >
            {service.pillar} · MUMBAI
          </div>
        </div>

        {/* Center Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              maxWidth: 1000,
            }}
          >
            {service.name}
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: '#DCDEFF',
              maxWidth: 900,
            }}
          >
            {service.desc}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '24px',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF' }}>
            24digital.store/services/{service.slug}
          </div>
          <div style={{ fontSize: 18, color: '#DCDEFF' }}>
            We build it, host it, and get people talking.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
