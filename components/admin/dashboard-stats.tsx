'use client';

import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { usePhotographers } from '@/hooks/use-photographers';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardStats() {
  const { photographers } = usePhotographers();

  const stats = [
    {
      title: 'Total Photographers',
      value: photographers.length,
      icon: <Users className="h-6 w-6 text-primary" />,
      description: 'Active photographers in the directory',
    },
    {
      title: 'Available Today',
      value: photographers.filter(p => p.availability).length,
      icon: <Calendar className="h-6 w-6 text-primary" />,
      description: 'Photographers ready to book',
    },
    {
      title: 'Average Price',
      value: '$3,000',
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      description: 'Average booking price',
    },
    {
      title: 'Monthly Growth',
      value: '12%',
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      description: 'Increase in bookings',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}