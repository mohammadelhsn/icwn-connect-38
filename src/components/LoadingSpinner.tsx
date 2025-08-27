import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LoadingSpinnerProps } from '@/lib/types';

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
    return <Loader2 className={cn('animate-spin text-green-600', className)} />;
};

export default LoadingSpinner;

