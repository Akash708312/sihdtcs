import { useState } from "react";
import { Upload as UploadIcon, Camera, Play, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export default function Upload() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate processing pipeline
    const steps = ['Upload', 'AI Enhancement', 'Threat Detection', 'Results'];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setProgress((index + 1) * 25);
        if (index === steps.length - 1) {
          setIsProcessing(false);
          toast({
            title: "Processing Complete",
            description: "Image enhancement and threat detection completed successfully.",
          });
        }
      }, (index + 1) * 1500);
    });
  };

  return (
    <div className="p-6 space-y-6 underwater-bg">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-primary mb-2">
            UPLOAD & PROCESSING PIPELINE
          </h1>
          <p className="text-muted-foreground">
            Deploy AI-powered underwater image enhancement and threat detection systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Zone */}
          <Card className="underwater-bg border-border">
            <CardHeader>
              <CardTitle className="font-tactical text-primary flex items-center gap-2">
                <UploadIcon className="h-5 w-5" />
                MISSION FILES
              </CardTitle>
              <CardDescription>
                Upload underwater images or videos for AI processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => document.getElementById('file-input')?.click()}
              >
                <UploadIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
                <p className="text-sm text-muted-foreground">
                  Supports: JPG, PNG, MP4, AVI (max 100MB)
                </p>
                <input
                  id="file-input"
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Live Feed Option */}
          <Card className="underwater-bg border-border">
            <CardHeader>
              <CardTitle className="font-tactical text-primary flex items-center gap-2">
                <Camera className="h-5 w-5" />
                LIVE SURVEILLANCE
              </CardTitle>
              <CardDescription>
                Connect to real-time camera feeds for continuous monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full btn-tactical" size="lg">
                <Play className="h-4 w-4 mr-2" />
                Connect Live Feed
              </Button>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• RTSP Stream Support</p>
                <p>• WebRTC Integration</p>
                <p>• Real-time Processing</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Processing Pipeline */}
        {isProcessing && (
          <Card className="underwater-bg border-border mt-6">
            <CardHeader>
              <CardTitle className="font-tactical text-primary flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 animate-pulse" />
                PROCESSING PIPELINE ACTIVE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progress} className="w-full" />
                <div className="grid grid-cols-4 gap-4">
                  {['Upload', 'AI Enhancement', 'Threat Detection', 'Results'].map((step, index) => (
                    <div 
                      key={step}
                      className={`text-center p-3 rounded border ${
                        progress > index * 25 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      <div className="font-tactical text-sm">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}