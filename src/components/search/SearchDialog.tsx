// Main search dialog component using cmdk
import { useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { useSearch } from '@/hooks/useSearch';
import { SearchResult } from '@/lib/search/types';
import { SearchResultItem } from './SearchResultItem';
import { SearchEmptyState } from './SearchEmptyState';
import { SearchFilters } from './SearchFilters';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  
  const {
    query,
    setQuery,
    groupedResults,
    isLoading,
    activeFilter,
    setActiveFilter,
    suggestedSearches,
    hasResults,
    totalResults,
  } = useSearch();

  // Handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    onOpenChange(false);
    setQuery('');

    // Handle PDF downloads - open in new tab
    if (result.url.endsWith('.pdf')) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
      return;
    }

    // Handle external URLs (like portal login)
    if (result.url.startsWith('http')) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
      return;
    }

    const isHomePage = location.pathname === '/' || location.pathname === '';
    
    // Handle hash navigation on homepage
    if (result.url.startsWith('/#')) {
      const hash = result.url.substring(2);
      if (isHomePage) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(result.url);
      }
      return;
    }

    // Handle page navigation with optional anchor
    navigate(result.url);
  }, [navigate, location.pathname, onOpenChange, setQuery]);

  // Handle suggested search click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuery(suggestion);
  }, [setQuery]);

  // Close dialog on route change (only when open and path actually changed)
  useEffect(() => {
    if (open && prevPathRef.current !== location.pathname) {
      onOpenChange(false);
    }
    prevPathRef.current = location.pathname;
  }, [location.pathname, open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        <Command className="rounded-lg border-0" shouldFilter={false}>
          <div className="flex items-center border-b px-3">
            <CommandInput
              placeholder="Search eligibility, funding criteria, application steps, FAQs..."
              value={query}
              onValueChange={setQuery}
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            {isLoading && (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
            )}
          </div>

          {/* Filters */}
          <SearchFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter}
          />

          <CommandList className="max-h-[400px] overflow-y-auto p-2">
            {/* Show empty state when no query or no results */}
            {!query.trim() && (
              <SearchEmptyState 
                suggestedSearches={suggestedSearches}
                onSuggestionClick={handleSuggestionClick}
              />
            )}

            {query.trim() && !hasResults && !isLoading && (
              <CommandEmpty className="py-6 text-center">
                <SearchEmptyState 
                  query={query}
                  suggestedSearches={suggestedSearches}
                  onSuggestionClick={handleSuggestionClick}
                />
              </CommandEmpty>
            )}

            {/* Direct Answers (FAQs) */}
            {groupedResults.directAnswers.length > 0 && (
              <CommandGroup heading="Direct Answers" className="px-2">
                {groupedResults.directAnswers.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={result.id}
                    onSelect={() => handleResultClick(result)}
                    className="cursor-pointer p-0"
                  >
                    <SearchResultItem result={result} />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Guides & Policy */}
            {groupedResults.guides.length > 0 && (
              <CommandGroup heading="Guides & Policy" className="px-2">
                {groupedResults.guides.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={result.id}
                    onSelect={() => handleResultClick(result)}
                    className="cursor-pointer p-0"
                  >
                    <SearchResultItem result={result} />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Documents & Downloads */}
            {groupedResults.documents.length > 0 && (
              <CommandGroup heading="Documents & Downloads" className="px-2">
                {groupedResults.documents.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={result.id}
                    onSelect={() => handleResultClick(result)}
                    className="cursor-pointer p-0"
                  >
                    <SearchResultItem result={result} />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Sections & Contacts */}
            {groupedResults.sections.length > 0 && (
              <CommandGroup heading="Sections" className="px-2">
                {groupedResults.sections.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={result.id}
                    onSelect={() => handleResultClick(result)}
                    className="cursor-pointer p-0"
                  >
                    <SearchResultItem result={result} />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Results count */}
            {hasResults && (
              <div className="px-4 py-2 text-xs text-muted-foreground border-t mt-2">
                {totalResults} result{totalResults !== 1 ? 's' : ''} found
                <span className="float-right">
                  Press <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">↵</kbd> to select
                </span>
              </div>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
