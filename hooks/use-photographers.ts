'use client';

import { useState, useEffect } from 'react';
import type { Photographer } from '@/lib/types';
import { getAllPhotographers } from '@/lib/photographers';

export function usePhotographers() {
  const [photographers, setPhotographers] = useState<Photographer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPhotographers = () => {
    try {
      const data = getAllPhotographers();
      setPhotographers(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const addPhotographer = async (data: Omit<Photographer, 'id'>) => {
    try {
      const newId = (photographers.length > 0 
        ? Math.max(...photographers.map(p => parseInt(p.id))) + 1 
        : 1).toString();
      
      const newPhotographer = {
        ...data,
        id: newId,
      };

      const updatedPhotographers = [...photographers, newPhotographer];
      setPhotographers(updatedPhotographers);
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    }
  };

  const updatePhotographer = async (id: string, updates: Partial<Photographer>) => {
    try {
      const index = photographers.findIndex(p => p.id === id);
      if (index === -1) return false;

      const updatedPhotographer = {
        ...photographers[index],
        ...updates,
      };

      const updatedPhotographers = [
        ...photographers.slice(0, index),
        updatedPhotographer,
        ...photographers.slice(index + 1)
      ];

      setPhotographers(updatedPhotographers);
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    }
  };

  const deletePhotographer = async (id: string) => {
    try {
      const updatedPhotographers = photographers.filter(p => p.id !== id);
      setPhotographers(updatedPhotographers);
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    }
  };

  useEffect(() => {
    fetchPhotographers();
  }, []);

  return {
    photographers,
    isLoading,
    error,
    addPhotographer,
    updatePhotographer,
    deletePhotographer,
    refresh: fetchPhotographers,
  };
}