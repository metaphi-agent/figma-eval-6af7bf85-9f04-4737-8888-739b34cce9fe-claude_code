import { Sidebar } from '../components/blocks/Sidebar';
import { Header } from '../components/blocks/Header';
import { TodaysSales } from '../components/blocks/TodaysSales';
import { VisitorInsights } from '../components/blocks/VisitorInsights';
import { TotalRevenue } from '../components/blocks/TotalRevenue';
import { CustomerSatisfaction } from '../components/blocks/CustomerSatisfaction';
import { TargetVsReality } from '../components/blocks/TargetVsReality';
import { TopProducts } from '../components/blocks/TopProducts';
import { SalesMapping } from '../components/blocks/SalesMapping';
import { VolumeServiceLevel } from '../components/blocks/VolumeServiceLevel';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-bg-main">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[345px]">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="pt-[120px] p-8">
          <div className="flex flex-col gap-6">
            {/* Row 1: Today's Sales + Visitor Insights */}
            <div className="grid grid-cols-[1fr_591px] gap-6">
              <TodaysSales />
              <VisitorInsights />
            </div>

            {/* Row 2: Total Revenue + Customer Satisfaction + Target vs Reality */}
            <div className="grid grid-cols-[645px_420px_371px] gap-6">
              <TotalRevenue />
              <CustomerSatisfaction />
              <TargetVsReality />
            </div>

            {/* Row 3: Top Products + Sales Mapping + Volume vs Service Level */}
            <div className="grid grid-cols-[645px_420px_371px] gap-6">
              <TopProducts />
              <SalesMapping />
              <VolumeServiceLevel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
