export default function VisitorInsights() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Des'];

  // Simplified line chart data
  const loyalData = [300, 220, 350, 180, 280, 150, 200, 320, 250, 280, 350, 300];
  const newData = [250, 280, 200, 320, 220, 280, 320, 150, 200, 220, 180, 250];
  const uniqueData = [200, 320, 180, 280, 150, 350, 280, 200, 280, 150, 220, 200];

  const maxValue = 400;
  const width = 484;
  const height = 163;

  const createPath = (data: number[]) => {
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - (value / maxValue) * height;
      return `${x},${y}`;
    });
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="rounded-[20px] bg-white p-8 border border-grey-100" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="mb-6 text-xl font-semibold text-primary-dark">Visitor Insights</h2>

      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-grey-700 opacity-70">
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        {/* Chart */}
        <div className="ml-8">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ height: '163px' }}>
            {/* Lines */}
            <path
              d={createPath(loyalData)}
              fill="none"
              stroke="#8C52FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={createPath(newData)}
              fill="none"
              stroke="#F64E60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={createPath(uniqueData)}
              fill="none"
              stroke="#2DCE89"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Highlight marker at July */}
            <circle cx={width * 0.58} cy={height - (loyalData[7] / maxValue) * height} r="7" fill="#F64E60"/>
            <line x1={width * 0.58} y1="0" x2={width * 0.58} y2={height} stroke="#F64E60" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
          </svg>

          {/* X-axis labels */}
          <div className="mt-2 flex justify-between text-[10px] text-grey-800" style={{ fontFamily: 'var(--font-family-secondary)' }}>
            {months.map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-support-violet"></div>
          <span className="text-grey-700">Loyal Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-support-red"></div>
          <span className="text-grey-700">New Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-support-green"></div>
          <span className="text-grey-700">Unique Customers</span>
        </div>
      </div>
    </div>
  );
}
