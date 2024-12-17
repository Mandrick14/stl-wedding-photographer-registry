'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact/contact-form';

export function Header() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8" />
            <h1 className="text-2xl font-bold">STL Wedding Photographers</h1>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="default" onClick={() => setShowContactForm(true)}>
              List Your Services
            </Button>
          </nav>
        </div>
      </div>

      <ContactForm 
        open={showContactForm} 
        onOpenChange={setShowContactForm} 
      />
    </header>
  );
}