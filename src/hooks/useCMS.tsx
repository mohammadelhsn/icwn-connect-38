import { createContext, useContext } from 'react';
import { Announcement, Event } from './CMSContext';

interface CMSContextValue {
    announcements: Announcement[];
    events: Event[];
}

export const CMSContext = createContext<CMSContextValue | null>(null);

export function useCMS() {
    const ctx = useContext(CMSContext);
    if (!ctx) throw new Error("Must be used within the provider");
    return ctx;
}