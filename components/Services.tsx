'use client';

import { useState } from 'react';
import { services } from '../lib/content';
import { Arrow, vars } from './ui/Icons';

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const s = services.find((x) => x.id === active) ?? services[0];

  return (
    <section id="services" className="wrap section">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 className="h2">Nine services. One team that runs all of them.</h2>
        </div>
        <p className="lede">Pick one service or hand us the whole launch. Either way, the people who plan it are the people who build it, host it and run it.</p>
      </div>

      <div className="services__grid">
        <div className="services__tabs reveal" role="tablist" aria-label="Services">
          {services.map((x) => (
            <button
              key={x.id}
              type="button"
              role="tab"
              id={`tab-${x.id}`}
              aria-selected={x.id === active}
              aria-controls="service-panel"
              className="svc-tab"
              onClick={() => setActive(x.id)}
            >
              <span className="svc-tab__num">{x.num}</span>
              <span className="svc-tab__name">{x.name}</span>
              <span className="svc-tab__arrow"><Arrow size={22} /></span>
            </button>
          ))}
        </div>

        <div className="services__panel-wrap reveal" style={vars({ '--d': 1 })}>
          {/* key forces a remount so the panel animates in on every change */}
          <div key={s.id} id="service-panel" role="tabpanel" aria-labelledby={`tab-${s.id}`} className="svc-panel">
            <span className="svc-panel__bgnum" aria-hidden="true">{s.num}</span>
            <span className="svc-panel__pillar">{s.pillar}</span>
            <h3 className="svc-panel__title">{s.name}</h3>
            <p className="svc-panel__desc">{s.desc}</p>
            <p className="svc-panel__label">What’s included</p>
            <div className="chips">
              {s.items.map((t, i) => (
                <span key={t} className="chip" style={vars({ '--i': i })}>{t}</span>
              ))}
            </div>
            <div className="svc-panel__spacer" />
            <a href="#contact" className="btn btn--paper" style={{ alignSelf: 'flex-start' }}>Talk to us about {s.short} <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
