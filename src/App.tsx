/** REACT ROUTER */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/** CUSTOM COMPONENTS */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from './components/Footer';
import Navigation from './components/Navigation';

/** CUSTOM HOOKS */
import PrayerTimesProvider from './hooks/PrayerContext';
import { CMSProvider } from './hooks/CMSContext';

/** PAGES */
import AboutPage from './pages/AboutPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import AnnouncementDetailPage from './pages/AnnouncementDetailPage';
import ComponentTestPage from './pages/Test';
import EventDetailsPage from './pages/EventDetailsPage';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CMSProvider>
        <PrayerTimesProvider>
          <Toaster />
          <Sonner />
          <Navigation />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events/:id" element={<EventDetailsPage />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/announcements/:announcementId" element={<AnnouncementDetailPage />} />
              <Route path="/test" element={<ComponentTestPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </PrayerTimesProvider>
      </CMSProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
