

## Move "Why" Under "About" as a Sub-Navigation

Currently "About" and "Why" are separate top-level navigation items. This plan merges them so that "About" becomes a dropdown with "Why" and its sub-pages nested inside.

### What will change

**Desktop Navigation:**
- "About" becomes a dropdown (with a chevron icon) instead of a plain link
- The dropdown contains:
  - "About" (links to /about)
  - A "Why" group header (links to /about/why)
  - Indented sub-items: Policy Choice, Theory, Value, Operating Model, National Agenda

**Mobile Navigation:**
- "About" shown as a top-level bold item (links to /about)
- "Why" shown as a bold sub-item below About
- Why sub-pages indented further below

**Active state:** The "About" dropdown will highlight when on either `/about` or any `/about/why/*` route.

### Technical Details

**File: `src/components/phakamani/PhakamaniNavbar.tsx`**

1. Remove the standalone "Why" dropdown and merge it into the "About" item
2. Create a new `aboutDropdownOpen` state (replacing the separate `whyDropdownOpen`)
3. Convert the desktop "About" link into a dropdown with `onMouseEnter`/`onMouseLeave` handlers
4. The dropdown menu will contain:
   - A link to `/about` labeled "About"
   - A divider or spacing
   - Links to `/about/why` and its sub-pages (Policy Choice, Theory, Value, Operating Model, National Agenda)
5. Update the active state check: highlight when `isAboutPage || isWhySection`
6. In the mobile menu, nest the "Why" links under "About" with appropriate indentation (Why at `pl-6`, sub-pages at `pl-9`)

No routing or page changes needed -- only the navbar structure changes.

