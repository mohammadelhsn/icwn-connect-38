import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Announcement } from '@/components/AnnouncementCard';
import { mockAnnouncements } from '@/lib/announcements';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';

const AnnouncementDetailPage = () => {
    const { announcementId } = useParams<{ announcementId: string; }>();
    const [announcement, setAnnouncement] = useState<Announcement | null | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // In a real app, you would fetch the specific announcement from your API
        // e.g., fetch(`/api/announcements/${announcementId}`)
        setTimeout(() => {
            const foundAnnouncement = mockAnnouncements.find(
                (a) => a.id.toString() === announcementId
            );
            setAnnouncement(foundAnnouncement || null);
            setIsLoading(false);
        }, 300); // Simulate network delay
    }, [announcementId]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <LoadingSpinner className="w-12 h-12" />
            </div>
        );
    }

    if (!announcement) {
        return <NotFound />;
    }

    return (
        <div className="bg-gradient-to-br from-green-50 to-beige-50 py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <Button asChild variant="ghost" className="text-ink-600 hover:text-green-700">
                        <Link to="/announcements">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Announcements
                        </Link>
                    </Button>
                </div>
                <article className="bg-background/90 backdrop-blur-sm rounded-card p-8 md:p-12 shadow-card border border-green-100/50">
                    <header className="mb-8 border-b border-green-100 pb-6">
                        <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">{announcement.title}</h1>
                        <div className="flex flex-wrap items-center text-md text-ink-500 space-x-6 font-body">
                            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2" /><span>{announcement.date}</span></div>
                            <div className="flex items-center"><User className="w-5 h-5 mr-2" /><span>by {announcement.author}</span></div>
                        </div>
                    </header>
                    <div className="prose prose-lg max-w-none font-body text-ink-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: announcement.content }} />
                </article>
            </div>
        </div>
    );
};

export default AnnouncementDetailPage;
