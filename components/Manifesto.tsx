import { manifesto } from '../lib/content';
import { vars } from './ui/Icons';

/** Pinned statement whose words light up one by one as you scroll. */
export default function Manifesto() {
  const words = manifesto.split(' ');
  return (
    <section className="manifesto" aria-label="Why 24digital">
      <div className="manifesto__pin">
        <div className="wrap">
          <p className="eyebrow">Why 24digital</p>
          <p className="manifesto__text">
            {words.map((w, i) => {
              const accent = w.startsWith('*');
              return (
                <span key={i} className={accent ? 'mw mw--accent' : 'mw'} style={vars({ '--i': i, '--n': words.length })}>
                  {accent ? w.slice(1) : w}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
