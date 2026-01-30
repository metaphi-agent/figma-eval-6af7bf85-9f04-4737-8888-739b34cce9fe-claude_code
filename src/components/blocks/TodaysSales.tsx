import { StatCard } from '../ui/StatCard';

export function TodaysSales() {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary-dark">Today's Sales</h2>
          <p className="text-sm text-gray-700">Sales Summery</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          <img src="./assets/icons/export.svg" alt="Export" className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Export</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Total Sales"
          value="$1k"
          change="+8% from yesterday"
          icon="./assets/icons/sales-icon.svg"
          bgColor="pink"
        />
        <StatCard
          title="Total Order"
          value="300"
          change="+5% from yesterday"
          icon="./assets/icons/order-icon.svg"
          bgColor="yellow"
        />
        <StatCard
          title="Product Sold"
          value="5"
          change="+1,2% from yesterday"
          icon="./assets/icons/checkmark.svg"
          bgColor="green"
        />
        <StatCard
          title="New Customers"
          value="8"
          change="0,5% from yesterday"
          icon="./assets/icons/customers.svg"
          bgColor="purple"
        />
      </div>
    </div>
  );
}
