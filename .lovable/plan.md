

## Plan: Create "Investors" Page

I will create a new standalone page at `/investors` and add it to the main navigation to the right of "How to apply". All text will be imported verbatim from the HTML with no changes.

---

### Content to Import (from HTML - verbatim)

**Hero Section**
- H1: "Investors"
- H2 (subtitle): "Resource mobilisation and capitalisation"

**Investor Cards (6 items with numbered badges):**

| Number | Title | Description |
|--------|-------|-------------|
| 01 | Equity equivalent investment programme (EEIP) contributions | Multinational corporations unable to sell equity locally can contribute 25% of their South African operations' value to empowerment projects. The Fund offers a centralised vehicle for these contributions, replacing fragmented initiatives with a high-impact portfolio. This simplifies compliance and ensures funds are directed toward national development priorities. |
| 02 | Enterprise and supplier development (ESD) contributions | Corporates can redirect their ESD budgets into the Fund and still receive full B-BBEE scorecard recognition. This pooled approach improves efficiency, impact, and compliance while reducing administrative burdens. Unspent ESD funds can also be absorbed, ensuring no resources go to waste. |
| 03 | Development Finance Institutions (DFIs) and impact investors | Domestic and international DFIs can co-invest, offer credit lines, or match-fund projects aligned with the Fund's goals. Their involvement brings additional capital, technical expertise, and ESG standards. This expands the Fund's reach and strengthens its credibility and operational rigor. |
| 04 | Donors and philanthropy | Foundations, high-net-worth individuals, and international donors can contribute grants for targeted programmes. These funds may support specific initiatives like tech accelerators or women entrepreneurship. The Fund provides a transparent and accountable structure for deploying donor capital effectively. |
| 05 | Innovative financing and private investors | The Fund can issue diaspora bonds, green bonds, or social impact bonds to attract private capital. Pension funds (Regulation 28 compliant) can also invest in the Fund's secure, diversified instruments. This crowds in private sector liquidity to scale impact without solely relying on government or corporate grants. |
| 06 | Special case: Mid-sized firms and ESD complexity | Mid-sized companies often lack capacity to run effective ESD programmes and struggle with compliance. The Fund offers a simplified alternative, allowing these firms to contribute and meet B-BBEE requirements. This unlocks underutilised ESD budgets and broadens participation in transformation efforts: |

**Accordion Section (6 items):**

| Accordion Title | Accordion Content |
|-----------------|-------------------|
| Simplified ESD contributions | Mid-sized firms can contribute directly to the Fund and receive full B-BBEE scorecard recognition without running complex in-house ESD programmes. |
| Pre-approved framework | Contributions are validated under a standardised, government-endorsed framework, earning immediate compliance credit. |
| Reduced administrative burden | This approach eliminates the overhead of managing ESD initiatives, ensuring funds are used for impactful MSME development. |
| Procurement compliance support | Firms still meet Preferential Procurement targets, aided by the Fund's telemetry dashboard for supplier tracking and spend visibility. |
| Strategic supplier engagement | The dashboard helps firms identify high-potential MSMEs for partnerships, enhancing supply chains and unlocking innovation. |
| Benefits beyond compliance | Engaging diverse suppliers boosts market reach, resilience, and innovation—turning compliance into a strategic growth opportunity. |

---

### Technical Implementation

#### 1. Create New Page Component
**File:** `src/pages/InvestorsPage.tsx`

Following the same structure as existing pages:
- PhakamaniNavbar at top
- Hero section with H1 and subtitle
- Main content section
- Footer at bottom

#### 2. Create Content Component
**File:** `src/components/investors/InvestorsContent.tsx`

Contains:
- 3-column responsive grid of investor type cards with numbered badges (01-06)
- Accordion section in a white card container with 6 expandable items

#### 3. Add Route to App.tsx
Add new route: `/investors`

#### 4. Update Navigation
**File:** `src/components/phakamani/PhakamaniNavbar.tsx`

Add "Investors" link as a standalone nav item positioned to the right of "How to apply" dropdown (before FAQ).

---

### Styling to Match Site Design System

**Page Container**
- `min-h-screen bg-background` (matching other pages)
- Main: `pt-[180px] lg:pt-[210px]`

**Hero Section**
- Container: `container mx-auto px-4 py-10`
- H1: `text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-2`
- Subtitle H2: `text-xl md:text-2xl font-medium text-[hsl(var(--ptf-accent))]`

**Investor Cards Grid**
- Container: `container mx-auto px-4 pb-16`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card: `bg-white rounded-xl border border-gray-100 shadow-sm p-8 transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg hover:-translate-y-1`
- Number badge: `text-sm font-bold text-[hsl(var(--ptf-accent))] uppercase tracking-wider mb-2`
- Card H3: `text-xl font-bold text-[hsl(var(--ptf-heading))] mb-4`
- Card paragraph: `text-[hsl(var(--ptf-text))] leading-relaxed`

**Accordion Section**
- Outer container: `bg-white rounded-xl border border-gray-100 shadow-sm p-8`
- Using Radix UI Accordion component (already in project)
- Accordion items styled to match site patterns with chevron indicator
- Item trigger: `font-bold text-[hsl(var(--ptf-heading))]`
- Item content: `text-[hsl(var(--ptf-text))] leading-relaxed`

---

### Navigation Placement

The "Investors" link will be added to the desktop nav between "How to apply" dropdown and "FAQ":

**Current order:**
1. About
2. Why (dropdown)
3. How to apply (dropdown)
4. FAQ
5. Resources (dropdown)
6. Contacts

**New order:**
1. About
2. Why (dropdown)
3. How to apply (dropdown)
4. **Investors** ← NEW
5. FAQ
6. Resources (dropdown)
7. Contacts

Mobile menu will be updated with the same order.

---

### Files to Create/Modify

| Action | File |
|--------|------|
| Create | `src/pages/InvestorsPage.tsx` |
| Create | `src/components/investors/InvestorsContent.tsx` |
| Modify | `src/App.tsx` (add route) |
| Modify | `src/components/phakamani/PhakamaniNavbar.tsx` (add nav link after How to apply) |

---

### Responsive Behaviour

**Desktop (lg+)**
- Investor cards: 3 columns
- Accordion: full width

**Tablet (md)**
- Investor cards: 2 columns

**Mobile**
- Investor cards: 1 column stacked
- Accordion: full width
- Proper spacing and touch targets

