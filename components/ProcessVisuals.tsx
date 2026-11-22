import { Mark, BRAND } from './brand/Logo';
import { Check, Search } from './ui/Icons';

export function VisualBase() {
  return (
    <div className="v-list">
      <div className="v-search"><Search /><b>yourbrand<span style={{ color: 'var(--blue)' }}>.in</span></b><span className="v-ok">Available</span></div>
      <div className="v-row"><Check /><b>Hosting</b><small>Business plan</small></div>
      <div className="v-row"><Check /><b>Email</b><small>you@yourbrand.in</small></div>
      <div className="v-row"><Check /><b>SSL certificate</b><small>Active</small></div>
    </div>
  );
}

export function VisualProduct() {
  return (
    <div className="v-phone">
      <div className="v-phone__screen">
        <div className="v-phone__notch" />
        <div className="v-phone__hello">Good morning</div>
        <div className="v-phone__card"><span>Your order</span><b>Arriving today</b></div>
        <div className="v-phone__tiles"><i style={{ background: '#FFE4DA' }} /><i style={{ background: '#E8EAFF' }} /></div>
        <div className="v-phone__line" style={{ width: '80%' }} />
        <div className="v-phone__line" style={{ width: '55%' }} />
      </div>
      <span className="v-phone__tag">v1.0 · Live</span>
    </div>
  );
}

export function VisualBrand() {
  return (
    <div className="v-brand">
      <div className="v-brand__top">
        <span className="v-brand__logo"><Mark width={70} ink={BRAND.ink} pixel={BRAND.paper} /></span>
        <span className="v-brand__aa">Aa</span>
      </div>
      <div className="v-brand__swatches">
        <i style={{ background: 'var(--coral)' }} /><i style={{ background: 'var(--paper)' }} /><i style={{ background: 'var(--blue)' }} /><i style={{ background: '#3A3A38' }} />
      </div>
      <p className="v-brand__tone"><b>Tone of voice:</b> warm, direct, a little cheeky. Never corporate.</p>
    </div>
  );
}

export function VisualMoment() {
  const tix = [
    ['CAMPUS', 'Fest season tour', 'Stall + stage', -2],
    ['TECH PARK', 'Lobby product demo', 'Lead capture', 1.5],
    ['CREATORS', 'Launch-week drop', 'UGC + reels', -1],
  ] as const;
  return (
    <div className="v-list" style={{ maxWidth: 400, gap: 14 }}>
      {tix.map(([a, b, c, r]) => (
        <div key={a} className="v-ticket" style={{ transform: `rotate(${r}deg)` }}><small>{a}</small><b>{b}</b><span>{c}</span></div>
      ))}
    </div>
  );
}

export function VisualHabit() {
  return (
    <div className="v-list" style={{ maxWidth: 400, gap: 14 }}>
      <div className="v-bubble">Left something behind? Your cart is saved for 24 hours — complete your order here.</div>
      <div className="v-inbox">
        <div><i /><span>New drop: 48 hours only</span><small>9:00</small></div>
        <div><i /><span>Thanks for coming to the fest</span><small>Mon</small></div>
        <div><i /><span>Your monthly round-up</span><small>Fri</small></div>
      </div>
    </div>
  );
}
