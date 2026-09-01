'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'indigo' | 'purple' | 'green' | 'amber' | 'red';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'indigo', size = 'md' }: BadgeProps) {
  const variantClasses = {
    indigo: 'bg-indigo-100 text-indigo-900',
    purple: 'bg-purple-100 text-purple-900',
    green: 'bg-green-100 text-green-900',
    amber: 'bg-amber-100 text-amber-900',
    red: 'bg-red-100 text-red-900',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs font-medium',
    md: 'px-3 py-1 text-sm font-medium',
  };

  return (
    <span className={`inline-block rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </span>
  );
}
