import { useState, useEffect, useRef } from "react";
import { Upload, Camera, Activity, Shield, Target, Clock, Zap, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { HUDCard } from "@/components/HUDCard";
import { RadarDisplay } from "@/components/RadarDisplay";
import { GlobeDisplay } from "@/components/GlobeDisplay";
import { DataStream } from "@/components/DataStream";
import heroImage from "@/assets/hero-maritime.jpg";

const recentFiles = [
  { id: 1, name: "sector_alpha_7.jpg", status: "Processed", threats: 2, timestamp: "12:31:22" },
  { id: 2, name: "underwater_scan_01.mp4", status: "Processing", threats: 0, timestamp: "12:30:45" },
  { id: 3, name: "perimeter_check.jpg", status: "Completed", threats: 1, timestamp: "12:29:18" },
  { id: 4, name: "depth_survey.mp4", status: "Completed", threats: 0, timestamp: "12:28:55" },
  { id: 5, name: "coastal_patrol.jpg", status: "Completed", threats: 3, timestamp: "12:27:33" },
];

const systemMetrics = [
  { label: "System Uptime", value: "99.7%", icon: Activity, color: "text-green-400" },
  { label: "Processing Latency", value: "23ms", icon: Clock, color: "text-primary" },
  { label: "Active Threats", value: "2", icon: Target, color: "text-destructive" },
  { label: "Files Processed", value: "847", icon: Shield, color: "text-primary" },
];

const Index = () => {
  const navigate = useNavigate();
  const [systemStatus] = useState("OPERATIONAL");

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleDeployMission = () => {
    navigate('/upload');
  };

  const handleLiveSurveillance = () => {
    navigate('/detection');
  };



  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setVideoLoaded(true);
        // Try to play video immediately
        video.play().catch((error) => {
          console.log("Autoplay failed:", error);
          // If autoplay fails, we'll show controls for user to click
        });
      };

      const handleError = () => {
        setVideoError(true);
        console.error("Video failed to load");
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
      // Load the video immediately
      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);
  
  return (
    <div className="p-6 space-y-6 tactical-bg">
      <div className="max-w-7xl mx-auto">
        {/* Video Section with Text Overlay */}
        <div 
          className="relative mb-8 angular-cut overflow-hidden border-2 border-primary/30 hud-corners h-96"
          onClick={() => {
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch(console.error);
            }
          }}
        >
          {/* Video Header */}
          <div className="absolute top-0 left-0 right-0 z-20 bg-tactical-dark/90 border-b border-primary/30 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-blink"></div>
                <span className="font-tactical text-xs text-primary">MISSION BRIEFING - LIVE FEED</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                CLASSIFIED INTEL - DTCS OVERVIEW
              </div>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative w-full h-full">
            {videoError ? (
              <div className="w-full h-full flex items-center justify-center bg-tactical-surface/50">
                <div className="text-center">
                  <div className="font-tactical text-red-500 mb-2">VIDEO FEED ERROR</div>
                  <div className="font-mono text-xs text-muted-foreground">Unable to load mission briefing</div>
                </div>
              </div>
            ) : (
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                loop
                muted
                playsInline
                preload="auto"
                autoPlay
              >
                <source src="/My%20SIH%20Video.mp4" type="video/mp4" />
                <source src="/My SIH Video.mp4" type="video/mp4" />
                <source src="./My SIH Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            
            {!videoLoaded && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-tactical-surface/50">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <div className="font-mono text-xs text-primary">LOADING TACTICAL FEED...</div>
                </div>
              </div>
            )}

            {videoLoaded && videoRef.current?.paused && (
              <div className="absolute inset-0 flex items-center justify-center bg-tactical-black/50 backdrop-blur-sm">
                <Button 
                  className="glow-hud text-lg px-8 py-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (videoRef.current) {
                      videoRef.current.play().catch(console.error);
                    }
                  }}
                >
                  <Camera className="h-6 w-6 mr-3" />
                  START MISSION BRIEFING
                </Button>
              </div>
            )}
          </div>

          {/* Text Overlay - Always Visible */}
          <div className="absolute inset-0 flex items-center justify-center z-25 pointer-events-none">
            <div className="text-center">
              <div className="font-mono text-sm text-primary mb-4 tracking-widest drop-shadow-lg">
                [ CLASSIFIED - DEFENSE GRADE AI SYSTEM ]
              </div>
              <h1 className="font-display text-6xl text-primary mb-6 drop-shadow-lg">
                DEFENSE TACTICAL COMMAND
              </h1>
              <p className="text-xl text-foreground font-tactical max-w-3xl mx-auto drop-shadow-lg">
                AI-POWERED THREAT DETECTION & ANALYSIS SYSTEM
              </p>
            </div>
          </div>
          
          {/* Video Overlay Effects */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-0 hud-grid opacity-5"></div>
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent h-1" 
                 style={{ 
                   animation: 'scanline-move 8s linear infinite',
                   height: '2px'
                 }} />
          </div>

          {/* Action Buttons Overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex gap-4">
              <Button 
                variant="outline"
                className="text-sm px-6 py-3 bg-tactical-surface/80 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/20 text-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeployMission();
                }}
              >
                <Upload className="h-4 w-4 mr-2" />
                DEPLOY MISSION
              </Button>
              <Button 
                variant="outline" 
                className="text-sm px-6 py-3 bg-tactical-surface/80 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/20 text-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLiveSurveillance();
                }}
              >
                <Camera className="h-4 w-4 mr-2" />
                LIVE SURVEILLANCE
              </Button>
            </div>
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/60 pointer-events-none z-20"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/60 pointer-events-none z-20"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/60 pointer-events-none z-20"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/60 pointer-events-none z-20"></div>
        </div>

        {/* System Status Banner */}
        <div className="mb-6 p-4 bg-tactical-surface/50 border-2 border-primary/30 angular-cut relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Shield className="h-10 w-10 text-primary animate-pulse-hud" />
              </div>
              <div>
                <h2 className="font-display text-xl text-primary">SYSTEM STATUS: {systemStatus}</h2>
                <p className="font-mono text-xs text-muted-foreground">ALL DEFENSIVE SYSTEMS ONLINE</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-display text-primary animate-pulse-hud">ACTIVE</div>
              <div className="font-mono text-[10px] text-muted-foreground">
                LAST SCAN: {new Date().toLocaleTimeString('en-US', { hour12: false })}
              </div>
            </div>
          </div>
        </div>

        {/* HUD Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <HUDCard
            title="SYSTEM UPTIME"
            value="99.7%"
            status="active"
            icon={<Activity className="h-6 w-6" />}
            subtitle="All systems nominal"
          />
          <HUDCard
            title="PROCESSING SPEED"
            value="23ms"
            status="active"
            icon={<Zap className="h-6 w-6" />}
            subtitle="Real-time analysis"
          />
          <HUDCard
            title="ACTIVE THREATS"
            value="2"
            status="critical"
            icon={<Target className="h-6 w-6" />}
            subtitle="Immediate attention required"
            classified
          />
          <HUDCard
            title="AI PROCESSING"
            value="847"
            status="active"
            icon={<Cpu className="h-6 w-6" />}
            subtitle="Files analyzed today"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* 3D Radar Display */}
          <div className="lg:col-span-1">
            <RadarDisplay />
          </div>

          {/* Data Stream */}
          <div className="lg:col-span-1">
            <DataStream />
          </div>

          {/* Mission Files */}
          <div className="lg:col-span-1">
            <Card className="bg-tactical-surface/50 border-2 border-primary/30 angular-cut hud-corners h-64">
              <CardHeader className="pb-3">
                <CardTitle className="font-tactical text-sm text-primary">
                  RECENT OPERATIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {recentFiles.slice(0, 5).map((file) => (
                    <div 
                      key={file.id}
                      className="flex items-center justify-between p-2 border border-primary/20 angular-cut hover:bg-primary/5 transition-all hover:scale-105 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div className="w-6 h-6 bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[8px] font-mono text-primary">
                            {file.name.split('.')[1]?.toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-mono text-[10px] truncate">{file.name}</div>
                          <div className="font-mono text-[8px] text-muted-foreground">{file.timestamp}</div>
                        </div>
                      </div>
                      
                      {file.threats > 0 && (
                        <div className="flex-shrink-0">
                          <div className="font-mono text-[9px] text-red-500 animate-blink">
                            {file.threats} THREAT
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 3D Globe */}
          <div>
            <GlobeDisplay />
          </div>

          {/* Quick Actions & Alerts */}
          <div className="space-y-6">
            {/* Quick Deploy */}
            <Card className="bg-tactical-surface/50 border-2 border-primary/30 angular-cut hud-corners">
              <CardHeader>
                <CardTitle className="font-tactical text-sm text-primary">
                  QUICK DEPLOY
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start text-xs h-10 glow-hud">
                  <Upload className="h-3 w-3 mr-2" />
                  UPLOAD INTEL
                </Button>
                <Button variant="outline" className="w-full justify-start text-xs h-10">
                  <Camera className="h-3 w-3 mr-2" />
                  LIVE FEED
                </Button>
                <Button variant="outline" className="w-full justify-start text-xs h-10">
                  <Target className="h-3 w-3 mr-2" />
                  THREAT ANALYSIS
                </Button>
              </CardContent>
            </Card>

            {/* Active Threats */}
            <Card className="bg-tactical-surface/50 border-2 border-red-500/50 angular-cut hud-corners classified">
              <CardHeader>
                <CardTitle className="font-tactical text-sm text-red-500 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-blink"></span>
                  ACTIVE THREATS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="p-3 bg-red-500/10 border-2 border-red-500/30 angular-cut">
                  <div className="font-tactical text-[10px] text-red-500">CRITICAL - SECTOR ALPHA-7</div>
                  <div className="font-mono text-[9px] text-red-400">Mine detected via AI analysis</div>
                  <div className="font-mono text-[8px] text-muted-foreground mt-1">Confidence: 94%</div>
                </div>
                <div className="p-3 bg-yellow-500/10 border-2 border-yellow-500/30 angular-cut">
                  <div className="font-tactical text-[10px] text-yellow-500">WARNING - SUBMARINE SIG</div>
                  <div className="font-mono text-[9px] text-yellow-400">Unidentified signature</div>
                  <div className="font-mono text-[8px] text-muted-foreground mt-1">Confidence: 89%</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
