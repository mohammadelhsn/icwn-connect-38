import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCMS } from '@/hooks/useCMS';
import { Link } from 'react-router-dom';

const EventsSection = () => {
  const { events } = useCMS();
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
                key={event._id}
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
                    <Button asChild variant="outline" size="sm" className="text-xs">
                      <Link to={`/events/${event._id}`}>
                        Details
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events Button */}
          <div className="text-center">
            <Button asChild variant="primary" size="lg">
              <Link to="/events">
                View All Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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