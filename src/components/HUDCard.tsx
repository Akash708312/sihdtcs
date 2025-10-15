import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HUDCardProps {
  title: string;
  value: string | number;
  status?: 'active' | 'warning' | 'critical';
  icon?: ReactNode;
  subtitle?: string;
  classified?: boolean;
  className?: string;
}

export function HUDCard({ 
  title, 
  value, 
  status = 'active', 
  icon, 
  subtitle,
  classified = false,
  className 
}: HUDCardProps) {
  const statusClasses = {
    active: 'border-primary/50 bg-primary/5',
    warning: 'border-yellow-500/50 bg-yellow-500/5',
    critical: 'border-red-500/50 bg-red-500/5',
  };

  return (
    <div 
      className={cn(
        "relative p-4 border-2 angular-cut transition-all duration-300 hover:scale-105 hover:glow-hud group",
        statusClasses[status],
        classified && 'classified',
        className
      )}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
      
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
            {title}
          </div>
          <div className="font-display text-2xl text-primary mb-1 group-hover:animate-glitch">
            {value}
          </div>
          {subtitle && (
            <div className="font-mono text-[9px] text-muted-foreground">
              {subtitle}
            </div>
          )}
        </div>
        {icon && (
          <div className="text-primary/50 group-hover:text-primary transition-colors">
            {icon}
          </div>
        )}
      </div>

      {/* Status indicator */}
      <div className={cn(
        "absolute top-2 right-2 w-2 h-2 rounded-full",
        status === 'active' && 'bg-primary animate-pulse-hud',
        status === 'warning' && 'bg-yellow-500 animate-blink',
        status === 'critical' && 'bg-red-500 animate-blink'
      )} />
    </div>
  );
}
