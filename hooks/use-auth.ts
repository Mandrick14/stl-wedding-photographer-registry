'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for admin token in cookies
    const hasToken = document.cookie.includes('admin_token');
    setIsAuthenticated(hasToken);
  }, []);

  const signIn = async (email: string, password: string) => {
    // For demo purposes, using simple authentication
    // In production, implement proper authentication
    if (email === 'admin@example.com' && password === 'admin') {
      document.cookie = 'admin_token=demo; path=/';
      setIsAuthenticated(true);
      router.push('/admin');
    }
  };

  const signOut = () => {
    document.cookie = 'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    setIsAuthenticated(false);
    router.push('/admin/login');
  };

  return {
    isAuthenticated,
    signIn,
    signOut,
  };
}