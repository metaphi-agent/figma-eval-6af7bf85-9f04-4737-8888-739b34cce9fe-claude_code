export default function VolumeService() {
  const data = [
    { label: 'Mon', volume: 138, service: 96 },
    { label: 'Tue', volume: 168, service: 104 },
    { label: 'Wed', volume: 96, service: 125 },
    { label: 'Thu', volume: 125, service: 104 },
    { label: 'Fri', volume: 104, service: 96 },
    { label: 'Sat', volume: 85, service: 138 },
  ];

  const maxValue = 180;

  return (
    <div className="rounded-[26px] bg-white p-8 border border-[#EDF2F6]" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="mb-8 text-xl font-semibold text-primary-dark">Volume vs Service Level</h2>

      <div className="relative h-[180px] flex items-end justify-around gap-2 pb-8">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-grey-700 opacity-70">
          <span>180</span>
          <span>135</span>
          <span>90</span>
          <span>45</span>
          <span>0</span>
        </div>

        {/* Bars */}
        <div className="ml-8 w-full h-full flex items-end justify-around gap-3">
          {data.map((item, index) => {
            const volumeHeight = (item.volume / maxValue) * 100;
            const serviceHeight = (item.service / maxValue) * 100;

            return (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="flex w-full gap-1 items-end h-full">
                  <div
                    className="flex-1 rounded-t-lg bg-primary-800"
                    style={{ height: `${volumeHeight}%` }}
                  ></div>
                  <div
                    className="flex-1 rounded-t-lg bg-support-green"
                    style={{ height: `${serviceHeight}%` }}
                  ></div>
                </div>
                <span className="text-xs text-grey-700">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center justify-center gap-8 text-sm">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary-800"></div>
            <span className="text-grey-700">Volume</span>
          </div>
          <span className="text-lg font-semibold text-primary-900">1,135</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-support-green"></div>
            <span className="text-grey-700">Services</span>
          </div>
          <span className="text-lg font-semibold text-primary-900">635</span>
        </div>
      </div>
    </div>
  );
}
