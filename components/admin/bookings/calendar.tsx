'use client';

import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { useBookings } from '@/hooks/use-bookings';

export function BookingsCalendar() {
  const { bookings } = useBookings();
  
  const bookedDates = bookings.map(booking => new Date(booking.date));

  return (
    <Card>
      <CardContent className="p-6">
        <Calendar
          mode="multiple"
          selected={bookedDates}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}