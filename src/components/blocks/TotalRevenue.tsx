export function TotalRevenue() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const yAxis = ['25k', '20k', '15k', '10k', '5k', '0'];

  const data = [
    { online: 45, offline: 60 },
    { online: 75, offline: 50 },
    { online: 40, offline: 55 },
    { online: 55, offline: 70 },
    { online: 85, offline: 60 },
    { online: 35, offline: 45 },
    { online: 50, offline: 65 },
  ];

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card">
      <h2 className="text-xl font-semibold text-primary-dark mb-6">Total Revenue</h2>

      <div className="relative h-[220px]">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-700">
          {yAxis.map((val) => (
            <span key={val}>{val}</span>
          ))}
        </div>

        {/* Chart Area */}
        <div className="ml-10 h-full flex items-end justify-between gap-2">
          {data.map((item, i) => (
            <div key={i} className="flex gap-1 items-end h-full">
              <div
                className="w-3 bg-chart-blue rounded-t-sm"
                style={{ height: `${item.online}%` }}
              ></div>
              <div
                className="w-3 bg-chart-teal rounded-t-sm"
                style={{ height: `${item.offline}%` }}
              ></div>
            </div>
          ))}
        </div>

        {/* X-Axis Labels */}
        <div className="absolute bottom-[-24px] left-10 right-0 flex justify-between text-xs text-gray-600">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chart-blue"></span>
          <span className="text-sm text-gray-700">Online Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chart-teal"></span>
          <span className="text-sm text-gray-700">Offline Sales</span>
        </div>
      </div>
    </div>
  );
}
