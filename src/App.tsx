// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MeetingOverlap from "./pages/MeetingOverlap";
import Schengen90180 from "./pages/Schengen90180";
import ShiftHelper from "./pages/ShiftHelper";
import About from "./pages/About";
import AdSlot from "@/components/ads/AdSlot";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="mx-auto max-w-7xl px-4">
            {/* Content + right rail (like calculator.net) */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_352px] gap-6 mt-4">
              <main className="min-w-0">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/meeting-overlap" element={<MeetingOverlap />} />
                  <Route path="/schengen-90-180" element={<Schengen90180 />} />
                  <Route path="/shift-helper" element={<ShiftHelper />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              {/* Desktop-only sticky 336×280 ad */}
              <aside className="hidden lg:block">
                <div className="sticky top-4">
                  <AdSlot slot="YOUR_DESKTOP_SLOT_ID" />
                </div>
              </aside>
            </div>

            {/* Mobile-only responsive unit below content */}
            <div className="block lg:hidden mt-6">
              <AdSlot slot="YOUR_MOBILE_SLOT_ID" responsive />
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
