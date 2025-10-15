import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Bell, Power, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full tactical-bg scanlines">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header - Defense Style */}
          <header className="h-14 border-b-2 border-primary/20 bg-tactical-dark/90 backdrop-blur-sm relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="btn-tactical h-8 px-3" />
                <div className="font-display text-primary text-sm tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-blink" />
                  DEFENSE TACTICAL COMMAND SYSTEM
                  <span className="text-xs font-mono text-muted-foreground ml-2">v2.4.1</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="font-mono text-xs text-primary mr-4">
                  {new Date().toLocaleTimeString('en-US', { hour12: false })}
                </div>
                <Button size="icon" className="btn-tactical h-8 w-8">
                  <Bell className="h-3 w-3" />
                </Button>
                <Button 
                  size="icon" 
                  className="btn-tactical h-8 w-8"
                  onClick={() => navigate('/login')}
                >
                  <User className="h-3 w-3" />
                </Button>
                <Button size="icon" className="btn-tactical h-8 w-8 border-red-500/30 text-red-500 hover:border-red-500">
                  <Power className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}