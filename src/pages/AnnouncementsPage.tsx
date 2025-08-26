import { useState } from 'react';
import AnnouncementCard from '@/components/AnnouncementCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useCMS } from '@/hooks/useCMS';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AnnouncementsPage = () => {
    const { announcements } = useCMS();
    const [isLoading, setLoading] = useState(false);
    if (announcements.length == 0) return <LoadingSpinner />;
    return (
        <div className="bg-gradient-to-br from-green-50 to-beige-50 min-h-screen py-32">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Button asChild variant="ghost" className="text-ink-600 hover:text-green-700">
                        <Link to="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Main Page
                        </Link>
                    </Button>
                </div>
                <div className="text-center mb-12">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">Community Announcements</h1>
                    <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto font-body">Stay up-to-date with the latest news and important information from the ICWN.</p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64"><LoadingSpinner className="w-12 h-12" /></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{announcements.map((announcement) => (<AnnouncementCard key={announcement.title} announcement={announcement} />))}</div>
                )}
            </div>
        </div>
    );
};

export default AnnouncementsPage;