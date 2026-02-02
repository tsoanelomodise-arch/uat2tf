

## Plan: Create "Products" Sub-Page Under How to Apply

I will create a new sub-page at `/path-to-funding/products` called "Products" and populate it with the content from the uploaded HTML file. All text will be imported verbatim with no changes.

---

### Content to Import (from HTML - verbatim)

**Breadcrumb**
- "How to apply • Products"

**Hero Section**
- H1: "Products"
- Paragraph: "To meet the diverse needs of its target market, the Transformation Fund offers a suite of investment products that combine financial capital with embedded capability support. These instruments are designed to be flexible, performance-linked, and tailored to the realities of underserved enterprises, addressing gaps left by traditional funding models."

**Product Cards (4 items):**

| Card Title | Description |
|------------|-------------|
| Startup and informal business grants (capability vouchers) | provide seed capital to early-stage and informal enterprises, disbursed in tranches tied to developmental milestones. These grants are easy to access and embedded with technical support to ensure effective use and business formalisation. |
| Growth and expansion loans (performance-based debt) | offer patient, concessionary finance to established MSMEs ready to scale. Structured around operational performance rather than rigid collateral requirements, these loans are released in stages linked to capability improvements and business outcomes, with mentorship and monitoring built in. |
| Equity and co-investment instruments | provide ownership capital to high-growth ventures and strategic industrial projects, particularly those led by Black entrepreneurs. These instruments allow the Fund to take equity stakes, co-invest with private partners, and structure broad-based ownership models that include communities and workers. Technical support and milestone-based disbursements ensure that equity investments drive both commercial success and transformation impact. |
| Blended finance and guarantee instruments | combine public and private capital to de-risk lending to underserved enterprises. These include partial credit guarantees, subsidised credit lines, and risk-sharing facilities that encourage commercial lenders to extend finance to MSMEs. Guarantees are tied to capability milestones and integrated with technical support, ensuring that risk-sharing leads to sustainable business growth. |

---

### Technical Implementation

#### 1. Create New Page Component
**File:** `src/pages/path-to-funding/ProductsPage.tsx`

Following the same structure as MarketSegmentsPage and FundingProcessPage:
- PhakamaniNavbar at top
- Hero section with breadcrumb, H1, and intro paragraph
- Main content section with product cards grid
- Footer at bottom

#### 2. Create Content Component
**File:** `src/components/path-to-funding/ProductsContent.tsx`

Contains:
- 2-column responsive grid of product cards
- Each card with title (with bottom border accent) and description

#### 3. Add Route to App.tsx
Add new route: `/path-to-funding/products`

#### 4. Update Navigation
**File:** `src/components/phakamani/PhakamaniNavbar.tsx`

Add "Products" link to the "How to apply" dropdown menu (both desktop and mobile).

---

### Styling to Match Site Design System

**Page Container**
- `min-h-screen bg-background` (matching other path-to-funding pages)
- Main: `pt-[180px] lg:pt-[210px]`

**Hero Section**
- Container: `container mx-auto px-4 py-10`
- Breadcrumb: `text-sm font-semibold text-[hsl(var(--ptf-text))] uppercase tracking-wider mb-4`
- H1: `text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-4`
- Intro paragraph: `text-lg text-[hsl(var(--ptf-text))] leading-relaxed max-w-3xl`

**Product Cards Grid**
- Container: `container mx-auto px-4 pb-16`
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Card: `bg-white rounded-xl border border-gray-100 shadow-sm p-8 transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg hover:-translate-y-1`
- Card H3: `text-xl font-bold text-[hsl(var(--ptf-heading))] mb-4 pb-4 border-b border-gray-200`
- Card paragraph: `text-[hsl(var(--ptf-text))] leading-relaxed`

**Icons for Cards**
Using Lucide React icons mapped to each product:
- Startup grants: `Sprout` (growth/seed)
- Growth loans: `TrendingUp` (expansion)
- Equity instruments: `Users` (co-investment)
- Blended finance: `Shield` (guarantee/de-risk)

---

### Files to Create/Modify

| Action | File |
|--------|------|
| Create | `src/pages/path-to-funding/ProductsPage.tsx` |
| Create | `src/components/path-to-funding/ProductsContent.tsx` |
| Modify | `src/App.tsx` (add route) |
| Modify | `src/components/phakamani/PhakamaniNavbar.tsx` (add nav link) |

---

### Responsive Behaviour

**Desktop (md+)**
- Product cards: 2 columns

**Mobile**
- Product cards: 1 column stacked
- Proper spacing and touch targets

