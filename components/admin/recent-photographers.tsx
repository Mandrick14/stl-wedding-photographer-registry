'use client';

import { usePhotographers } from '@/hooks/use-photographers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

export function RecentPhotographers() {
  const { photographers } = usePhotographers();

  // Get the 5 most recent photographers
  const recentPhotographers = photographers.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Photographers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentPhotographers.map((photographer) => (
            <div key={photographer.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={photographer.featuredImage} />
                  <AvatarFallback>{photographer.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{photographer.name}</p>
                  <p className="text-sm text-muted-foreground">{photographer.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-right">
                  <p className="font-medium">{photographer.priceRange}</p>
                  <p className="text-muted-foreground">
                    {formatDistanceToNow(new Date(), { addSuffix: true })}
                  </p>
                </div>
                <Badge variant={photographer.availability ? "default" : "secondary"}>
                  {photographer.availability ? "Available" : "Booked"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}