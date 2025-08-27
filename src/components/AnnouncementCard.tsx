import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnnouncementCardProps } from '@/lib/types';

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
    return (
        <Link to={`/announcements/${announcement._id}`} className="block group">
            <article className="bg-background/90 backdrop-blur-sm rounded-card p-6 shadow-card border border-green-100/50 group-hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-green-700 transition-colors">{announcement.title}</h3>
                <div className="flex items-center text-sm text-ink-500 mb-4 space-x-4 font-body">
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /><span>{announcement.date}</span></div>
                    <span>by {announcement.author}</span>
                </div>
                <p className="text-ink-600 font-body leading-relaxed flex-grow">{announcement.snippet}</p>
            </article>
        </Link>
    );
};

export default AnnouncementCard;