/** ====== REACT ROUTER ====== */
import { useParams, Link } from 'react-router-dom';

/** ====== CUSTOM COMPONENTS ====== */
import { Button } from '@/components/ui/button';

/** ====== ICONS ====== */
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';

/** ====== HOOKS ====== */
import { useCMS } from '@/hooks/useCMS';
import LoadingPage from './LoadingPage';

const EventDetailsPage = () => {
    const { events, loading } = useCMS();
    const { id } = useParams<{ id: string; }>();

    const event = events.find((e) => e._id === id);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
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
    if (loading) return <LoadingPage />;
    if (!event) {
        return (
            <section className="py-16 md:py-24 bg-beige-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                        Event Not Found
                    </h2>
                    <p className="text-lg text-ink-600 mb-8">
                        Sorry, we couldn't find the event you're looking for.
                    </p>
                    <Button asChild variant="primary" size="lg">
                        {/* Adjust the `to` prop for your router. For Next.js, use `href`. */}
                        <Link to="/#events">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Events
                        </Link>
                    </Button>
                </div>
            </section>
        );
    }
    console.log(event.imageUrl);
    const spotsLeft = event.capacity - event.registered;

    return (
        <section id="event-details" className="py-16 md:py-24 bg-beige-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Button asChild variant="outline" size="sm">
                            <Link to="/#events">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                All Events
                            </Link>
                        </Button>
                    </div>

                    <div className="bg-card rounded-card shadow-card border border-beige-200 overflow-hidden">
                        {/* You could add an event image here if your CMS provides one */}
                        {event.imageUrl && (<img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />)}

                        <div className="p-6 md:p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`px-3 py-1 rounded-full text-xs font-body font-medium ${getCategoryColor(event.category)}`}>
                                    {event.category}
                                </div>
                                {event.featured && (
                                    <div className="bg-gold-100 text-gold-500 px-2 py-1 rounded-full text-xs font-body font-medium">
                                        Featured
                                    </div>
                                )}
                            </div>

                            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                                {event.title}
                            </h1>

                            {/* Event Meta Data */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8 text-ink-600 border-b border-beige-200 pb-6">
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-5 h-5 text-green-500" />
                                    <span className="font-body font-semibold">{formatDate(event.date)}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Clock className="w-5 h-5 text-green-500" />
                                    <span className="font-body font-semibold tabular-nums">
                                        {formatTime(event.time)} – {formatTime(event.endTime)}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-green-500" />
                                    <span className="font-body font-semibold">{event.location}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Users className="w-5 h-5 text-green-500" />
                                    <span className="font-body font-semibold">
                                        {event.registered} / {event.capacity} registered
                                    </span>
                                </div>
                            </div>

                            {/* Event Description */}
                            <div className="prose prose-green max-w-none font-body text-ink-700">
                                <h3 className="font-heading text-xl font-semibold text-foreground">About this event</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>

                        {/* Registration Footer */}
                        <div className="px-6 md:px-8 py-6 bg-green-50 border-t border-beige-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-lg font-semibold text-green-800">
                                    {spotsLeft > 0 ? `${spotsLeft} spots left!` : 'Event is full'}
                                </div>
                                <a href={spotsLeft > 0 && event.registrationLink ? event.registrationLink : '#'}>
                                    <Button variant="primary" size="lg" disabled={spotsLeft <= 0} className="w-full sm:w-auto">
                                        {spotsLeft > 0 ? 'Register Now' : 'Registration Closed'}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetailsPage;

