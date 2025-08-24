import { Button } from '@/components/ui/button';
import { Heart, Users, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 to-beige-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Islamic Centre of West Niagara building exterior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-beige-50/60" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 19,10 10,19 1,10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-700"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-6">
              Faith{' '}
              <span className="text-green-700">•</span>{' '}
              Family{' '}
              <span className="text-green-700">•</span>{' '}
              Community
            </h1>
            
            <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl font-body">
              Welcome to the Islamic Centre of West Niagara, where our community comes together in worship, learning, and service. Join us as we strengthen our faith and support one another.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-card p-4 shadow-card">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Daily Prayers</h3>
                <p className="text-sm text-ink-600">Five daily prayers together</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-card p-4 shadow-card">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Community Events</h3>
                <p className="text-sm text-ink-600">Regular gatherings & programs</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-card p-4 shadow-card">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Islamic Education</h3>
                <p className="text-sm text-ink-600">Classes for all ages</p>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="text-base">
              Donate to Our Community
            </Button>
            <Button variant="secondary" size="lg" className="text-base">
              Discover Events
            </Button>
          </div>

          {/* Quick Access Info */}
          <div className="mt-12 bg-background/90 backdrop-blur-sm rounded-card p-6 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Next Prayer</h3>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-body font-medium">
                    Asr
                  </div>
                  <span className="font-body font-semibold text-lg tabular-nums text-foreground">3:45 PM</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">This Week</h3>
                <p className="text-ink-600 font-body">
                  Friday Khutbah • Quran Study Circle • Youth Program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;