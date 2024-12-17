import { DashboardStats } from '@/components/admin/dashboard-stats';
import { RecentPhotographers } from '@/components/admin/recent-photographers';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardStats />
      <RecentPhotographers />
    </div>
  );
}