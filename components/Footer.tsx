import { Logo, BRAND } from './brand/Logo';
import { footerCols, site } from '../lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" aria-label="24digital home"><Logo width={170} ink={BRAND.paper} title="24digital" /></a>
            <p>Websites, apps, hosting, messaging and marketing — built, run and grown by one team.</p>
          </div>
          <div className="footer__cols">
            {footerCols.map((c) => (
              <div key={c.h}>
                <h4>{c.h}</h4>
                <ul>{c.links.map((l) => <li key={l}><a className="flink" href="#services">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big sign-off: the drawn logo at full width */}
        <div className="footer__big" aria-hidden="true">
          <Logo width="100%" ink={BRAND.paper} title="" />
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} 24digital. All rights reserved.</span>
          <nav aria-label="Social">{site.social.map((s) => <a key={s.label} className="flink" href={s.href}>{s.label}</a>)}</nav>
        </div>
      </div>
    </footer>
  );
}
