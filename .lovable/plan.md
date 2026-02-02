

## Plan: Create "Funding Process" Sub-Page Under How to Apply

I will create a new sub-page at `/path-to-funding/process` called "Funding Process" and populate it with the content from the uploaded HTML file. All text will be imported verbatim with no changes.

---

### Content to Import (from HTML - verbatim)

**Breadcrumb**
- "How to apply • Funding Process"

**Hero Section**
- H1: "Transformation Fund Funding Process"
- Paragraph: "The Transformation Fund follows a structured, stage-gated funding process designed to ensure alignment, viability, accountability and long-term impact across the full project lifecycle."

**Main Card with Stages**
- Card Header H2: "Stages"

**Timeline Items (8 stages):**

| Stage Label | Title | Description |
|-------------|-------|-------------|
| Stage 0 | Stage 0: Initiation and sponsor alignment | You start by submitting a formal funding request. At this stage, sponsorship is confirmed, governance arrangements are put in place, and the relevant regulatory pathways for your project are identified. |
| Assessment | Pre-investment assessment | Your proposal is initially assessed to confirm strategic alignment, readiness and potential impact before moving into detailed development. |
| Stage 1 | Stage 1: Feasibility and information memorandum | A feasibility study and Information Memorandum are developed, setting out the project description, market analysis and an initial financial model. Proposals are reviewed by an Early Review Committee. |
| Stage 2 | Stage 2: Concept, site and process design | The project concept is refined through site selection, infrastructure confirmation and definition of production technology. A comprehensive concept design pack is prepared, supported by full technical, market, financial and risk due diligence. |
| Stage 3 | Stage 3: Procurement and EPC strategy | Equipment specifications are finalised, suppliers identified and the contracting model confirmed. Engineering, Procurement and Construction (EPC) and Technical Assistance (TA) agreements are negotiated, followed by credit approval and contracting. |
| Stage 4 | Stage 4: Financing and approvals | The capital structure is finalised, funding sources secured and all regulatory approvals obtained. The financial model is refined, enabling disbursement and ongoing monitoring. |
| Stage 5 | Stage 5: Construction and commissioning | Construction and commissioning are managed in line with quality, health and safety standards. Operational and maintenance documentation is prepared to support a smooth transition to operations. |
| Stage 6 | Stage 6: Operations readiness and handover | The final stage focuses on operational readiness, including management and staffing, establishment of marketing and distribution channels, and the setting of performance KPIs and reporting systems to ensure sustainable operations. |

**Sidebar Card**
- Header H2: "Quick actions"
- Buttons: "Start application", "Eligibility check", "Contact support"

---

### Technical Implementation

#### 1. Create New Page Component
**File:** `src/pages/path-to-funding/FundingProcessPage.tsx`

This page will follow the same structure as other sub-pages (e.g., PolicyChoicePage.tsx):
- PhakamaniNavbar at top
- Hero section with breadcrumb, H1, and intro paragraph
- Main content section with stages timeline
- Sidebar with quick actions (on desktop, stacked on mobile)
- Footer at bottom

#### 2. Create Content Component
**File:** `src/components/path-to-funding/FundingProcessContent.tsx`

Contains the main content structure:
- Two-column grid layout (main content + sidebar) on desktop
- Single column on mobile
- Card component for stages timeline
- Card component for sidebar quick actions

#### 3. Add Route to App.tsx
Add new route: `/path-to-funding/process`

#### 4. Update Navigation
**File:** `src/components/phakamani/PhakamaniNavbar.tsx`

Add "Funding Process" link to the "How to apply" dropdown menu (both desktop and mobile).

---

### Styling to Match Site Design System

**Page Container**
- `min-h-screen bg-background pt-[180px] lg:pt-[210px]` (matching PathToFunding page)

**Hero Section (Breadcrumb + Title)**
- Container: `container mx-auto px-4 py-10`
- Breadcrumb: `text-sm font-semibold text-[hsl(var(--ptf-text))] uppercase tracking-wider mb-4`
- H1: `text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ptf-heading))] mb-4`
- Intro paragraph: `text-lg text-[hsl(var(--ptf-text))] leading-relaxed max-w-3xl`

**Main Layout**
- Container: `container mx-auto px-4`
- Grid: `grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8`

**Stages Card**
- Card: `bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden`
- Card Header: `px-8 py-6 border-b border-gray-100 bg-gray-50/50`
- Card Header H2: `text-xl font-bold text-[hsl(var(--ptf-heading))]`
- Card Body: `p-8`

**Timeline Steps**
- Container: `space-y-5`
- Step item: `grid grid-cols-1 sm:grid-cols-[56px_1fr] gap-4 sm:gap-6 p-6 bg-white border border-gray-100 rounded-xl transition-all duration-200 hover:border-[hsl(var(--ptf-accent))] hover:shadow-lg hover:-translate-y-0.5`
- Alternating style (for "alt" steps): `bg-gradient-to-br from-white to-green-50/50 border-[hsl(var(--ptf-accent))]/20`
- Icon container: `w-14 h-14 rounded-xl bg-[hsl(var(--ptf-accent))]/10 flex items-center justify-center text-[hsl(var(--ptf-accent))]`
- Stage pill: `inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-wide mb-3`
- Step H3: `text-lg font-bold text-[hsl(var(--ptf-heading))] mb-2`
- Step paragraph: `text-[hsl(var(--ptf-text))] leading-relaxed`

**Sidebar**
- Wrapper: `lg:sticky lg:top-6`
- Card: `bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden`
- Card Header: `px-6 py-5 border-b border-gray-100`
- Card Header H2: `text-lg font-bold text-[hsl(var(--ptf-heading))]`
- Card Body: `p-6`
- Button stack: `space-y-3`
- Primary button: `w-full py-3.5 px-5 rounded-full font-semibold text-white bg-[hsl(var(--ptf-accent))] hover:bg-[hsl(var(--ptf-accent-hover))] transition-all shadow-md hover:shadow-lg`
- Secondary buttons: `w-full py-3.5 px-5 rounded-full font-semibold border border-gray-200 text-[hsl(var(--ptf-heading))] hover:border-gray-300 hover:bg-gray-50 transition-all`

**Icons for Steps**
Using Lucide React icons mapped to each stage:
- Stage 0: `ArrowUp` (initiation)
- Assessment: `Search` (assessment)
- Stage 1: `FileText` (feasibility)
- Stage 2: `Layers` (concept design)
- Stage 3: `Monitor` (procurement)
- Stage 4: `DollarSign` (financing)
- Stage 5: `CheckCircle` (construction)
- Stage 6: `Flag` (operations)

---

### Files to Create/Modify

| Action | File |
|--------|------|
| Create | `src/pages/path-to-funding/FundingProcessPage.tsx` |
| Create | `src/components/path-to-funding/FundingProcessContent.tsx` |
| Modify | `src/App.tsx` (add route) |
| Modify | `src/components/phakamani/PhakamaniNavbar.tsx` (add nav link) |

---

### Responsive Behaviour

**Desktop (lg+)**
- Two-column layout: main content (1fr) + sidebar (340px)
- Sidebar sticky positioned

**Tablet/Mobile**
- Single column layout
- Sidebar moves below main content
- Timeline steps stack vertically with icon above content on small screens

