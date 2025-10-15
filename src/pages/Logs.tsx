import { useState } from "react";
import { AlertTriangle, CheckCircle, Clock, Filter, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockLogs = [
  {
    id: 1,
    timestamp: "2024-01-15 12:31:22",
    type: "critical",
    category: "Mine",
    message: "Mine detected at 94% confidence in sector Alpha-7",
    acknowledged: false,
    thumbnail: "🎯"
  },
  {
    id: 2,
    timestamp: "2024-01-15 12:31:18",
    type: "warning",
    category: "Submarine",
    message: "Submarine signature detected at 89% confidence",
    acknowledged: true,
    thumbnail: "🚢"
  },
  {
    id: 3,
    timestamp: "2024-01-15 12:31:15",
    type: "info",
    category: "Diver",
    message: "Human diver detected - possible friendly activity",
    acknowledged: true,
    thumbnail: "🤿"
  },
  {
    id: 4,
    timestamp: "2024-01-15 12:30:45",
    type: "success",
    category: "System",
    message: "Image enhancement completed successfully",
    acknowledged: true,
    thumbnail: "✅"
  },
  {
    id: 5,
    timestamp: "2024-01-15 12:30:12",
    type: "critical",
    category: "Drone",
    message: "Unidentified underwater drone detected",
    acknowledged: false,
    thumbnail: "🚁"
  },
];

export default function Logs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const getLogTypeColor = (type: string) => {
    switch (type) {
      case "critical": return "bg-destructive/10 border-destructive/30 text-destructive";
      case "warning": return "bg-yellow-400/10 border-yellow-400/30 text-yellow-400";
      case "success": return "bg-green-400/10 border-green-400/30 text-green-400";
      default: return "bg-card border-border text-foreground";
    }
  };

  const filteredLogs = mockLogs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || log.category.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6 underwater-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-primary mb-2">
            SYSTEM LOGS & ALERTS
          </h1>
          <p className="text-muted-foreground">
            Real-time activity monitoring and threat alert management
          </p>
        </div>

        {/* Controls */}
        <Card className="underwater-bg border-border mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search logs and alerts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-input border-border"
                />
              </div>
              <div className="flex gap-2">
                {["all", "mine", "submarine", "diver", "drone", "system"].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter)}
                    className="btn-tactical"
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="underwater-bg border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-tactical text-destructive">2</div>
              <div className="text-sm text-muted-foreground">Critical Alerts</div>
            </CardContent>
          </Card>
          <Card className="underwater-bg border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-tactical text-yellow-400">1</div>
              <div className="text-sm text-muted-foreground">Warnings</div>
            </CardContent>
          </Card>
          <Card className="underwater-bg border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-tactical text-green-400">1</div>
              <div className="text-sm text-muted-foreground">Success</div>
            </CardContent>
          </Card>
          <Card className="underwater-bg border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-tactical text-primary">847</div>
              <div className="text-sm text-muted-foreground">Total Events</div>
            </CardContent>
          </Card>
        </div>

        {/* Log Entries */}
        <Card className="underwater-bg border-border">
          <CardHeader>
            <CardTitle className="font-tactical text-primary flex items-center gap-2">
              <Clock className="h-5 w-5" />
              ACTIVITY TIMELINE
            </CardTitle>
            <CardDescription>
              Chronological log of all system activities and detections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className={`border rounded-lg p-4 ${getLogTypeColor(log.type)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{log.thumbnail}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="font-tactical text-xs">
                            {log.category.toUpperCase()}
                          </Badge>
                          <span className="text-xs font-mono text-muted-foreground">
                            {log.timestamp}
                          </span>
                        </div>
                        <p className="text-sm font-medium">{log.message}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {log.acknowledged ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : (
                        <Button size="sm" variant="outline" className="btn-tactical">
                          Acknowledge
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredLogs.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No logs found matching your search criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}