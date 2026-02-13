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