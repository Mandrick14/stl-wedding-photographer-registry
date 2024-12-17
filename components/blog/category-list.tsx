'use client';

import { Button } from '@/components/ui/button';
import type { BlogCategory } from '@/lib/types';

interface CategoryListProps {
  categories: BlogCategory[];
  selectedCategory: BlogCategory | 'all';
  onSelect: (category: BlogCategory | 'all') => void;
}

export function CategoryList({ categories, selectedCategory, onSelect }: CategoryListProps) {
  return (
    <div className="space-y-2">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'ghost'}
        className="w-full justify-start"
        onClick={() => onSelect('all')}
      >
        All Posts
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}