import type { CSSProperties } from 'react';

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Check({ size = 18, color = 'var(--blue)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Mail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Search() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function WhatsApp({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.42C8.76 7.42 8.45 7.49 8.19 7.78C7.93 8.06 7.19 8.75 7.19 10.16C7.19 11.57 8.22 12.93 8.36 13.12C8.5 13.31 10.35 16.17 13.2 17.4C15.57 18.42 16.05 18.22 16.57 18.17C17.08 18.12 18.23 17.49 18.47 16.82C18.71 16.15 18.71 15.58 18.64 15.46C18.57 15.34 18.38 15.27 18.09 15.13C17.81 14.99 16.42 14.31 16.16 14.21C15.9 14.12 15.71 14.07 15.52 14.36C15.33 14.65 14.79 15.28 14.63 15.46C14.46 15.65 14.3 15.67 14.01 15.53C13.73 15.39 12.82 15.09 11.75 14.14C10.91 13.39 10.35 12.47 10.21 12.23C10.07 11.99 10.19 11.86 10.34 11.72C10.47 11.59 10.63 11.38 10.77 11.21C10.91 11.05 10.96 10.93 11.05 10.74C11.15 10.55 11.1 10.38 11.03 10.24C10.96 10.1 10.39 8.7 10.15 8.13C9.92 7.57 9.68 7.65 9.5 7.64C9.33 7.63 9.14 7.63 8.95 7.42Z" />
    </svg>
  );
}

/** Typed helper for CSS custom properties in style props. */
export const vars = (v: Record<string, string | number>) => v as CSSProperties;
