

## Plan: Apply Homepage Styling to About Page Content

I will update the styling of the newly imported About page content (lines 342-452) to match the homepage design system. All copy will remain exactly as-is with no text changes.

### Design Patterns Identified from Homepage

Based on my analysis of the homepage components, these are the key styling patterns to apply:

**Color Palette**
- Primary green: `bg-primary`, `text-primary` (HSL 158 100% 24% = #007847)
- Accent orange/yellow: `#ffb81c` for highlights and accents
- Text colors: `text-foreground`, `text-muted-foreground`, `text-gray-600`
- Section backgrounds: `bg-primary/10`, `bg-white`, `bg-muted/30`

**Typography**
- Section headings: `text-4xl md:text-5xl font-bold` with `text-primary` or dark color
- Sub-headings: `text-2xl font-bold`
- Body text: `text-lg` or `text-xl` with `leading-relaxed`

**Spacing & Containers**
- Section padding: `py-16` or `py-20`
- Container: `container mx-auto px-4 max-w-7xl` or `max-w-6xl`
- Grid gaps: `gap-8` or `gap-16`

**Card Styling**
- White backgrounds with subtle shadows: `bg-white rounded-lg shadow-sm`
- Hover effects: `hover:shadow-md transition-all duration-300`
- Borders: minimal, using `border-gray-200`

**Accordion Styling (from FAQ component)**
- Rounded cards: `bg-white/95 backdrop-blur rounded-xl`
- Green primary section background: `bg-primary`
- Trigger text: `text-primary font-semibold`
- Content: `text-gray-700 leading-relaxed`

---

### Changes to Apply

#### 1. About Section (H1 + Intro)
**Current:** Basic heading with `text-4xl`
**Update to:**
- H1: `text-4xl md:text-5xl font-bold text-primary mb-6`
- Paragraph: `text-xl text-muted-foreground max-w-4xl leading-relaxed`
- Container: Use homepage container width `container mx-auto px-4 max-w-7xl`
- Section padding: `py-16`

#### 2. At a Glance Section
**Current:** Simple bordered container with grid
**Update to:**
- Section background: `bg-primary/10` (matches FundingPrograms section)
- Container: full-width with `py-12`
- Heading: `text-2xl font-bold text-primary mb-6`
- Five items: Cards with `bg-white rounded-xl shadow-sm p-6` hover effect
- Grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4`

#### 3. Two-Column Section (Objectives + The Method)
**Current:** Bordered cards with basic styling
**Update to:**
- Section: `py-16 bg-background`
- Cards: `bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all`
- Objectives heading: `text-2xl font-bold text-primary mb-6`
- Number badges: `bg-primary text-white rounded-lg` (matching homepage icon boxes)
- The Method heading: `text-2xl font-bold text-primary mb-6`
- Text: `text-muted-foreground text-lg leading-relaxed`

#### 4. The Architecture Section (Accordion)
**Current:** Basic accordion with border styling
**Update to match FAQ component:**
- Section background: `bg-primary` with white text heading
- Heading: `text-4xl md:text-5xl font-bold text-white mb-6`
- Intro line: `text-xl text-white/80 mb-8`
- Accordion container: full width with proper padding
- Accordion items: `bg-white/95 backdrop-blur rounded-xl` with spacing between items
- Trigger: `text-lg font-semibold text-primary hover:text-primary-dark`
- Content: `text-gray-700 leading-relaxed`
- Remove internal borders, use `space-y-4` for item separation

---

### Technical Implementation

```text
File to modify: src/pages/About.tsx
Lines affected: 342-452 (New About Content Section)
```

**Section structure after changes:**

1. **About Intro Section** (white background)
   - Container with homepage-standard width
   - Large primary-colored heading
   - Descriptive paragraph

2. **At a Glance Section** (light green background `bg-primary/10`)
   - Five white cards in responsive grid
   - Hover effects matching homepage cards

3. **Objectives + Method Section** (white background)
   - Two-column grid with white cards
   - Green number badges for objectives
   - Consistent card styling with shadows

4. **The Architecture Section** (green background `bg-primary`)
   - White text for heading and intro
   - FAQ-style accordion with white card items
   - Green text for accordion triggers
   - Proper spacing and hover states

All changes preserve the exact verbatim text from the HTML - only CSS classes and component styling will be updated.

