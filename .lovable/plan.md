

# Add "Test Home" Page

## Overview
Create a new "Test Home" page from the uploaded HTML content and add it to the main navigation to the right of "Contacts". The page reuses existing site components where possible and introduces one new section (News Highlights).

## Content Extracted from HTML (verbatim, no changes)

The HTML contains four sections:

1. **Hero Carousel** -- 3 slides already matching the existing PhakamaniHero content (same headings, taglines, CTAs)
2. **News Highlights** -- New section with image, 3 news items, and QR code sidebar
3. **How to Apply / Portal** -- Matches existing PortalSection
4. **Products** -- Matches existing ProductsSection (same 5 cards + "Whatever your size" tagline)

## Implementation Steps

### 1. Create News Highlights Component
**New file:** `src/components/test-home/NewsHighlightsSection.tsx`

Content (verbatim from HTML):
- Label: "LATEST UPDATES"
- Heading: "NEWS HIGHLIGHTS"
- Three news items:
  - "News Headline 1" / "Short summary of the news item goes here. It describes the key update briefly."
  - "News Headline 2" / (same summary)
  - "News Headline 3" / (same summary)
- Black sidebar with QR code and "Scan to Follow Us" label
- Left-side image (placeholder)

Styled using existing site conventions: `max-w-[1400px]`, Tailwind grid, existing typography tokens (`phakamani-section-title`, font colors `#0F172A`, `#334155`, `#64748B`), white card backgrounds, and responsive grid collapse on mobile.

### 2. Create Test Home Page
**New file:** `src/pages/TestHome.tsx`

Composes these sections in order:
1. `PhakamaniNavbar` (existing)
2. `PhakamaniHero` (existing, reused as-is for the home carousel)
3. `NewsHighlightsSection` (new)
4. `PortalSection` (existing)
5. `ProductsSection` (existing)
6. `Footer` (existing)

Same page wrapper pattern as `PhakamaniIndex.tsx` (includes eligibility modal flow).

### 3. Add Route
**Edit:** `src/App.tsx`
- Add route: `<Route path="/test-home" element={<TestHome />} />`

### 4. Add to Navigation
**Edit:** `src/components/phakamani/PhakamaniNavbar.tsx`
- Add "Test Home" link to the right of "Contacts" in both desktop and mobile menus
- Simple link (no dropdown), following existing `nav-link` pattern

## Technical Notes
- No new dependencies required
- All styling uses existing Tailwind classes and site design tokens
- Responsive: grid collapses to single column on mobile (matching existing patterns)
- The News Highlights sidebar uses the existing QR code image at `/images/social-media-qr-code.png`
- Content is kept exactly as provided in the HTML -- no text edits

