/** ====== REACT ====== */
import { useEffect, useState } from 'react';

/** ====== FUNCTIONS ====== */
import { getAnnouncements, getEvents } from '@/lib/sanity';
import { CMSContext } from './useCMS';

export interface Announcement {
    /** The id of the announcement */
    _id: string;
    /** The title of the announcement */
    title: string;
    /** The date */
    date: string;
    /** The poster */
    author?: string;
    /** Short brief of the announcement for card */
    snippet?: string;
    /** The content supporting rich text */
    content: Array<{
        _key: string;
        _type: 'block';
        children: Array<{
            _key: string;
            _type: 'span';
            text: string;
            marks: string[];
        }>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        markDefs: any[];
        style: string;
    }>;
    /** The image URL (if applicable) */
    imageUrl?: string;
}

export interface Event {
    /** The Id of the event */
    _id: string;
    /** The title of the event */
    title: string;
    /** The date of the event */
    date: string;
    /** The start time of the event */
    time: string;
    /** The end time of the event */
    endTime: string;
    /** The location of the event */
    location: string;
    /** The description of the event */
    description?: string;
    /** The maximum amount of people to register */
    capacity?: number;
    /** The amount already registered */
    registered?: number;
    /** The category of the event, (more can be added later) */
    category?: 'Prayer' | 'Education' | 'Community';
    /** Whether it show as featured, (more emphasis) */
    featured: boolean;
    /** The registration link for the event */
    registrationLink?: string;
    /** The image to show on the detail page */
    imageUrl?: string;
}

export function CMSProvider({ children }) {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        try {
            getAnnouncements().then(setAnnouncements);
            getEvents().then(setEvents);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <CMSContext.Provider value={{ announcements, events, loading }}>
            {children}
        </CMSContext.Provider>
    );
}