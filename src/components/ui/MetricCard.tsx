interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend: string;
  trendColor: string;
  bgColor: string;
  iconColor: string;
}

export default function MetricCard({ icon, value, label, trend, trendColor, bgColor, iconColor }: MetricCardProps) {
  return (
    <div className={`flex flex-1 flex-col gap-3 rounded-2xl p-6 ${bgColor}`}>
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconColor}`}>
        {icon}
      </div>
      <div className="mt-2">
        <div className="text-3xl font-semibold text-primary-900">{value}</div>
        <div className="mt-1 text-sm font-normal text-grey-700">{label}</div>
      </div>
      <div className={`text-xs font-normal ${trendColor}`}>{trend}</div>
    </div>
  );
}
