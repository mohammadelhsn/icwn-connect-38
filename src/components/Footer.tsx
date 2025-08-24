import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { name: 'Prayer Times', href: '#prayer-times' },
    { name: 'Events Calendar', href: '#events' },
    { name: 'Donate', href: '#donate' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Space', href: '#space' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Islamic Education', href: '#education' },
    { name: 'Youth Programs', href: '#youth' },
    { name: 'Women\'s Circle', href: '#women' },
    { name: 'Community Outreach', href: '#outreach' },
    { name: 'Marriage Services', href: '#marriage' },
    { name: 'Funeral Services', href: '#funeral' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-green-900 font-heading font-bold text-xl">
                  ICWN
                </span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg">
                  Islamic Centre
                </div>
                <div className="text-green-100 text-sm -mt-1">of West Niagara</div>
              </div>
            </div>
            
            <p className="text-green-100 font-body text-sm leading-relaxed mb-6">
              A welcoming community center serving Muslims in the West Niagara region. 
              Join us for worship, learning, and building lasting connections.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white font-body text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs & Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Programs & Services
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-green-100 hover:text-white font-body text-sm transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Contact & Updates
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div className="text-green-100 font-body text-sm">
                  <div>123 Community Avenue</div>
                  <div>Niagara Falls, ON L2H 3V4</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
                <a
                  href="tel:+19051234567"
                  className="text-green-100 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  (905) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
                <a
                  href="mailto:info@icwn.ca"
                  className="text-green-100 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  info@icwn.ca
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div className="text-green-100 font-body text-sm">
                  <div>Open daily for prayer</div>
                  <div>Office: Mon-Fri 9AM-5PM</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-heading font-medium text-white text-base mb-3">
                Stay Updated
              </h4>
              <p className="text-green-100 font-body text-sm mb-4">
                Get weekly updates about events and community news.
              </p>
              <div className="flex flex-col space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-green-800 border-green-700 text-white placeholder-green-300 focus:border-green-500"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white text-green-900 hover:bg-green-50"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-green-200 font-body text-xs mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-green-200 font-body text-sm">
              © 2024 Islamic Centre of West Niagara. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-green-200 hover:text-white font-body text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-green-200 hover:text-white font-body text-sm transition-colors duration-200">
                Terms of Use
              </a>
              <a href="#accessibility" className="text-green-200 hover:text-white font-body text-sm transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;