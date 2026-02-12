
# Add "Read More" Links and Dedicated News/Story Detail Page

## Overview
Create a dedicated detail page for individual news and story items, then add "Read more" links throughout the site that navigate users to it.

## Changes

### 1. New Detail Page: `src/pages/NewsMediaDetailPage.tsx`
- Route: `/news-media/:id`
- Fetches a single item from the `news_media` table by ID
- Displays: title, publish date, content type badge, featured image or video embed, full content (with fallback to excerpt), and source link if available
- Uses the existing `PhakamaniNavbar` and `Footer` layout
- Includes a "Back to News & Media" link

### 2. New Hook: `useNewsMediaItem` in `src/hooks/useNewsMedia.ts`
- Fetches a single approved news_media item by ID using `.eq("id", id).eq("status", "approved").single()`

### 3. New Route in `src/App.tsx`
- Add `/news-media/:id` route pointing to `NewsMediaDetailPage`

### 4. Add "Read more" Links to Existing Components
- **`HighlightedStoriesSection.tsx`** (home page stories): Add a `<Link to={/news-media/${story.id}>Read more</Link>` below each story excerpt
- **`NewsHighlightsSection.tsx`** (home page news): Add a `<Link to={/news-media/${item.id}>Read more</Link>` below each news excerpt
- **`NewsMediaPage.tsx`** (archive page): Replace the existing conditional `source_url` link with a `<Link to={/news-media/${item.id}>Read more</Link>` that always appears

## Technical Details

### Detail Page Layout
- Full-width featured image/video at the top
- Title, date, and content type label
- Full content rendered as text (or excerpt if no full content)
- If `source_url` exists, show an "Original source" external link
- If `video_url` exists, embed the YouTube player

### Styling
- Consistent with the existing site design system (same fonts, colors, spacing)
- Max-width container matching other pages (`max-w-[1400px]`)
- "Read more" links styled as `text-sm font-bold text-[#007847] hover:underline` to match existing patterns
