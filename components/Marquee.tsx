import { marquee } from '../lib/content';

export default function Marquee() {
  const items = [...marquee, ...marquee]; // doubled for a seamless loop
  return (
    <div className="marquee" aria-label="Our services">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span key={i} className="marquee__item" aria-hidden={i >= marquee.length}>{t}</span>
        ))}
      </div>
    </div>
  );
}
