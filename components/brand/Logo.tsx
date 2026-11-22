/**
 * 24digital logo — custom-drawn, no font required.
 * Geometry: one stroke unit (12) throughout. The 2 tucks under the 4, both
 * diagonals run parallel at 55°, and the coral "pixel" breaks off the 4.
 * Coordinates: baseline y=100, cap/ascender y=8.
 */
import type { SVGProps } from 'react';

export const BRAND = {
  ink: '#121212',
  paper: '#F4F1EA',
  blue: '#2733FF',
  coral: '#FF6A3D',
};

type Colors = { ink?: string; pixel?: string };
type SvgProps = Omit<SVGProps<SVGSVGElement>, 'children'> & { title?: string };

function MarkShapes({ ink, pixel }: Required<Colors>) {
  return (
    <>
      <path d="M6 35 A21 21 0 1 1 44.20 47.05 L11.32 94 L108.17 94" fill="none" stroke={ink} strokeWidth="12" strokeLinejoin="miter" strokeMiterlimit="5" /><polygon points="93.52,8.00 108.17,8.00 68.95,64.00 142.17,64.00 142.17,76.00 45.90,76.00" fill={ink} /><rect x="118.17" y="32" width="12" height="68" fill={ink} /><rect x="118.17" y="8" width="12" height="12" fill={pixel} />
    </>
  );
}

function WordShapes({ ink, dot1, dot2 }: { ink: string; dot1: string; dot2: string }) {
  return (
    <>
      <g fill="none" stroke={ink} strokeWidth="12"><circle cx="29.00" cy="71" r="23.0" /><path d="M53.00 8 L53.00 100" /><path d="M77.00 42 L77.00 100" /><circle cx="123.00" cy="71" r="23.0" /><path d="M147.00 42 L147.00 104 A24.0 24.0 0 0 1 100.00 104" /><path d="M171.00 42 L171.00 100" /><path d="M204.00 18 L204.00 100" /><path d="M190.00 48.0 L219.00 48.0" /><circle cx="254.00" cy="71" r="23.0" /><path d="M278.00 42 L278.00 100" /><path d="M302.00 8 L302.00 100" /></g><rect x="71.00" y="19" width="12" height="12" fill={dot1} /><rect x="165.00" y="19" width="12" height="12" fill={dot2} />
    </>
  );
}

/** Symbol only (the "24" with pixel). */
export function Mark({ ink = BRAND.ink, pixel = BRAND.coral, title = '24digital', ...rest }: SvgProps & Colors) {
  return (
    <svg viewBox="-4 4 150.2 100" role="img" aria-label={title} {...rest}>
      <MarkShapes ink={ink} pixel={pixel} />
    </svg>
  );
}

/** "digital" wordmark only. Coral dot on the second i by default. */
export function Wordmark({ ink = BRAND.ink, accent = BRAND.coral, title = 'digital', ...rest }: SvgProps & { ink?: string; accent?: string }) {
  return (
    <svg viewBox="-4 0 316.0 140" role="img" aria-label={title} {...rest}>
      <WordShapes ink={ink} dot1={ink} dot2={accent} />
    </svg>
  );
}

/** Primary horizontal lockup: mark + wordmark. */
export function Logo({ ink = BRAND.ink, pixel = BRAND.coral, title = '24digital', ...rest }: SvgProps & Colors) {
  return (
    <svg viewBox="-4 0 492.2 140" role="img" aria-label={title} {...rest}>
      <MarkShapes ink={ink} pixel={pixel} />
      <g transform="translate(176.17,0)">
        <WordShapes ink={ink} dot1={ink} dot2={ink} />
      </g>
    </svg>
  );
}
