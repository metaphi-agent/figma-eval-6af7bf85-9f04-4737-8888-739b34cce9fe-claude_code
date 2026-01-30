export default function Sidebar() {
  const menuItems = [
    { icon: 'dashboard', label: 'Dashboard', active: true },
    { icon: 'leaderboard', label: 'Leaderboard', active: false },
    { icon: 'cart', label: 'order', active: false },
    { icon: 'products', label: 'Products', active: false },
    { icon: 'chart', label: 'Sales Report', active: false },
    { icon: 'message', label: 'Messages', active: false },
    { icon: 'settings', label: 'Settings', active: false },
    { icon: 'signout', label: 'Sign Out', active: false },
  ];

  const renderIcon = (iconName: string, isActive: boolean) => {
    const colorClass = isActive ? 'stroke-white' : 'stroke-grey-700';

    switch (iconName) {
      case 'dashboard':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="11" height="11" rx="2" className={colorClass} strokeWidth="2"/>
            <rect x="4" y="17" width="11" height="11" rx="2" className={colorClass} strokeWidth="2"/>
            <rect x="17" y="4" width="11" height="11" rx="2" className={colorClass} strokeWidth="2"/>
            <rect x="17" y="17" width="11" height="11" rx="2" className={colorClass} strokeWidth="2"/>
          </svg>
        );
      case 'leaderboard':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M10 20h4v8h-4v-8zM14 12h4v16h-4V12zM18 16h4v12h-4V16z" className={colorClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'cart':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M2 2h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L26 6H8" className={colorClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="26" r="2" className={colorClass} strokeWidth="2"/>
            <circle cx="22" cy="26" r="2" className={colorClass} strokeWidth="2"/>
          </svg>
        );
      case 'products':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 8h20M6 16h20M6 24h20" className={colorClass} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'chart':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M4 28L10 16L16 22L28 4" className={colorClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="10" cy="16" r="2" fill={isActive ? 'white' : '#7b91b2'}/>
            <circle cx="16" cy="22" r="2" fill={isActive ? 'white' : '#7b91b2'}/>
            <circle cx="28" cy="4" r="2" fill={isActive ? 'white' : '#7b91b2'}/>
          </svg>
        );
      case 'message':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M28 16a12 12 0 01-12 12H4V16a12 12 0 0124 0z" className={colorClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="10" cy="16" r="1.5" fill={isActive ? 'white' : '#7b91b2'}/>
            <circle cx="16" cy="16" r="1.5" fill={isActive ? 'white' : '#7b91b2'}/>
            <circle cx="22" cy="16" r="1.5" fill={isActive ? 'white' : '#7b91b2'}/>
          </svg>
        );
      case 'settings':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="4" className={colorClass} strokeWidth="2"/>
            <path d="M16 2v4m0 20v4M28 16h-4M8 16H4m20.485-9.485l-2.828 2.828M10.343 21.657l-2.828 2.828M28.485 25.485l-2.828-2.828M10.343 10.343L7.515 7.515" className={colorClass} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'signout':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M12 28H6a2 2 0 01-2-2V6a2 2 0 012-2h6M22 22l6-6-6-6M28 16H12" className={colorClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[345px] bg-white">
      {/* Logo */}
      <div className="flex items-center gap-4 px-12 py-14">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-800">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="12" r="8" stroke="white" strokeWidth="2"/>
            <path d="M8 28c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-3xl font-semibold text-primary-900">Dabang</span>
      </div>

      {/* Navigation */}
      <nav className="px-8 space-y-2">
        {menuItems.slice(0, 7).map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-6 px-6 py-4 rounded-2xl transition-colors ${
              item.active
                ? 'bg-primary-800 text-white shadow-[0_20px_50px_rgba(55,70,163,0.1)]'
                : 'text-grey-700 hover:bg-grey-300'
            }`}
          >
            {renderIcon(item.icon, item.active)}
            <span className="text-lg font-normal">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Sign Out - at bottom */}
      <div className="absolute bottom-8 left-8 right-8">
        <button className="w-full flex items-center gap-6 px-6 py-4 rounded-2xl text-grey-700 hover:bg-grey-300 transition-colors">
          {renderIcon('signout', false)}
          <span className="text-lg font-normal">Sign Out</span>
        </button>
      </div>

      {/* Upgrade Card */}
      <div className="absolute bottom-24 left-8 right-8 mb-4">
        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-primary-800 to-primary-900 p-6 text-center">
          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4l-4 8h8l-4 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="24" r="2" fill="white"/>
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Dabang Pro</h3>
            <p className="mb-6 text-sm text-white/80">
              Get access to all features on tetumbas
            </p>
            <button className="w-full rounded-lg bg-white py-3 text-sm font-medium text-primary-800 hover:bg-white/90 transition-colors">
              Get Pro
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
