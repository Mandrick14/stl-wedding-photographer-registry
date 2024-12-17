import { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EditPhotographerDialog } from './edit-photographer-dialog';
import { DeletePhotographerDialog } from './delete-photographer-dialog';
import type { Photographer } from '@/lib/types';

interface PhotographerTableProps {
  photographers: Photographer[];
  isLoading: boolean;
}

export function PhotographerTable({ photographers, isLoading }: PhotographerTableProps) {
  const [editingPhotographer, setEditingPhotographer] = useState<Photographer | null>(null);
  const [deletingPhotographer, setDeletingPhotographer] = useState<Photographer | null>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price Range</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {photographers.map((photographer) => (
            <TableRow key={photographer.id}>
              <TableCell className="font-medium">{photographer.name}</TableCell>
              <TableCell>{photographer.location}</TableCell>
              <TableCell>{photographer.priceRange}</TableCell>
              <TableCell>
                <Badge variant={photographer.availability ? "default" : "secondary"}>
                  {photographer.availability ? "Available" : "Booked"}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingPhotographer(photographer)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive"
                    onClick={() => setDeletingPhotographer(photographer)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditPhotographerDialog
        photographer={editingPhotographer}
        open={!!editingPhotographer}
        onOpenChange={() => setEditingPhotographer(null)}
      />
      
      <DeletePhotographerDialog
        photographer={deletingPhotographer}
        open={!!deletingPhotographer}
        onOpenChange={() => setDeletingPhotographer(null)}
      />
    </>
  );
}