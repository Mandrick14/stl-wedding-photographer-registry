'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBookings } from '@/hooks/use-bookings';
import { EditBookingDialog } from './edit-booking-dialog';
import { DeleteBookingDialog } from './delete-booking-dialog';
import type { Booking } from '@/lib/types';

export function BookingsList() {
  const { bookings, isLoading } = useBookings();
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [deletingBooking, setDeletingBooking] = useState<Booking | null>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Photographer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.clientName}</TableCell>
              <TableCell>{booking.photographerName}</TableCell>
              <TableCell>{format(new Date(booking.date), 'PPP')}</TableCell>
              <TableCell>
                <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                  {booking.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingBooking(booking)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive"
                    onClick={() => setDeletingBooking(booking)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditBookingDialog
        booking={editingBooking}
        open={!!editingBooking}
        onOpenChange={() => setEditingBooking(null)}
      />
      
      <DeleteBookingDialog
        booking={deletingBooking}
        open={!!deletingBooking}
        onOpenChange={() => setDeletingBooking(null)}
      />
    </>
  );
}