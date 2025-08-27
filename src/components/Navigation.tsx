/** ====== REACT ====== */
import { useState } from 'react';

/** ====== CUSTOM COMPONENTS ====== */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoadingSpinner from './LoadingSpinner';

/** ====== ICONS ====== */
import { Menu, X, Search, MapPin, Phone, Clock } from 'lucide-react';

/** ====== HOOKS ====== */
import { usePrayerTimes } from '@/hooks/usePrayerContext';

/** ====== FUNCTIONS & CONSTANTS ====== */
import { formatTime } from '@/lib/prayerTimes';
import { MASJID_ADDRESS, MASJID_DONATE_LINK, MASJID_PHONE_F } from '@/lib/constants';

/** The Navlinks for the Navbar. If you want to add one, simply just follow the format */
const navLinks = [
  { name: 'Home', href: '/#' },
  { name: 'Prayer Times', href: '/#prayer-times' },
  { name: 'Events', href: '/#events' },
  { name: 'Donate', href: MASJID_DONATE_LINK },
  { name: 'About', href: '/#about' },
  //? what is this page
  { name: 'Our Space', href: '/#space' }
];

const Navigation = () => {
  const { nextPrayer, is24Hour } = usePrayerTimes();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // TODO: Find a better way to handle this
  if (!nextPrayer) return <LoadingSpinner />;
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-beige-200 shadow-card">
      {/* Top bar with contact info */}
      <div className="bg-green-50 border-b border-beige-200 hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-ink-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>{MASJID_ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>{MASJID_PHONE_F}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span>Next Prayer: {nextPrayer.name} • {formatTime(is24Hour, nextPrayer.time)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  ICWN
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-foreground text-lg">
                  Islamic Community
                </div>
                <div className="text-ink-600 text-sm -mt-1">of West Niagara</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-ink-600 hover:text-foreground transition-all duration-250 ease-smooth font-body font-medium hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search and mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSearch}
              className="text-ink-600 hover:text-foreground hover:bg-green-50"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Donate button - desktop */}
            <a href={MASJID_DONATE_LINK}>
              <Button variant="primary" size="sm" className="hidden sm:inline-flex">
                Donate
              </Button>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="lg:hidden text-ink-600 hover:text-foreground hover:bg-green-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-beige-200">
            <div className="max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search events, pages, and more..."
                className="w-full"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="flex items-center justify-between p-4 border-b border-beige-200">
              <div className="font-heading font-bold text-foreground text-lg">
                Navigation
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-ink-600 hover:text-foreground hover:bg-green-50"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Mobile navigation links */}
            <div className="flex-1 px-4 py-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-xl font-body font-medium text-ink-900 hover:text-primary transition-all duration-250 ease-smooth py-2"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile donate button */}
              <div className="pt-6">
                <a href={MASJID_DONATE_LINK}>
                  <Button variant="primary" className="w-full">
                    Donate to ICWN
                  </Button>
                </a>
              </div>
            </div>

            {/* Mobile contact info */}
            <div className="p-4 bg-green-50 border-t border-beige-200">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-ink-600">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span>{MASJID_ADDRESS}</span>
                </div>
                <div className="flex items-center space-x-3 text-ink-600">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span>{MASJID_PHONE_F}</span>
                </div>
                <div className="flex items-center space-x-3 text-ink-600">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>Next Prayer: {nextPrayer.name} • {formatTime(is24Hour, nextPrayer.time)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;