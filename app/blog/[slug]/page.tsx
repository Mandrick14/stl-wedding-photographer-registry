import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { BlogPost } from '@/components/blog/post';
import { BlogSidebar } from '@/components/blog/sidebar';
import blogData from '@/data/blog-posts.json';
import type { BlogPost as BlogPostType } from '@/lib/types';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogData.posts.find(
    (p: BlogPostType) => p.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <BlogPost post={post} />
          </div>
          <div className="lg:w-1/4">
            <BlogSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}