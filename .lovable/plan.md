

## Image Upload for News & Media Admin

### Overview
Add a drag-and-drop image upload feature to the News & Media admin form. Admins will be able to either upload an image directly or paste a URL manually -- both options available side by side.

### What Will Change

**1. Create a Storage Bucket (Database Migration)**
- Create a `news-media-images` public storage bucket for uploaded images
- Add RLS policies so only admins can upload/delete, but anyone can read (public bucket)

**2. New Component: `ImageUploadField`**
- A reusable component with two modes toggled by tabs: "Upload" and "URL"
- **Upload tab**: Drag-and-drop zone with click-to-browse fallback
  - Accepts image files (jpg, png, webp, gif)
  - Shows upload progress indicator
  - Displays preview thumbnail after upload
  - Uploads to the `news-media-images` storage bucket
  - Returns the public URL to the parent form
- **URL tab**: The existing text input for pasting an external URL
- Preview thumbnail shown below whichever method is used

**3. Update `NewsMediaForm`**
- Replace the plain "Featured Image URL" input (for news) with the new `ImageUploadField`
- Replace the plain "Story Thumbnail URL" input (for stories) with the same component
- The form state continues to store a URL string -- the upload simply produces the URL automatically

### Technical Details

**Storage bucket SQL migration:**
```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('news-media-images', 'news-media-images', true);

-- Anyone can view images
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'news-media-images');

-- Only admins can upload
CREATE POLICY "Admins can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'news-media-images'
  AND public.has_role(auth.uid(), 'admin')
);

-- Only admins can delete
CREATE POLICY "Admins can delete images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'news-media-images'
  AND public.has_role(auth.uid(), 'admin')
);
```

**New file: `src/components/admin/ImageUploadField.tsx`**
- Uses native HTML drag-and-drop events (dragover, drop)
- Uses `supabase.storage.from('news-media-images').upload(...)` for uploading
- Generates unique filenames using timestamp + random suffix
- Shows a dashed drop zone with icon and text
- Tabs component to switch between Upload and URL modes

**Modified file: `src/components/admin/NewsMediaForm.tsx`**
- Import and use `ImageUploadField` in place of the plain `Input` for:
  - Featured Image URL (news items)
  - Story Thumbnail URL (stories)
- Each `ImageUploadField` receives the current URL value and an `onChange` callback

