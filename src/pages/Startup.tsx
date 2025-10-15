import { useState, useEffect } from "react";
import { Power, Shield, Zap, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Startup() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const startupSteps = [
    { text: "Initializing Defense Systems...", icon: Shield, duration: 1000 },
    { text: "Loading Tactical Modules...", icon: Zap, duration: 1200 },
    { text: "Establishing Secure Connection...", icon: Activity, duration: 1000 },
    { text: "System Ready - Welcome Operator", icon: Power, duration: 800 }
  ];

  useEffect(() => {
    let totalDelay = 0;
    
    startupSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
      }, totalDelay);
      totalDelay += step.duration;
    });

    // Navigate to home after all steps complete
    setTimeout(() => {
      navigate("/");
    }, totalDelay + 500);

  }, [navigate]);

  const CurrentIcon = startupSteps[currentStep]?.icon || Power;

  return (
    <div className="min-h-screen bg-tactical-black flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 hud-grid opacity-10" />
      
      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/20" />

      {/* Startup Animation */}
      <div className="text-center space-y-8 animate-fadeIn">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-primary/30 rounded-full flex items-center justify-center mx-auto">
            <div className="w-24 h-24 border-4 border-primary/50 rounded-full flex items-center justify-center animate-pulse">
              <CurrentIcon className="h-12 w-12 text-primary animate-pulse" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
          
          {/* Rotating outer ring */}
          <div className="absolute -inset-2 border-2 border-transparent border-t-primary/40 rounded-full animate-spin" />
        </div>
        
        <div className="space-y-4">
          <h1 className="font-display text-2xl text-primary tracking-wider">
            SYSTEM STARTUP
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="font-mono text-sm text-muted-foreground">
              {startupSteps[currentStep]?.text || "Initializing..."}
            </p>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {startupSteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-primary border-primary shadow-lg shadow-primary/50'
                    : 'border-primary/30 bg-transparent'
                }`}
              />
            ))}
          </div>
          
          {/* Loading Bar */}
          <div className="w-64 h-2 bg-tactical-surface border border-primary/30 mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-1000 ease-out"
              style={{ 
                width: `${((currentStep + 1) / startupSteps.length) * 100}%`
              }} 
            />
          </div>
        </div>
      </div>

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