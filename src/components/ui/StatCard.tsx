import clsx from 'clsx';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  bgColor: 'pink' | 'yellow' | 'green' | 'purple';
}

const bgColors = {
  pink: 'bg-pink-light',
  yellow: 'bg-yellow-light',
  green: 'bg-green-light',
  purple: 'bg-violet-light',
};

export function StatCard({ title, value, change, icon, bgColor }: StatCardProps) {
  return (
    <div className={clsx('rounded-2xl p-5 flex flex-col gap-3 min-w-[180px]', bgColors[bgColor])}>
      <div className="w-10 h-10 flex items-center justify-center">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        <span className="text-base font-medium text-gray-600">{title}</span>
      </div>
      <span className="text-xs font-medium text-primary-800">{change}</span>
    </div>
  );
}
