

## Display Order / Sorting Feature for News and Stories

### What This Does
Gives admins explicit control over the order in which news and stories appear on both the homepage and the News & Media archive page, using the existing priority field with improved UI controls.

### Current Behavior
- The `priority` column (1-10) already exists in the database and is used for homepage sorting (higher priority = shown first)
- The archive page currently sorts only by publish date, ignoring priority
- The admin form has a basic number input for priority, but no visual reordering

### Plan

**1. Update Archive Page Sorting (no DB change needed)**
- Change the archive query in `useNewsMediaArchive` to sort by `priority DESC, publish_date DESC` (matching the homepage behavior) so admin-set order is respected everywhere

**2. Improve Admin List with Reorder Controls**
- Add up/down arrow buttons to each row in the `NewsMediaList` table so admins can quickly bump an item's priority without opening the edit form
- Display the current priority value in the table
- Clicking the up arrow increases priority (moves item higher in display), down arrow decreases it

**3. Improve Priority Field in Admin Form**
- Rename the label from "Priority (1-10)" to "Display Order (1 = lowest, 10 = highest)" for clarity
- Add helper text explaining that higher values appear first on both the home and archive pages

### Technical Details

**Files to modify:**
- `src/hooks/useNewsMedia.ts` -- update `useNewsMediaArchive` query to add `.order("priority", { ascending: false })` before the publish_date order
- `src/components/admin/NewsMediaList.tsx` -- add up/down arrow buttons per row that call `useUpdateNewsMedia` to adjust priority; sort admin list by priority DESC as well
- `src/components/admin/NewsMediaForm.tsx` -- update label and add helper text for the priority field

**No database migration required** -- the `priority` column and sorting infrastructure already exist.

