import { useState, useEffect } from "react";
import { Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Shutdown() {
  const [isShuttingDown, setIsShuttingDown] = useState(true);
  const [showPowerButton, setShowPowerButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show shutdown animation for 3 seconds, then show power button
    const timer = setTimeout(() => {
      setIsShuttingDown(false);
      setShowPowerButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePowerOn = () => {
    console.log("Power button clicked - starting system");
    navigate("/startup");
  };

  return (
    <div className="min-h-screen bg-tactical-black flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 hud-grid opacity-10" />
      
      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/20" />

      {/* Shutdown Animation */}
      {isShuttingDown && (
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-primary/30 rounded-full flex items-center justify-center mx-auto">
              <div className="w-24 h-24 border-4 border-primary/50 rounded-full flex items-center justify-center animate-pulse">
                <Power className="h-12 w-12 text-primary animate-spin" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
          </div>
          
          <div className="space-y-4">
            <h1 className="font-display text-2xl text-primary tracking-wider">
              SYSTEM SHUTDOWN
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="font-mono text-sm text-muted-foreground">
                Terminating all processes...
              </p>
            </div>
            
            {/* Loading Bar */}
            <div className="w-64 h-2 bg-tactical-surface border border-primary/30 mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary/50 to-primary animate-pulse" 
                   style={{ 
                     animation: 'slideInLeft 3s ease-out forwards',
                     width: '0%',
                     animationFillMode: 'forwards'
                   }} />
            </div>
          </div>
        </div>
      )}

      {/* Power On Screen */}
      {showPowerButton && (
        <div className="text-center space-y-12 animate-fadeIn">
          {/* Clean Tactical Power Button */}
          <div className="relative">
            {/* Subtle outer glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl pointer-events-none" />
            
            {/* Single animated ring */}
            <div className="absolute -inset-6 rounded-full border-2 border-primary/30 animate-pulse pointer-events-none" />
            
            {/* Main Button */}
            <Button
              onClick={handlePowerOn}
              className="relative w-32 h-32 rounded-full bg-tactical-surface/70 border-3 border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
            >
              <Power className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
            </Button>
            
            {/* Corner brackets for tactical look */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-primary/40" />
          </div>

          {/* System Name */}
          <div className="space-y-4">
            <h1 className="font-display text-3xl text-primary tracking-wider">
              DEFENSE TACTICAL COMMAND SYSTEM
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-blink" />
              <p className="font-mono text-sm text-muted-foreground">
                SYSTEM OFFLINE - PRESS POWER TO ACTIVATE
              </p>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="flex justify-center gap-8 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-red-500">MAIN POWER: OFF</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-yellow-500">STANDBY: ACTIVE</span>
            </div>
          </div>
        </div>
      )}

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1 animate-pulse" 
             style={{ 
               animation: 'scanline-move 4s linear infinite',
               height: '2px'
             }} />
      </div>
    </div>
  );
}