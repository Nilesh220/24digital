'use client';

import { useState } from 'react';
import { faqs } from '../lib/content';
import { Plus } from './ui/Icons';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="faq">
      <div className="wrap section faq__inner">
        <div className="faq__head reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">Good questions, straight answers.</h2>
        </div>
        <div className="faq__list reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="faq__item">
                <button type="button" className="faq__btn" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq__plus"><Plus /></span>
                </button>
                {isOpen && <p id={`faq-${i}`} className="faq__answer">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
