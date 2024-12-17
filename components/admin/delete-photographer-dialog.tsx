'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { usePhotographers } from '@/hooks/use-photographers';
import type { Photographer } from '@/lib/types';

interface DeletePhotographerDialogProps {
  photographer: Photographer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeletePhotographerDialog({
  photographer,
  open,
  onOpenChange,
}: DeletePhotographerDialogProps) {
  const { deletePhotographer } = usePhotographers();

  if (!photographer) return null;

  const handleDelete = async () => {
    await deletePhotographer(photographer.id);
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Photographer</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete {photographer.name}? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}