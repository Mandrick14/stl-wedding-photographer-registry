import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Photographer } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPhotographerById(id: string): Photographer | undefined {
  const photographers = require('@/data/photographers.json').photographers;
  return photographers.find((p: Photographer) => p.id === id);
}

export function getAllPhotographers(): Photographer[] {
  return require('@/data/photographers.json').photographers;
}

export function filterPhotographers(
  photographers: Photographer[],
  searchTerm: string,
  priceRange: string | null,
  style: string | null
): Photographer[] {
  return photographers.filter((photographer) => {
    const matchesSearch = photographer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = !priceRange || priceRange === 'all' || photographer.priceRange === priceRange;
    const matchesStyle = !style || style === 'all' || photographer.tags.includes(style);
    return matchesSearch && matchesPrice && matchesStyle;
  });
}