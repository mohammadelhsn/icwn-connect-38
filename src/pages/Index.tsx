import HeroSection from '@/components/HeroSection';
import PrayerTimesSection from '@/components/PrayerTimesSection';
import EventsSection from '@/components/EventsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <PrayerTimesSection />
        <EventsSection />
      </main>
    </div>
  );
};

export default Index;
