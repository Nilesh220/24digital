import { process } from '../lib/content';
import { Arrow, vars } from './ui/Icons';
import { VisualBase, VisualProduct, VisualBrand, VisualMoment, VisualHabit } from './ProcessVisuals';

const visuals = [VisualBase, VisualProduct, VisualBrand, VisualMoment, VisualHabit];

/** Dark panel that widens to full-bleed on entry; steps pin and stack as you scroll. */
export default function Process() {
  return (
    <section id="process" className="process expand">
      <div className="wrap section">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow eyebrow--coral">{process.eyebrow}</p>
            <h2 className="h2">{process.title}</h2>
          </div>
          <p className="lede">{process.intro}</p>
        </div>

        <div className="stack">
          {process.steps.map((st, i) => {
            const Visual = visuals[i];
            return (
              <article key={st.num} className={`stack-card stack-card--${st.theme}`} style={vars({ '--i': i })}>
                <div className="stack-card__copy">
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                    <span className="stack-card__num">{st.num}</span>
                    <span className="stack-card__label">{st.label}</span>
                  </div>
                  <div>
                    <h3 className="stack-card__title">{st.title}</h3>
                    <p className="stack-card__text">{st.text}</p>
                    <div className="stack-card__tags">{st.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                </div>
                <div className="stack-card__visual" aria-hidden="true"><Visual /></div>
              </article>
            );
          })}
        </div>

        <div style={{ marginTop: 48 }}>
          <a href="#contact" className="btn btn--line-light">Plan your launch <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
