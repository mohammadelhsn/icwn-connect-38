import { InfoCardItemProps } from '@/lib/types';
import LoadingSpinner from './LoadingSpinner';


const InfoCardItem = ({ title, isLoading, children, className }: InfoCardItemProps) => {
    return (
        <div className={className}>
            <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
            {isLoading ? (
                <div className="flex items-center text-sm text-ink-500">
                    <LoadingSpinner className="h-4 w-4 mr-2" />
                    <span>Loading...</span>
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default InfoCardItem;