import { Camera, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export function AdminHeader() {
  const { signOut } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Camera className="h-6 w-6" />
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <User className="h-5 w-5" />
          <Button variant="ghost" onClick={signOut}>Sign Out</Button>
        </div>
      </div>
    </header>
  );
}