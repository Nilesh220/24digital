import { Mark, BRAND } from './brand/Logo';
import { Arrow, Mail, vars } from './ui/Icons';
import { hero } from '../lib/content';

export default function Hero() {
  return (
    <section id="top" className="wrap hero">
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow fade-up"><span className="hero__dot" />{hero.eyebrow}</p>
        <h1 className="hero__title">
          {hero.lines.map((line, i) => (
            <span key={line} className="ln">
              <span style={vars({ '--i': i })}>
                {line}
                {i === hero.lines.length - 1 && <> <span className="hl">{hero.highlight}</span></>}
              </span>
            </span>
          ))}
        </h1>
        <p className="hero__sub fade-up" style={vars({ '--d': '.5s' })}>{hero.sub}</p>
        <div className="hero__ctas fade-up" style={vars({ '--d': '.62s' })}>
          <a href="#contact" className="btn btn--blue">Start a project <Arrow /></a>
          <a href="#services" className="btn btn--ghost">See everything we do</a>
        </div>
      </div>

      {/* Collage: website / SMS / campus ticket — each layer drifts at its own speed on scroll */}
      <div className="hero__art fade-up" style={vars({ '--d': '.35s' })} aria-hidden="true">
        <div className="hero__slot hero__slot--a bob-a"><div className="px-a">
          <div className="mock-browser">
            <div className="mock-browser__bar"><i /><i /><i /><span className="mock-browser__url">yourbrand.in</span></div>
            <div className="mock-browser__body">
              <div className="mock-browser__accent" />
              <div className="mock-browser__title">Your brand,<br />open for business<span className="blink">_</span></div>
              <div className="mock-browser__tiles">
                <i style={{ background: '#E8EAFF' }} /><i style={{ background: '#F0EDE6' }} /><i style={{ background: '#FFE4DA' }} />
              </div>
              <div className="mock-browser__status"><span className="live">Live · SSL · Hosted</span><span>Deployed by 24digital</span></div>
            </div>
          </div>
        </div></div>

        <div className="hero__slot hero__slot--b bob-b"><div className="px-b">
          <div className="mock-sms">
            <div className="mock-sms__head">
              <span className="mock-sms__avatar">YB</span>
              <div style={{ flex: 1 }}><div className="mock-sms__name">YRBRND</div><div className="mock-sms__meta">Text message</div></div>
              <span className="mock-sms__meta">now</span>
            </div>
            <div className="mock-sms__bubble">Your passes for Saturday’s fest are confirmed. Show this SMS at Gate 2.</div>
            <div className="mock-sms__mail"><Mail /><span style={{ flex: 1 }}>Newsletter · New drop</span><span className="pill-sent">SENT</span></div>
          </div>
        </div></div>

        <div className="hero__slot hero__slot--c bob-c"><div className="px-c">
          <div className="mock-ticket">
            <div className="mock-ticket__top"><span>CAMPUS TOUR</span><span>STOP 03</span></div>
            <div className="mock-ticket__title">Fest Season ’26</div>
            <div className="mock-ticket__perf" />
            <div className="mock-ticket__foot"><span>Ambassadors</span><span>Sampling</span><span>Main stage</span></div>
          </div>
        </div></div>

        <div className="hero__badge px-d">
          <svg className="hero__badge-ring spin" viewBox="0 0 200 200">
            <defs><path id="badge-circle" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" /></defs>
            <text fontSize="16.5" fontWeight="700" letterSpacing="2.6" fill={BRAND.ink} style={{ fontFamily: 'var(--font-body)' }}>
              <textPath href="#badge-circle">BUILD · HOST · REACH · ACTIVATE · </textPath>
            </text>
          </svg>
          <Mark width={58} ink={BRAND.blue} />
        </div>
      </div>
    </section>
  );
}
