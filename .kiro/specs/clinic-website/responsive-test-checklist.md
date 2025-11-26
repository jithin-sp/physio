# Responsive Testing Checklist

## How to Test

1. Open http://localhost:3000 in your browser
2. Open DevTools (F12)
3. Enable Device Toolbar (Ctrl+Shift+M or Cmd+Shift+M)
4. Follow the checklist below for each viewport size

---

## Mobile Testing (375px width)

### Setup
- Set viewport to 375px × 667px (iPhone SE)
- Refresh page

### Visual Checks
- [ ] Navbar: Fixed at top, heading color background, white text
- [ ] VideoHero: 60vh height, overlay text visible and centered
- [ ] ServicesSection: Single column (cards stack vertically)
- [ ] DoctorsSection: Single column (cards stack vertically)
- [ ] RequestCallSection: Form full width
- [ ] TreatmentVideos: Horizontal scroll working
- [ ] InstagramSection: Centered content
- [ ] BookAppointmentButton: Full width
- [ ] Footer: Single column layout
- [ ] CTABar: Hidden initially

### Interaction Checks
- [ ] Scroll down past hero section
- [ ] CTABar slides in from bottom
- [ ] CTABar has two equal-width buttons
- [ ] Click Call button (should trigger tel: link)
- [ ] Click WhatsApp button (should open WhatsApp)
- [ ] Scroll back to top
- [ ] CTABar slides out

### Touch Target Checks
- [ ] CTABar buttons: Each ~187px × 64px (exceeds 44×44px)
- [ ] Service cards: Clickable, full width
- [ ] Doctor cards: Clickable, full width
- [ ] All buttons: Minimum 44px height

---

## Mobile Testing (414px width)

### Setup
- Set viewport to 414px × 896px (iPhone Pro Max)
- Refresh page

### Visual Checks
- [ ] All layouts same as 375px (single column)
- [ ] Components scale proportionally
- [ ] CTABar buttons: Each ~207px × 64px

### Interaction Checks
- [ ] Scroll behavior same as 375px
- [ ] CTABar triggers correctly
- [ ] All touch targets adequate

---

## Tablet Testing (768px width)

### Setup
- Set viewport to 768px × 1024px (iPad Portrait)
- Refresh page

### Visual Checks
- [ ] Navbar: 80px height (desktop size)
- [ ] VideoHero: 80vh height, larger overlay text (3.5rem)
- [ ] ServicesSection: Two column grid (3 rows of 2)
- [ ] DoctorsSection: Two column grid (2 rows of 2)
- [ ] RequestCallSection: Form centered with max-width
- [ ] TreatmentVideos: Larger cards (320px)
- [ ] BookAppointmentButton: Auto width, centered (not full width)
- [ ] Footer: Three column layout

### Interaction Checks
- [ ] Scroll past hero (80vh)
- [ ] CTABar appears correctly
- [ ] CTABar buttons: Each ~384px × 64px
- [ ] Hover effects working on cards
- [ ] All interactive elements responsive

---

## Tablet Testing (1024px width)

### Setup
- Set viewport to 1024px × 768px (iPad Landscape)
- Refresh page

### Visual Checks
- [ ] ServicesSection: Three column grid (2 rows of 3)
- [ ] DoctorsSection: Four column grid (1 row of 4)
- [ ] All other components scale appropriately
- [ ] CTABar buttons: Each ~512px × 64px

### Interaction Checks
- [ ] Scroll behavior smooth
- [ ] CTABar triggers at 80vh
- [ ] Hover effects on all cards working
- [ ] Focus indicators visible

---

## Desktop Testing (1280px width)

### Setup
- Set viewport to 1280px × 720px
- Refresh page

### Visual Checks
- [ ] All content centered with max-width containers
- [ ] ServicesSection: Three column grid, optimal spacing
- [ ] DoctorsSection: Four column grid, excellent layout
- [ ] VideoHero: 80vh height, full width
- [ ] CTABar buttons: Each ~640px × 64px

### Interaction Checks
- [ ] Hover effects on service cards (border, shadow, lift)
- [ ] Hover effects on doctor cards (scale)
- [ ] Hover effects on CTABar buttons (color change)
- [ ] Hover effects on Instagram button (scale)
- [ ] Hover effects on Book Appointment button (lift)
- [ ] Keyboard navigation working (Tab through elements)
- [ ] Focus indicators visible (3px theme color outline)

---

## Desktop Testing (1920px width)

### Setup
- Set viewport to 1920px × 1080px
- Refresh page

### Visual Checks
- [ ] Content properly centered (not stretched)
- [ ] Max-width containers working (max-w-7xl = 1280px)
- [ ] VideoHero: Full width maintained
- [ ] CTABar buttons: Each ~960px × 64px
- [ ] No excessive whitespace or stretching

---

## Scroll Behavior Testing (All Viewports)

### Mobile (375px, 414px)
- [ ] Hero height: 60vh
- [ ] Scroll down slowly
- [ ] CTABar appears after passing 60vh
- [ ] Animation smooth (300ms slide-in)
- [ ] Scroll back up
- [ ] CTABar disappears smoothly

### Tablet/Desktop (768px+)
- [ ] Hero height: 80vh
- [ ] Scroll down slowly
- [ ] CTABar appears after passing 80vh
- [ ] Animation smooth
- [ ] Scroll back up
- [ ] CTABar disappears smoothly

### Edge Cases
- [ ] Refresh page while scrolled down (CTABar shows immediately)
- [ ] Rapid scrolling (no flickering)
- [ ] Resize browser while scrolled (CTABar recalculates)

---

## Touch Target Verification

### Measurement Tool
Use DevTools to measure element dimensions:
1. Right-click element → Inspect
2. Check computed dimensions in Styles panel
3. Verify width × height ≥ 44px × 44px

### Elements to Verify
- [ ] CTABar Call button: ≥ 44×44px ✓
- [ ] CTABar WhatsApp button: ≥ 44×44px ✓
- [ ] Service cards: ≥ 44×44px ✓
- [ ] Doctor cards: ≥ 44×44px ✓
- [ ] Form submit button: ≥ 44×44px ✓
- [ ] Instagram follow button: ≥ 44×44px ✓
- [ ] Book appointment button: ≥ 44×44px ✓
- [ ] Footer links: ≥ 44×44px ✓

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Press Tab to navigate through page
- [ ] All interactive elements reachable
- [ ] Focus indicators visible (3px outline)
- [ ] Skip to main content link appears on Tab
- [ ] Logical tab order maintained

### Screen Reader Testing (Optional)
- [ ] Enable screen reader (NVDA/JAWS/VoiceOver)
- [ ] Navigate through page
- [ ] All images have alt text
- [ ] ARIA labels on icon buttons
- [ ] Proper heading hierarchy

### Color Contrast
- [ ] Use DevTools Accessibility panel
- [ ] Check contrast ratios
- [ ] All text meets WCAG AA (4.5:1 minimum)

---

## Performance Testing

### Lighthouse Audit
1. Open DevTools → Lighthouse tab
2. Select "Mobile" device
3. Run audit
4. Verify scores:
   - [ ] Performance: ≥ 90
   - [ ] Accessibility: 100
   - [ ] Best Practices: ≥ 90
   - [ ] SEO: ≥ 90

5. Select "Desktop" device
6. Run audit
7. Verify scores:
   - [ ] Performance: ≥ 90
   - [ ] Accessibility: 100
   - [ ] Best Practices: ≥ 90
   - [ ] SEO: ≥ 90

### Network Throttling
- [ ] Open DevTools → Network tab
- [ ] Set throttling to "Slow 3G"
- [ ] Refresh page
- [ ] Verify page loads in < 3 seconds
- [ ] Video lazy loads on mobile
- [ ] Below-fold components lazy load

---

## Cross-Browser Testing

### Chrome
- [ ] All layouts render correctly
- [ ] Video autoplay working
- [ ] Animations smooth
- [ ] Touch targets accurate

### Firefox
- [ ] All components render correctly
- [ ] Grid layouts working
- [ ] Animations functional
- [ ] No layout issues

### Safari (if available)
- [ ] Video playback working
- [ ] Scroll behavior smooth
- [ ] Touch targets responsive
- [ ] Gradient backgrounds correct

### Edge
- [ ] Full compatibility
- [ ] All features working
- [ ] Performance good

---

## Final Verification

### All Requirements Met
- [ ] Requirement 1.1: Mobile-first design ✓
- [ ] Requirement 1.2: Single-column layouts on mobile ✓
- [ ] Requirement 1.3: Touch-friendly elements (44×44px minimum) ✓
- [ ] Requirement 1.4: Loads within 3 seconds on 3G ✓

### Test Summary
- [ ] Mobile (375px, 414px): All tests passed
- [ ] Tablet (768px, 1024px): All tests passed
- [ ] Desktop (1280px+): All tests passed
- [ ] Touch targets: All verified ≥ 44×44px
- [ ] Scroll behavior: CTABar triggering correct
- [ ] Accessibility: Keyboard navigation working
- [ ] Performance: Lighthouse scores meet targets

---

## Notes

Record any issues or observations here:

```
[Add notes during testing]
```

---

**Testing Instructions**: 
1. Work through each section systematically
2. Check off items as you verify them
3. Note any issues in the Notes section
4. Ensure all requirements are met before marking task complete
