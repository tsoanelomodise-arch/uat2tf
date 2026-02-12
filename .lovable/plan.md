

## Move "How to Apply" Bullet Points Inline with YouTube Video

### Current Layout
The section uses a 2-column grid where:
- **Left column**: Header text + YouTube video (stacked vertically)
- **Right column**: 3 numbered bullet points (vertically centered in the column)

### Proposed Change
Restructure the layout so the text header spans full width on top, and the YouTube video and numbered bullet points sit side-by-side below it.

### File: `src/components/test-home/TestHomePortalSection.tsx`
- Move the section header ("SECURE PORTAL", "How to apply", description paragraph) out of the grid and place it above as a full-width block
- Create a 2-column grid below containing:
  - **Left**: The YouTube video embed
  - **Right**: The 3 numbered service items, vertically centered to align with the video

This keeps all existing content and styling intact while repositioning the bullet points to sit alongside the video.

