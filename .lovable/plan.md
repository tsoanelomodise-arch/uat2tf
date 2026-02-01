
# Plan: Change Header and Tagline Colors to White on Home Page Slides

## Overview
Update the text colors for all headlines and taglines on the 5 home page hero slides from black to white, while keeping the Why page text colors unchanged.

## Changes Required

### File: `src/components/phakamani/PhakamaniHero.tsx`

The following text color changes will be made for the home page slides only (inside the `!isWhyPage` conditional block):

| Element | Current Class | New Class |
|---------|---------------|-----------|
| Main headline (h1) | `text-black` | `text-white` |
| Slide 0 tagline | `text-black/80` | `text-white/80` |
| Slide 1 tagline | `text-black/80` | `text-white/80` |
| Slide 2 tagline | `text-black/80` | `text-white/80` |
| Slide 3 tagline | `text-black/80` | `text-white/80` |
| Slide 4 tagline | `text-black/80` | `text-white/80` |

### Technical Details

**Line 154** - Change headline class:
```tsx
// Before
className="phakamani-headline text-black max-w-2xl"

// After
className="phakamani-headline text-white max-w-2xl"
```

**Line 169** - Change Slide 0 tagline:
```tsx
// Before
className="text-black/80 font-light text-lg mt-3 italic"

// After
className="text-white/80 font-light text-lg mt-3 italic"
```

**Line 174** - Change Slide 1 tagline:
```tsx
// Before
className="text-black/80 font-light text-lg mt-3 italic max-w-md"

// After
className="text-white/80 font-light text-lg mt-3 italic max-w-md"
```

**Line 179** - Change Slide 2 tagline:
```tsx
// Before
className="text-black/80 font-light text-lg mt-3 italic max-w-md"

// After
className="text-white/80 font-light text-lg mt-3 italic max-w-md"
```

**Line 189** - Change Slide 3 tagline:
```tsx
// Before
className="text-black/80 font-light text-lg mt-3 italic max-w-md"

// After
className="text-white/80 font-light text-lg mt-3 italic max-w-md"
```

**Line 199** - Change Slide 4 tagline:
```tsx
// Before
className="text-black/80 font-light text-lg mt-3 italic max-w-md"

// After
className="text-white/80 font-light text-lg mt-3 italic max-w-md"
```

## What Stays Unchanged
- Why page headings and descriptions remain black (`text-black` and `text-gray-600`)
- QR code block text remains black
- Slide navigation buttons remain white (already white)
- CTA buttons remain unchanged (use existing button classes)

## Summary
This is a straightforward color change affecting 6 text elements across the home page hero carousel. The white text will provide better contrast against the colorful hero images.
