import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import photographersData from '@/data/photographers.json';
import type { Photographer } from '@/lib/types';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return photographersData.photographers.map((photographer) => ({
    id: photographer.id,
  }));
}

export default function PhotographerProfile({ params }: Props) {
  const photographer: Photographer | undefined = photographersData.photographers.find(
    (p: Photographer) => p.id === params.id
  );

  if (!photographer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Photographer not found</h1>
          <Link href="/" className="text-blue-500 hover:underline mt-4 block">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to photographers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={photographer.featuredImage}
                alt={photographer.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-8">
              <h1 className="text-3xl font-bold">{photographer.name}</h1>
              <div className="flex items-center mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {photographer.location}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {photographer.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground">{photographer.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {photographer.galleryImages.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Price Range</label>
                    <p className="text-lg font-semibold">{photographer.priceRange}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Availability</label>
                    <Badge variant={photographer.availability ? "default" : "secondary"} className="mt-1">
                      {photographer.availability ? "Available for Booking" : "Fully Booked"}
                    </Badge>
                  </div>
                  <div className="pt-4 space-y-3">
                    <Button className="w-full" asChild>
                      <a href={`mailto:${photographer.contact}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact via Email
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={photographer.portfolio} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Visit Portfolio
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}