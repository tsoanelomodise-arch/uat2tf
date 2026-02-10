

# Add "Test Contacts" Page

## Overview
Create a new `/test-contacts` page that faithfully recreates the uploaded HTML's design and structure, using the existing site's navbar and footer. The page will include full form validation and mailto functionality inherited from the current Contacts page.

## Key Observations from the HTML
- **No modals or JavaScript** exist in the uploaded HTML -- it is purely static HTML/CSS
- The design is more minimal than the current Contacts page: square cards (no border-radius), no green icon circles, monochrome color scheme with thin bordered icon wrappers
- QR code area uses a CSS dot-pattern placeholder with an SVG icon overlay (not a real QR image)
- Google Maps iframe uses a different embed URL format than the current page
- The form layout uses a CSS grid with `full-width` spanning for message and submit

## What Will Be Created

### 1. New Page: `src/pages/TestContacts.tsx`
- Uses `PhakamaniNavbar` and `Footer` (site navigation unchanged)
- Recreates the exact HTML structure section by section:
  - **Hero**: 2-column grid with heading, subtitle, two buttons (Email Us Now / Call Us), and QR placeholder with CSS dot pattern
  - **Info Cards**: 4-column grid of black cards with thin-bordered circular icon wrappers (not filled green), SVG icons matching the HTML
  - **Map Section**: Google Maps iframe with the HTML's embed URL, grey background
  - **Contact Form**: 2-column grid form with validation and mailto (reusing existing `validateAndSanitizeContactForm` and `buildSafeMailtoLink`)
- All styling via Tailwind classes to match the HTML's CSS exactly (square corners, monochrome palette, `max-w-[1200px]` container)

### 2. New Route in `src/App.tsx`
- Add `<Route path="/test-contacts" element={<TestContacts />} />` 
- Lazy-loaded like all other pages
- No changes to existing navigation or routes

## Design Differences from Current Contacts Page (Preserved from HTML)
- Cards are square (no rounded corners) instead of `rounded-2xl`
- Icon wrappers use a thin white/translucent border circle instead of solid green fill
- No hover lift animation on cards
- QR section uses a bordered frame with CSS dot pattern instead of the real QR image
- Container max-width is 1200px instead of 1400px
- Buttons are square with black primary / outlined secondary style

## Files Changed
| File | Change |
|------|--------|
| `src/pages/TestContacts.tsx` | New file -- full page component |
| `src/App.tsx` | Add lazy import and route for `/test-contacts` |

## No Impact on Existing Site
- No existing files modified (except adding one route line to App.tsx)
- No navigation links added -- page accessible only via direct URL
- Existing `/contacts` page remains completely unchanged

