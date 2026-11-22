import { Logo } from './brand/Logo';
import { Arrow } from './ui/Icons';
import { nav } from '../lib/content';

export default function Header() {
  return (
    <header className="header">
      <div className="progress" aria-hidden="true" />
      <div className="wrap header__inner">
        <a href="#top" className="header__logo" aria-label="24digital home">
          <Logo width={150} title="24digital" />
        </a>
        <nav className="header__nav" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} className="navlink" href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--ink btn--sm">Start a project <Arrow /></a>
      </div>
    </header>
  );
}
