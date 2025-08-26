import { Clock, MapPin, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoadingSpinner from './LoadingSpinner';
import { usePrayerTimes } from '@/hooks/usePrayerContext';
import { formatTime } from '@/lib/prayerTimes';
import LoadingPage from '@/pages/LoadingPage';

const PrayerTimesSection = () => {
  const { school, setSchool, prayerTimes, nextPrayer, is24Hour, setIs24Hour, loading } = usePrayerTimes();
  if (loading) return <LoadingPage />;
  // TODO: Replace this with an error page */
  if (!prayerTimes) return <LoadingSpinner />;
  return (
    <section id="prayer-times" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Daily Prayer Times
            </h2>
            <p className="text-lg text-ink-600 max-w-2xl mx-auto font-body">
              Join our community for the five daily prayers. All are welcome to worship together.
            </p>
          </div>

          {/* Prayer Times Card */}
          <div className="bg-card rounded-card shadow-card border border-beige-200 overflow-hidden">
            {/* Card Header */}
            <div className="bg-green-50 px-6 py-4 border-b border-beige-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-700" />
                  <h3 className="font-heading font-semibold text-foreground">
                    Today's Prayer Schedule
                  </h3>
                </div>

                {/* Next Prayer Pill */}
                {nextPrayer && (
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-body font-medium">
                    Next: {nextPrayer.name}
                  </div>
                )}
              </div>

              {/* Location and Time Format Toggle */}
              <div className="flex items-center justify-between mt-3 text-sm text-ink-600">
                <div className="flex items-center space-x-2 ">
                  <MapPin className="w-4 h-4" />
                  <span>Eastern Time (EST)</span>
                </div>
                <div className="flex items-center">
                  <button onClick={() => setSchool(school == 'Hanafi' ? 'Shafi' : 'Hanafi')}
                    className="flex items-center space-x-2 hover:text-green-700 transition-colors duration-200 mr-2">
                    <span>{school == 'Hanafi' ? 'Hanafi' : 'Shafi'}</span>
                    {school == 'Hanafi' ? (
                      <ToggleRight className="w-5 h-5 text-green-700" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                  </button>

                  <button
                    onClick={() => setIs24Hour(!is24Hour)}
                    className="flex items-center space-x-2 hover:text-green-700 transition-colors duration-200"
                  >
                    <span>{is24Hour ? '24h' : '12h'}</span>
                    {is24Hour ? (
                      <ToggleRight className="w-5 h-5 text-green-700" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Prayer Times List */}
            <div className="p-6">
              <div className="space-y-4">
                {prayerTimes.map((prayer, index) => (
                  <div
                    key={prayer.name}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 ${prayer.current
                      ? 'bg-green-50 border border-green-200'
                      : 'hover:bg-green-50/50'
                      }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 rounded-full ${prayer.current ? 'bg-green-700' : 'bg-beige-200'
                        }`} />
                      <span className="font-body font-medium text-foreground">
                        {prayer.name}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className={`font-body font-semibold tabular-nums ${prayer.current ? 'text-green-700 text-lg' : 'text-foreground'
                        }`}>
                        {formatTime(is24Hour, prayer.time)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-beige-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-sm text-ink-600 font-body">
                    <p>Jummah (Friday Prayer): 1:30 PM</p>
                    <p>Calculation method: Islamic Society of North America (ISNA)</p>
                  </div>

                  <Button variant="outline" size="sm">
                    View Weekly Schedule
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Prayer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-beige-50 rounded-card p-6">
              <h4 className="font-heading font-semibold text-foreground mb-3">
                Prayer Guidelines
              </h4>
              <ul className="space-y-2 text-ink-600 font-body text-sm">
                <li>• Please arrive 10 minutes before prayer time</li>
                <li>• Wudu (ablution) facilities available</li>
                <li>• Prayer rugs provided</li>
                <li>• Separate prayer areas for men and women</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-card p-6">
              <h4 className="font-heading font-semibold text-foreground mb-3">
                Special Services
              </h4>
              <ul className="space-y-2 text-ink-600 font-body text-sm">
                <li>• Friday Khutbah in English and Arabic</li>
                <li>• Tarawih prayers during Ramadan</li>
                <li>• Eid celebrations</li>
                <li>• Funeral and wedding services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimesSection;