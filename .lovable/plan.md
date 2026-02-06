

## Fix About Hero Images Not Appearing in Production

### Problem

The About page hero images are loaded from an external URL (`https://www.wonderlandstudio.co.za/tfrevised/BakeryBack.png` and `BakeryFront.png`). This external server may be unavailable, slow, or blocking cross-origin requests in the production environment, causing the images to not appear when the site is exported/published.

### Solution

Download the two bakery images and store them locally in the `public/images/` directory, then update `AboutHero.tsx` to reference the local paths. This follows the same pattern already used by:
- The main hero (`PhakamaniHero.tsx`) which uses `/images/hero/...` paths
- The Path to Funding hero which uses `/images/path-to-funding/SeamstressBack.png` and `SeamstressFront.png`

### Steps

**Step 1: Download and save the images locally**

Fetch the two images from the external URLs and save them into the project:
- `https://www.wonderlandstudio.co.za/tfrevised/BakeryBack.png` --> `public/images/hero/BakeryBack.png`
- `https://www.wonderlandstudio.co.za/tfrevised/BakeryFront.png` --> `public/images/hero/BakeryFront.png`

**Step 2: Update `src/components/phakamani/AboutHero.tsx`**

Change the two image `src` attributes from the external URLs to local paths:

- `src="https://www.wonderlandstudio.co.za/tfrevised/BakeryBack.png"` becomes `src="/images/hero/BakeryBack.png"`
- `src="https://www.wonderlandstudio.co.za/tfrevised/BakeryFront.png"` becomes `src="/images/hero/BakeryFront.png"`

No other changes to the component are needed -- the class names, loading attributes, alt text, and steam animation elements all remain the same.

### Why This Works

Files in the `public/` directory are served as-is by Vite in both development and production. By hosting the images locally, we eliminate the dependency on an external server and ensure the images are always available, regardless of network conditions or third-party server status.

### Files Changed

| File | Change |
|------|--------|
| `public/images/hero/BakeryBack.png` | New file (downloaded from external URL) |
| `public/images/hero/BakeryFront.png` | New file (downloaded from external URL) |
| `src/components/phakamani/AboutHero.tsx` | Update 2 image `src` paths to local references |
