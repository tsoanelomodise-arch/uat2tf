

## Plan: Append Eligibility Content Below Hero on How to Apply Page

I will append the eligibility and criteria content from the uploaded HTML file below the hero section on the existing How to Apply page (`/path-to-funding`). All text will be imported verbatim with no changes.

---

### Content to Append (from HTML)

**Section Heading**
- H2: "Eligibility and criteria"

**Introduction Text (2 paragraphs)**
1. "The Transformation Fund is designed to serve a broad yet intentionally segmented market of majority Black-owned enterprises that are underserved by traditional finance."

2. "Applicants will need to show that their businesses are legally compliant, properly registered and meet basic operational and financial management standards. This approach will ensure that support is provided to enterprises that are ready to succeed and contribute to economic development. Eligibility is segmented across firm types and structural contexts to ensure inclusive coverage. This includes:"

**Accordion Items (7 items)**

| # | Title | Content |
|---|-------|---------|
| 1 | Informal and start-up enterprises | Includes township traders, emerging farmers, and micro manufacturers needing support to formalise and grow. These greenfield ventures often lie outside formal supply chains and lack access to capital. |
| 2 | Early-stage industrial and high-impact ventures | Targets Black Industrialist projects and strategic sectors such as manufacturing, agro-processing, mineral beneficiation, and green economy. These ventures require patient, risk-tolerant capital to scale. |
| 3 | Growth-phase MSMEs | Supports small and medium enterprises that have survived initial hurdles and are ready to expand, but face barriers accessing conventional finance due to collateral or paperwork requirements. |
| 4 | Mid-size firms graduating to large enterprises | Backs majority Black-owned firms with proven unit economics aiming for structural growth through technology upgrades, M&A, and market expansion, while preserving Black ownership. |
| 5 | Cooperatives and collective enterprises | Includes community-owned entities such as agricultural cooperatives and village savings groups, especially in rural and township areas. Support will be tailored to help them scale and access larger markets. |
| 6 | Youth-, women-, and designated group-led businesses | Prioritises enterprises led by black women, youth, and people with disabilities. A mandated portion of funding is reserved for these groups, with flexible requirements and linked technical support. |
| 7 | Township and rural enterprises | Special emphasis is placed on businesses located in disadvantaged geographies. Dedicated funding and on-site support will help overcome infrastructure and market access barriers. |

---

### Styling to Match Site Design System

Based on analysis of the PathToFundingFAQ.tsx component and site patterns:

**Section Container**
- Section: `py-10 bg-[hsl(var(--ptf-section-bg))]` (matching other path-to-funding sections)
- Container: `container mx-auto px-4`

**Section Header**
- Badge pill: `inline-block px-4 py-2 bg-[hsl(var(--ptf-accent))]/10 text-[hsl(var(--ptf-accent))] rounded-full text-sm font-semibold mb-4`
- H2: `text-3xl md:text-4xl font-bold text-[hsl(var(--ptf-heading))] mb-4`
- Intro text: `text-lg text-[hsl(var(--ptf-text))] max-w-3xl` with `leading-relaxed`

**Accordion Styling (matching PathToFundingFAQ.tsx)**
- Container: `max-w-3xl mx-auto`
- Accordion type: `single` with `collapsible` behavior
- Item container: `bg-white rounded-xl border border-gray-100 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow`
- Trigger: `text-left text-[hsl(var(--ptf-heading))] font-semibold py-5 hover:no-underline`
- Content: `text-[hsl(var(--ptf-text))] pb-5 leading-relaxed`
- Items spacing: `space-y-4`

---

### Technical Implementation

**New Component Created**
- File: `src/components/path-to-funding/EligibilityCriteriaSection.tsx`
- Reuses the site's Radix UI Accordion component from `@/components/ui/accordion`

**Page Modification**
- File: `src/pages/PathToFunding.tsx`
- Import and place `<EligibilityCriteriaSection />` immediately after the PathToFundingHero section

```text
Current Structure:
<main>
  <section id="how-to-apply-top">
    <PathToFundingHero ... />
  </section>
  <FundingConditionsSection ... />
  <InvestmentCriteriaSection />
</main>

New Structure:
<main>
  <section id="how-to-apply-top">
    <PathToFundingHero ... />
  </section>
  
  {/* NEW SECTION HERE */}
  <EligibilityCriteriaSection />
  
  <FundingConditionsSection ... />
  <InvestmentCriteriaSection />
</main>
```

**Responsive Behavior**
- Mobile: Full-width accordion items with proper touch targets
- Desktop: Centered content with max-width of 768px (3xl)
- Consistent with existing page sections

