

## Plan: Append Why Content to Transformation Index Page

I will append the content from the uploaded HTML file to the bottom of the existing Why page (`/about/why`), placing it as a new section before the Footer. All text will be imported verbatim with no changes.

### Content to Append (from HTML)

**1. Why? Section Header**
- H2 heading: "Why?"
- Intro paragraph: "The Transformation Fund is designed as a strategic instrument to drive inclusive economic transformation in South Africa. By combining financial and non-financial support, mobilising public-private investment, and streamlining Enterprise and Supplier Development efforts, the Fund aims to empower Black-owned enterprises, foster job creation, and promote structural change across key sectors."

**2. Six Pillar Cards (Grid Layout)**

| Card | Title | Content |
|------|-------|---------|
| 1 | Increase access to finance for Black Enterprises | Provide affordable, appropriate funding for Black-owned and managed businesses, especially those underserved by commercial lenders, including start-ups, scale-ups, and distressed firms. |
| 2 | Mobilise public-private investment for transformation | Pool resources from private corporations, DFIs, and donors into a large fund dedicated to B-BBEE, with voluntary contributions incentivised through B-BBEE scoring. |
| 3 (wide) | Coordinate and enhance ESD impact | Serve as a central vehicle for Enterprise and Supplier Development (ESD), by addressing the current shortcomings of fragmented corporate initiatives... (full text preserved) |
| 4 | Provide non-financial support and mentorship | Offer business development services including planning, feasibility studies, accreditation, mentorship, and training to address common SMME challenges. |
| 5 | Promote Inclusive growth and job creation | Promotes inclusive growth by supporting job creation in labour-intensive sectors and stimulating local economies, while actively prioritising Black women, youth, and people with disabilities as business owners and beneficiaries to reduce inequality. |
| 6 (wide) | Facilitate structural transformation of the economy | Develop Black industrialists, broaden ownership in strategic sectors, and deepen local supply chains in line with South Africa's industrial policy. |

---

### Styling to Match Homepage Design System

Based on the existing components (NationalAgenda.tsx, PolicyChoice.tsx, OperatingModel.tsx), I will apply:

**Container & Spacing**
- Section: `py-10 bg-white` (consistent with other sections)
- Container: `max-w-[1400px] mx-auto px-10`

**Typography**
- Section heading (h2): `text-3xl font-bold text-gray-900 mb-4`
- Intro paragraph: `text-gray-500 text-lg leading-relaxed mb-8 max-w-4xl`
- Card heading (h3): `text-lg font-bold text-gray-900 mb-2`
- Card text: `text-gray-500 leading-relaxed`

**Card Styling (matching NationalAgenda.tsx pattern)**
- Card container: `bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- Green accent dot: `w-4 h-4 bg-[#00703C] rounded-full` (using site's primary green instead of red)
- Grid layout: `grid md:grid-cols-2 gap-6`
- Wide cards: `md:col-span-2` for cards 3 and 6

**Responsive Behavior**
- 2-column grid on desktop, single column on mobile
- Wide cards span full width on both
- Consistent padding and gaps

---

### Technical Implementation

**File to modify:** `src/pages/TransformationIndex.tsx`

**New section placement:** After `<NationalAgenda />` and before `</main>`

```text
Structure:
<main id="main-content">
  <HeroSectionNew />
  <WhySection />
  <PolicyChoice />
  <TheoryOfChange />
  <ValueProposition />
  <OperatingModel />
  <NationalAgenda />
  {/* NEW SECTION HERE */}
  <section id="why-pillars" className="py-10 bg-white">
    ...
  </section>
</main>
<Footer />
```

The new section will use semantic HTML (`<section>`, `<h2>`, `<h3>`, `<p>`) and follow the exact card pattern from NationalAgenda.tsx with green accent dots instead of red.

