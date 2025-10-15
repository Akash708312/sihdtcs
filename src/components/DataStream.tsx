import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DataLine {
  id: number;
  text: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export function DataStream() {
  const [lines, setLines] = useState<DataLine[]>([]);

  const dataMessages = [
    { text: 'SYSTEM DIAGNOSTICS: ALL SYSTEMS OPERATIONAL', type: 'success' as const },
    { text: 'THREAT ANALYSIS: PROCESSING SECTOR 7-ALPHA', type: 'info' as const },
    { text: 'WARNING: ANOMALY DETECTED IN QUADRANT 4', type: 'warning' as const },
    { text: 'AI ENHANCEMENT: IMAGE PROCESSING COMPLETE', type: 'success' as const },
    { text: 'PERIMETER SCAN: NO THREATS DETECTED', type: 'info' as const },
    { text: 'ALERT: UNIDENTIFIED OBJECT AT 12.4°N 78.3°E', type: 'error' as const },
    { text: 'DATABASE SYNC: UPDATING THREAT SIGNATURES', type: 'info' as const },
    { text: 'SONAR PING: ECHO DETECTED AT 450M DEPTH', type: 'warning' as const },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = dataMessages[Math.floor(Math.random() * dataMessages.length)];
      const newLine: DataLine = {
        id: Date.now(),
        text: randomMessage.text,
        type: randomMessage.type,
      };

      setLines(prev => {
        const updated = [newLine, ...prev];
        return updated.slice(0, 8);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getTypeColor = (type: DataLine['type']) => {
    switch (type) {
      case 'success': return 'text-primary';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="h-64 bg-tactical-surface/50 border-2 border-primary/30 angular-cut p-4 overflow-hidden hud-corners relative">
      <div className="font-mono text-[10px] text-primary mb-2 uppercase tracking-wider">
        LIVE DATA STREAM
      </div>
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div
            key={line.id}
            className={cn(
              "font-mono text-[10px] transition-all duration-500",
              getTypeColor(line.type),
              index === 0 ? 'opacity-100 translate-x-0' : 'opacity-70'
            )}
            style={{
              animation: index === 0 ? 'slideInLeft 0.5s ease-out' : 'none',
            }}
          >
            [{new Date().toLocaleTimeString('en-US', { hour12: false })}] {line.text}
          </div>
        ))}
      </div>

      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scanline-move" />
    </div>
  );
}
