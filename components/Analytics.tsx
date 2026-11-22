'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Analytics() {
  const [consentGranted, setConsentGranted] = useState(false);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    function checkConsent() {
      try {
        const stored = localStorage.getItem('24digital_consent');
        if (stored === 'granted') {
          setConsentGranted(true);
        }
      } catch {
        // Ignore
      }
    }

    checkConsent();
    window.addEventListener('cookie_consent_updated', checkConsent);
    return () => window.removeEventListener('cookie_consent_updated', checkConsent);
  }, []);

  // Global event delegation for tracking phone & whatsapp clicks
  useEffect(() => {
    if (!consentGranted) return;

    function handleGlobalClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';

      // Track Phone clicks
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '');
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
          (window as unknown as { gtag: Function }).gtag('event', 'phone_click', {
            event_category: 'contact',
            event_label: phone,
          });
        }
      }

      // Track WhatsApp clicks
      if (href.includes('wa.me')) {
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
          (window as unknown as { gtag: Function }).gtag('event', 'whatsapp_click', {
            event_category: 'contact',
            event_label: href,
          });
        }
      }
    }

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [consentGranted]);

  if (!consentGranted) return null;

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel */}
      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
