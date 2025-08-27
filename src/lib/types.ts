export interface Announcement {
	/** The id of the announcement */
	_id: string;
	/** The title of the announcement */
	title: string;
	/** The date */
	date: string;
	/** The poster */
	author?: string;
	/** Short brief of the announcement for card */
	snippet?: string;
	/** The content supporting rich text */
	content: Array<{
		_key: string;
		_type: 'block';
		children: Array<{
			_key: string;
			_type: 'span';
			text: string;
			marks: string[];
		}>;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		markDefs: any[];
		style: string;
	}>;
	/** The image URL (if applicable) */
	imageUrl?: string;
}

export interface Event {
	/** The Id of the event */
	_id: string;
	/** The title of the event */
	title: string;
	/** The date of the event */
	date: string;
	/** The start time of the event */
	time: string;
	/** The end time of the event */
	endTime: string;
	/** The location of the event */
	location: string;
	/** The description of the event */
	description?: string;
	/** The maximum amount of people to register */
	capacity?: number;
	/** The amount already registered */
	registered?: number;
	/** The category of the event, (more can be added later) */
	category?: 'Prayer' | 'Education' | 'Community';
	/** Whether it show as featured, (more emphasis) */
	featured: boolean;
	/** The registration link for the event */
	registrationLink?: string;
	/** The image to show on the detail page */
	imageUrl?: string;
}

export interface AnnouncementCardProps {
	announcement: Announcement;
}

export interface InfoCardItemProps {
	title: string;
	isLoading: boolean;
	children: React.ReactNode;
	className?: string;
}

export interface LoadingSpinnerProps {
	className?: string;
}

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
export type School = 'Shafi' | 'Hanafi';
