import { PrayerTimes } from '@/lib/prayerTimes';
import { createContext, useContext } from 'react';

export type School = 'Shafi' | 'Hanafi';

interface PrayerContextValue {
	prayerTimes: PrayerTimes[] | null;
	nextPrayer: PrayerTimes | null;
	currentPrayer: PrayerTimes | null;
	school: School;
	setSchool: (school: School) => void;
	is24Hour: boolean;
	setIs24Hour: (value: boolean) => void;
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
