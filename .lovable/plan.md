

## Plan: Create Governance Sub-Page Under Investors

Create a new sub-page at `/investors/governance` that displays the governance and accountability framework content from the uploaded HTML file, using the existing site components and styling.

---

### Content to Import (Verbatim - No Changes)

**Page Title:**
> Governance and accountability framework

**Introduction Paragraph:**
> The Transformation Fund is governed through a legally incorporated Special Purpose Vehicle (SPV), designed to ensure transparency, integrity, and alignment with national transformation goals. Its finances are ring-fenced, tax-exempt, and managed under South African law and B-BBEE regulations.

**Card 1 - Governance structure:**
> A joint Board of Directors, comprising public and private sector representatives, will oversees the strategic direction and fiduciary responsibilities. Functional areas will include investment management, financial stewardship and risk management, including impact monitoring, each with clear mandates and internal controls.

**Card 2 - Digital oversight:**
> A central digital platform will enable real-time data collection from investees, feeding into an impact dashboard that tracks key metrics like jobs created and capital deployed. This system will support proactive management and transparent reporting.

**Card 3 - Public reporting:**
> The Fund will publish annual integrated reports and quarterly updates, with stakeholder engagement through AGMs and parliamentary briefings. A Transformation Index will aggregate impact data for public visibility and accountability.

---

### File Changes Overview

| File | Action | Purpose |
|------|--------|---------|
| `src/pages/investors/GovernancePage.tsx` | Create | New page component |
| `src/components/investors/GovernanceContent.tsx` | Create | Content component with cards |
| `src/App.tsx` | Modify | Add route for `/investors/governance` |
| `src/components/phakamani/PhakamaniNavbar.tsx` | Modify | Add Investors dropdown with Governance link |

---

### Implementation Details

**1. Create Page: `src/pages/investors/GovernancePage.tsx`**

Structure follows the existing `FundingProcessPage.tsx` pattern:
- Import `PhakamaniNavbar` and `Footer`
- Include breadcrumb navigation: "Investors > Governance"
- Page title: "Governance and accountability framework"
- Intro paragraph
- Render `GovernanceContent` component

**2. Create Content Component: `src/components/investors/GovernanceContent.tsx`**

Following the existing `InvestorsContent.tsx` card pattern:
- 3-column responsive grid (`grid-cols-1 md:grid-cols-3`)
- White cards with rounded corners, subtle shadow
- Hover effect with accent border and lift animation
- Card styling matches existing investor cards

**3. Update Router: `src/App.tsx`**

Add import and route:
```text
import GovernancePage from "./pages/investors/GovernancePage";
...
<Route path="/investors/governance" element={<GovernancePage />} />
```

**4. Update Navigation: `src/components/phakamani/PhakamaniNavbar.tsx`**

Convert "Investors" from a standalone link to a dropdown menu:
- Add state: `investorsDropdownOpen`
- Add dropdown with links to:
  - `/investors` - "Resource Mobilisation"
  - `/investors/governance` - "Governance"
- Update mobile menu with sub-links
- Update `isInvestorsPage` to `isInvestorsSection` (check for `/investors` prefix)

---

### Component Architecture

```text
GovernancePage
├── PhakamaniNavbar
├── main
│   ├── section (Hero)
│   │   ├── Breadcrumb (Investors > Governance)
│   │   ├── h1 (title)
│   │   └── p (intro paragraph)
│   └── GovernanceContent
│       └── Grid (3-column)
│           ├── Card: Governance structure
│           ├── Card: Digital oversight
│           └── Card: Public reporting
└── Footer
```

---

### Styling Approach

**Card Styling (matching existing site patterns):**
- White background with `rounded-xl`
- Border: `border-gray-100`
- Shadow: `shadow-sm`
- Padding: `p-8`
- Hover: `hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg hover:-translate-y-1`
- Transition: `transition-all duration-200`

**Typography:**
- Card heading: `text-xl font-bold text-[hsl(var(--ptf-heading))]`
- Card paragraph: `text-[hsl(var(--ptf-text))] leading-relaxed`

**Grid:**
- Responsive: `grid-cols-1 md:grid-cols-3 gap-6`

---

### Navigation Updates

**Desktop:**
- "Investors" becomes a dropdown with chevron icon
- Dropdown shows on hover (same as "Why" and "How to apply")
- Links: "Resource Mobilisation" and "Governance"

**Mobile:**
- "Investors" header with nested links below
- Same pattern as other sections (pl-6 for sub-items)

---

### Technical Notes

- Create `src/pages/investors/` directory for the new page
- Follow existing naming conventions (`GovernancePage.tsx`)
- Use CSS variables from `index.css` (`--ptf-accent`, `--ptf-heading`, `--ptf-text`)
- Maintain responsive design patterns from existing pages
- No custom CSS added - all styling via Tailwind classes

