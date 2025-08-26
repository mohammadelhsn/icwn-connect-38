import { PrayerTimes } from '@/lib/prayerTimes';
import { createContext, useContext } from 'react';

export type School = 'Shafi' | 'Hanafi';

interface PrayerContextValue {
	/** The prayer times for the day */
	prayerTimes: PrayerTimes[] | null;
	/** The next prayer (for highlighting) */
	nextPrayer: PrayerTimes | null;
	/** The current prayer, (for highlighting) */
	currentPrayer: PrayerTimes | null;
	/** The current school */
	school: School;
	/** Set the school for the prayer time calculation */
	setSchool: (school: School) => void;
	/** What the current time mode is */
	is24Hour: boolean;
	/** Sets which time mode it displays */
	setIs24Hour: (value: boolean) => void;
	/** Whether the API data is still loading */
	loading: boolean;
}

export const PrayerTimesContext = createContext<PrayerContextValue | undefined>(
	undefined
);

export function usePrayerTimes() {
	const ctx = useContext(PrayerTimesContext);
	if (!ctx)
		throw new Error('usePrayerTimes must be used within PrayerTimesProvider');
	return ctx;
}
