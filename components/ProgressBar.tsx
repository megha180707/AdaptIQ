'use client';

interface ProgressBarProps {
  value: number;
  max: number;
  showLabel?: boolean;
  color?: 'indigo' | 'purple' | 'green';
}

export function ProgressBar({ value, max, showLabel = true, color = 'indigo' }: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);
  const colorClasses = {
    indigo: 'bg-indigo-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600',
  };

  return (
    <div className="w-full">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && <p className="text-sm text-gray-600 mt-1">{percentage}% Complete</p>}
    </div>
  );
}
