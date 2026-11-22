import Header from './Header';
import Hero from './Hero';
import Marquee from './Marquee';
import Manifesto from './Manifesto';
import Services from './Services';
import Process from './Process';
import Principles from './Principles';
import Hosting from './Hosting';
import Work from './Work';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';
import ScrollFallback from './ScrollFallback';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Process />
        <Principles />
        <Hosting />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollFallback />
      <FloatingWhatsApp />
    </div>
  );
}
