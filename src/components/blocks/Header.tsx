export default function Header() {
  return (
    <header className="fixed left-[345px] right-0 top-0 h-[120px] bg-white border-b border-grey-100 z-10">
      <div className="flex h-full items-center justify-between px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-semibold text-primary-900">Dashboard</h1>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex h-[60px] w-[513px] items-center gap-2 rounded-2xl bg-grey-300 px-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
              <circle cx="14" cy="14" r="8" stroke="#7B91B2" strokeWidth="2"/>
              <path d="M20 20l6 6" stroke="#7B91B2" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 bg-transparent text-lg text-grey-900 placeholder-grey-700 outline-none"
            />
          </div>

          {/* Language Selector */}
          <div className="flex h-[60px] items-center gap-4 px-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full overflow-hidden bg-grey-300">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#F64E60"/>
                  <circle cx="16" cy="16" r="10" fill="white"/>
                </svg>
              </div>
              <span className="text-lg text-grey-900">Eng (US)</span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#7B91B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Notification */}
          <button className="relative h-12 w-12 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 28c1.657 0 3-1.343 3-3h-6c0 1.657 1.343 3 3 3z" fill="#7B91B2"/>
              <path d="M26 20v-8a10 10 0 10-20 0v8l-2 2v2h24v-2l-2-2z" stroke="#7B91B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-support-red"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-4 pl-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User profile"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-base font-medium text-primary-900">Muxfit</span>
              <span className="text-sm text-grey-700">Admin</span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#7B91B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
