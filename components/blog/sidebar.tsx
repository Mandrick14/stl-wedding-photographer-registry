'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import type { BlogCategory } from '@/lib/types';

const categories: BlogCategory[] = [
  'Wedding Tips',
  'Photography',
  'Planning',
  'Venues',
  'Stories'
];

interface BlogSidebarProps {
  selectedCategory?: BlogCategory | 'all';
  onCategoryChange?: (category: BlogCategory | 'all') => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function BlogSidebar({
  selectedCategory = 'all',
  onCategoryChange,
  searchQuery = '',
  onSearchChange,
}: BlogSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => onCategoryChange?.('all')}
            >
              All Posts
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => onCategoryChange?.(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}