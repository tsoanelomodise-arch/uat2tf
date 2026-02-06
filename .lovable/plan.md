

## Fix BakeryFront.png Visibility on About Page

### Problem
The `BakeryFront.png` image (woman holding a bread tray) is not visually appearing in the hero section. Both images load successfully from the server, but the CSS positioning of `.layer-front-bakery` uses `left: -150px`, which can push the front image out of the visible area depending on viewport size and the `overflow-hidden` clipping on the header element.

### Root Cause
In `src/index.css`, the `.slide-bakery .layer-front-bakery` rule has:
- `left: -150px` -- shifts the image 150px to the left
- `top: -30px` -- shifts it 30px upward
- Combined with `overflow-hidden` on the `<header>` in `AboutHero.tsx`, this clips the front image

### Solution
Adjust the CSS positioning for `.layer-front-bakery` to keep the front image properly visible within the container, similar to how the seamstress front image works on the Path to Funding page.

### Changes

**File: `src/index.css` (lines 485-496)**

Update the `.slide-bakery .layer-front-bakery` CSS rule:
- Change `left: -150px` to `left: -50px` (reduce the leftward offset so the image stays within the visible area)
- Change `top: -30px` to `top: 0` (keep the image vertically aligned within the container)
- Keep all other properties (z-index, filter, animation, etc.) unchanged

This mirrors the approach used by `.layer-front-seamstress` on the Path to Funding page, which uses `left: -140px` and `top: -10px` but works because its container layout is slightly different.

### Why This Works
By reducing the leftward offset, the front image (the woman with the bread tray) will remain within the visible bounds of the header container even after `overflow-hidden` clips the overflowing edges. The transparent PNG will overlay correctly on top of the bakery interior background image, creating the intended parallax layered effect with the steam animation.

### Files Changed

| File | Change |
|------|--------|
| `src/index.css` | Adjust `left` and `top` values for `.slide-bakery .layer-front-bakery` |

