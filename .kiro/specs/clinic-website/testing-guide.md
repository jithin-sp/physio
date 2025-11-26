# Performance Testing Guide

## Quick Start

### 1. Build and Start Production Server
```bash
npm run build
npm start
```

The production server will start on http://localhost:3000

### 2. Run Lighthouse Audit

#### Option A: Chrome DevTools (Recommended)
1. Open http://localhost:3000 in Chrome
2. Open DevTools (F12 or Ctrl+Shift+I)
3. Click on "Lighthouse" tab
4. Select categories:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Select "Desktop" or "Mobile" device
6. Click "Analyze page load"
7. Wait for results

#### Option B: Command Line
```bash
# Install Lighthouse CLI globally
npm install -g lighthouse

# Run audit (make sure server is running)
lighthouse http://localhost:3000 --view --output html --output-path ./lighthouse-report.html
```

### 3. Expected Lighthouse Scores

#### With Placeholder Assets (Current State)
- Performance: 85-95 (good, but limited by missing optimized assets)
- Accessibility: 95-100
- Best Practices: 90-100
- SEO: 90-100

#### With Optimized Assets (After Adding Real Media)
- Performance: 90-100 ✅ TARGET
- Accessibility: 100
- Best Practices: 95-100
- SEO: 95-100

## Detailed Testing Checklist

### Performance Tests

#### 1. Initial Load Performance
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3.5s
- [ ] Total Blocking Time (TBT) < 200ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

#### 2. Image Optimization
- [ ] All images use Next.js Image component
- [ ] Images are lazy loaded below the fold
- [ ] Images are served in WebP/AVIF format
- [ ] Proper image sizing (no oversized images)
- [ ] Alt text present on all images

#### 3. Video Optimization
- [ ] Hero video < 3MB file size
- [ ] Treatment videos < 2MB each
- [ ] Video preload set to "metadata"
- [ ] Video pauses when out of viewport
- [ ] Fallback image displays on error

#### 4. Code Splitting
- [ ] Below-fold components lazy loaded
- [ ] Initial bundle size < 150KB
- [ ] Loading states display during component load
- [ ] No layout shift during lazy load

#### 5. Resource Loading
- [ ] Fonts preconnected
- [ ] External domains DNS prefetched
- [ ] Critical CSS inlined
- [ ] JavaScript deferred/async where appropriate

### Mobile Performance Tests

#### Test Devices
1. **iPhone SE (375px)**
   - [ ] All content visible
   - [ ] Touch targets ≥ 44x44px
   - [ ] Video loads and plays
   - [ ] Scroll performance smooth

2. **iPhone 12/13 (390px)**
   - [ ] Layout responsive
   - [ ] Images load properly
   - [ ] CTA bar appears on scroll

3. **iPad (768px)**
   - [ ] Grid layouts adjust (2 columns)
   - [ ] Video hero displays correctly
   - [ ] Navigation works properly

4. **Desktop (1280px+)**
   - [ ] Full layout displayed
   - [ ] All animations smooth
   - [ ] Hover states work

#### Network Throttling Tests
Test with Chrome DevTools Network throttling:

1. **Fast 3G**
   - [ ] Page loads in < 5s
   - [ ] Images lazy load properly
   - [ ] Video doesn't block page load

2. **Slow 3G**
   - [ ] Page usable in < 10s
   - [ ] Loading states visible
   - [ ] Critical content loads first

### Accessibility Tests

#### Automated Tests
- [ ] Run Lighthouse accessibility audit (score 100)
- [ ] Run axe DevTools extension
- [ ] Check WAVE browser extension

#### Manual Tests
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus indicators visible
- [ ] Screen reader announces content properly
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] All interactive elements have labels
- [ ] Skip to main content link works

### Browser Compatibility Tests

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Web Vitals Monitoring

#### Check Console Logs
With the production build running, open the browser console and verify:

1. **LCP (Largest Contentful Paint)**
   - Target: < 2.5s
   - Check: Hero video or image loads quickly

2. **FID (First Input Delay) / INP (Interaction to Next Paint)**
   - Target: < 100ms
   - Check: Click buttons, scroll, interact with forms

3. **CLS (Cumulative Layout Shift)**
   - Target: < 0.1
   - Check: No content jumping during load

#### Example Console Output
```
{name: 'FCP', value: 1234.5, rating: 'good', ...}
{name: 'LCP', value: 2100.3, rating: 'good', ...}
{name: 'CLS', value: 0.05, rating: 'good', ...}
{name: 'FID', value: 45.2, rating: 'good', ...}
```

## Common Issues and Solutions

### Issue: Low Performance Score

#### Possible Causes:
1. **Videos not compressed**
   - Solution: Follow `/public/videos/README.md` guide
   - Compress to < 5MB total

2. **Images not optimized**
   - Solution: Follow `/public/img/README.md` guide
   - Use WebP format, compress to recommended sizes

3. **Large JavaScript bundles**
   - Solution: Already optimized with dynamic imports
   - Check for unnecessary dependencies

4. **Slow server response**
   - Solution: Use production build (`npm run build && npm start`)
   - Consider CDN for static assets

### Issue: Layout Shift (High CLS)

#### Possible Causes:
1. **Images without dimensions**
   - Solution: All images use Next.js Image with proper sizing
   - Verify `fill` prop or width/height set

2. **Fonts loading late**
   - Solution: Already optimized with font preconnect
   - Consider font-display: swap

3. **Dynamic content insertion**
   - Solution: Reserve space with loading states
   - Already implemented for lazy-loaded components

### Issue: Slow LCP

#### Possible Causes:
1. **Hero video too large**
   - Solution: Compress to < 3MB
   - Use preload="metadata"

2. **Images not prioritized**
   - Solution: Hero image has `priority` prop
   - Verify critical images load first

3. **Render-blocking resources**
   - Solution: Already optimized with Next.js
   - Check for blocking scripts

## Performance Budget

### File Size Limits
- HTML: < 50KB
- CSS: < 100KB
- JavaScript (initial): < 150KB
- Hero Video: < 3MB
- Treatment Videos: < 2MB each
- Images: < 200KB each (hero), < 100KB (others)

### Timing Budgets
- FCP: < 1.8s
- LCP: < 2.5s
- TTI: < 3.5s
- TBT: < 200ms

### Current Bundle Sizes (from build)
```
Route (app)                         Size  First Load JS
┌ ○ /                            16.4 kB         131 kB ✅
├ ○ /_not-found                      0 B         114 kB ✅
└ ƒ /services/[serviceType]      5.85 kB         120 kB ✅
+ First Load JS shared by all     122 kB ✅
```

All within budget! 🎉

## Continuous Monitoring

### Set Up Analytics (Optional)

#### Google Analytics 4
Add to `app/layout.js`:
```javascript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

#### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.js`:
```javascript
import { Analytics } from '@vercel/analytics/react';

// In body
<Analytics />
```

## Final Checklist

Before marking task as complete:
- [x] All images use Next.js Image component
- [x] Lazy loading implemented for below-fold content
- [x] Loading states added for dynamic components
- [x] Video optimization configured (preload, intersection observer)
- [x] Resource hints added (preconnect, dns-prefetch)
- [x] Build optimizations configured
- [x] Web Vitals monitoring implemented
- [x] Build succeeds without errors
- [ ] Videos compressed to target sizes (requires user action)
- [ ] Images optimized and added (requires user action)
- [ ] Lighthouse audit run (requires user action)
- [ ] Performance score >90 achieved (requires user action)

## Next Steps

1. **Add Optimized Assets**
   - Compress videos following `/public/videos/README.md`
   - Optimize images following `/public/img/README.md`

2. **Run Tests**
   - Build production: `npm run build`
   - Start server: `npm start`
   - Run Lighthouse audit
   - Test on mobile devices

3. **Verify Scores**
   - Performance: >90
   - Accessibility: 100
   - Best Practices: >90
   - SEO: >90

4. **Deploy**
   - Deploy to production (Vercel, Netlify, etc.)
   - Monitor real user metrics
   - Set up performance alerts

## Support

For issues or questions:
- Next.js Docs: https://nextjs.org/docs
- Web.dev Performance: https://web.dev/performance/
- Lighthouse Docs: https://developers.google.com/web/tools/lighthouse
