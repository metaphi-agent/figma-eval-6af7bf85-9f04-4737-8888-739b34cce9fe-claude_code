export default function CustomerSatisfaction() {
  return (
    <div className="rounded-[20px] bg-white p-8 border border-grey-100" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="mb-6 text-xl font-semibold text-primary-dark">Customer Satisfaction</h2>

      <div className="relative h-[167px]">
        {/* Area chart simulation */}
        <svg viewBox="0 0 396 167" className="w-full h-full">
          {/* Last month area - light blue */}
          <defs>
            <linearGradient id="lastMonthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4E65FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4E65FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="thisMonthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2DCE89" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2DCE89" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Last Month */}
          <path
            d="M0,100 Q99,120 198,80 T396,90 L396,167 L0,167 Z"
            fill="url(#lastMonthGradient)"
          />
          <path
            d="M0,100 Q99,120 198,80 T396,90"
            fill="none"
            stroke="#4E65FF"
            strokeWidth="2"
          />

          {/* This Month */}
          <path
            d="M0,120 Q99,140 198,60 T396,50 L396,167 L0,167 Z"
            fill="url(#thisMonthGradient)"
          />
          <path
            d="M0,120 Q99,140 198,60 T396,50"
            fill="none"
            stroke="#2DCE89"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Stats */}
      <div className="mt-8 border-t border-grey-100 pt-6">
        <div className="flex items-center justify-center gap-12 text-sm">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary-800"></div>
            <div>
              <div className="text-xs text-grey-700">Last Month</div>
              <div className="text-lg font-semibold text-primary-900">$3,004</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-support-green"></div>
            <div>
              <div className="text-xs text-grey-700">This Month</div>
              <div className="text-lg font-semibold text-primary-900">$4,504</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
