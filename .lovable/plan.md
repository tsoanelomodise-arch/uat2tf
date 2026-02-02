
## Plan: Update Home Page Buttons and Modals

This plan addresses three changes to the home page:

1. Remove the "LEARN MORE" button from each product card
2. Remove the "Click for more" button from the Portal Section 
3. Make the "Eligibility Checklist" button launch the eligibility checklist modal

---

### Change 1: Remove "LEARN MORE" from Product Cards

**File:** `src/components/phakamani/ProductsSection.tsx`

Remove the entire footer section from the ProductCard component that contains "LEARN MORE" text and the arrow button (lines 25-29):

```tsx
// REMOVE this block from ProductCard:
<div className="flex items-center justify-between mt-4">
  <span className="text-xs opacity-80">LEARN MORE</span>
  <div className="action-btn">
    <ArrowRight className="w-4 h-4 action-arrow" aria-hidden="true" />
  </div>
</div>
```

Also remove the unused `ArrowRight` import from lucide-react.

---

### Change 2: Remove "Click for more" from Portal Section

**File:** `src/components/phakamani/PortalSection.tsx`

Remove the Link component containing "Click for more" (lines 33-38):

```tsx
// REMOVE this block:
<Link
  to="/path-to-funding#how-to-apply-top"
  className="phakamani-btn-primary inline-block"
>
  Click for more
</Link>
```

Also update the Link import since it will no longer be used.

---

### Change 3: Make "Eligibility Checklist" Button Launch Modal

This requires integrating the eligibility modal system from `PathToFunding` into `PhakamaniIndex`. The approach is to:

**Step A: Update PhakamaniIndex.tsx**
- Import the eligibility quiz hook and modal components
- Add the eligibility modal component to the page
- Pass the `openEligibilityModal` function to `PhakamaniHero`

**Step B: Update PhakamaniHero.tsx**
- Accept an `onCheckEligibility` prop
- Change the "Eligibility Checklist" button from navigation to calling the modal opener

---

### Technical Implementation Details

**File: src/components/phakamani/ProductsSection.tsx**
- Remove lines 25-29 (the footer div with LEARN MORE)
- Remove `ArrowRight` from the lucide-react import

**File: src/components/phakamani/PortalSection.tsx**
- Remove lines 33-38 (the Link with "Click for more")
- Remove `Link` from react-router-dom import

**File: src/pages/PhakamaniIndex.tsx**
- Import `usePathToFundingQuiz` hook
- Import `EligibilityModal` and result modals (`SuccessModal`, `RejectModal`)
- Initialize the quiz hook
- Pass `quiz.openEligibilityModal` to `PhakamaniHero`
- Render the `EligibilityModal` and `SuccessModal`/`RejectModal` components

**File: src/components/phakamani/PhakamaniHero.tsx**
- Add `onCheckEligibility?: () => void` to component props
- Change line 221-225 from:
  ```tsx
  <button
    onClick={() => navigate('/path-to-funding#your-path-to-funding')}
    ...
  >
    Eligibility Checklist
  </button>
  ```
  To:
  ```tsx
  <button
    onClick={onCheckEligibility}
    ...
  >
    Eligibility Checklist
  </button>
  ```

---

### Files to Modify

| File | Change |
|------|--------|
| `src/components/phakamani/ProductsSection.tsx` | Remove "LEARN MORE" section and ArrowRight import |
| `src/components/phakamani/PortalSection.tsx` | Remove "Click for more" Link |
| `src/pages/PhakamaniIndex.tsx` | Add eligibility quiz hook and modal components |
| `src/components/phakamani/PhakamaniHero.tsx` | Accept and use `onCheckEligibility` prop |

---

### User Experience

After these changes:
- Product cards will show title, description, and image only (no "LEARN MORE" footer)
- Portal section will show the text content and video, without the "Click for more" button
- Clicking "Eligibility Checklist" on the home hero will open the same eligibility quiz modal that exists on the "How to apply" page, allowing users to check their eligibility without leaving the home page
