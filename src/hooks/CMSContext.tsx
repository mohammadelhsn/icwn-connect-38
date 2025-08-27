/** ====== REACT ====== */
import { useEffect, useState } from 'react';

/** ====== FUNCTIONS ====== */
import { getAnnouncements, getEvents } from '@/lib/sanity';
import { CMSContext } from './useCMS';
import { Announcement, Event } from '@/lib/types';


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