export interface NewsMediaItem {
  id: string;
  content_type: 'news' | 'story';
  source: 'manual' | 'aggregated';
  platform: string | null;
  source_url: string | null;
  title: string;
  excerpt: string | null;
  full_content: string | null;
  featured_image_url: string | null;
  video_url: string | null;
  story_thumbnail_url: string | null;
  publish_date: string;
  status: 'draft' | 'approved' | 'rejected';
  priority: number;
  show_on_home: boolean;
  highlight_on_home: boolean;
  show_on_archive: boolean;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface NewsMediaInsert {
  content_type: 'news' | 'story';
  source?: string;
  platform?: string | null;
  source_url?: string | null;
  title: string;
  excerpt?: string | null;
  full_content?: string | null;
  featured_image_url?: string | null;
  video_url?: string | null;
  story_thumbnail_url?: string | null;
  publish_date?: string;
  status?: string;
  priority?: number;
  show_on_home?: boolean;
  highlight_on_home?: boolean;
  show_on_archive?: boolean;
}

export interface SiteSettings {
  id: string;
  youtube_channel_url: string;
  system_logo_url: string;
  updated_at: string;
}
