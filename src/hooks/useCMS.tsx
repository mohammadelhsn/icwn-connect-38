import { type CMSContextValue } from '@/lib/types';
import { createContext, useContext } from 'react';

export const CMSContext = createContext<CMSContextValue | null>(null);

export function useCMS() {
    const ctx = useContext(CMSContext);
    if (!ctx) throw new Error("Must be used within the provider");
    return ctx;
}