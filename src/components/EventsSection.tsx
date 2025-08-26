import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  /** //? Need to make this dynamic? */
  const events = [
    {
      id: 1,
      title: 'Friday Khutbah - Community & Compassion',
      date: '2024-08-23',
      time: '12:30',
      endTime: '13:15',
      location: 'Main Prayer Hall',
      description: 'Weekly Friday prayer with sermon focusing on community building and showing compassion to our neighbors.',
      capacity: 200,
      registered: 45,
      category: 'Prayer',
      featured: true
    },
    {
      id: 2,
      title: 'Youth Quran Study Circle',
      date: '2024-08-25',
      time: '15:00',
      endTime: '16:30',
      location: 'Youth Room',
      description: 'Interactive Quran study session for youth ages 13-18. This week: Understanding Surah Al-Fatiha.',
      capacity: 25,
      registered: 18,
      category: 'Education',
      featured: false
    },
    {
      id: 3,
      title: 'Community Iftar & Fundraiser',
      date: '2024-08-28',
      time: '18:00',
      endTime: '21:00',
      location: 'Community Hall',
      description: 'Join us for a community iftar dinner followed by a presentation about our new mosque expansion project.',
      capacity: 150,
      registered: 89,
      category: 'Community',
      featured: true
    },
    {
      id: 4,
      title: 'Islamic History Lecture Series',
      date: '2024-08-30',
      time: '19:00',
      endTime: '20:30',
      location: 'Main Hall',
      description: 'Monthly lecture series exploring Islamic civilization. This month: The Golden Age of Islamic Science.',
      capacity: 80,
      registered: 32,
      category: 'Education',
      featured: false
    },
    {
      id: 5,
      title: 'Women\'s Circle - Spiritual Growth',
      date: '2024-09-01',
      time: '10:00',
      endTime: '12:00',
      location: 'Sisters\' Lounge',
      description: 'Monthly gathering for sisters to discuss spiritual growth, share experiences, and build sisterhood.',
      capacity: 30,
      registered: 22,
      category: 'Community',
      featured: false
    },
    {
      id: 6,
      title: 'Children\'s Islamic School Open House',
      date: '2024-09-05',
      time: '14:00',
      endTime: '17:00',
      location: 'Education Wing',
      description: 'Visit our weekend Islamic school, meet teachers, and learn about our curriculum for children ages 5-15.',
      capacity: 100,
      registered: 67,
      category: 'Education',
      featured: true
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Prayer':
        return 'bg-green-700 text-white';
      case 'Education':
        return 'bg-info text-white';
      case 'Community':
        return 'bg-gold-500 text-white';
      default:
        return 'bg-ink-600 text-white';
    }
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-ink-600 max-w-2xl mx-auto font-body">
              Join us for prayer, learning, and community building. Everyone is welcome to participate in our programs.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {events.map((event) => (
              <div
                key={event.id}
                className={`bg-card rounded-card shadow-card border border-beige-200 overflow-hidden transition-all duration-250 ease-smooth hover:shadow-hover hover:-translate-y-1 ${event.featured ? 'ring-2 ring-green-200' : ''
                  }`}
              >
                {/* Event Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-body font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </div>
                    {event.featured && (
                      <div className="bg-gold-100 text-gold-500 px-2 py-1 rounded-full text-xs font-body font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3 leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-ink-600 font-body text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="px-6 pb-4 space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-ink-600">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span className="font-body">
                      {formatDate(event.date)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-sm text-ink-600">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="font-body tabular-nums">
                      {formatTime(event.time)} – {formatTime(event.endTime)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-sm text-ink-600">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span className="font-body">{event.location}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-sm text-ink-600">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="font-body">
                      {event.registered} / {event.capacity} registered
                    </span>
                  </div>
                </div>

                {/* Event Footer */}
                <div className="px-6 py-4 bg-green-50 border-t border-beige-200">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-ink-600 font-body">
                      {event.capacity - event.registered} spots left
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Details
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events Button */}
          <div className="text-center">
            <Button variant="primary" size="lg">
              View All Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Event Categories Filter */}
          <div className="mt-12 bg-card rounded-card p-6 shadow-card border border-beige-200">
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Browse by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {['All Events', 'Prayer', 'Education', 'Community', 'Youth', 'Women', 'Children'].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;