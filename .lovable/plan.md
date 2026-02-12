

# News and Media System -- Phase 1 (Manual Content + CMS)

## Overview

Build a centralised News and Media system powered by Lovable Cloud (Supabase). This phase covers manual content creation, admin CMS, and powering the existing home page News section plus a new Stories section. Social feed aggregation will follow in a later phase.

---

## What Gets Built

1. **Database** -- A single `news_media` table storing both News and Stories
2. **Admin Dashboard** -- A protected `/admin/news-media` page for content management
3. **Home Page Integration** -- Connect the existing News Highlights section to live data, and add a new Highlighted Stories section
4. **News and Media Archive Page** -- A new `/news-media` public page showing all approved content
5. **Global Settings** -- A `site_settings` table for the YouTube channel URL and system logo fallback

---

## Database Schema

### Table: `news_media`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | Auto-generated |
| content_type | text ('news' or 'story') | Required |
| source | text ('manual') | Phase 1 only; 'aggregated' added later |
| platform | text | Nullable; for Phase 2 |
| source_url | text | Nullable; external link |
| title | text | Required |
| excerpt | text | Short summary |
| full_content | text | Full body (markdown) |
| featured_image_url | text | Optional for News |
| video_url | text | YouTube only; validated |
| story_thumbnail_url | text | Optional for Stories |
| publish_date | timestamptz | Default now() |
| status | text | 'draft', 'approved', 'rejected' |
| priority | integer | 1--10, default 5 |
| show_on_home | boolean | For News items |
| highlight_on_home | boolean | For Stories |
| show_on_archive | boolean | Default true |
| created_at | timestamptz | Auto |
| updated_at | timestamptz | Auto |
| created_by | uuid | References auth.users |

### Table: `site_settings`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | Single row |
| youtube_channel_url | text | Required for video validation |
| system_logo_url | text | Fallback thumbnail for Stories |
| updated_at | timestamptz | Auto |

### RLS Policies

- Public read access for approved items only
- Authenticated admin write access (using a `user_roles` table with `has_role()` function as per security guidelines)

---

## Admin Dashboard (`/admin/news-media`)

### Features

- **Content List** -- Table view of all News and Stories with columns: Title, Type, Status, Priority, Date
- **Filters** -- By content type (News/Story), status (Draft/Approved/Rejected)
- **Create/Edit Form** -- Conditional fields based on content type:
  - News: title, excerpt, full content, featured image URL, video URL (optional), priority, display flags
  - Story: title, excerpt, full content, video URL or story thumbnail, priority, highlight flag
- **Approve/Reject** buttons with validation:
  - Video URLs validated against the configured YouTube channel
  - Stories require either a custom thumbnail or system logo fallback
- **Home Selection Enforcement**:
  - Maximum 3 News items with `show_on_home = true`
  - Maximum 3 Stories with `highlight_on_home = true`
  - UI prevents selecting more than 3 of each
- **Settings Tab** -- Configure YouTube channel URL and system logo

### Auth

- Simple email/password login via Supabase Auth
- Admin role check using `user_roles` table and `has_role()` function
- Protected route that redirects non-admins

---

## Home Page Changes (Minimal)

### News Highlights Section (existing)

- Replace the hardcoded `newsItems` array with a query fetching top 3 approved News items (`show_on_home = true`, sorted by priority then publish_date)
- Keep ALL existing styling, layout, grid, typography, and QR code unchanged
- Add loading skeleton that matches the existing 3-item layout

### Highlighted Stories Section (new)

- Add a new section below or near the News Highlights
- Display top 3 approved Stories (`highlight_on_home = true`, sorted by priority then publish_date)
- Each story card shows:
  - Thumbnail (custom or system logo fallback)
  - Title
  - Excerpt
  - YouTube play button overlay if video exists
- Follow the existing site design language (uppercase headings, tracking-tight, grayscale aesthetic)
- No video autoplay

---

## News and Media Archive Page (`/news-media`)

- New public page with PhakamaniNavbar and Footer
- Displays all approved items (both News and Stories)
- Filter bar: Content type, Date range
- Card grid layout
- Embedded YouTube player for video items (click-to-play, no autoplay)
- Stories always show thumbnails (custom or system logo fallback)
- Pagination or infinite scroll
- Navigation link added to PhakamaniNavbar

---

## Validation Rules (Enforced in Admin)

- YouTube video URLs must match the configured channel (validated via URL pattern and YouTube oEmbed API in an edge function)
- Items with invalid YouTube links cannot be approved
- Removing `show_on_home` or `highlight_on_home` instantly removes from home page
- Removing a story thumbnail falls back to system logo
- No auto-publishing; all content starts as Draft

---

## Files to Create/Modify

### New Files

- `supabase/migrations/001_news_media_schema.sql` -- Database schema
- `supabase/functions/validate-youtube/index.ts` -- YouTube channel validation edge function
- `src/pages/admin/NewsMediaAdmin.tsx` -- Admin dashboard page
- `src/components/admin/NewsMediaList.tsx` -- Content list table
- `src/components/admin/NewsMediaForm.tsx` -- Create/edit form
- `src/components/admin/NewsMediaSettings.tsx` -- Settings panel
- `src/components/admin/AdminLayout.tsx` -- Admin layout wrapper with auth check
- `src/components/test-home/HighlightedStoriesSection.tsx` -- New stories section for home
- `src/pages/NewsMediaPage.tsx` -- Public archive page
- `src/hooks/useNewsMedia.ts` -- Data fetching hooks (React Query)
- `src/pages/admin/AdminLogin.tsx` -- Login page

### Modified Files

- `src/App.tsx` -- Add routes for `/news-media`, `/admin/news-media`, `/admin/login`
- `src/components/test-home/NewsHighlightsSection.tsx` -- Replace hardcoded data with live query (no styling changes)
- `src/pages/TestHome.tsx` -- Add HighlightedStoriesSection component
- `src/components/phakamani/PhakamaniNavbar.tsx` -- Add "News & Media" nav link

---

## Technical Details

### Lovable Cloud Setup

- Enable Lovable Cloud to get Supabase backend
- Run migrations to create tables, RLS policies, roles

### React Query Integration

- `useNewsHighlights()` -- Fetches top 3 home news
- `useHighlightedStories()` -- Fetches top 3 home stories
- `useNewsMediaArchive(filters)` -- Fetches paginated archive
- `useNewsMediaAdmin(filters)` -- Fetches all items for admin
- Mutations for create, update, approve, reject

### YouTube Validation Edge Function

- Accepts a video URL
- Extracts channel ID via YouTube oEmbed or Data API
- Compares against configured channel URL in `site_settings`
- Returns valid/invalid status

---

## What Is NOT Included (Phase 2)

- Social feed aggregation (Facebook, Instagram, LinkedIn, X, RSS)
- "Refresh Feeds" button
- Duplicate detection for aggregated content
- Platform source filters (only relevant with aggregation)
- Aggregation source management UI

