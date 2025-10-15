import { useState } from "react";
import { Target, Crosshair, Eye, Download, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const mockDetections = [
  { id: 1, type: "Submarine", confidence: 94, x: 45, y: 60, timestamp: "12:31:22" },
  { id: 2, type: "Mine", confidence: 89, x: 75, y: 30, timestamp: "12:31:18" },
  { id: 3, type: "Diver", confidence: 76, x: 20, y: 80, timestamp: "12:31:15" },
];

export default function Detection() {
  const [showOverlays, setShowOverlays] = useState(true);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "confidence-high";
    if (confidence >= 70) return "confidence-medium";
    return "confidence-low";
  };

  return (
    <div className="p-6 space-y-6 underwater-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-primary mb-2">
            THREAT DETECTION ANALYSIS
          </h1>
          <p className="text-muted-foreground">
            AI-powered object detection and classification results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Enhanced Image Display */}
          <div className="lg:col-span-2">
            <Card className="underwater-bg border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-tactical text-primary flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    ENHANCED SURVEILLANCE
                  </CardTitle>
                  <CardDescription>
                    AI-processed underwater imagery with threat overlays
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={showOverlays}
                    onCheckedChange={setShowOverlays}
                  />
                  <span className="text-sm font-tactical">Detection Overlays</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative bg-ocean-medium rounded-lg overflow-hidden aspect-video">
                  {/* Simulated underwater image background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-teal-900/50 radar-grid opacity-30"></div>
                  
                  {/* Detection overlays */}
                  {showOverlays && mockDetections.map((detection) => (
                    <div
                      key={detection.id}
                      className="absolute detection-box"
                      style={{
                        left: `${detection.x}%`,
                        top: `${detection.y}%`,
                        width: '80px',
                        height: '60px',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="absolute -top-8 left-0 bg-card border border-border rounded px-2 py-1">
                        <span className="text-xs font-tactical text-primary">
                          {detection.type} {detection.confidence}%
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="absolute bottom-4 left-4 text-primary font-tactical">
                    SECTOR: ALPHA-7 | DEPTH: 25M | TIME: 12:31:22
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="btn-tactical">
                      <Crosshair className="h-4 w-4 mr-2" />
                      Calibrate
                    </Button>
                    <Button variant="outline" size="sm" className="btn-tactical">
                      <Target className="h-4 w-4 mr-2" />
                      Track Objects
                    </Button>
                  </div>
                  <Button className="btn-tactical glow-teal">
                    <Download className="h-4 w-4 mr-2" />
                    Export Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detection Alerts Panel */}
          <div>
            <Card className="underwater-bg border-border">
              <CardHeader>
                <CardTitle className="font-tactical text-primary flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  ACTIVE THREATS
                </CardTitle>
                <CardDescription>
                  Real-time detection alerts and confidence scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDetections.map((detection) => (
                    <div 
                      key={detection.id}
                      className="border border-border rounded-lg p-3 bg-card/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-tactical text-sm text-primary">
                          {detection.type.toUpperCase()}
                        </span>
                        <Badge className={getConfidenceColor(detection.confidence)}>
                          {detection.confidence}%
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p>Time: {detection.timestamp}</p>
                        <p>Position: {detection.x}%, {detection.y}%</p>
                        <p>Status: Active tracking</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="font-tactical text-sm">CRITICAL ALERT</span>
                  </div>
                  <p className="text-xs text-destructive/80 mt-1">
                    Mine detected at 94% confidence - Immediate action required
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}