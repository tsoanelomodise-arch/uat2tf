// Empty state component for search
import { Search, TrendingUp } from 'lucide-react';

interface SearchEmptyStateProps {
  query?: string;
  suggestedSearches: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export function SearchEmptyState({ 
  query, 
  suggestedSearches,
  onSuggestionClick 
}: SearchEmptyStateProps) {
  if (query) {
    // No results found state
    return (
      <div className="py-8 px-4 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <Search className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-foreground mb-1">
          No results found for "{query}"
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Try adjusting your search or browse our suggestions below
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestedSearches.slice(0, 4).map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => onSuggestionClick(suggestion)}
              className="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Initial empty state (no query yet)
  return (
    <div className="py-6 px-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <TrendingUp className="h-4 w-4" />
        <span>Popular searches</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestedSearches.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-3 py-1.5 text-sm bg-muted hover:bg-primary/10 hover:text-primary rounded-full text-muted-foreground transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t text-xs text-muted-foreground">
        <p>
          <strong>Tip:</strong> Search for eligibility requirements, application steps, 
          funding types, or any topic related to the Transformation Fund.
        </p>
      </div>
    </div>
  );
}
