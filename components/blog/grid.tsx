import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '@/lib/types';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No posts found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <Card className="h-full hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-2">{post.category}</Badge>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 py-4 border-t flex justify-between text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}