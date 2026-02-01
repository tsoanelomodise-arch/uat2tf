// Search filter chips component
import { cn } from '@/lib/utils';
import { ContentType } from '@/lib/search/types';

interface SearchFiltersProps {
  activeFilter: ContentType | 'all';
  onFilterChange: (filter: ContentType | 'all') => void;
}

const filters: Array<{ value: ContentType | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'faq', label: 'FAQs' },
  { value: 'guide', label: 'Guides' },
  { value: 'policy', label: 'Policy' },
  { value: 'story', label: 'Stories' },
];

export function SearchFilters({ activeFilter, onFilterChange }: SearchFiltersProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b overflow-x-auto">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors',
            activeFilter === filter.value
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
