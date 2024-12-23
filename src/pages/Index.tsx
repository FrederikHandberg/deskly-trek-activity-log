import { Users, Monitor, Clock, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ActivityChart } from "@/components/ActivityChart";
import { EmployeeList } from "@/components/EmployeeList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your team's standing desk activity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Employees"
            value="24"
            icon={<Users className="h-6 w-6" />}
          />
          <MetricCard
            title="Active Desks"
            value="18"
            icon={<Monitor className="h-6 w-6" />}
          />
          <MetricCard
            title="Average Standing Time"
            value="3.5h"
            icon={<Clock className="h-6 w-6" />}
          />
          <MetricCard
            title="Weekly Growth"
            value="+12%"
            icon={<TrendingUp className="h-6 w-6" />}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ActivityChart />
          <EmployeeList />
        </div>
      </div>
    </div>
  );
};

export default Index;