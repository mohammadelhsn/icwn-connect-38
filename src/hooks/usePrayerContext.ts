import { createContext, useContext } from 'react';
import type { PrayerContextValue } from '@/lib/types';

export const PrayerTimesContext = createContext<PrayerContextValue | undefined>(
	undefined
);

export function usePrayerTimes() {
	const ctx = useContext(PrayerTimesContext);
	if (!ctx)
		throw new Error('usePrayerTimes must be used within PrayerTimesProvider');
	return ctx;
}
