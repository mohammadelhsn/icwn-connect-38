import { Box } from '@mui/material';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PrayerTimesSection from '@/components/PrayerTimesSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navigation />
      <Box component="main">
        <HeroSection />
        <PrayerTimesSection />
        <EventsSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;