

## Plan: Add New About Content Above Footer

I'll add the content from your HTML file to the About page, placing it between the existing tabbed content section and the footer. All text will be imported verbatim with no changes.

### New Content Structure (placed above Footer)

**1. About Section**
- H1 heading: "About"
- Intro paragraph about the Transformation Fund as a strategic instrument (exact text from HTML)

**2. At a Glance Section**
- Section heading: "At a glance"
- Five items displayed in a responsive grid:
  - Capital | Capability | Markets | Telemetry | Governance
- Using site's existing card styling with borders

**3. Two-Column Section (Desktop) / Stacked (Mobile)**
- **Left column - Objectives**: 4 numbered items (01-04)
  1. Promote economic transformation...
  2. Improve access to funding...
  3. Empower and support majority black-owned...
  4. Mobilise financial resources...
- **Right column - The Method**: Single paragraph (exact text)

**4. The Architecture Section**
- Heading: "The Architecture" (single instance)
- Intro line: "The Fund's architecture rests on five interlocking pillars:"
- 5-item accordion with expand/collapse functionality:
  - Capital
  - Capability  
  - Markets
  - Telemetry
  - Governance
- Only one accordion item open at a time (`type="single"`)
- Keyboard accessible (built into Radix UI Accordion)

### Technical Details
- Use existing `@/components/ui/accordion` component
- Responsive grid: `grid-cols-1 md:grid-cols-2` for two-column layout
- At a glance: 5-column grid on desktop, responsive on mobile
- Tailwind CSS classes matching the site's design system (green accent color `#007847`, consistent spacing, typography)
- All text copied exactly as provided - no edits

