'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { usePhotographers } from '@/hooks/use-photographers';
import type { Photographer } from '@/lib/types';

interface AddPhotographerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const defaultFormData: Omit<Photographer, 'id'> = {
  name: '',
  portfolio: '',
  contact: '',
  tags: ['Traditional'],
  priceRange: '$2000-3000',
  description: '',
  featuredImage: '',
  galleryImages: [],
  location: 'St. Louis, MO',
  availability: true,
};

export function AddPhotographerDialog({ open, onOpenChange }: AddPhotographerDialogProps) {
  const { addPhotographer } = usePhotographers();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Omit<Photographer, 'id'>>(defaultFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await addPhotographer({
        ...formData,
        galleryImages: [formData.featuredImage], // Use featured image as first gallery image
      });
      
      if (success) {
        onOpenChange(false);
        setFormData(defaultFormData);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Photographer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Email</Label>
            <Input
              id="contact"
              type="email"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio URL</Label>
            <Input
              id="portfolio"
              type="url"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="priceRange">Price Range</Label>
            <Input
              id="priceRange"
              value={formData.priceRange}
              onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="featuredImage">Featured Image URL</Label>
            <Input
              id="featuredImage"
              type="url"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
              required
              placeholder="https://images.unsplash.com/photo-..."
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="availability"
              checked={formData.availability}
              onCheckedChange={(checked) => setFormData({ ...formData, availability: checked })}
            />
            <Label htmlFor="availability">Available for Booking</Label>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                setFormData(defaultFormData);
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Photographer'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}