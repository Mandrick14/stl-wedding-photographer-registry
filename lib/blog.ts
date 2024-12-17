import type { BlogPost, BlogCategory } from './types';
import blogData from '@/data/blog-posts.json';

export function getAllPosts(): BlogPost[] {
  return blogData.posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogData.posts.find((post) => post.slug === slug);
}

export function getCategories(): BlogCategory[] {
  return ['Wedding Tips', 'Photography', 'Planning', 'Venues', 'Stories'];
}

export function filterPosts(
  posts: BlogPost[],
  category: BlogCategory | 'all',
  searchQuery: string
): BlogPost[] {
  return posts.filter((post) => {
    const matchesCategory = category === 'all' || post.category === category;
    const matchesSearch = 
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}