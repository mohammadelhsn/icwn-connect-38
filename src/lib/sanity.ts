import { createClient } from '@sanity/client';

/**
 * The client for the CMS
 */
export const client = createClient({
	projectId: 's32hxt12',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-08-25',
});

/** The query string for the announcements */
const announcementsQuery = `*[_type == "announcement"] | order(date desc) {
  _id,
  title,
  date,
  author,
  snippet,
  content,
  "imageUrl": mainImage.asset->url
}`;

/** Fetches Announcement data from the CMS */
export async function getAnnouncements() {
	return await client.fetch(announcementsQuery);
}

/** String query */
const eventsQuery = `*[_type == "event"] | order(date asc, time asc) {
  _id,
  title,
  date,
  time,
  endTime,
  location,
  description,
  capacity,
  registered,
  category,
  featured,
  registrationLink,
  "imageUrl": mainImage.asset->url
}`;

/** Gets the events from the CMS */
export async function getEvents() {
	return await client.fetch(eventsQuery);
}
