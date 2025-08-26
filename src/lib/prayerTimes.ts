import axios from 'axios';
import { format, isAfter, parse } from 'date-fns';

export interface PrayerTimes {
	/** The name of the prayer, (e.g. Fajr) */
	name: string;
	/** The time of the prayer in string format */
	time: string;
	/** Whether it is the next prayer */
	next: boolean;
	/** Whether it is the current */
	current: boolean;
}

/** The school for calculation */
type School = 'Shafi' | 'Hanafi';

/** Format the school for the API req */
export const formatSchool = (school: School) => (school === 'Shafi' ? 0 : 1);

/**
 *
 * @param times Fetched times
 * @returns
 */
function markNextAndCurrentPrayer(times: PrayerTimes[]): PrayerTimes[] {
	const now = new Date();
	times.forEach((t) => {
		t.next = false;
		t.current = false;
	});

	// Find the next prayer (first time after now)
	const upcomingIndex = times.findIndex((prayer) => {
		const prayerTime = parse(prayer.time, 'HH:mm', now);
		return isAfter(prayerTime, now);
	});

	if (upcomingIndex !== -1) {
		times[upcomingIndex].next = true;

		// Current prayer is the one before it
		const currentIndex = (upcomingIndex - 1 + times.length) % times.length;
		times[currentIndex].current = true;
	} else {
		// If no upcoming prayer today, Fajr tomorrow is next, Isha is current
		times[0].next = true;
		times[times.length - 1].current = true;
	}

	return times;
}

/**
 *
 * @param city The City for prayer time fetch
 * @param country The Country for the prayer time fetch
 * @param school The school (Hanafi, Shafi)
 * @returns
 */
export async function fetchPrayerTimes(
	city: string,
	country: string,
	school: School
) {
	const today = new Date();
	const res = await axios.get(
		`https://api.aladhan.com/v1/timingsByCity/${format(
			today,
			'dd-MM-yyyy'
		)}?city=${city}&country=${country}&method=2&school=${formatSchool(school)}`
	);
	const data = res.data;
	if (!data || (data.status !== 200 && data.status !== 'OK')) return null;

	const timings = data.data.timings;
	const times: PrayerTimes[] = [
		{ name: 'Fajr', time: timings.Fajr, next: false, current: false },
		{ name: 'Sunrise', time: timings.Sunrise, next: false, current: false },
		{ name: 'Duhur', time: timings.Dhuhr, next: false, current: false },
		{ name: 'Asr', time: timings.Asr, next: false, current: false },
		{ name: 'Maghrib', time: timings.Maghrib, next: false, current: false },
		{ name: 'Isha', time: timings.Isha, next: false, current: false },
	];

	return markNextAndCurrentPrayer(times);
}

/**
 *
 * @param is24Hour
 * @param time24
 * @returns
 */
export const formatTime = (is24Hour: boolean, time24: string) => {
	if (is24Hour) return time24;

	const [hours, minutes] = time24.split(':');
	const hour = parseInt(hours);
	const ampm = hour >= 12 ? 'PM' : 'AM';
	const displayHour = hour % 12 || 12;
	return `${displayHour}:${minutes} ${ampm}`;
};
