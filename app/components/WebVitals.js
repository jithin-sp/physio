'use client';

import { useEffect } from 'react';

export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production
  // Example: Send to Google Analytics, Vercel Analytics, etc.
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Import web-vitals library dynamically
    import('web-vitals').then((webVitals) => {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = webVitals;
      onCLS(reportWebVitals);
      onFCP(reportWebVitals);
      onLCP(reportWebVitals);
      onTTFB(reportWebVitals);
      onINP(reportWebVitals);
      
      // onFID is deprecated, but support it if available for older versions
      if (webVitals.onFID) {
        webVitals.onFID(reportWebVitals);
      }
    }).catch((err) => {
      console.error('Failed to load web-vitals:', err);
    });
  }, []);

  return null;
}
