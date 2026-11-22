import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '24digital — We build it, host it, and get people talking';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#121212',
          padding: '64px 80px',
          fontFamily: 'sans-serif',
          color: '#F4F1EA',
        }}
      >
        {/* Top header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <svg width="52" height="40" viewBox="-4 4 150.2 100" fill="none">
              <path
                d="M6 35 A21 21 0 1 1 44.20 47.05 L11.32 94 L108.17 94"
                fill="none"
                stroke="#F4F1EA"
                strokeWidth="14"
                strokeLinejoin="miter"
              />
              <polygon
                points="93.52,8.00 108.17,8.00 68.95,64.00 142.17,64.00 142.17,76.00 45.90,76.00"
                fill="#F4F1EA"
              />
              <rect x="118.17" y="32" width="14" height="68" fill="#F4F1EA" />
              <rect x="118.17" y="8" width="14" height="14" fill="#FF6A3D" />
            </svg>
            <span
              style={{
                fontSize: 38,
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: '#F4F1EA',
              }}
            >
              24digital
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              fontSize: 16,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#A8A49B',
            }}
          >
            <span>Build</span>
            <span>·</span>
            <span>Host</span>
            <span>·</span>
            <span>Reach</span>
            <span>·</span>
            <span>Activate</span>
          </div>
        </div>

        {/* Middle hero copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#FF6A3D',
            }}
          >
            Tech · Hosting · Marketing — One Team
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.045em',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span>We build it, host it, and get people</span>
            <span
              style={{
                backgroundColor: '#2733FF',
                color: '#FFFFFF',
                padding: '2px 22px 8px',
                borderRadius: '16px',
              }}
            >
              talking.
            </span>
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              color: '#C9C5BC',
              maxWidth: 920,
              marginTop: 6,
            }}
          >
            Websites, apps, hosting, bulk SMS & email, plus campus tours and creator campaigns.
            One team for the whole launch.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(244, 241, 234, 0.16)',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: '#F4F1EA',
              letterSpacing: '-0.02em',
            }}
          >
            24digital.store
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#A8A49B',
            }}
          >
            One brief. One team. One number to call.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
