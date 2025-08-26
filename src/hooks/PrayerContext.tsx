/** ====== REACT ====== */
import { useEffect, useState, type FC, type ReactNode } from 'react';

/** ====== FUNCTIONS & TYPES ====== */
import { fetchPrayerTimes, PrayerTimes } from '@/lib/prayerTimes';
import { type School, PrayerTimesContext } from './usePrayerContext';

const PrayerTimesProvider: FC<{ children: ReactNode; }> = ({ children }) => {
    const [prayerTimes, setPrayerTimes] = useState<PrayerTimes[] | null>(null);
    const [school, setSchool] = useState<School>('Hanafi');
    const [is24Hour, setIs24Hour] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetchPrayerTimes('Beamsville', 'Canada', school).then(times => {
                setPrayerTimes(times);
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [school]);

    const nextPrayer = prayerTimes?.find(p => p.next) || null;
    const currentPrayer = prayerTimes?.find(p => p.current) || null;

    return (
        <PrayerTimesContext.Provider value={{ prayerTimes, nextPrayer, currentPrayer, school, setSchool, is24Hour, setIs24Hour, loading }}>
            {children}
        </PrayerTimesContext.Provider>
    );
};


export default PrayerTimesProvider;