import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PrayerTimesSection from '@/components/PrayerTimesSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PrayerTimesSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
