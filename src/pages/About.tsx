import { Shield, Target, Waves, Zap, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-maritime.jpg";

const capabilities = [
  {
    icon: Waves,
    title: "Image Enhancement",
    description: "Advanced AI algorithms correct underwater imaging issues including haze, scattering, and color distortion for crystal-clear visibility."
  },
  {
    icon: Target,
    title: "Threat Detection",
    description: "Real-time identification of submarines, mines, divers, and underwater drones with high-confidence classification and tracking."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast processing pipeline delivers results in under 2 seconds, enabling immediate tactical response to threats."
  },
  {
    icon: Shield,
    title: "Maritime Security",
    description: "Comprehensive underwater surveillance system designed for naval operations, border security, and coastal defense applications."
  }
];

const applications = [
  "Maritime Border Security",
  "Naval Reconnaissance Operations", 
  "Mine Detection & Clearance",
  "Underwater Infrastructure Protection",
  "Anti-Submarine Warfare",
  "Coastal Surveillance Networks"
];

export default function About() {
  return (
    <div className="underwater-bg">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Maritime Security AI System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-display text-5xl mb-4">MARITIME SECURITY AI</h1>
            <p className="text-xl font-tactical">
              AI-Powered Underwater Image Enhancement & Threat Detection
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <Card className="underwater-bg border-border mb-8">
            <CardHeader className="text-center">
              <CardTitle className="font-display text-3xl text-primary mb-4">
                MISSION OVERVIEW
              </CardTitle>
              <CardDescription className="text-lg max-w-4xl mx-auto">
                Our advanced AI system addresses critical challenges in underwater surveillance by enhancing image quality 
                and providing real-time threat detection capabilities for maritime security operations. Designed for naval 
                forces and coastal defense agencies, this system ensures superior underwater visibility and rapid threat response.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="underwater-bg border-border">
              <CardHeader>
                <CardTitle className="font-tactical text-primary text-xl">
                  THE CHALLENGE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p>Underwater imaging faces significant technical challenges:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Light scattering reduces visibility and contrast</li>
                    <li>• Water absorption causes severe color distortion</li>
                    <li>• Haze and particles obscure critical details</li>
                    <li>• Traditional detection methods lack precision</li>
                    <li>• Manual analysis is time-consuming and error-prone</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="underwater-bg border-border">
              <CardHeader>
                <CardTitle className="font-tactical text-primary text-xl">
                  OUR SOLUTION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p>Advanced AI-powered enhancement and detection:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Deep learning models restore natural colors</li>
                    <li>• Dehazing algorithms improve visibility</li>
                    <li>• Real-time object detection with 90%+ accuracy</li>
                    <li>• Automated threat classification and tracking</li>
                    <li>• Instant alert system for critical threats</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Capabilities */}
          <Card className="underwater-bg border-border mb-8">
            <CardHeader>
              <CardTitle className="font-tactical text-primary text-2xl text-center mb-6">
                SYSTEM CAPABILITIES
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                    <div className="sonar-ping">
                      <capability.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-tactical text-lg text-primary mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground text-sm">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Applications & Technical Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="underwater-bg border-border">
              <CardHeader>
                <CardTitle className="font-tactical text-primary flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  DEFENSE APPLICATIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 border border-border rounded">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="underwater-bg border-border">
              <CardHeader>
                <CardTitle className="font-tactical text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  TECHNICAL SPECIFICATIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 border border-border rounded">
                      <div className="text-lg font-tactical text-primary">&lt; 2s</div>
                      <div className="text-xs text-muted-foreground">Processing Time</div>
                    </div>
                    <div className="text-center p-3 border border-border rounded">
                      <div className="text-lg font-tactical text-primary">94%</div>
                      <div className="text-xs text-muted-foreground">Detection Accuracy</div>
                    </div>
                    <div className="text-center p-3 border border-border rounded">
                      <div className="text-lg font-tactical text-primary">4K</div>
                      <div className="text-xs text-muted-foreground">Max Resolution</div>
                    </div>
                    <div className="text-center p-3 border border-border rounded">
                      <div className="text-lg font-tactical text-primary">24/7</div>
                      <div className="text-xs text-muted-foreground">Operation Mode</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• GPU-accelerated processing pipeline</p>
                    <p>• Real-time video stream support</p>
                    <p>• Scalable cloud infrastructure</p>
                    <p>• Military-grade security protocols</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}