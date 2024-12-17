'use client';

import { useState } from 'react';
import { PhotographerTable } from '@/components/admin/photographer-table';
import { Button } from '@/components/ui/button';
import { usePhotographers } from '@/hooks/use-photographers';
import { AddPhotographerDialog } from '@/components/admin/add-photographer-dialog';

export default function AdminPhotographers() {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { photographers, isLoading } = usePhotographers();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Photographers</h1>
        <Button onClick={() => setShowAddDialog(true)}>Add Photographer</Button>
      </div>
      <PhotographerTable photographers={photographers} isLoading={isLoading} />
      <AddPhotographerDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  );
}