export function VisitorInsights() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Des'];
  const yAxis = [400, 300, 200, 100, 0];

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card h-full">
      <h2 className="text-xl font-semibold text-primary-dark mb-6">Visitor Insights</h2>

      <div className="relative h-[200px]">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-700 opacity-70">
          {yAxis.map((val) => (
            <span key={val}>{val}</span>
          ))}
        </div>

        {/* Chart Area */}
        <div className="ml-10 h-full relative">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {yAxis.map((_, i) => (
              <div key={i} className="border-b border-gray-100 w-full"></div>
            ))}
          </div>

          {/* Line Chart SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
            {/* Loyal Customers - Red */}
            <path
              d="M0,120 Q50,100 100,80 T200,100 T300,60 T400,90 T500,70"
              fill="none"
              stroke="#F4574E"
              strokeWidth="2"
            />
            {/* New Customers - Green */}
            <path
              d="M0,150 Q50,130 100,140 T200,120 T300,100 T400,130 T500,90"
              fill="none"
              stroke="#00B69B"
              strokeWidth="2"
            />
            {/* Unique Customers - Purple */}
            <path
              d="M0,180 Q50,160 100,170 T200,150 T300,140 T400,160 T500,120"
              fill="none"
              stroke="#9747FF"
              strokeWidth="2"
            />

            {/* Highlight Point */}
            <circle cx="300" cy="60" r="6" fill="#F4574E" />
            {/* Vertical dashed line */}
            <line
              x1="300"
              y1="60"
              x2="300"
              y2="200"
              stroke="#F4574E"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* X-Axis Labels */}
        <div className="absolute bottom-[-24px] left-10 right-0 flex justify-between text-[10px] text-gray-600">
          {months.map((month, i) => (
            <span key={i}>{month}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chart-red"></span>
          <span className="text-xs text-gray-700">Loyal Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chart-green"></span>
          <span className="text-xs text-gray-700">New Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chart-purple"></span>
          <span className="text-xs text-gray-700">Unique Customers</span>
        </div>
      </div>
    </div>
  );
}
