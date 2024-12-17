import { Button } from '@/components/ui/button';

export function BlogHero() {
  return (
    <div className="bg-primary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Wedding Photography Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Tips, inspiration, and stories from St. Louis wedding photographers
          </p>
          <div className="mt-5 max-w-md mx-auto flex justify-center gap-3">
            <Button size="lg">Latest Posts</Button>
            <Button variant="outline" size="lg">Browse Categories</Button>
          </div>
        </div>
      </div>
    </div>
  );
}