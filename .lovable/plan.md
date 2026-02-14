

## Invert Rollover Colors for "Why" Sub-Page Links

### What will change

The five "Why" sub-page links (Policy Choice, Theory, Value, Operating Model, National Agenda) in the About dropdown will have inverted hover behavior:

- **Default state**: White text (matching the other dropdown items)
- **On hover**: Text changes to the accent green color (#007847) instead of the current dark background hover

### Technical Details

**File: `src/components/phakamani/PhakamaniNavbar.tsx`** (lines 88-92)

- Remove `text-gray-600` from each sub-page link's className
- Add `text-white hover:!text-[#007847] hover:!bg-transparent` to override the default `.dropdown-item:hover` styles
- This ensures the links start white and turn green on hover, with no background color change

