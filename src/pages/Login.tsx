import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Shield, User, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempt:", credentials);
  };

  return (
    <div className="min-h-screen flex items-center justify-center tactical-bg scanlines p-4">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 hud-grid opacity-20" />
      
      {/* Back Button */}
      <Button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 btn-tactical"
        size="sm"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        BACK
      </Button>

      <Card className="w-full max-w-md bg-tactical-surface/90 backdrop-blur-sm border-2 border-primary/30 angular-cut">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 hud-corners">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
          
          <div>
            <CardTitle className="font-display text-primary text-xl tracking-wider">
              SECURE ACCESS
            </CardTitle>
            <CardDescription className="font-mono text-xs text-muted-foreground mt-2">
              DEFENSE TACTICAL COMMAND SYSTEM
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <Label htmlFor="username" className="font-tactical text-xs text-primary">
                OPERATOR ID
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/60" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter operator ID"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="pl-10 bg-tactical-dark/50 border-primary/30 text-primary placeholder:text-muted-foreground font-mono"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="font-tactical text-xs text-primary">
                ACCESS CODE
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/60" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter access code"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="pl-10 pr-10 bg-tactical-dark/50 border-primary/30 text-primary placeholder:text-muted-foreground font-mono"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-primary/60" />
                  ) : (
                    <Eye className="h-4 w-4 text-primary/60" />
                  )}
                </Button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full btn-tactical h-12 font-display text-sm tracking-wider mt-6"
            >
              INITIATE ACCESS
            </Button>
          </form>

          {/* Security Notice */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              SECURE CONNECTION ESTABLISHED
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              Unauthorized access is prohibited and monitored
            </p>
          </div>
        </CardContent>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </Card>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
    </div>
  );
}