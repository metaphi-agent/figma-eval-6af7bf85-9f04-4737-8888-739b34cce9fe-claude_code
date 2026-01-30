import { useState } from 'react';
import clsx from 'clsx';

interface NavItem {
  name: string;
  icon: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: './assets/icons/dashboard.svg', active: true },
  { name: 'Leaderboard', icon: './assets/icons/leaderboard.svg' },
  { name: 'order', icon: './assets/icons/cart.svg' },
  { name: 'Products', icon: './assets/icons/products.svg' },
  { name: 'Sales Report', icon: './assets/icons/chart.svg' },
  { name: 'Messages', icon: './assets/icons/messages.svg' },
  { name: 'Settings', icon: './assets/icons/settings.svg' },
  { name: 'Sign Out', icon: './assets/icons/signout.svg' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside className="w-[345px] h-screen bg-white flex flex-col py-8 px-6 fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-4 px-4 mb-12">
        <img
          src="./assets/icons/logo.svg"
          alt="Dabang Logo"
          className="w-14 h-14"
        />
        <span className="text-[30px] font-semibold text-gray-900">Dabang</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 flex-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={clsx(
              'flex items-center gap-6 px-6 py-4 rounded-2xl transition-all duration-200',
              activeItem === item.name
                ? 'bg-primary-900 text-white shadow-[0px_20px_50px_rgba(55,69,87,0.1)]'
                : 'text-gray-700 hover:bg-gray-100'
            )}
          >
            <img
              src={item.icon}
              alt={item.name}
              className={clsx(
                'w-8 h-8',
                activeItem === item.name ? 'brightness-0 invert' : ''
              )}
            />
            <span className={clsx(
              'text-lg',
              activeItem === item.name ? 'font-semibold' : 'font-normal'
            )}>
              {item.name}
            </span>
          </button>
        ))}
      </nav>

      {/* Get Pro Card */}
      <div className="mt-auto">
        <div className="bg-gradient-to-br from-primary-900 to-[#8B5CF6] rounded-[20px] p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
            <img
              src="./assets/icons/logo-icon.svg"
              alt="Pro"
              className="w-6 h-6 brightness-0 invert"
            />
          </div>
          <h3 className="text-white font-semibold text-lg mb-1">Dabang Pro</h3>
          <p className="text-white/80 text-sm mb-4">
            Get access to all<br />features on tetumbas
          </p>
          <button className="bg-white text-primary-900 font-semibold px-8 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Get Pro
          </button>
        </div>
      </div>
    </aside>
  );
}
