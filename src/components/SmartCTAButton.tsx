import { useLaunchState } from '@/hooks/useLaunchState';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SmartCTAButtonProps {
  onOpenBetaModal: () => void;
  onOpenWaitlistModal: () => void;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'hero';
}

export function SmartCTAButton({
  onOpenBetaModal,
  onOpenWaitlistModal,
  className,
  size = 'lg',
  variant = 'default',
}: SmartCTAButtonProps) {
  const { ctaState, isLoading } = useLaunchState();

  const handleClick = () => {
    switch (ctaState) {
      case 'BETA':
        onOpenBetaModal();
        break;
      case 'WAITLIST':
        onOpenWaitlistModal();
        break;
      case 'LAUNCH':
        window.location.href = '/signup';
        break;
    }
  };

  const getButtonText = () => {
    if (isLoading) return 'Loading...';
    switch (ctaState) {
      case 'BETA':
        return 'Claim Free Beta Spot →';
      case 'WAITLIST':
        return 'Join Waitlist →';
      case 'LAUNCH':
        return 'Start Free Trial →';
    }
  };

  const getButtonStyles = () => {
    switch (ctaState) {
      case 'BETA':
        return 'bg-gradient-to-r from-gold to-gold-light text-navy-dark hover:shadow-lg';
      case 'WAITLIST':
        return 'bg-gradient-to-r from-charcoal to-charcoal/80 text-white hover:shadow-lg';
      case 'LAUNCH':
        return 'bg-gradient-to-r from-sage to-sage/80 text-white hover:shadow-lg';
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      size={size}
      className={cn(
        'font-bold transition-all hover:-translate-y-0.5',
        getButtonStyles(),
        className
      )}
    >
      {getButtonText()}
    </Button>
  );
}
