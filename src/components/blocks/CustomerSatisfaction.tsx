export function CustomerSatisfaction() {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card h-full">
      <h2 className="text-xl font-semibold text-primary-dark mb-6">Customer Satisfaction</h2>

      {/* Chart */}
      <div className="relative h-[160px] mb-6">
        <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
          {/* Last Month Area - Yellow */}
          <defs>
            <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFCF00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFCF00" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B69B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00B69B" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Last Month */}
          <path
            d="M0,100 Q50,90 100,70 T200,80 T300,50 T400,60 L400,160 L0,160 Z"
            fill="url(#yellowGradient)"
          />
          <path
            d="M0,100 Q50,90 100,70 T200,80 T300,50 T400,60"
            fill="none"
            stroke="#FFCF00"
            strokeWidth="2"
          />

          {/* This Month */}
          <path
            d="M0,120 Q50,100 100,90 T200,70 T300,80 T400,40 L400,160 L0,160 Z"
            fill="url(#tealGradient)"
          />
          <path
            d="M0,120 Q50,100 100,90 T200,70 T300,80 T400,40"
            fill="none"
            stroke="#00B69B"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-4"></div>

      {/* Stats */}
      <div className="flex justify-around">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-yellow rounded-full"></div>
          <div>
            <p className="text-sm text-gray-700">Last Month</p>
            <p className="text-xl font-semibold text-gray-900">$3,004</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-green rounded-full"></div>
          <div>
            <p className="text-sm text-gray-700">This Month</p>
            <p className="text-xl font-semibold text-gray-900">$4,504</p>
          </div>
        </div>
      </div>
    </div>
  );
}
