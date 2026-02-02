
## Plan: Remove Tabs and Vision/Mission from About Page

I will remove the tabbed content section (which contains the "Our Vision" and "Our Mission" content) from the About page while keeping all other sections intact.

---

### Current About Page Structure

| Section | Status |
|---------|--------|
| PhakamaniNavbar | Keep |
| AboutHero | Keep |
| **Tabbed Section** (5 tabs: Building the Future, More Than Growth, Why Transform?, A New Path, Our Promise) | **REMOVE** |
| About intro (H1 + paragraph) | Keep |
| Objectives + The Method (2-column grid) | Keep |
| The Architecture (5-pillar accordion) | Keep |
| Footer | Keep |

---

### What Gets Removed

**Tab Navigation and All Tab Content (lines 12-340):**
- Tab definitions array (Building the Future, More Than Growth, Why Transform?, A New Path, Our Promise)
- `useState` hook for `activeTab`
- Entire tabbed section container including:
  - "Building the Future" tab with **Our Vision** and **Our Mission** cards
  - "More Than Growth" tab (4 numbered items)
  - "Why Transform?" tab (3 numbered items)
  - "A New Path" tab (Old Way vs New Way comparison)
  - "Our Promise" tab (4 cards: Accountability, Integrity, Transparency, Partnership)

---

### File Changes

**File: `src/pages/About.tsx`**

1. Remove the `useState` import (no longer needed)
2. Remove the `tabs` array definition (lines 12-38)
3. Remove `const [activeTab, setActiveTab] = useState("building");` (line 41)
4. Remove the entire Tabbed Content Section (lines 48-340)

---

### Resulting Page Structure

After removal, the About page will contain:

1. **AboutHero** - Bakery visual with "Advancing the economic agenda" heading
2. **About intro section** - H1 "About" with introductory paragraph about the Transformation Fund
3. **Objectives + The Method** - Two-column layout with numbered objectives and method description
4. **The Architecture** - 5-pillar accordion (Capital, Capability, Markets, Telemetry, Governance)
5. **Footer**

---

### Visual Flow After Changes

```text
+------------------------------------------+
|           PhakamaniNavbar                |
+------------------------------------------+
|           AboutHero (Bakery)             |
|    "Advancing the economic agenda"       |
+------------------------------------------+
|           About Section                  |
|    H1: "About"                           |
|    Intro paragraph                       |
+------------------------------------------+
|    Objectives    |    The Method         |
|    (4 items)     |    (paragraph)        |
+------------------------------------------+
|         The Architecture                 |
|    5-pillar accordion on green bg        |
|    (Capital, Capability, Markets,        |
|     Telemetry, Governance)               |
+------------------------------------------+
|              Footer                      |
+------------------------------------------+
```

---

### Technical Details

- The `useState` import and `activeTab` state will be removed since tabs are no longer needed
- The Accordion import remains (used for The Architecture section)
- No changes to styling or other components
- Page will load faster without tab state management
