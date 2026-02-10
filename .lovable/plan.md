

# Optimise Website for Web and Mobile

## Overview
Performance and usability optimisations across the whole site -- no visual changes, no design or structural modifications. The goal is faster load times, smoother interactions, and better mobile UX.

## 1. Route-Level Code Splitting (Lazy Loading)

All 18+ page components in `src/App.tsx` are eagerly imported. Converting them to `React.lazy()` with `<Suspense>` will dramatically reduce the initial JS bundle size -- users only download the code for the page they visit.

**File:** `src/App.tsx`
- Replace all static page imports with `React.lazy(() => import(...))` calls
- Wrap `<Routes>` in `<Suspense fallback={<div className="min-h-screen" />}>` (invisible fallback to avoid layout shift)

## 2. Preload Critical Hero Images

The homepage hero carousel images load only when the component mounts. Preloading the first slide in `index.html` ensures it appears instantly.

**File:** `index.html`
- Add `<link rel="preload" as="image" href="/images/test-home/hero-slide-1.jpg" />` alongside the existing logo preload

## 3. Lazy-Load YouTube Iframe (Portal Section)

The YouTube embed in `TestHomePortalSection.tsx` loads a heavy iframe immediately, even if the user hasn't scrolled to it. Replace it with a click-to-load pattern using a thumbnail placeholder.

**File:** `src/components/test-home/TestHomePortalSection.tsx`
- Show a static thumbnail image with a play button overlay
- Only load the YouTube iframe when the user clicks it
- Use `loading="lazy"` on the iframe as a fallback

## 4. Add `loading="lazy"` to Below-the-Fold Images

Several images across sections lack lazy loading attributes.

**Files:**
- `src/components/test-home/NewsHighlightsSection.tsx` -- add `loading="lazy"` to the left image
- `src/components/test-home/TestHomeProductsSection.tsx` -- add `loading="lazy"` to all 5 product card images
- `src/components/transformation/Footer.tsx` -- QR code image already has it (no change needed)

## 5. Memoize Expensive Components

Wrap section components with `React.memo` to prevent unnecessary re-renders when parent state (e.g. quiz modals) changes.

**Files:**
- `src/components/test-home/NewsHighlightsSection.tsx` -- wrap export with `memo()`
- `src/components/test-home/TestHomePortalSection.tsx` -- wrap export with `memo()`
- `src/components/test-home/TestHomeProductsSection.tsx` -- wrap export with `memo()`
- `src/components/test-home/TestHomeHero.tsx` -- wrap export with `memo()`

## 6. Optimise Font Loading

The Google Fonts import in `index.css` is render-blocking. Move it to `index.html` with `font-display: swap` and add a preconnect.

**File:** `src/index.css`
- Remove the `@import url(...)` line for Google Fonts

**File:** `index.html`
- Add the font stylesheet link with `&display=swap` parameter (preconnect lines already exist)

## 7. Improve Mobile Touch Targets in Navbar

The mobile menu items use only text padding for touch targets. Ensure consistent minimum heights.

**File:** `src/components/phakamani/PhakamaniNavbar.tsx`
- Add `min-h-[44px] flex items-center` to mobile menu links for reliable tap targets (CSS already sets min-height on buttons/links, but the dropdown sub-items and anchor elements benefit from explicit flex alignment)

## 8. Expand Vite Manual Chunks

Add more libraries to manual chunks for better caching -- when app code changes, vendor code stays cached.

**File:** `vite.config.ts`
- Add `recharts` and `lucide-react` as separate manual chunks
- Add `fuse.js` to the ui-vendor chunk

## Summary of Changes

| File | Change | Impact |
|------|--------|--------|
| `src/App.tsx` | Lazy-load all page routes | Smaller initial bundle |
| `index.html` | Preload hero image, move font link | Faster first paint |
| `src/index.css` | Remove render-blocking font import | Faster CSS parse |
| `TestHomePortalSection.tsx` | Lazy YouTube iframe | Save ~1MB on initial load |
| `NewsHighlightsSection.tsx` | lazy loading + memo | Faster scroll, fewer re-renders |
| `TestHomeProductsSection.tsx` | lazy loading + memo | Faster scroll, fewer re-renders |
| `TestHomeHero.tsx` | memo | Fewer re-renders |
| `PhakamaniNavbar.tsx` | Better mobile touch targets | Better mobile UX |
| `vite.config.ts` | Expanded manual chunks | Better cache efficiency |

No design, layout, color, or structural changes. All optimisations are invisible to the end user.
