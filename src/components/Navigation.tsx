import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Collapse,
  useMediaQuery,
  useTheme,
  InputAdornment,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Search as SearchIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { colors } from '@/theme/theme';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Prayer Times', href: '#prayer-times' },
    { name: 'Events', href: '#events' },
    { name: 'Donate', href: '#donate' },
    { name: 'About', href: '#about' },
    { name: 'Our Space', href: '#space' }
  ];

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 50 }}>
      {/* Top contact bar */}
      <Box
        sx={{
          backgroundColor: colors.green[50],
          borderBottom: `1px solid ${colors.beige[200]}`,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1,
              fontSize: '0.875rem',
              color: colors.ink[600],
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: 16, color: colors.green[500] }} />
                <Typography variant="body2">123 Community Ave, Niagara Falls, ON</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 16, color: colors.green[500] }} />
                <Typography variant="body2">(905) 123-4567</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon sx={{ fontSize: 16, color: colors.green[500] }} />
              <Typography variant="body2">Next Prayer: Asr • 3:45 PM</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main navigation */}
      <AppBar position="static" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: 64 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0 }}>
              <Box
                component="a"
                href="#"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'primary.main',
                    borderRadius: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.contrastText',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                    }}
                  >
                    ICWN
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      lineHeight: 1.2,
                    }}
                  >
                    Islamic Centre
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      mt: -0.5,
                    }}
                  >
                    of West Niagara
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    href={link.href}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: colors.green[50],
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Search and mobile menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Search button */}
              <IconButton
                onClick={toggleSearch}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: colors.green[50],
                  },
                }}
              >
                <SearchIcon />
              </IconButton>

              {/* Donate button - desktop */}
              <Button
                variant="contained"
                size="small"
                sx={{ display: { xs: 'none', sm: 'inline-flex' }, ml: 1 }}
              >
                Donate
              </Button>

              {/* Mobile menu button */}
              {isMobile && (
                <IconButton
                  onClick={toggleMobileMenu}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: colors.green[50],
                    },
                  }}
                >
                  {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              )}
            </Box>
          </Toolbar>

          {/* Search bar */}
          <Collapse in={isSearchOpen}>
            <Box sx={{ py: 2, borderTop: `1px solid ${colors.beige[200]}` }}>
              <Box sx={{ maxWidth: 400, mx: 'auto' }}>
                <TextField
                  fullWidth
                  placeholder="Search events, pages, and more..."
                  variant="outlined"
                  size="small"
                  autoFocus={isSearchOpen}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Collapse>
        </Container>
      </AppBar>

      {/* Mobile menu drawer */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 400,
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Mobile header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              borderBottom: `1px solid ${colors.beige[200]}`,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Navigation
            </Typography>
            <IconButton
              onClick={toggleMobileMenu}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: colors.green[50],
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile navigation links */}
          <Box sx={{ flex: 1, p: 2 }}>
            <List>
              {navLinks.map((link) => (
                <ListItem
                  key={link.name}
                  component="a"
                  href={link.href}
                  onClick={toggleMobileMenu}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: colors.green[50],
                      borderRadius: 1,
                    },
                  }}
                >
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontSize: '1.25rem',
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Mobile donate button */}
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" fullWidth size="large">
                Donate to ICWN
              </Button>
            </Box>
          </Box>

          {/* Mobile contact info */}
          <Box
            sx={{
              p: 2,
              backgroundColor: colors.green[50],
              borderTop: `1px solid ${colors.beige[200]}`,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 20, color: colors.green[500] }} />
                <Typography variant="body2" color="text.secondary">
                  123 Community Ave, Niagara Falls, ON
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 20, color: colors.green[500] }} />
                <Typography variant="body2" color="text.secondary">
                  (905) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <AccessTimeIcon sx={{ fontSize: 20, color: colors.green[500] }} />
                <Typography variant="body2" color="text.secondary">
                  Next Prayer: Asr • 3:45 PM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navigation;