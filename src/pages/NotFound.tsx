import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-beige-50">
      <div className="text-center p-8">
        <h1 className="font-heading font-bold text-7xl md:text-9xl text-green-700">
          404
        </h1>
        <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-4">
          Page Not Found
        </p>
        <p className="text-lg text-ink-600 mb-8 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button asChild variant="primary" size="lg">
          <Link to="/">
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
