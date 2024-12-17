import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { PriceRange, PhotoStyle } from '@/lib/types';

interface SearchFiltersProps {
  searchTerm: string;
  selectedPrice: PriceRange | null;
  selectedStyle: PhotoStyle | null;
  onSearchChange: (value: string) => void;
  onPriceChange: (value: PriceRange | null) => void;
  onStyleChange: (value: PhotoStyle | null) => void;
}

export function SearchFilters({
  searchTerm,
  selectedPrice,
  selectedStyle,
  onSearchChange,
  onPriceChange,
  onStyleChange,
}: SearchFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search photographers..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <Select
        value={selectedPrice || undefined}
        onValueChange={(value) => onPriceChange(value as PriceRange)}
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="$1000-2000">$1,000 - $2,000</SelectItem>
          <SelectItem value="$2000-3000">$2,000 - $3,000</SelectItem>
          <SelectItem value="$3000-4000">$3,000 - $4,000</SelectItem>
          <SelectItem value="$4000+">$4,000+</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={selectedStyle || undefined}
        onValueChange={(value) => onStyleChange(value as PhotoStyle)}
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Styles</SelectItem>
          <SelectItem value="Traditional">Traditional</SelectItem>
          <SelectItem value="Photojournalistic">Photojournalistic</SelectItem>
          <SelectItem value="Fine Art">Fine Art</SelectItem>
          <SelectItem value="Contemporary">Contemporary</SelectItem>
          <SelectItem value="Vintage">Vintage</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}