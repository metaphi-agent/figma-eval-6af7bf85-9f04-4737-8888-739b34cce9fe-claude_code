export function TargetVsReality() {
  const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'];

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card h-full">
      <h2 className="text-xl font-semibold text-primary-dark mb-6">Target vs Reality</h2>

      {/* Chart */}
      <div className="relative h-[140px] mb-6">
        <svg className="w-full h-full" viewBox="0 0 320 140" preserveAspectRatio="none">
          <defs>
            <linearGradient id="greenAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B69B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00B69B" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Green Area */}
          <path
            d="M0,100 Q40,80 80,90 T160,60 T240,70 T320,40 L320,140 L0,140 Z"
            fill="url(#greenAreaGradient)"
          />
          <path
            d="M0,100 Q40,80 80,90 T160,60 T240,70 T320,40"
            fill="none"
            stroke="#00B69B"
            strokeWidth="2"
          />

          {/* Dots */}
          <circle cx="0" cy="100" r="4" fill="#00B69B" />
          <circle cx="64" cy="85" r="4" fill="#00B69B" />
          <circle cx="128" cy="90" r="4" fill="#00B69B" />
          <circle cx="192" cy="60" r="4" fill="#00B69B" />
          <circle cx="256" cy="70" r="4" fill="#00B69B" />
          <circle cx="320" cy="40" r="4" fill="#00B69B" />
        </svg>

        {/* X-Axis Labels */}
        <div className="absolute bottom-[-20px] left-0 right-0 flex justify-between text-xs text-gray-600">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-light rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-green" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Reality Sales</p>
            <p className="text-xs text-gray-600">Global</p>
          </div>
          <span className="text-lg font-semibold text-green">8,823</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-violet-light rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-violet" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Target Sales</p>
            <p className="text-xs text-gray-600">Commercial</p>
          </div>
          <span className="text-lg font-semibold text-violet">12,122</span>
        </div>
      </div>
    </div>
  );
}
