import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { type Announcement } from '@/hooks/CMSContext';
import { PortableText } from '@portabletext/react';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import { useCMS } from '@/hooks/useCMS';

const AnnouncementDetailPage = () => {
    const { announcements } = useCMS();
    const { announcementId } = useParams<{ announcementId: string; }>();
    const [announcement, setAnnouncement] = useState<Announcement | null | undefined>(undefined);
    useEffect(() => {
        const foundAnnouncement = announcements.find(
            (a) => a._id === announcementId
        );
        setAnnouncement(foundAnnouncement || null);
    }, [announcements, announcementId]);
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
                    <div className="prose prose-lg max-w-none font-body text-ink-700 leading-relaxed">
                        <PortableText value={announcement.content} />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default AnnouncementDetailPage;
