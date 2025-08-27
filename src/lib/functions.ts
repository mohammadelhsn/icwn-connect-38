export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
	});
};

export const formatTime = (time: string) => {
	const [hours, minutes] = time.split(':');
	const hour = parseInt(hours);
	const ampm = hour >= 12 ? 'PM' : 'AM';
	const displayHour = hour % 12 || 12;
	return `${displayHour}:${minutes} ${ampm}`;
};

export const getCategoryColor = (category: string) => {
	switch (category) {
		case 'Prayer':
			return 'bg-green-700 text-white';
		case 'Education':
			return 'bg-info text-white';
		case 'Community':
			return 'bg-gold-500 text-white';
		default:
			return 'bg-ink-600 text-white';
	}
};
