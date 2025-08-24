import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  IconButton,
  Link,
  useTheme,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as AccessTimeIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { colors } from '@/theme/theme';

const Footer = () => {
  const theme = useTheme();

  const quickLinks = [
    { name: 'Prayer Times', href: '#prayer-times' },
    { name: 'Events Calendar', href: '#events' },
    { name: 'Donate', href: '#donate' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Space', href: '#space' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs = [
    { name: 'Islamic Education', href: '#education' },
    { name: 'Youth Programs', href: '#youth' },
    { name: "Women's Circle", href: '#women' },
    { name: 'Community Outreach', href: '#outreach' },
    { name: 'Marriage Services', href: '#marriage' },
    { name: 'Funeral Services', href: '#funeral' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'YouTube', icon: YouTubeIcon, href: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.green[900],
        color: '#ffffff',
      }}
    >
      {/* Main Footer Content */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Organization Info */}
          <Grid item xs={12} lg={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: '#ffffff',
                  borderRadius: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.green[900],
                    fontWeight: 700,
                  }}
                >
                  ICWN
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.2,
                  }}
                >
                  Islamic Centre
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.green[100],
                    mt: -0.5,
                  }}
                >
                  of West Niagara
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: colors.green[100],
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              A welcoming community center serving Muslims in the West Niagara region.
              Join us for worship, learning, and building lasting connections.
            </Typography>

            {/* Social Media Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.href}
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: colors.green[800],
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: colors.green[700],
                    },
                  }}
                  aria-label={social.name}
                >
                  <social.icon sx={{ fontSize: 20 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} lg={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#ffffff',
                mb: 3,
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: colors.green[100],
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Programs & Services */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#ffffff',
                mb: 3,
              }}
            >
              Programs & Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {programs.map((program) => (
                <Link
                  key={program.name}
                  href={program.href}
                  sx={{
                    color: colors.green[100],
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  {program.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact & Newsletter */}
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#ffffff',
                mb: 3,
              }}
            >
              Contact & Updates
            </Typography>

            {/* Contact Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon
                  sx={{ fontSize: 20, color: colors.green[300], mt: 0.25 }}
                />
                <Box>
                  <Typography variant="body2" sx={{ color: colors.green[100] }}>
                    123 Community Avenue
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.green[100] }}>
                    Niagara Falls, ON L2H 3V4
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 20, color: colors.green[300] }} />
                <Link
                  href="tel:+19051234567"
                  sx={{
                    color: colors.green[100],
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  (905) 123-4567
                </Link>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: 20, color: colors.green[300] }} />
                <Link
                  href="mailto:info@icwn.ca"
                  sx={{
                    color: colors.green[100],
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  info@icwn.ca
                </Link>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <AccessTimeIcon
                  sx={{ fontSize: 20, color: colors.green[300], mt: 0.25 }}
                />
                <Box>
                  <Typography variant="body2" sx={{ color: colors.green[100] }}>
                    Open daily for prayer
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.green[100] }}>
                    Office: Mon-Fri 9AM-5PM
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Newsletter Signup */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: '#ffffff',
                  mb: 1.5,
                  fontSize: '1rem',
                }}
              >
                Stay Updated
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.green[100],
                  mb: 2,
                }}
              >
                Get weekly updates about events and community news.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <TextField
                  type="email"
                  placeholder="Your email address"
                  size="small"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: colors.green[800],
                      color: '#ffffff',
                      '& input::placeholder': {
                        color: colors.green[300],
                        opacity: 1,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.green[700],
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.green[500],
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.green[500],
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#ffffff',
                    color: colors.green[900],
                    '&:hover': {
                      backgroundColor: colors.green[50],
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: colors.green[200],
                  mt: 1,
                  display: 'block',
                }}
              >
                We respect your privacy. Unsubscribe anytime.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          borderTop: `1px solid ${colors.green[800]}`,
        }}
      >
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: colors.green[200],
              }}
            >
              © 2024 Islamic Centre of West Niagara. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  sx={{
                    color: colors.green[200],
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;