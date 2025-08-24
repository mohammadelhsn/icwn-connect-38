import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  useTheme,
} from '@mui/material';
import {
  CalendarToday as CalendarTodayIcon,
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  Group as GroupIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { colors } from '@/theme/theme';

const EventsSection = () => {
  const theme = useTheme();

  const events = [
    {
      id: 1,
      title: 'Friday Khutbah - Community & Compassion',
      date: '2024-08-23',
      time: '12:30',
      endTime: '13:15',
      location: 'Main Prayer Hall',
      description:
        'Weekly Friday prayer with sermon focusing on community building and showing compassion to our neighbors.',
      capacity: 200,
      registered: 45,
      category: 'Prayer',
      featured: true,
    },
    {
      id: 2,
      title: 'Youth Quran Study Circle',
      date: '2024-08-25',
      time: '15:00',
      endTime: '16:30',
      location: 'Youth Room',
      description:
        'Interactive Quran study session for youth ages 13-18. This week: Understanding Surah Al-Fatiha.',
      capacity: 25,
      registered: 18,
      category: 'Education',
      featured: false,
    },
    {
      id: 3,
      title: 'Community Iftar & Fundraiser',
      date: '2024-08-28',
      time: '18:00',
      endTime: '21:00',
      location: 'Community Hall',
      description:
        'Join us for a community iftar dinner followed by a presentation about our new mosque expansion project.',
      capacity: 150,
      registered: 89,
      category: 'Community',
      featured: true,
    },
    {
      id: 4,
      title: 'Islamic History Lecture Series',
      date: '2024-08-30',
      time: '19:00',
      endTime: '20:30',
      location: 'Main Hall',
      description:
        'Monthly lecture series exploring Islamic civilization. This month: The Golden Age of Islamic Science.',
      capacity: 80,
      registered: 32,
      category: 'Education',
      featured: false,
    },
    {
      id: 5,
      title: "Women's Circle - Spiritual Growth",
      date: '2024-09-01',
      time: '10:00',
      endTime: '12:00',
      location: "Sisters' Lounge",
      description:
        'Monthly gathering for sisters to discuss spiritual growth, share experiences, and build sisterhood.',
      capacity: 30,
      registered: 22,
      category: 'Community',
      featured: false,
    },
    {
      id: 6,
      title: "Children's Islamic School Open House",
      date: '2024-09-05',
      time: '14:00',
      endTime: '17:00',
      location: 'Education Wing',
      description:
        'Visit our weekend Islamic school, meet teachers, and learn about our curriculum for children ages 5-15.',
      capacity: 100,
      registered: 67,
      category: 'Education',
      featured: true,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Prayer':
        return {
          backgroundColor: colors.green[700],
          color: '#ffffff',
        };
      case 'Education':
        return {
          backgroundColor: colors.info,
          color: '#ffffff',
        };
      case 'Community':
        return {
          backgroundColor: colors.gold[500],
          color: '#ffffff',
        };
      default:
        return {
          backgroundColor: colors.ink[600],
          color: '#ffffff',
        };
    }
  };

  return (
    <Box
      id="events"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.beige[50],
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: '100%' }}>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Upcoming Events
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Join us for prayer, learning, and community building. Everyone is
              welcome to participate in our programs.
            </Typography>
          </Box>

          {/* Events Grid */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {events.map((event) => (
              <Grid xs={12} md={6} lg={4} key={event.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: `1px solid ${colors.beige[200]}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    outline: event.featured
                      ? `2px solid ${colors.green[200]}`
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  {/* Event Header */}
                  <CardContent sx={{ flex: 1, pb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        mb: 2,
                      }}
                    >
                      <Chip
                        label={event.category}
                        size="small"
                        sx={{
                          ...getCategoryColor(event.category),
                          fontWeight: 500,
                        }}
                      />
                      {event.featured && (
                        <Chip
                          label="Featured"
                          size="small"
                          sx={{
                            backgroundColor: colors.gold[100],
                            color: colors.gold[500],
                            fontWeight: 500,
                          }}
                        />
                      )}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        lineHeight: 1.3,
                        fontSize: '1.125rem',
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                        mb: 3,
                      }}
                    >
                      {event.description}
                    </Typography>

                    {/* Event Details */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <CalendarTodayIcon
                          sx={{ fontSize: 16, color: colors.green[500] }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(event.date)}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <AccessTimeIcon
                          sx={{ fontSize: 16, color: colors.green[500] }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontVariantNumeric: 'tabular-nums' }}
                        >
                          {formatTime(event.time)} – {formatTime(event.endTime)}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <LocationOnIcon
                          sx={{ fontSize: 16, color: colors.green[500] }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {event.location}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <GroupIcon
                          sx={{ fontSize: 16, color: colors.green[500] }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {event.registered} / {event.capacity} registered
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>

                  {/* Event Footer */}
                  <Box
                    sx={{
                      px: 3,
                      py: 2,
                      backgroundColor: colors.green[50],
                      borderTop: `1px solid ${colors.beige[200]}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {event.capacity - event.registered} spots left
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        fontSize: '0.75rem',
                        py: 0.5,
                        px: 1.5,
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* View All Events Button */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              View All Events
            </Button>
          </Box>

          {/* Event Categories Filter */}
          <Card
            sx={{
              border: `1px solid ${colors.beige[200]}`,
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Browse by Category
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {[
                  'All Events',
                  'Prayer',
                  'Education',
                  'Community',
                  'Youth',
                  'Women',
                  'Children',
                ].map((category) => (
                  <Button
                    key={category}
                    variant="outlined"
                    size="small"
                    sx={{
                      fontSize: '0.875rem',
                      py: 0.5,
                      px: 2,
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default EventsSection;