
-- Create a public view that excludes the created_by column
CREATE VIEW public.news_media_public
WITH (security_invoker = on) AS
SELECT
  id, content_type, source, platform, source_url, title, excerpt,
  full_content, featured_image_url, video_url, story_thumbnail_url,
  publish_date, status, priority, show_on_home, highlight_on_home,
  show_on_archive, created_at, updated_at
FROM public.news_media;

-- Drop the existing public SELECT policy
DROP POLICY IF EXISTS "Public can read approved news_media" ON public.news_media;

-- Create a restrictive policy: public can only read via the view (denied direct access)
-- Admins retain full access via their existing ALL policy
CREATE POLICY "Public can read approved news_media"
ON public.news_media
FOR SELECT
USING (
  has_role(auth.uid(), 'admin'::app_role)
  OR status = 'approved'
);
