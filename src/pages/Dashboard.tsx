import { DollarSign, Target, TrendingUp, Award } from 'lucide-react';
import { StatCard } from '@/components/Dashboard/StatCard';
import { PipelineChart } from '@/components/Dashboard/PipelineChart';
import { RecentActivities } from '@/components/Dashboard/RecentActivities';
import { mockOpportunities } from '@/lib/mockData';

export default function Dashboard() {
  const totalOpportunities = mockOpportunities.length;
  const totalValue = mockOpportunities.reduce((sum, opp) => sum + opp.amount, 0);
  const wonDeals = mockOpportunities.filter(opp => opp.status === 'won').length;
  const avgDealSize = totalValue / totalOpportunities;

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Opportunities"
          value={totalOpportunities}
          icon={Target}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Total Pipeline Value"
          value={`$${(totalValue / 1000).toFixed(0)}K`}
          icon={DollarSign}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title="Won This Month"
          value={wonDeals}
          icon={Award}
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="Avg Deal Size"
          value={`$${(avgDealSize / 1000).toFixed(0)}K`}
          icon={TrendingUp}
          trend={{ value: -2.1, isPositive: false }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <PipelineChart />
        <RecentActivities />
      </div>
    </div>
  );
}
