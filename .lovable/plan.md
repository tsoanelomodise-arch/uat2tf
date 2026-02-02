

## Plan: Create "Market Segments" Sub-Page Under How to Apply

I will create a new sub-page at `/path-to-funding/market-segments` called "Market segments" and populate it with the content from the uploaded HTML file. All text will be imported verbatim with no changes.

---

### Content to Import (from HTML - verbatim)

**Breadcrumb**
- "How to apply • Market segments"

**Hero Section**
- H1: "Market segments we support"
- Paragraph: "The Transformation Fund is designed to support enterprises that play a critical role in driving inclusive, productive economic growth. Our focus is on businesses and entrepreneurs who have historically faced barriers to finance, capability and market access."

**Strategic Pillars Section (3 cards)**

| Card Title | Content |
|------------|---------|
| Ownership | We support black-owned businesses, including enterprises owned by women, youth and persons with disabilities, with a strong emphasis on broad-based and community-linked participation. |
| Geographic focus | We prioritise enterprises based in rural areas and townships, recognising their potential to drive local industrial activity, job creation and inclusive development. |
| Enterprise stage | We support both early-stage and growth-stage enterprises, providing tailored financing and support to help businesses move from concept to scale and into sustainable, competitive operations. |

**Priority Sectors Section**
- H2: "Priority sectors"
- Intro paragraph: "Our investments focus on productive, future-focused sectors that strengthen industrial capacity, unlock new markets and drive inclusive economic growth. Our sector focus reflects national priorities, sustainability imperatives and opportunities for scalable enterprise development."

**Sector Cards (7 items):**

| Sector | Description |
|--------|-------------|
| Renewable energy | We support renewable and clean energy value chains, including solar, wind and hydro-electric generation, as well as biofuels, biomass and biogas projects that contribute to energy security and a low-carbon economy. |
| Mining services | Our investments extend beyond extraction to include mining services, mineral beneficiation and services incidental to mining, strengthening local value addition and industrial capability. |
| Agro-processing | We prioritise agro-processing and food manufacturing, alongside chemicals processing and biofuels, to deepen local production, improve food security and expand export-ready industries. |
| Information & communication technology | The Transformation Fund supports the development and expansion of ICT and telecoms infrastructure that enables digital connectivity, innovation and inclusive participation in the digital economy. |
| Infrastructure | The Transformation Fund invests in enabling infrastructure, including tourism infrastructure, bulk services and other specialised buildings that support productive economic activity. These investments create the foundations for growth, job creation and sustainable local development. |
| Manufacturing | The Fund supports a wide range of manufacturing activities, including textiles, consumables, automotive components, batteries and electric accumulators, enabling industrial diversification and competitiveness. |
| Services and business process outsourcing | The Transformation Fund supports services-led growth through business process outsourcing, call centre and data analytics services, alongside investment in healthcare infrastructure. It also focuses on digital industry commercialisation, enabling innovative digital solutions to scale into competitive, market-ready enterprises. |

---

### Technical Implementation

#### 1. Create New Page Component
**File:** `src/pages/path-to-funding/MarketSegmentsPage.tsx`

Following the same structure as FundingProcessPage:
- PhakamaniNavbar at top
- Hero section with breadcrumb, H1, and intro paragraph
- Main content section with pillars grid and sectors grid
- Footer at bottom

#### 2. Create Content Component
**File:** `src/components/path-to-funding/MarketSegmentsContent.tsx`

Contains:
- Strategic Pillars section: 3-column grid of cards
- Priority Sectors section: 2-column grid of sector cards with left border accent

#### 3. Add Route to App.tsx
Add new route: `/path-to-funding/market-segments`

#### 4. Update Navigation
**File:** `src/components/phakamani/PhakamaniNavbar.tsx`

Add "Market segments" link to the "How to apply" dropdown menu (both desktop and mobile).

---

### Styling to Match Site Design System

**Page Container**
- `min-h-screen bg-background` (matching FundingProcessPage)
- Main: `pt-[180px] lg:pt-[210px]`

**Hero Section**
- Container: `container mx-auto px-4 py-10`
- Breadcrumb: `text-sm font-semibold text-[hsl(var(--ptf-text))] uppercase tracking-wider mb-4`
- H1: `text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-4`
- Intro paragraph: `text-lg text-[hsl(var(--ptf-text))] leading-relaxed max-w-3xl`

**Strategic Pillars Grid**
- Container: `container mx-auto px-4 pb-16`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-6 mb-16`
- Card: `bg-white rounded-2xl border border-gray-100 shadow-lg p-8 transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-xl hover:-translate-y-1`
- Card H3: `text-xl font-bold text-[hsl(var(--ptf-heading))] mb-3 pb-3 border-b-[3px] border-[hsl(var(--ptf-accent))] inline-block`
- Card paragraph: `text-[hsl(var(--ptf-text))] leading-relaxed`

**Priority Sectors Section**
- Background: `bg-[hsl(var(--ptf-section-bg))] py-16` (light background section)
- Container: `container mx-auto px-4`
- Section intro: `max-w-3xl mb-12`
- H2: `text-3xl md:text-4xl font-bold text-[hsl(var(--ptf-heading))] mb-4`
- Intro paragraph: `text-lg text-[hsl(var(--ptf-text))] leading-relaxed`

**Sector Cards Grid**
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Card: `bg-white border-l-4 border-[hsl(var(--ptf-heading))] p-6 rounded-r-xl shadow-sm transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg`
- Card H3: `text-lg font-bold text-[hsl(var(--ptf-heading))] mb-2`
- Card paragraph: `text-[hsl(var(--ptf-text))] leading-relaxed`

---

### Files to Create/Modify

| Action | File |
|--------|------|
| Create | `src/pages/path-to-funding/MarketSegmentsPage.tsx` |
| Create | `src/components/path-to-funding/MarketSegmentsContent.tsx` |
| Modify | `src/App.tsx` (add route) |
| Modify | `src/components/phakamani/PhakamaniNavbar.tsx` (add nav link) |

---

### Responsive Behaviour

**Desktop (lg+)**
- Strategic pillars: 3 columns
- Sector cards: 2 columns

**Tablet (md)**
- Strategic pillars: 3 columns
- Sector cards: 2 columns

**Mobile**
- Strategic pillars: 1 column stacked
- Sector cards: 1 column stacked
- Proper spacing and touch targets

