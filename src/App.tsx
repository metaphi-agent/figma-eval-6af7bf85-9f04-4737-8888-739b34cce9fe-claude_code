import Sidebar from './components/blocks/Sidebar';
import Header from './components/blocks/Header';
import TodaysSales from './components/blocks/TodaysSales';
import VisitorInsights from './components/blocks/VisitorInsights';
import TotalRevenue from './components/blocks/TotalRevenue';
import CustomerSatisfaction from './components/blocks/CustomerSatisfaction';
import TargetReality from './components/blocks/TargetReality';
import TopProducts from './components/blocks/TopProducts';
import SalesMapping from './components/blocks/SalesMapping';
import VolumeService from './components/blocks/VolumeService';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[345px]">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="mt-[120px] p-8 space-y-8">
          {/* Today's Sales and Visitor Insights */}
          <div className="flex gap-8">
            <div className="flex-1">
              <TodaysSales />
            </div>
            <div className="w-[591px]">
              <VisitorInsights />
            </div>
          </div>

          {/* Total Revenue, Customer Satisfaction, Target vs Reality */}
          <div className="flex gap-8">
            <div className="flex-1">
              <TotalRevenue />
            </div>
            <div className="w-[420px]">
              <CustomerSatisfaction />
            </div>
            <div className="w-[371px]">
              <TargetReality />
            </div>
          </div>

          {/* Top Products, Sales Mapping, Volume Service */}
          <div className="flex gap-8">
            <div className="flex-1">
              <TopProducts />
            </div>
            <div className="w-[420px]">
              <SalesMapping />
            </div>
            <div className="w-[371px]">
              <VolumeService />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
