import { useState } from "react";
import { Upload, Camera, Activity, Shield, Target, Clock, Zap, Cpu } from "lucide-react";
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
  const [systemStatus] = useState("OPERATIONAL");
  
  return (
    <div className="p-6 space-y-6 tactical-bg">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-8 angular-cut overflow-hidden border-2 border-primary/30 hud-corners">
          <img 
            src={heroImage} 
            alt="Defense Command Center" 
            className="w-full h-72 object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tactical-black via-tactical-black/80 to-transparent"></div>
          <div className="absolute inset-0 hud-grid opacity-20"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="p-12">
              <div className="font-mono text-xs text-primary mb-2 tracking-widest">
                [ CLASSIFIED - DEFENSE GRADE AI SYSTEM ]
              </div>
              <h1 className="font-display text-5xl text-primary mb-3 animate-fadeIn">
                DEFENSE TACTICAL COMMAND
              </h1>
              <p className="text-lg text-foreground mb-6 font-tactical max-w-2xl">
                AI-POWERED THREAT DETECTION & ANALYSIS SYSTEM
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow-hud">
                  <Upload className="h-4 w-4 mr-2" />
                  DEPLOY MISSION
                </Button>
                <Button variant="outline" size="lg">
                  <Camera className="h-4 w-4 mr-2" />
                  LIVE SURVEILLANCE
                </Button>
              </div>
            </div>
          </div>
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
