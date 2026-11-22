import { plans } from '../lib/content';
import { vars } from './ui/Icons';

export default function Hosting() {
  return (
    <section id="hosting" className="hosting">
      <div className="wrap section">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Hosting, domains &amp; email</p>
            <h2 className="h2">The boring bits, handled properly.</h2>
          </div>
          <p className="lede">Fast hosting, your own domain and professional email — set up and looked after by the same team that built your site.</p>
        </div>
        <div className="plans">
          {plans.map((p, i) => (
            <div key={p.name} className={`plan reveal${p.featured ? ' plan--featured' : ''}`} style={vars({ '--d': i })}>
              <div className="plan__top">
                <span className="plan__name">{p.name}</span>
                {p.featured && <span className="plan__badge">POPULAR</span>}
              </div>
              <p className="plan__desc">{p.desc}</p>
              <div className="plan__price"><b>{p.price}</b><span>/month</span></div>
              <div className="plan__spacer" />
              <a href="#contact" className={`btn btn--block ${p.featured ? 'btn--paper' : 'btn--ink'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
