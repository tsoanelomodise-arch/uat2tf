// Custom hook for search functionality
import { useState, useCallback, useMemo, useEffect } from 'react';
import { search, groupResultsByType, getSuggestedSearches } from '@/lib/search/search-engine';
import { SearchResult, SearchFilters, ContentType } from '@/lib/search/types';
import { useDebounce } from './useDebounce';

interface UseSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  groupedResults: {
    directAnswers: SearchResult[];
    guides: SearchResult[];
    documents: SearchResult[];
    sections: SearchResult[];
  };
  isLoading: boolean;
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  clearFilters: () => void;
  activeFilter: ContentType | 'all';
  setActiveFilter: (filter: ContentType | 'all') => void;
  suggestedSearches: string[];
  hasResults: boolean;
  totalResults: number;
}

export function useSearch(): UseSearchReturn {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [activeFilter, setActiveFilter] = useState<ContentType | 'all'>('all');
  const [isLoading, setIsLoading] = useState(false);
  
  // Debounce query for performance
  const debouncedQuery = useDebounce(query, 150);
  
  // Set loading state when query changes (before debounce resolves)
  useEffect(() => {
    if (query !== debouncedQuery && query.trim()) {
      setIsLoading(true);
    }
  }, [query, debouncedQuery]);
  
  // Compute results based on debounced query
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) {
      setIsLoading(false);
      return [];
    }
    
    const searchFilters: SearchFilters = {
      ...filters,
      type: activeFilter !== 'all' ? [activeFilter] : undefined,
    };
    
    const searchResults = search(debouncedQuery, searchFilters);
    setIsLoading(false);
    
    return searchResults;
  }, [debouncedQuery, filters, activeFilter]);
  
  // Group results for display
  const groupedResults = useMemo(() => {
    return groupResultsByType(results);
  }, [results]);
  
  // Clear filters
  const clearFilters = useCallback(() => {
    setFilters({});
    setActiveFilter('all');
  }, []);
  
  return {
    query,
    setQuery,
    results,
    groupedResults,
    isLoading,
    filters,
    setFilters,
    clearFilters,
    activeFilter,
    setActiveFilter,
    suggestedSearches: getSuggestedSearches(),
    hasResults: results.length > 0,
    totalResults: results.length,
  };
}
