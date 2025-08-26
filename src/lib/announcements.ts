import { Announcement } from '@/components/AnnouncementCard';

export const mockAnnouncements: Announcement[] = [
	{
		id: 1,
		title: "Special Guest Speaker for Friday's Khutbah",
		date: 'October 27, 2023',
		author: 'ICWN Admin',
		snippet:
			"We are honored to host a special guest speaker for this Friday's Khutbah. The topic will be 'The Importance of Community in Islam'. All are welcome to attend and benefit from the knowledge.",
		content:
			"We are honored to host a special guest speaker for this Friday's Khutbah. The topic will be 'The Importance of Community in Islam'. All are welcome to attend and benefit from the knowledge.<br /><br />The session will be held after the Jummah prayer and will last for approximately 45 minutes. Light refreshments will be served. Please make an effort to attend this enlightening session.",
	},
	{
		id: 2,
		title: 'Community Potluck Dinner - November 4th',
		date: 'October 25, 2023',
		author: 'Events Committee',
		snippet:
			'Join us for our monthly community potluck dinner! It’s a great opportunity to meet new people, enjoy delicious food, and strengthen our bonds. Please bring a dish to share.',
		content:
			'Join us for our monthly community potluck dinner! It’s a great opportunity to meet new people, enjoy delicious food, and strengthen our bonds. Please bring a dish to share.<br /><br />The event will start at 7:00 PM in the main hall. We encourage families to come and participate. This is a great way to build a stronger community together.',
	},
	{
		id: 3,
		title: 'Youth Quran Competition Registration Now Open',
		date: 'October 22, 2023',
		author: 'Youth Committee',
		snippet:
			'Registration for the annual Youth Quran Competition is now open for ages 7-18. This is a wonderful chance for our youth to engage with the Quran. See the office for details.',
		content:
			'Registration for the annual Youth Quran Competition is now open for ages 7-18. This is a wonderful chance for our youth to engage with the Quran.<br /><br />The competition will have multiple categories based on age and memorization level. Prizes will be awarded to the top participants. Please register at the office by November 10th. For more details, contact the Youth Committee.',
	},
	{
		id: 4,
		title: 'Winter Coat Drive for the Needy',
		date: 'October 20, 2023',
		author: 'Charity Committee',
		snippet:
			'As winter approaches, we are collecting new or gently used winter coats for those in need in our wider community. Donation boxes are available at the entrance. JazakAllah Khair.',
		content:
			'As winter approaches, we are collecting new or gently used winter coats for those in need in our wider community. Donation boxes are available at the entrance of the mosque until the end of the month.<br /><br />Your contributions will be distributed to local shelters and families in need. JazakAllah Khair for your generosity.',
	},
];
