import { Service } from '../lib/content';

export default function ServiceVisual({ service }: { service: Service }) {
  const type = service.visualType;

  return (
    <div className="svc-visual">
      {type === 'code' && (
        <div style={{ width: '85%', maxWidth: 360, background: '#1c1c1e', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ background: '#2c2c2e', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
            <span style={{ marginLeft: 'auto', fontSize: 11, color: '#999', fontFamily: 'monospace' }}>Page.tsx · Next.js</span>
          </div>
          <div style={{ padding: '16px 18px', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.6, color: '#f4f1ea' }}>
            <p style={{ margin: 0 }}><span style={{ color: '#FF6A3D' }}>export default</span> <span style={{ color: '#2733FF' }}>function</span> <span style={{ color: '#FFD700' }}>Store</span>() &#123;</p>
            <p style={{ margin: 0, paddingLeft: 14 }}><span style={{ color: '#FF6A3D' }}>return</span> (</p>
            <p style={{ margin: 0, paddingLeft: 28 }}>&lt;<span style={{ color: '#4ADE80' }}>CommerceLayout</span> speed=&#123;<span style={{ color: '#60A5FA' }}>"100"</span>&#125;&gt;</p>
            <p style={{ margin: 0, paddingLeft: 42 }}>&lt;<span style={{ color: '#4ADE80' }}>Cart</span> checkout=&#123;<span style={{ color: '#2733FF' }}>"fast"</span>&#125; /&gt;</p>
            <p style={{ margin: 0, paddingLeft: 28 }}>&lt;/<span style={{ color: '#4ADE80' }}>CommerceLayout</span>&gt;</p>
            <p style={{ margin: 0, paddingLeft: 14 }}>);</p>
            <p style={{ margin: 0 }}>&#125;</p>
          </div>
          <div style={{ background: '#2733FF', color: '#fff', padding: '8px 14px', fontSize: 12, fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
            <span>Lighthouse: 99/100</span>
            <span>SSR · Live</span>
          </div>
        </div>
      )}

      {type === 'mobile' && (
        <div style={{ width: 220, height: 320, background: '#1c1c1e', borderRadius: 36, border: '4px solid #333', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ width: 60, height: 14, background: '#000', borderRadius: 10, margin: '0 auto 4px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#888' }}>
            <span>9:41</span>
            <span style={{ color: '#4ADE80' }}>5G · Live</span>
          </div>
          <div style={{ background: '#2733FF', borderRadius: 14, padding: 12, color: '#fff', fontSize: 13 }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Your Order</p>
            <p style={{ margin: '4px 0 0', fontSize: 11, opacity: 0.9 }}>Out for delivery in Mumbai</p>
          </div>
          <div style={{ background: '#2c2c2e', borderRadius: 12, padding: 10, display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: '#FF6A3D' }} />
            <div style={{ fontSize: 11 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Payment via UPI</p>
              <p style={{ margin: 0, color: '#888' }}>Verified · Instant</p>
            </div>
          </div>
        </div>
      )}

      {type === 'server' && (
        <div style={{ width: '85%', maxWidth: 340, background: '#161618', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2733FF', letterSpacing: '0.08em' }}>MUMBAI-DC-01</span>
            <span style={{ fontSize: 11, background: 'rgba(39, 201, 63, 0.2)', color: '#27C93F', padding: '3px 8px', borderRadius: 999, fontWeight: 700 }}>99.98% UPTIME</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12, color: '#aaa' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>CPU Load</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>14%</span>
            </div>
            <div style={{ height: 6, background: '#333', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: '14%', height: '100%', background: '#2733FF' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              <span>Memory (NVMe)</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>2.1 GB / 16 GB</span>
            </div>
            <div style={{ height: 6, background: '#333', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: '22%', height: '100%', background: '#FF6A3D' }} />
            </div>
          </div>
        </div>
      )}

      {type === 'messaging' && (
        <div style={{ width: '85%', maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ background: '#2733FF', color: '#fff', padding: '12px 16px', borderRadius: 16, fontSize: 13 }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 11, opacity: 0.85 }}>TRANSACTIONAL OTP · 24DIGI</p>
            <p style={{ margin: '4px 0 0' }}>Your verification code is <b>482 913</b>. Valid for 10 mins.</p>
          </div>
          <div style={{ background: '#2c2c2e', color: '#fff', padding: '12px 16px', borderRadius: 16, fontSize: 13 }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 11, color: '#FF6A3D' }}>FLASH DROP ALERT</p>
            <p style={{ margin: '4px 0 0' }}>The 48-hour drop is live. Tap to claim VIP access.</p>
          </div>
        </div>
      )}

      {type === 'identity' && (
        <div style={{ width: '85%', maxWidth: 340, background: '#1c1c1e', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ flex: 1, height: 44, borderRadius: 10, background: '#121212', border: '1px solid #333' }} />
            <span style={{ flex: 1, height: 44, borderRadius: 10, background: '#F4F1EA' }} />
            <span style={{ flex: 1, height: 44, borderRadius: 10, background: '#2733FF' }} />
            <span style={{ flex: 1, height: 44, borderRadius: 10, background: '#FF6A3D' }} />
          </div>
          <div style={{ fontSize: 13, color: '#aaa', display: 'flex', justifyContent: 'space-between' }}>
            <span>Primary Brand Lockup</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>Vector EPS / SVG</span>
          </div>
        </div>
      )}

      {type === 'social' && (
        <div style={{ width: '80%', maxWidth: 320, background: '#1c1c1e', borderRadius: 20, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#2733FF' }} />
            <div>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#fff' }}>@24digital</p>
              <p style={{ margin: 0, fontSize: 11, color: '#888' }}>Mumbai, India</p>
            </div>
          </div>
          <div style={{ background: '#2733FF', borderRadius: 14, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 800 }}>
            REELS · VIRAL HOOK
          </div>
        </div>
      )}

      {type === 'campus' && (
        <div style={{ width: '80%', maxWidth: 320, background: '#FF6A3D', color: '#fff', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 800 }}>
            <span>FEST SEASON '26</span>
            <span style={{ background: '#000', padding: '2px 8px', borderRadius: 6 }}>ALL ACCESS</span>
          </div>
          <p style={{ fontSize: 22, fontWeight: 800, margin: '6px 0 0', lineHeight: 1.1 }}>CAMPUS AMBASSADOR</p>
          <p style={{ fontSize: 12, opacity: 0.9, margin: 0 }}>Mumbai University &amp; IIT Bombay Activations</p>
        </div>
      )}

      {type === 'corporate' && (
        <div style={{ width: '85%', maxWidth: 340, background: '#1c1c1e', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#FF6A3D', fontWeight: 700 }}>BKC TECH PARK</span>
            <span style={{ fontSize: 11, background: '#2733FF', color: '#fff', padding: '3px 8px', borderRadius: 999 }}>CORPORATE POP-UP</span>
          </div>
          <div style={{ background: '#2c2c2e', padding: 14, borderRadius: 12, fontSize: 13, color: '#fff' }}>
            <p style={{ margin: 0, fontWeight: 600 }}>Lobby Demo &amp; Lead Capture</p>
            <p style={{ margin: '4px 0 0', fontSize: 12, color: '#aaa' }}>1,200+ Verified Executive Check-ins</p>
          </div>
        </div>
      )}

      {type === 'creator' && (
        <div style={{ width: '80%', maxWidth: 320, background: '#1c1c1e', borderRadius: 20, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#4ADE80' }}>UGC CAMPAIGN</span>
            <span style={{ fontSize: 11, color: '#888' }}>ROAS 4.2×</span>
          </div>
          <div style={{ background: '#2c2c2e', height: 100, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700 }}>
            Creator Whitelisted Video
          </div>
        </div>
      )}

      {type === 'ads' && (
        <div style={{ width: '85%', maxWidth: 340, background: '#1c1c1e', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#2733FF' }}>META &amp; GOOGLE ADS</span>
            <span style={{ background: 'rgba(39, 201, 63, 0.2)', color: '#4ADE80', fontSize: 11, padding: '3px 8px', borderRadius: 999, fontWeight: 700 }}>ROAS 5.2×</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ background: '#2c2c2e', padding: 10, borderRadius: 10, fontSize: 12 }}>
              <span style={{ color: '#888' }}>CPA Target</span>
              <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 700, color: '#fff' }}>₹142</p>
            </div>
            <div style={{ background: '#2c2c2e', padding: 10, borderRadius: 10, fontSize: 12 }}>
              <span style={{ color: '#888' }}>Conversions</span>
              <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 700, color: '#fff' }}>+240%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
