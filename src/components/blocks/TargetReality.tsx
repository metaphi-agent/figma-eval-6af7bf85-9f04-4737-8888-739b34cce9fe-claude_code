export default function TargetReality() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [85, 78, 92, 88, 95, 82, 90, 87, 93, 89, 91, 86];

  const maxValue = 100;

  return (
    <div className="rounded-[20px] bg-white p-8 border border-grey-100" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="mb-6 text-xl font-semibold text-primary-dark">Target vs Reality</h2>

      <div className="mb-6 flex gap-4">
        {months.map((month, index) => {
          const height = (data[index] / maxValue) * 100;
          const colors = ['#FFC922', '#2DCE89', '#FFC922', '#2DCE89', '#FFC922', '#2DCE89', '#FFC922', '#2DCE89', '#FFC922', '#2DCE89', '#FFC922', '#2DCE89'];

          return (
            <div key={month} className="flex flex-1 flex-col items-center">
              <div className="w-full bg-grey-300 rounded-t-lg overflow-hidden" style={{ height: '120px' }}>
                <div
                  className="w-full rounded-t-lg"
                  style={{
                    height: `${height}%`,
                    backgroundColor: colors[index],
                    marginTop: `${100 - height}%`
                  }}
                ></div>
              </div>
              <span className="mt-2 text-[10px] text-grey-700">{month}</span>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-grey-300 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-support-green flex items-center justify-center text-white font-semibold">
              R
            </div>
            <span className="text-sm font-medium text-grey-900">Reality Sales</span>
          </div>
          <span className="text-lg font-semibold text-primary-900">8,823</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-grey-300 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-support-yellow flex items-center justify-center text-white font-semibold">
              T
            </div>
            <span className="text-sm font-medium text-grey-900">Target Sales</span>
          </div>
          <span className="text-lg font-semibold text-primary-900">12,122</span>
        </div>
      </div>
    </div>
  );
}
