import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Upload from "./pages/Upload";
import Detection from "./pages/Detection";
import Metrics from "./pages/Metrics";
import Logs from "./pages/Logs";
import About from "./pages/About";
import Login from "./pages/Login";
import Shutdown from "./pages/Shutdown";
import Startup from "./pages/Startup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Standalone routes without Layout */}
          <Route path="/shutdown" element={<Shutdown />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Routes with Layout */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/detection" element={<Detection />} />
                <Route path="/metrics" element={<Metrics />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/about" element={<About />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
