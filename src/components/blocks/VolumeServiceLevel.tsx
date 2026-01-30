export function VolumeServiceLevel() {
  const data = [
    { volume: 80, service: 65 },
    { volume: 95, service: 70 },
    { volume: 75, service: 60 },
    { volume: 88, service: 72 },
    { volume: 60, service: 50 },
    { volume: 70, service: 55 },
  ];

  return (
    <div className="bg-white rounded-[26px] p-6 shadow-card h-full">
      <h2 className="text-xl font-semibold text-primary-dark mb-8">Volume vs Service Level</h2>

      {/* Chart */}
      <div className="flex items-end justify-around h-[180px] mb-6">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="flex gap-1 items-end h-[140px]">
              <div
                className="w-3 bg-chart-blue rounded-t"
                style={{ height: `${item.volume}%` }}
              ></div>
              <div
                className="w-3 bg-chart-teal rounded-t"
                style={{ height: `${item.service}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chart-blue"></span>
          <span className="text-sm text-gray-700">Volume</span>
          <span className="text-lg font-semibold text-gray-900 ml-2">1,135</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chart-teal"></span>
          <span className="text-sm text-gray-700">Services</span>
          <span className="text-lg font-semibold text-gray-900 ml-2">635</span>
        </div>
      </div>
    </div>
  );
}
