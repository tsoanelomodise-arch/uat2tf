
-- Drop the existing public read policy on the base table
DROP POLICY IF EXISTS "Public can read approved news_media" ON public.news_media;

-- Replace with admin-only SELECT policy (public reads go through news_media_public view)
CREATE POLICY "Only admins can select from news_media"
ON public.news_media
AS RESTRICTIVE
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));
