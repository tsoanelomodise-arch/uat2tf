// Search trigger button for the navigation header
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchTriggerProps {
  onClick: () => void;
  variant?: 'desktop' | 'mobile';
}

export function SearchTrigger({ onClick, variant = 'desktop' }: SearchTriggerProps) {
  if (variant === 'mobile') {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={onClick}
        className="h-9 w-9"
        aria-label="Open search"
      >
        <Search className="h-5 w-5 text-gray-700" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="h-9 w-9"
      aria-label="Open search (⌘K)"
      title="Search (⌘K)"
    >
      <Search className="h-5 w-5 text-gray-700" />
    </Button>
  );
}
