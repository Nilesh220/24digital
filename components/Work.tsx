import { work } from '../lib/content';
import { Arrow, vars } from './ui/Icons';

export default function Work() {
  return (
    <section id="work" className="wrap section">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="h2">Things we’ve shipped.</h2>
        </div>
        <a href="#contact" className="btn btn--ghost" style={{ flex: 'none' }}>Ask for the full deck</a>
      </div>
      <div className="works">
        {work.map((w, i) => (
          <a key={w.tag} href="#contact" className="work reveal" style={vars({ '--d': i })}>
            <div className="work__media">
              {/* Replace with <Image> once you have project shots */}
              <div className={`work__img work__img--${w.tone}`} />
              <span className="work__tag">{w.tag}</span>
              <span className="work__ph">Project image</span>
              <span className="work__go"><Arrow size={20} /></span>
            </div>
            <div className="work__meta"><h3>{w.client}</h3><span>{w.services}</span></div>
            <p className="work__result">{w.result}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
