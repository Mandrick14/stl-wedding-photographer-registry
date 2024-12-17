'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/layout/hero';
import { SearchFilters } from '@/components/photographers/search-filters';
import { PhotographerCard } from '@/components/photographers/photographer-card';
import photographersData from '@/data/photographers.json';
import type { Photographer, PriceRange, PhotoStyle } from '@/lib/types';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrice, setSelectedPrice] = useState<PriceRange | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<PhotoStyle | null>(null);

  const photographers = photographersData.photographers;

  const filteredPhotographers = photographers.filter((photographer: Photographer) => {
    const matchesSearch = photographer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = !selectedPrice || selectedPrice === 'all' || photographer.priceRange === selectedPrice;
    const matchesStyle = !selectedStyle || selectedStyle === 'all' || photographer.tags.includes(selectedStyle);
    return matchesSearch && matchesPrice && matchesStyle;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Photographers</h2>
            <p className="text-muted-foreground mb-6">
              Browse our curated selection of professional wedding photographers in St. Louis
            </p>
            <SearchFilters
              searchTerm={searchTerm}
              selectedPrice={selectedPrice}
              selectedStyle={selectedStyle}
              onSearchChange={setSearchTerm}
              onPriceChange={setSelectedPrice}
              onStyleChange={setSelectedStyle}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotographers.map((photographer) => (
              <PhotographerCard key={photographer.id} photographer={photographer} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}