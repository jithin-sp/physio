# Implementation Plan

- [x] 1. Configure Tailwind CSS with custom color scheme and design tokens





  - Update globals.css with custom color variables (#FEFCFB, #395756, #00C49A, #6F9CEB)
  - Configure Tailwind theme with custom colors, spacing, and breakpoints
  - Set up typography scale and font configuration
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 2. Create Navbar component with clinic branding





  - Build Navbar component with fixed positioning and heading color background
  - Add "Eternal Physios" text in white with proper styling
  - Implement responsive padding for mobile and desktop
  - Ensure z-index layering for proper stacking
  - _Requirements: 2.3_

- [x] 3. Implement VideoHero component with overlay text





  - Create VideoHero component with HTML5 video element
  - Add autoplay, muted, and loop attributes to video
  - Implement overlay with "God Bless. We Heal." text in heading color
  - Add fallback image support for video loading errors
  - Implement responsive height (60vh mobile, 80vh desktop)
  - _Requirements: 2.1, 2.2, 2.4, 2.5_

- [x] 4. Build scroll-triggered CTABar component





  - Create CTABar component with fixed bottom positioning
  - Implement two equal-width buttons for Call and WhatsApp
  - Add scroll detection logic to show/hide bar after hero section
  - Style Call button with theme color (#00C49A) and WhatsApp button with brand color
  - Implement slide-in animation from bottom
  - Add tel: and wa.me links for phone and WhatsApp functionality
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [x] 5. Create ServiceCard and ServicesSection components





  - Build ServiceCard component with title, description, icon, and hover effects
  - Add border styling with theme color on hover
  - Implement click navigation to service detail pages
  - Create ServicesSection container with responsive grid layout (1/2/3 columns)
  - Add sample service data for physiotherapy types
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
-

- [x] 6. Implement DoctorCard and DoctorsSection components




  - Create DoctorCard component with circular image, name, and designation
  - Style name in heading color and designation in blue color
  - Add click handler for expanding doctor bio
  - Build DoctorsSection with responsive grid (1/2/4 columns)
  - Add data for Dr. Rahul, Dr. Imran, Dr. Arbaz, and Dr. Shafi
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 7. Build RequestCallSection component with form




  - Create form with fields for name, phone number, and preferred time
  - Implement client-side validation for phone number format
  - Add submit button styled with theme color
  - Implement form submission handler with success message display
  - Add form reset functionality after successful submission
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
-

- [x] 8. Create TreatmentVideos component with horizontal scroll




  - Build horizontal scrollable container with portrait video cards
  - Implement CSS scroll snap for smooth card-to-card scrolling
  - Add video thumbnails with play overlay
  - Create modal/fullscreen video player for clicked videos
  - Implement lazy loading for videos as they enter viewport
  - Style video cards with portrait aspect ratio (9:16)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 9. Implement InstagramSection component




  - Create Instagram follow section with gradient background (theme to heading color)
  - Add Instagram icon and clinic handle text
  - Implement follow button that opens Instagram in new tab
  - Add hover animations for icon and button
  - Style with white text and centered layout
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
- [x] 10. Create BookAppointmentButton component



- [ ] 10. Create BookAppointmentButton component

  - Build prominent CTA button with pill shape and theme color background
  - Implement pulse animation to draw attention
  - Add click handler for booking flow
  - Make button full width on mobile, auto width centered on desktop
  - Add hover effects with lift and shadow
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 11. Build Footer component with contact info and links





  - Create Footer with heading color background and white text
  - Add three sections: About, Contact, Social Links
  - Implement responsive layout (1 column mobile, 3 columns desktop)
  - Add clickable phone, email, and social media links
  - Include copyright text at bottom
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_
- [x] 12. Assemble homepage with all components



- [ ] 12. Assemble homepage with all components

  - Import all components into app/page.js
  - Arrange components in correct order: Navbar, VideoHero, ServicesSection, DoctorsSection, RequestCallSection, TreatmentVideos, InstagramSection, BookAppointmentButton, Footer
  - Add CTABar with scroll detection
  - Pass appropriate props to each component
  - Ensure proper spacing between sections
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 13. Update root layout with metadata and styling




  - Update app/layout.js with clinic-specific metadata (title, description)
  - Configure background color (#FEFCFB) for body
  - Ensure proper font loading and application
  - Add viewport meta tags for mobile responsiveness
  - _Requirements: 1.1, 6.1_

- [x] 14. Create dynamic service detail pages




  - Set up app/services/[serviceType]/page.js for dynamic routing
  - Create service detail page layout with full description and benefits
  - Style pricing information with blue color (#6F9CEB)
  - Add back navigation to homepage
  - Implement 404 handling for invalid service routes
  - _Requirements: 4.3, 6.4_

- [x] 15. Add accessibility features and ARIA labels





  - Add alt text to all images and icons
  - Implement ARIA labels for icon-only buttons
  - Ensure keyboard navigation works for all interactive elements
  - Add focus indicators with proper styling
  - Test with screen reader for proper semantic structure
  - _Requirements: 1.3_

- [x] 16. Optimize performance and loading





  - Compress video files to under 5MB
  - Implement lazy loading for below-fold images
  - Add loading states for dynamic content
  - Optimize images with Next.js Image component
  - Test and achieve Lighthouse score >90 for performance
  - _Requirements: 1.4, 2.4, 8.5_
-

- [x] 17. Test responsive behavior across devices




  - Test on mobile devices (375px, 414px widths)
  - Test on tablets (768px, 1024px widths)
  - Test on desktop (1280px+ widths)
  - Verify touch targets are minimum 44x44px
  - Test scroll behavior and CTA bar triggering
  - _Requirements: 1.1, 1.2, 1.3_
