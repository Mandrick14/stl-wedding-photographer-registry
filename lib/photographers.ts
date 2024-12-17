import type { Photographer } from './types';

// In-memory storage for the static export
let photographers = require('@/data/photographers.json').photographers;

export function getAllPhotographers(): Photographer[] {
  return photographers;
}

export function addPhotographer(photographer: Omit<Photographer, 'id'>): Photographer {
  const newId = (Math.max(...photographers.map(p => parseInt(p.id))) + 1).toString();
  
  const newPhotographer = {
    ...photographer,
    id: newId,
  };
  
  photographers = [...photographers, newPhotographer];
  return newPhotographer;
}

export function updatePhotographer(id: string, updates: Partial<Photographer>): Photographer | null {
  const index = photographers.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  
  const updatedPhotographer = {
    ...photographers[index],
    ...updates,
  };
  
  photographers = [
    ...photographers.slice(0, index),
    updatedPhotographer,
    ...photographers.slice(index + 1)
  ];
  
  return updatedPhotographer;
}

export function deletePhotographer(id: string): boolean {
  const previousLength = photographers.length;
  photographers = photographers.filter(p => p.id !== id);
  return photographers.length !== previousLength;
}