import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Photographer } from '@/lib/types';

interface PhotographerCardProps {
  photographer: Photographer;
}

export function PhotographerCard({ photographer }: PhotographerCardProps) {
  return (
    <Link href={`/photographer/${photographer.id}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="relative h-64 w-full">
            <Image
              src={photographer.featuredImage}
              alt={photographer.name}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{photographer.name}</h2>
            <p className="text-muted-foreground mt-1">{photographer.location}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {photographer.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="font-medium">{photographer.priceRange}</span>
          <Badge variant={photographer.availability ? "default" : "secondary"}>
            {photographer.availability ? "Available" : "Fully Booked"}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}