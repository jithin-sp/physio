# Design Document

## Overview

The Eternal Physios clinic website is a mobile-first Next.js application built with React 19 and Tailwind CSS 4. The design prioritizes accessibility, fast loading times, and intuitive navigation for users seeking physiotherapy services. The website features a video hero section, scroll-triggered CTA bar, service cards, and doctor profiles with a calming green and white color scheme.

## Architecture

### Technology Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4 with custom color configuration
- **Deployment**: Optimized for Vercel or similar platforms
- **Video**: HTML5 video with fallback image support

### Component Hierarchy

```
app/
├── layout.js (Root layout with metadata and fonts)
├── page.js (Homepage with all sections)
├── components/
│   ├── Navbar.js
│   ├── VideoHero.js
│   ├── CTABar.js
│   ├── ServiceCard.js
│   ├── ServicesSection.js
│   ├── DoctorCard.js
│   ├── DoctorsSection.js
│   ├── RequestCallSection.js
│   ├── TreatmentVideos.js
│   ├── InstagramSection.js
│   ├── BookAppointmentButton.js
│   └── Footer.js
├── services/
│   └── [serviceType]/
│       └── page.js (Dynamic service pages)
└── globals.css (Tailwind configuration and custom styles)
```

## Components and Interfaces

### 1. Navbar Component

**Purpose**: Display clinic branding and navigation links

**Props**: None (static for MVP)

**Styling**:
- Background: `#395756` (heading color)
- Text: White
- Fixed position at top
- Mobile-first responsive padding
- Height: 64px on mobile, 80px on desktop

**Behavior**:
- Always visible at top of viewport
- Z-index: 50 to stay above other content

### 2. VideoHero Component

**Purpose**: Display video banner with overlay text

**Props**:
```javascript
{
  videoSrc: string,        // Path to video file
  fallbackImage: string,   // Path to fallback image
  overlayText: string      // "God Bless. We Heal."
}
```

**Styling**:
- Full viewport width
- Height: 60vh on mobile, 80vh on desktop
- Overlay text: `#395756` (heading color)
- Overlay text size: 2rem mobile, 3.5rem desktop
- Semi-transparent dark overlay (rgba(0,0,0,0.3)) for text readability

**Behavior**:
- Video autoplay, muted, loop
- Lazy load video on mobile for performance
- Display fallback image if video fails to load
- Intersection Observer to pause video when out of view

### 3. CTABar Component

**Purpose**: Fixed bottom bar with call and WhatsApp buttons

**Props**:
```javascript
{
  phoneNumber: string,     // Clinic phone number
  whatsappNumber: string,  // WhatsApp contact number
  isVisible: boolean       // Controlled by scroll position
}
```

**Styling**:
- Fixed position at bottom
- Width: 100%
- Height: 64px
- Background: White with shadow
- Two equal-width buttons (50% each)
- Call button: `#00C49A` background
- WhatsApp button: `#25D366` (WhatsApp brand color)
- White text on both buttons
- Slide-in animation from bottom

**Behavior**:
- Hidden initially
- Slides in when user scrolls past hero section (using scroll threshold)
- Call button: `tel:` link
- WhatsApp button: `https://wa.me/` link
- Z-index: 40 to stay above content but below navbar

### 4. ServiceCard Component

**Purpose**: Clickable card representing a physiotherapy service

**Props**:
```javascript
{
  title: string,           // Service name
  description: string,     // Brief description
  icon: string,           // Icon/image path
  slug: string            // URL slug for service page
}
```

**Styling**:
- Background: White
- Border: 2px solid `#00C49A` on hover
- Border-radius: 12px
- Padding: 24px
- Box shadow on hover
- Transition: all 0.3s ease
- Min-height: 200px
- Cursor: pointer

**Behavior**:
- Navigate to `/services/[slug]` on click
- Hover state: lift effect with shadow
- Touch feedback on mobile

### 5. ServicesSection Component

**Purpose**: Container for service cards grid

**Props**:
```javascript
{
  services: Array<{
    title: string,
    description: string,
    icon: string,
    slug: string
  }>
}
```

**Styling**:
- Background: `#FEFCFB`
- Padding: 48px mobile, 80px desktop
- Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
- Gap: 24px

### 6. DoctorCard Component

**Purpose**: Display doctor profile information

**Props**:
```javascript
{
  name: string,            // Doctor name
  designation: string,     // Professional title
  image: string,          // Profile image path
  bio: string,            // Optional expanded bio
  onClick: function       // Handler for expand/modal
}
```

**Styling**:
- Background: White
- Border-radius: 12px
- Padding: 20px
- Box shadow
- Image: Circular, 120px diameter
- Name: `#395756` (heading color), 1.5rem
- Designation: `#6F9CEB` (blue), 1rem
- Hover: subtle scale transform

**Behavior**:
- Click to expand or open modal with full bio
- Smooth transition for expand/collapse

### 7. DoctorsSection Component

**Purpose**: Container for doctor profiles

**Props**:
```javascript
{
  doctors: Array<{
    name: string,
    designation: string,
    image: string,
    bio: string
  }>
}
```

**Styling**:
- Background: White
- Padding: 48px mobile, 80px desktop
- Grid layout: 1 column mobile, 2 columns tablet, 4 columns desktop
- Gap: 32px
- Section heading: `#395756`, 2.5rem

### 8. RequestCallSection Component

**Purpose**: Form section for users to request a callback

**Props**:
```javascript
{
  onSubmit: function       // Form submission handler
}
```

**Styling**:
- Background: `#FEFCFB`
- Padding: 48px mobile, 80px desktop
- Centered form container, max-width: 600px
- Input fields: White background, border `#395756`
- Submit button: `#00C49A` background, white text
- Button hover: Darken to `#00B38A`
- Section heading: `#395756`, 2rem

**Behavior**:
- Form fields: Name, Phone Number, Preferred Time
- Client-side validation
- Submit triggers callback request
- Success message display
- Form reset after submission

### 9. TreatmentVideos Component

**Purpose**: Horizontal scrollable gallery of treatment videos (portrait orientation)

**Props**:
```javascript
{
  videos: Array<{
    id: string,
    thumbnail: string,
    videoUrl: string,
    title: string
  }>
}
```

**Styling**:
- Background: White
- Padding: 48px mobile, 80px desktop
- Horizontal scroll container with snap points
- Video cards: Portrait aspect ratio (9:16)
- Card width: 280px mobile, 320px desktop
- Gap: 16px between cards
- Scrollbar: Hidden on mobile, styled on desktop
- Section heading: `#395756`, 2rem

**Behavior**:
- Horizontal scroll with touch/mouse drag
- Snap to card on scroll stop
- Click video card to play in modal/fullscreen
- Lazy load videos as they come into view
- Touch-friendly scroll on mobile

### 10. InstagramSection Component

**Purpose**: Call-to-action to follow clinic on Instagram

**Props**:
```javascript
{
  instagramHandle: string,  // @eternalphysios
  instagramUrl: string      // Full Instagram URL
}
```

**Styling**:
- Background: Gradient from `#00C49A` to `#395756`
- Padding: 64px mobile, 96px desktop
- Centered content
- Instagram icon: 64px, white
- Text: White, 1.5rem
- Button: White background, `#395756` text
- Button hover: Scale transform

**Behavior**:
- Click opens Instagram in new tab
- Instagram icon animation on hover
- Responsive text sizing

### 11. BookAppointmentButton Component

**Purpose**: Prominent CTA button for booking appointments

**Props**:
```javascript
{
  onClick: function,        // Handler for booking action
  variant: string          // 'primary' | 'secondary'
}
```

**Styling**:
- Background: `#00C49A`
- Text: White, 1.25rem, bold
- Padding: 16px 48px
- Border-radius: 50px (pill shape)
- Box shadow: Large, elevated appearance
- Hover: Lift effect with increased shadow
- Width: Full width mobile, auto desktop
- Centered in section

**Behavior**:
- Click triggers booking flow (form/modal)
- Pulse animation to draw attention
- Smooth hover transitions

### 12. Footer Component

**Purpose**: Site footer with contact info and links

**Props**:
```javascript
{
  contact: {
    phone: string,
    email: string,
    address: string
  },
  socialLinks: {
    instagram: string,
    facebook: string,
    whatsapp: string
  }
}
```

**Styling**:
- Background: `#395756`
- Text: White
- Padding: 48px mobile, 64px desktop
- Grid layout: 1 column mobile, 3 columns desktop
- Sections: About, Contact, Social Links
- Links: Underline on hover
- Copyright text: Smaller, centered at bottom

**Behavior**:
- Responsive column layout
- Social icons link to respective platforms
- Email and phone as clickable links
- Smooth hover effects on links

## Data Models

### Service Model

```javascript
{
  id: string,
  title: string,
  description: string,
  icon: string,
  slug: string,
  fullDescription: string,  // For service detail page
  benefits: Array<string>,
  pricing: string           // Displayed in #6F9CEB
}
```

### Doctor Model

```javascript
{
  id: string,
  name: string,
  designation: string,
  image: string,
  bio: string,
  qualifications: Array<string>,
  specializations: Array<string>
}
```

### Contact Model

```javascript
{
  phoneNumber: string,      // Format: +91XXXXXXXXXX
  whatsappNumber: string,   // Format: +91XXXXXXXXXX
  email: string,
  address: string
}
```

### Video Model

```javascript
{
  id: string,
  title: string,
  thumbnail: string,        // Thumbnail image path
  videoUrl: string,         // Video file path or URL
  duration: string,         // e.g., "2:30"
  description: string
}
```

### CallbackRequest Model

```javascript
{
  name: string,
  phoneNumber: string,
  preferredTime: string,    // e.g., "Morning", "Afternoon", "Evening"
  timestamp: Date
}
```

## Error Handling

### Video Loading Errors

- Implement error boundary for video component
- Fallback to static image if video fails
- Log errors to console for debugging
- Display user-friendly message if needed

### Image Loading Errors

- Use Next.js Image component with built-in error handling
- Provide placeholder images for doctor profiles
- Alt text for all images (accessibility)

### Navigation Errors

- 404 page for invalid service routes
- Graceful handling of missing data
- Loading states for dynamic content

### Network Errors

- Optimize for slow connections
- Lazy load images below fold
- Compress video files
- Implement service worker for offline support (future enhancement)

## Testing Strategy

### Component Testing

- Unit tests for each component using React Testing Library
- Test props rendering correctly
- Test click handlers and navigation
- Test responsive behavior with different viewport sizes

### Integration Testing

- Test scroll behavior triggering CTA bar
- Test video autoplay and fallback
- Test navigation between pages
- Test WhatsApp and call links

### Accessibility Testing

- WCAG AA compliance verification
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast validation
- Touch target size verification (minimum 44x44px)

### Performance Testing

- Lighthouse score targets:
  - Performance: >90
  - Accessibility: 100
  - Best Practices: >90
  - SEO: >90
- Core Web Vitals monitoring
- Mobile performance optimization

### Browser Testing

- Chrome (latest)
- Safari (iOS and macOS)
- Firefox (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Design Tokens

### Colors

```css
--color-background: #FEFCFB;
--color-heading: #395756;
--color-theme: #00C49A;
--color-blue: #6F9CEB;
--color-white: #FFFFFF;
--color-text: #333333;
--color-whatsapp: #25D366;
```

### Typography

```css
--font-heading: 'Geist Sans', system-ui, sans-serif;
--font-body: 'Geist Sans', system-ui, sans-serif;
--font-size-h1: 2.5rem;      /* 40px */
--font-size-h2: 2rem;        /* 32px */
--font-size-h3: 1.5rem;      /* 24px */
--font-size-body: 1rem;      /* 16px */
--font-size-small: 0.875rem; /* 14px */
```

### Spacing

```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-2xl: 64px;
--spacing-3xl: 80px;
```

### Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

## Responsive Design Strategy

### Mobile First Approach

1. Design for 375px width first (iPhone SE)
2. Scale up to tablet (768px)
3. Optimize for desktop (1024px+)

### Key Responsive Behaviors

- **Navbar**: Single row on all sizes, hamburger menu for future navigation expansion
- **Video Hero**: Reduce height on mobile, adjust text size
- **CTA Bar**: Always full width, buttons stack if needed on very small screens
- **Service Cards**: 1 column mobile → 2 columns tablet → 3 columns desktop
- **Doctor Cards**: 1 column mobile → 2 columns tablet → 4 columns desktop
- **Request Call Form**: Full width mobile, centered with max-width on desktop
- **Treatment Videos**: Horizontal scroll on all sizes, smaller cards on mobile
- **Instagram Section**: Full width with centered content on all sizes
- **Book Appointment Button**: Full width mobile, auto width centered on desktop
- **Footer**: 1 column mobile → 3 columns desktop
- **Typography**: Scale down 20% on mobile
- **Spacing**: Reduce padding by 40% on mobile

## Performance Optimizations

1. **Video Optimization**:
   - Compress video to <5MB
   - Use WebM format with MP4 fallback
   - Lazy load on mobile
   - Poster image for initial load

2. **Image Optimization**:
   - Next.js Image component for automatic optimization
   - WebP format with fallback
   - Lazy loading for below-fold images
   - Responsive image sizes

3. **Code Splitting**:
   - Dynamic imports for service pages
   - Lazy load doctor bio modals
   - Separate chunks for components

4. **CSS Optimization**:
   - Tailwind CSS purge for production
   - Critical CSS inline
   - Minimize custom CSS

5. **Caching Strategy**:
   - Static assets cached for 1 year
   - API responses cached appropriately
   - Service worker for offline support (future)

## Accessibility Considerations

1. **Semantic HTML**: Use proper heading hierarchy, nav, main, section tags
2. **ARIA Labels**: Add labels for icon buttons and interactive elements
3. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
4. **Focus Indicators**: Visible focus states for all interactive elements
5. **Alt Text**: Descriptive alt text for all images
6. **Color Contrast**: Maintain WCAG AA standards (4.5:1 for normal text)
7. **Video Controls**: Provide controls for users who need them
8. **Screen Reader**: Test with NVDA/JAWS/VoiceOver
9. **Touch Targets**: Minimum 44x44px for all interactive elements
10. **Motion**: Respect prefers-reduced-motion for animations
