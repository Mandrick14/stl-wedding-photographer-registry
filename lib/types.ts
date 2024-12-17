// Add these types to the existing types.ts file
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: number;
}

export type BlogCategory = 'Wedding Tips' | 'Photography' | 'Planning' | 'Venues' | 'Stories';