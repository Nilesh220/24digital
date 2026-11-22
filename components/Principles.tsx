import { principles } from '../lib/content';
import { vars } from './ui/Icons';

export default function Principles() {
  return (
    <section className="wrap section">
      <div className="reveal">
        <p className="eyebrow">How we work</p>
        <h2 className="h2" style={{ maxWidth: 760 }}>Three things we don’t compromise on.</h2>
      </div>
      <div className="principles__list">
        {principles.map((p, i) => (
          <div key={p.num} className="prow reveal" style={vars({ '--d': i })}>
            <span className="prow__num">{p.num}</span>
            <h3 className="prow__title">{p.title}</h3>
            <p className="prow__text">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
