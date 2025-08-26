import { useState, useEffect } from 'react';
import AnnouncementCard, { Announcement } from '@/components/AnnouncementCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { mockAnnouncements } from '@/lib/announcements';

const AnnouncementsPage = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data from your CMS/API
        setTimeout(() => {
            setAnnouncements(mockAnnouncements);
            setIsLoading(false);
        }, 800);
    }, []);

    return (
        <div className="bg-gradient-to-br from-green-50 to-beige-50 min-h-screen py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">Community Announcements</h1>
                    <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto font-body">Stay up-to-date with the latest news and important information from the ICWN.</p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64"><LoadingSpinner className="w-12 h-12" /></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{announcements.map((announcement) => (<AnnouncementCard key={announcement.id} announcement={announcement} />))}</div>
                )}
            </div>
        </div>
    );
};

export default AnnouncementsPage;