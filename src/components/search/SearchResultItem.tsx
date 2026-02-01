// Individual search result card component
import { 
  HelpCircle, 
  BookOpen, 
  FileText, 
  Hash, 
  Users, 
  Phone,
  ExternalLink,
  Download
} from 'lucide-react';
import { SearchResult, ContentType } from '@/lib/search/types';
import { cn } from '@/lib/utils';

interface SearchResultItemProps {
  result: SearchResult;
}

// Type badge configuration
const typeBadges: Record<ContentType, { 
  label: string; 
  icon: typeof HelpCircle; 
  className: string;
}> = {
  faq: {
    label: 'FAQ',
    icon: HelpCircle,
    className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  },
  guide: {
    label: 'Guide',
    icon: BookOpen,
    className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  policy: {
    label: 'Policy',
    icon: FileText,
    className: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  },
  section: {
    label: 'Section',
    icon: Hash,
    className: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
  },
  story: {
    label: 'Story',
    icon: Users,
    className: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  },
  contact: {
    label: 'Contact',
    icon: Phone,
    className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  document: {
    label: 'Download',
    icon: Download,
    className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
};

export function SearchResultItem({ result }: SearchResultItemProps) {
  const badge = typeBadges[result.type];
  const BadgeIcon = badge.icon;
  const isExternal = result.url.startsWith('http');

  return (
    <div className="flex items-start gap-3 px-3 py-3 rounded-md w-full hover:bg-accent/50 transition-colors">
      {/* Type Badge */}
      <div className={cn(
        'flex items-center gap-1 px-2 py-1 rounded text-xs font-medium shrink-0',
        badge.className
      )}>
        <BadgeIcon className="h-3 w-3" />
        <span>{badge.label}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-foreground truncate">
            {result.title}
          </h4>
          {isExternal && (
            <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
          {result.description}
        </p>
      </div>
    </div>
  );
}
