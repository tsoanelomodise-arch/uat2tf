

## Replace "Eligibility and criteria" Section Content

This plan replaces the content of the `EligibilityCriteriaSection` component on the "How to Apply" page with the content from the provided HTML file, while preserving all existing site structure.

---

### Summary of Changes

The uploaded HTML provides a new design for the "Eligibility and criteria" section featuring:
- A page header with "How to apply" title and bottom border
- An intro section with a subtitle "Eligibility and criteria" and two paragraphs of explanatory text
- A 7-item accordion using the same content categories but with updated styling (card-style items with borders, hover effects, and +/x expand indicators)

---

### What Will Be Preserved (No Changes)

1. **Header/Navbar** - `PhakamaniNavbar` component
2. **Hero Section** - `PathToFundingHero` component with "How to Apply" headline
3. **Eligibility & Document Checklist** - `FundingConditionsSection` with the 3-step cards and quiz modals
4. **Footer** - `Footer` component
5. **All modals** - Eligibility, Document, Success, Reject, and Incomplete modals

---

### Implementation Steps

#### Step 1: Update `EligibilityCriteriaSection.tsx`

Rewrite the component to match the HTML's structure and styling:

**Layout Changes:**
- Remove the centered badge ("Who Can Apply") that doesn't exist in the new design
- Remove centered text alignment - switch to left-aligned content
- Add page header with "How to apply" title and bottom border line
- Update typography to match: larger heading sizes, specific text colors (#0F172A primary, #334155 text, #64748B light text)

**Accordion Styling Updates:**
- White background cards with subtle border (`border-[#E2E8F0]`)
- Rounded corners (`rounded-lg`)
- Hover state: border changes to primary color
- Remove default chevron icon, add custom "+" icon that rotates 45deg when open
- Amber/gold accent color for the icon (#D97706)
- Animation for smooth content reveal

**Content (Verbatim from HTML):**
```text
Title: "Eligibility and criteria"

Intro paragraph 1:
"The Transformation Fund is designed to serve a broad yet intentionally segmented market of majority Black-owned enterprises that are underserved by traditional finance."

Intro paragraph 2:
"Applicants will need to show that their businesses are legally compliant, properly registered and meet basic operational and financial management standards. This approach will ensure that support is provided to enterprises that are ready to succeed and contribute to economic development. Eligibility is segmented across firm types and structural contexts to ensure inclusive coverage. This includes:"

Accordion items (7 total - same titles and content as current):
1. Informal and start-up enterprises
2. Early-stage industrial and high-impact ventures
3. Growth-phase MSMEs
4. Mid-size firms graduating to large enterprises
5. Cooperatives and collective enterprises
6. Youth-, women-, and designated group-led businesses
7. Township and rural enterprises
```

---

### Technical Details

**File to Modify:**
- `src/components/path-to-funding/EligibilityCriteriaSection.tsx`

**Component Structure:**
```text
section (py-20 bg-[#F8FAFC])
  container (max-w-[1100px] mx-auto px-6)
    page-header (pb-12 border-b border-[#E2E8F0] mb-12)
      h1 "How to apply"
    content-wrapper
      h2 "Eligibility and criteria"
      p.intro-text (first paragraph - lighter weight)
      p (second paragraph)
      accordion container
        7x accordion-items with custom plus/rotate styling
```

**Styling Tokens:**
- Primary text: `#0F172A` (deep navy/slate)
- Main text: `#334155` (dark grey)
- Light text: `#64748B` (medium grey) 
- Background: `#F8FAFC` (light grey)
- Card background: `#FFFFFF`
- Border: `#E2E8F0`
- Accent: `#D97706` (amber/gold for icon)
- Border radius: `rounded-lg` (8px)
- Shadows: subtle `shadow-sm`

**Custom Icon Behavior:**
- Display "+" symbol using CSS pseudo-element or inline span
- On open state: rotate 45deg to form "x"
- Color: amber/gold accent

**First Accordion Item Default Open:**
- Per HTML, first item has `details open` attribute
- Use `defaultValue="item-0"` in Radix Accordion

---

### Responsive Considerations

- Padding reduces on mobile (from 5rem to 3rem vertical)
- Font sizes scale down appropriately on smaller screens
- Container uses consistent padding (1.5rem horizontal)

