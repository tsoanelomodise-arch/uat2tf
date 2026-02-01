// Search types and interfaces

export type ContentType = 'faq' | 'guide' | 'policy' | 'section' | 'story' | 'contact' | 'document';

export type ContentCategory = 
  | 'eligibility' 
  | 'funding' 
  | 'application' 
  | 'governance' 
  | 'impact' 
  | 'support'
  | 'contact'
  | 'general';

export type ContentAudience = 'entrepreneurs' | 'corporates' | 'government' | 'investors' | 'general';

export interface SearchableContent {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  content: string;
  url: string;
  anchor?: string;
  category: ContentCategory;
  audience: ContentAudience[];
  keywords: string[];
  priority: number; // 1-5, higher = more important
  lastUpdated: string;
}

export interface SearchResult extends SearchableContent {
  score: number;
  matches?: Array<{
    key: string;
    value: string;
    indices: Array<[number, number]>;
  }>;
}

export interface SearchFilters {
  type?: ContentType[];
  category?: ContentCategory[];
  audience?: ContentAudience[];
}

export interface SearchState {
  query: string;
  results: SearchResult[];
  filters: SearchFilters;
  isLoading: boolean;
  isOpen: boolean;
}
