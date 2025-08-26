import { getAnnouncements, getEvents } from '@/lib/sanity';
import { useEffect, useState } from 'react';
import { CMSContext } from './useCMS';

export interface Announcement {
    _id: string;
    title: string;
    date: string;
    author?: string;
    snippet?: string;
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
    imageUrl?: string;
}

export interface Event {
    _id: string;
    title: string;
    date: string;
    time: string;
    endTime: string;
    location: string;
    description?: string;
    capacity?: number;
    registered?: number;
    category?: 'Prayer' | 'Education' | 'Community';
    featured: boolean;
    registrationLink?: string;
    imageUrl?: string;
}

export function CMSProvider({ children }) {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        getAnnouncements().then(setAnnouncements);
        getEvents().then(setEvents);
    }, []);

    return (
        <CMSContext.Provider value={{ announcements, events }}>
            {children}
        </CMSContext.Provider>
    );
}