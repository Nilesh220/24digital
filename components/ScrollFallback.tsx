'use client';

import { useEffect } from 'react';

/**
 * Scroll effects are pure CSS (animation-timeline). Browsers without support
 * (Firefox today) get a simple IntersectionObserver reveal instead.
 */
export default function ScrollFallback() {
  useEffect(() => {
    if (typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()')) return;
    const root = document.documentElement;
    root.classList.add('no-sda');
    const els = document.querySelectorAll('.reveal, .stack-card');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
      { rootMargin: '0px 0px -10% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => { io.disconnect(); root.classList.remove('no-sda'); };
  }, []);
  return null;
}
