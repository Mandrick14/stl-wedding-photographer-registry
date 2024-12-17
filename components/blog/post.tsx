import Image from 'next/image';
import { format } from 'date-fns';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, User } from 'lucide-react';
import type { BlogPost } from '@/lib/types';

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[400px] w-full">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-6 md:p-8">
        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime} min read
          </div>
        </div>

        <div className="prose max-w-none">
          {post.content}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}