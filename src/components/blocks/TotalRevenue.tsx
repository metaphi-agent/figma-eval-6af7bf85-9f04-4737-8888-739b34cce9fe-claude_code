export default function TotalRevenue() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const onlineData = [12, 15, 18, 10, 20, 16, 22];
  const offlineData = [8, 10, 12, 14, 11, 9, 15];

  const maxValue = 25;

  return (
    <div className="rounded-[20px] bg-white p-8 border border-grey-100" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="mb-6 text-xl font-semibold text-primary-dark">Total Revenue</h2>

      <div className="relative h-[250px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-grey-700 opacity-70">
          <span>25k</span>
          <span>20k</span>
          <span>15k</span>
          <span>10k</span>
          <span>5k</span>
          <span>0</span>
        </div>

        {/* Bars */}
        <div className="ml-8 h-full flex items-end justify-between gap-2 pb-8">
          {days.map((day, index) => {
            const onlineHeight = (onlineData[index] / maxValue) * 100;
            const offlineHeight = (offlineData[index] / maxValue) * 100;

            return (
              <div key={day} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex w-full gap-1 items-end" style={{ height: '200px' }}>
                  <div
                    className="flex-1 rounded-t-md bg-primary-800"
                    style={{ height: `${onlineHeight}%` }}
                  ></div>
                  <div
                    className="flex-1 rounded-t-md bg-support-green"
                    style={{ height: `${offlineHeight}%` }}
                  ></div>
                </div>
                <span className="mt-2 text-[10px] text-grey-700">{day}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary-800"></div>
          <span className="text-grey-700">Online Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-support-green"></div>
          <span className="text-grey-700">Offline Sales</span>
        </div>
      </div>
    </div>
  );
}
