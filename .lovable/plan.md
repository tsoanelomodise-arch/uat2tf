

# Replace Landing Page with Test Home

## Overview
Swap the current homepage (`PhakamaniIndex`) with the `TestHome` page and remove the "Test Home" nav link.

## Changes

### 1. Update Routes (`src/App.tsx`)
- Change `path="/"` to use `<TestHome />` instead of `<PhakamaniIndex />`
- Remove the `/test-home` route
- Keep `/old` route pointing to `<Index />` (unchanged)
- Optionally keep `PhakamaniIndex` accessible at a fallback route like `/old-home` if needed, or remove it entirely

### 2. Remove "Test Home" from Navigation (`src/components/phakamani/PhakamaniNavbar.tsx`)
- Remove the "Test Home" `<Link>` from the desktop menu (after "Contacts")
- Remove the "Test Home" `<Link>` from the mobile menu
- Remove the `location.pathname === '/test-home'` active-state check

### Files Modified
- `src/App.tsx` (2 line changes)
- `src/components/phakamani/PhakamaniNavbar.tsx` (remove 2 links + cleanup)

