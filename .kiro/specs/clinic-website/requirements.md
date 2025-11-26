# Requirements Document

## Introduction

This document outlines the requirements for a mobile-first clinic website for Eternal Physios. The website will feature a video hero section, fixed CTA bar, physiotherapy service cards, and doctor profiles. The design emphasizes accessibility and ease of contact with a green and white color scheme.

## Glossary

- **Website**: The Eternal Physios clinic web application
- **Hero Section**: The primary video banner area at the top of the homepage with overlay text
- **CTA Bar**: Call-to-action bar containing phone call and WhatsApp contact buttons
- **Service Card**: Clickable card component representing a type of physiotherapy care
- **Doctor Profile**: Card displaying doctor information including image, name, and designation
- **Viewport**: The visible area of the web page in the user's browser
- **Scroll Threshold**: The vertical scroll distance that triggers the CTA bar appearance

## Requirements

### Requirement 1

**User Story:** As a mobile user visiting the clinic website, I want to see a responsive mobile-first design, so that I can easily navigate and read content on my smartphone.

#### Acceptance Criteria

1. THE Website SHALL render with mobile viewport dimensions as the primary design target
2. WHEN the viewport width is less than 768 pixels, THE Website SHALL display single-column layouts for all content sections
3. THE Website SHALL use touch-friendly interactive elements with minimum tap target sizes of 44x44 pixels
4. THE Website SHALL load and display all content within 3 seconds on a 3G mobile connection

### Requirement 2

**User Story:** As a visitor, I want to see a video hero section with the clinic branding, so that I immediately understand the clinic's identity and message.

#### Acceptance Criteria

1. THE Website SHALL display a full-width video banner as the first section on the homepage
2. THE Website SHALL overlay the text "God Bless. We Heal." in heading color (#395756) on the video hero section
3. THE Website SHALL display a navigation bar above the video with "Eternal Physios" text in white color on heading color (#395756) background
4. THE Website SHALL ensure the video plays automatically without audio on page load
5. THE Website SHALL provide a fallback image if the video fails to load

### Requirement 3

**User Story:** As a visitor who wants to contact the clinic, I want to see a fixed CTA bar after scrolling, so that I can quickly call or message via WhatsApp without scrolling back up.

#### Acceptance Criteria

1. WHEN the user scrolls down past the hero section, THE Website SHALL display a fixed CTA bar that slides into view
2. THE CTA Bar SHALL remain fixed at the bottom of the viewport while the user continues scrolling
3. THE CTA Bar SHALL contain two equal-width buttons: one for phone call and one for WhatsApp
4. WHEN the user taps the call button, THE Website SHALL initiate a phone call action
5. WHEN the user taps the WhatsApp button, THE Website SHALL open WhatsApp with a pre-configured clinic contact

### Requirement 4

**User Story:** As a visitor seeking specific treatment, I want to see different physiotherapy care options as clickable cards, so that I can explore services relevant to my needs.

#### Acceptance Criteria

1. THE Website SHALL display a section containing multiple physiotherapy service cards below the hero section
2. THE Service Card SHALL be clickable and visually indicate interactivity through hover or tap states
3. WHEN the user clicks a service card, THE Website SHALL navigate to a dedicated page for that physiotherapy service type
4. THE Service Card SHALL use the theme color (#00C49A) for visual emphasis
5. THE Website SHALL display service cards in a responsive grid that adapts to viewport width

### Requirement 5

**User Story:** As a visitor wanting to know about the medical staff, I want to see a list of doctors with their details, so that I can learn about their qualifications and choose whom to consult.

#### Acceptance Criteria

1. THE Website SHALL display a doctors section containing profiles for Dr. Rahul, Dr. Imran, Dr. Arbaz, and Dr. Shafi
2. THE Doctor Profile SHALL include an image, name, and designation for each doctor
3. WHEN the user clicks on a doctor profile, THE Website SHALL expand or navigate to show additional doctor information
4. THE Website SHALL display doctor profiles in a responsive layout that adapts from single column on mobile to multiple columns on larger screens
5. THE Doctor Profile SHALL use consistent styling with the overall website color scheme

### Requirement 6

**User Story:** As a visitor, I want the website to use a calming and professional color scheme, so that I feel confident about the clinic's services.

#### Acceptance Criteria

1. THE Website SHALL use background color #FEFCFB as the primary background
2. THE Website SHALL use heading color #395756 for all headings and primary text elements
3. THE Website SHALL use theme color #00C49A for highlighting important elements and interactive states
4. THE Website SHALL use blue color #6F9CEB for pricing information and secondary highlights
5. THE Website SHALL maintain WCAG AA contrast ratios between text and background colors

### Requirement 7

**User Story:** As a visitor interested in scheduling a consultation, I want to request a callback, so that the clinic can contact me at my convenience.

#### Acceptance Criteria

1. THE Website SHALL display a "Request a Call" section after the doctors section
2. THE Request Call Section SHALL include form fields for name, phone number, and preferred time
3. WHEN the user submits the request call form with valid data, THE Website SHALL display a success confirmation message
4. THE Website SHALL validate phone number format before form submission
5. THE Website SHALL clear the form fields after successful submission

### Requirement 8

**User Story:** As a visitor wanting to learn about treatments, I want to view treatment videos in a scrollable gallery, so that I can see the procedures and therapies offered.

#### Acceptance Criteria

1. THE Website SHALL display a treatment videos section after the request call section
2. THE Treatment Videos Section SHALL present videos in portrait orientation within a horizontal scrollable container
3. WHEN the user scrolls horizontally, THE Website SHALL snap to individual video cards for better viewing
4. WHEN the user clicks on a video card, THE Website SHALL play the video in a modal or fullscreen view
5. THE Website SHALL lazy load videos as they come into the viewport to optimize performance

### Requirement 9

**User Story:** As a visitor who wants to stay connected, I want to follow the clinic on Instagram, so that I can see updates and health tips.

#### Acceptance Criteria

1. THE Website SHALL display an Instagram follow section after the treatment videos section
2. THE Instagram Section SHALL include the clinic's Instagram handle and a follow button
3. WHEN the user clicks the follow button, THE Website SHALL open the clinic's Instagram profile in a new browser tab
4. THE Instagram Section SHALL use a gradient background combining theme color #00C49A and heading color #395756
5. THE Instagram Section SHALL display the Instagram icon prominently

### Requirement 10

**User Story:** As a visitor ready to schedule treatment, I want to see a prominent book appointment button, so that I can easily initiate the booking process.

#### Acceptance Criteria

1. THE Website SHALL display a book appointment button section after the Instagram section
2. THE Book Appointment Button SHALL use theme color #00C49A as the background with white text
3. WHEN the user clicks the book appointment button, THE Website SHALL trigger the appointment booking flow
4. THE Book Appointment Button SHALL be full width on mobile devices and centered with auto width on desktop
5. THE Book Appointment Button SHALL include a visual pulse animation to draw user attention

### Requirement 11

**User Story:** As a visitor, I want to see contact information and links in the footer, so that I can easily find ways to reach the clinic.

#### Acceptance Criteria

1. THE Website SHALL display a footer section at the bottom of the homepage
2. THE Footer SHALL include contact information: phone number, email, and physical address
3. THE Footer SHALL include social media links for Instagram, Facebook, and WhatsApp
4. THE Footer SHALL use heading color #395756 as the background with white text
5. THE Footer SHALL display in a single column on mobile and three columns on desktop devices
