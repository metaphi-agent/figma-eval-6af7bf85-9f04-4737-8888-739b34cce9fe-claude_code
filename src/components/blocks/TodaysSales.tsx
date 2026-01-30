import MetricCard from '../ui/MetricCard';

export default function TodaysSales() {
  return (
    <div className="rounded-[20px] bg-white p-8 border border-grey-100" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-primary-dark">Today's Sales</h2>
          <p className="text-sm text-grey-700">Sales Summary</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-grey-100 px-4 py-2 text-sm font-medium text-grey-900 hover:bg-grey-300 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14 10l-4-4-4 4M10 14V6" stroke="#464E5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Export
        </button>
      </div>

      <div className="flex gap-4">
        <MetricCard
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM2 9h20M7 15h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          value="$1k"
          label="Total Sales"
          trend="+8% from yesterday"
          trendColor="text-support-green"
          bgColor="bg-support-red-shade"
          iconColor="bg-support-red"
        />
        <MetricCard
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/>
              <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
          value="300"
          label="Total Order"
          trend="+5% from yesterday"
          trendColor="text-support-green"
          bgColor="bg-support-yellow-shade"
          iconColor="bg-support-yellow"
        />
        <MetricCard
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 2h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L26 6H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="22" r="2" stroke="white" strokeWidth="2"/>
              <circle cx="18" cy="22" r="2" stroke="white" strokeWidth="2"/>
            </svg>
          }
          value="5"
          label="Product Sold"
          trend="+1.2% from yesterday"
          trendColor="text-support-green"
          bgColor="bg-support-green-shade"
          iconColor="bg-support-green"
        />
        <MetricCard
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          value="8"
          label="New Customers"
          trend="+0.5% from yesterday"
          trendColor="text-support-green"
          bgColor="bg-support-violet-shade"
          iconColor="bg-support-violet"
        />
      </div>
    </div>
  );
}
