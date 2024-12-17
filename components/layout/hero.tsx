'use client';

import { Button } from '@/components/ui/button';
import { Camera, Heart, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect Wedding Photographer in St. Louis
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover talented photographers who will capture your special moments with creativity and passion.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3 text-white">
              <Camera className="h-6 w-6 text-primary" />
              <span>Professional Artists</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Heart className="h-6 w-6 text-primary" />
              <span>Passionate About Moments</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Calendar className="h-6 w-6 text-primary" />
              <span>Flexible Scheduling</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Browse Photographers
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20">
              List Your Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}