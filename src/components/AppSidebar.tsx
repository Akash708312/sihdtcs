import { 
  Home, 
  Upload, 
  Target, 
  BarChart3, 
  AlertTriangle, 
  Info,
  Radar,
  Shield
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { 
    title: "Command Center", 
    url: "/", 
    icon: Home,
    description: "Mission overview & system status"
  },
  { 
    title: "Upload & Process", 
    url: "/upload", 
    icon: Upload,
    description: "Image/video processing pipeline" 
  },
  { 
    title: "Threat Detection", 
    url: "/detection", 
    icon: Target,
    description: "AI detection results & analysis"
  },
  { 
    title: "Metrics & Analysis", 
    url: "/metrics", 
    icon: BarChart3,
    description: "Performance metrics & reports"
  },
  { 
    title: "System Logs", 
    url: "/logs", 
    icon: AlertTriangle,
    description: "Activity logs & alerts"
  },
  { 
    title: "Mission Brief", 
    url: "/about", 
    icon: Info,
    description: "System overview & capabilities"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 border-l-2 border-primary glow-hud angular-cut" 
      : "hover:bg-primary/5 border-l-2 border-transparent angular-cut transition-all duration-200";

  return (
    <Sidebar
      className={`tactical-bg border-r-2 border-primary/20 ${collapsed ? "w-16" : "w-64"}`}
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b-2 border-primary/20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" />
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="h-10 w-10 text-primary animate-pulse-hud" />
            <div className="absolute inset-0 animate-pulse-hud">
              <Shield className="h-10 w-10 text-primary/30" />
            </div>
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-display text-sm text-primary leading-tight">DEFENSE AI</h2>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Tactical Command</p>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupLabel className="font-tactical text-primary text-[10px] mb-3 flex items-center">
            <Radar className="h-3 w-3 mr-2 animate-radar-sweep" />
            {!collapsed && "OPERATIONS"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <div className="flex items-center gap-3 p-2 w-full">
                        <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        {!collapsed && (
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-tactical text-[11px] truncate">{item.title}</span>
                            <span className="text-[9px] text-muted-foreground font-mono truncate">
                              {item.description}
                            </span>
                          </div>
                        )}
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}