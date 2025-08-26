import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 's32hxt12',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-08-25',
});

const announcementsQuery = `*[_type == "announcement"] | order(date desc) {
  _id,
  title,
  date,
  author,
  snippet,
  content,
  "imageUrl": mainImage.asset->url
}`;

export async function getAnnouncements() {
	return await client.fetch(announcementsQuery);
}

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

export async function getEvents() {
	return await client.fetch(eventsQuery);
}
