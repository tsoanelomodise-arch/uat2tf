
-- 1. Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- 2. Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 4. RLS on user_roles: admins can read all, users can read own
CREATE POLICY "Users can read own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 5. Create site_settings table (single row)
CREATE TABLE public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  youtube_channel_url text NOT NULL DEFAULT '',
  system_logo_url text NOT NULL DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site settings"
  ON public.site_settings FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage site settings"
  ON public.site_settings FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Insert default row
INSERT INTO public.site_settings (youtube_channel_url, system_logo_url)
VALUES ('', '');

-- 6. Create news_media table
CREATE TABLE public.news_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_type text NOT NULL CHECK (content_type IN ('news', 'story')),
  source text NOT NULL DEFAULT 'manual' CHECK (source IN ('manual', 'aggregated')),
  platform text,
  source_url text,
  title text NOT NULL,
  excerpt text,
  full_content text,
  featured_image_url text,
  video_url text,
  story_thumbnail_url text,
  publish_date timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'approved', 'rejected')),
  priority integer NOT NULL DEFAULT 5 CHECK (priority >= 1 AND priority <= 10),
  show_on_home boolean NOT NULL DEFAULT false,
  highlight_on_home boolean NOT NULL DEFAULT false,
  show_on_archive boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);
ALTER TABLE public.news_media ENABLE ROW LEVEL SECURITY;

-- Public can read approved items
CREATE POLICY "Public can read approved news_media"
  ON public.news_media FOR SELECT
  USING (status = 'approved');

-- Admins can do everything
CREATE POLICY "Admins can manage all news_media"
  ON public.news_media FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 7. Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_news_media_updated_at
  BEFORE UPDATE ON public.news_media
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
