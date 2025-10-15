import { BarChart3, TrendingUp, Download, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const metrics = [
  { name: "PSNR", before: 24.5, after: 32.8, unit: "dB", improvement: 33.9 },
  { name: "SSIM", before: 0.72, after: 0.89, unit: "", improvement: 23.6 },
  { name: "UIQM", before: 1.84, after: 2.67, unit: "", improvement: 45.1 },
  { name: "UCIQE", before: 0.58, after: 0.79, unit: "", improvement: 36.2 },
];

const detectionStats = [
  { type: "Submarine", detected: 12, accuracy: 94.2 },
  { type: "Mine", detected: 8, accuracy: 89.1 },
  { type: "Diver", detected: 15, accuracy: 76.8 },
  { type: "Drone", detected: 6, accuracy: 82.4 },
];

export default function Metrics() {
  return (
    <div className="p-6 space-y-6 underwater-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-primary mb-2">
            METRICS & ANALYSIS
          </h1>
          <p className="text-muted-foreground">
            Performance analytics and enhancement quality metrics
          </p>
        </div>

        {/* Enhancement Metrics */}
        <Card className="underwater-bg border-border mb-6">
          <CardHeader>
            <CardTitle className="font-tactical text-primary flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              IMAGE ENHANCEMENT METRICS
            </CardTitle>
            <CardDescription>
              Before vs After AI enhancement quality measurements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric.name} className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-tactical text-primary text-lg">{metric.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {metric.name === "PSNR" && "Peak Signal-to-Noise Ratio"}
                      {metric.name === "SSIM" && "Structural Similarity Index"}
                      {metric.name === "UIQM" && "Underwater Image Quality"}
                      {metric.name === "UCIQE" && "Underwater Color Enhancement"}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Before:</span>
                      <span>{metric.before}{metric.unit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>After:</span>
                      <span className="text-primary font-medium">{metric.after}{metric.unit}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Improvement</span>
                      <span className="text-green-400">+{metric.improvement}%</span>
                    </div>
                    <Progress value={metric.improvement} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Detection Performance */}
          <Card className="underwater-bg border-border">
            <CardHeader>
              <CardTitle className="font-tactical text-primary flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                DETECTION PERFORMANCE
              </CardTitle>
              <CardDescription>
                AI model accuracy and object detection statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {detectionStats.map((stat) => (
                  <div key={stat.type} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-tactical text-sm">{stat.type}</span>
                      <div className="text-right">
                        <div className="text-sm font-medium">{stat.detected} detected</div>
                        <div className="text-xs text-muted-foreground">{stat.accuracy}% accuracy</div>
                      </div>
                    </div>
                    <Progress value={stat.accuracy} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Performance */}
          <Card className="underwater-bg border-border">
            <CardHeader>
              <CardTitle className="font-tactical text-primary">
                SYSTEM PERFORMANCE
              </CardTitle>
              <CardDescription>
                Processing speed and system metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 border border-border rounded">
                    <div className="text-2xl font-tactical text-primary">1.2s</div>
                    <div className="text-xs text-muted-foreground">Avg Processing Time</div>
                  </div>
                  <div className="text-center p-3 border border-border rounded">
                    <div className="text-2xl font-tactical text-primary">99.7%</div>
                    <div className="text-xs text-muted-foreground">System Uptime</div>
                  </div>
                  <div className="text-center p-3 border border-border rounded">
                    <div className="text-2xl font-tactical text-primary">847</div>
                    <div className="text-xs text-muted-foreground">Files Processed</div>
                  </div>
                  <div className="text-center p-3 border border-border rounded">
                    <div className="text-2xl font-tactical text-primary">23ms</div>
                    <div className="text-xs text-muted-foreground">Avg Latency</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <Card className="underwater-bg border-border">
          <CardHeader>
            <CardTitle className="font-tactical text-primary">
              EXPORT & REPORTING
            </CardTitle>
            <CardDescription>
              Generate comprehensive analysis reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button className="btn-tactical glow-teal">
                <Download className="h-4 w-4 mr-2" />
                Export CSV Data
              </Button>
              <Button variant="outline" className="btn-tactical">
                <FileText className="h-4 w-4 mr-2" />
                Generate PDF Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}