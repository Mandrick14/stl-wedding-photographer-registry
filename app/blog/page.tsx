'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { BlogHero } from '@/components/blog/hero';
import { BlogGrid } from '@/components/blog/grid';
import { BlogSidebar } from '@/components/blog/sidebar';
import blogData from '@/data/blog-posts.json';
import type { BlogPost, BlogCategory } from '@/lib/types';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = blogData.posts;
  
  const filteredPosts = posts.filter((post: BlogPost) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogHero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <BlogGrid posts={filteredPosts} />
          </div>
          <div className="lg:w-1/4">
            <BlogSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
        </div>
      </main>
    </div>
  );
}