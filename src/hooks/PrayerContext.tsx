import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchPrayerTimes, PrayerTimes } from '@/lib/prayerTimes';
import { type School, PrayerTimesContext } from './usePrayerContext';


export const PrayerTimesProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    const [prayerTimes, setPrayerTimes] = useState<PrayerTimes[] | null>(null);
    const [school, setSchool] = useState<School>('Hanafi');
    const [is24Hour, setIs24Hour] = useState(false);

    useEffect(() => {
        fetchPrayerTimes('Beamsville', 'Canada', school).then(times => {
            setPrayerTimes(times);
        });
    }, [school]);

    const nextPrayer = prayerTimes?.find(p => p.next) || null;
    const currentPrayer = prayerTimes?.find(p => p.current) || null;

    return (
        <PrayerTimesContext.Provider value={{ prayerTimes, nextPrayer, currentPrayer, school, setSchool, is24Hour, setIs24Hour }}>
            {children}
        </PrayerTimesContext.Provider>
    );
};
