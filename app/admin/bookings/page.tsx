'use client';

import { BookingsCalendar } from '@/components/admin/bookings/calendar';
import { BookingsList } from '@/components/admin/bookings/list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminBookings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bookings</h1>
      
      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <BookingsList />
        </TabsContent>
        <TabsContent value="calendar">
          <BookingsCalendar />
        </TabsContent>
      </Tabs>
    </div>
  );
}