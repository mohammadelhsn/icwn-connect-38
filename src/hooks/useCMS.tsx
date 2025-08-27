import { Announcement, Event } from '@/lib/types';
import { createContext, useContext } from 'react';

interface CMSContextValue {
    /** The announcements data */
    announcements: Announcement[];
    /** The events data */
    events: Event[];
    /** Whether the content from CMS is loading */
    loading: boolean;
}

export const CMSContext = createContext<CMSContextValue | null>(null);

export function useCMS() {
    const ctx = useContext(CMSContext);
    if (!ctx) throw new Error("Must be used within the provider");
    return ctx;
}