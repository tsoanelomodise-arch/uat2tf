

## Add External Source URL Field and New-Tab Opening

### Overview
The database already has a `source_url` column on the `news_media` table. This plan adds the field to the admin form and updates all public-facing "Read more" links so that items with an external source URL open that URL in a new tab instead of navigating to the internal detail page.

### Changes

**1. Admin Form (`src/components/admin/NewsMediaForm.tsx`)**
- Add a `sourceUrl` state field initialized from `item?.source_url`
- Add a new "Source / Reference URL" text input for both news and stories
- Include `source_url` in the form payload on submit

**2. News Highlights on Home (`src/components/test-home/NewsHighlightsSection.tsx`)**
- If `item.source_url` exists, render "Read more" as an `<a>` tag with `target="_blank"` pointing to the external URL
- Otherwise, keep the existing internal `<Link>` to `/news-media/{id}`

**3. Highlighted Stories on Home (`src/components/test-home/HighlightedStoriesSection.tsx`)**
- Same logic: external URL opens in new tab, otherwise internal link

**4. News Archive Page (`src/pages/NewsMediaPage.tsx`)**
- Same logic on the "Read more" link for each archive card

**5. Detail Page (`src/pages/NewsMediaDetailPage.tsx`)**
- The existing "View original source" link at the bottom already handles `source_url` -- no changes needed there

### Technical Notes
- No database migration required -- `source_url` column already exists
- The `NewsMediaInsert` type already includes `source_url` as an optional field
- The `news_media_public` view already exposes `source_url`
