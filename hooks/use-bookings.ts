'use client';

import { useState, useEffect } from 'react';
import type { Booking } from '@/lib/types';

// Mock data for demonstration
const mockBookings: Booking[] = [
  {
    id: '1',
    clientName: 'John Doe',
    photographerId: '1',
    photographerName: 'Sarah Anderson',
    date: '2024-03-15T14:00:00.000Z',
    status: 'confirmed',
    location: 'St. Louis Botanical Garden',
    package: 'Wedding Package',
    notes: 'Outdoor ceremony and indoor reception'
  },
  {
    id: '2',
    clientName: 'Jane Smith',
    photographerId: '2',
    photographerName: 'Michael Chen',
    date: '2024-03-20T15:30:00.000Z',
    status: 'pending',
    location: 'Forest Park',
    package: 'Engagement Session',
    notes: 'Sunset photoshoot preferred'
  }
];

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadBookings() {
      try {
        // In a real application, this would be an API call
        setBookings(mockBookings);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBookings();
  }, []);

  return { bookings, isLoading, error };
}