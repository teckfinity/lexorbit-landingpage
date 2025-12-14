import { motion, AnimatePresence } from 'framer-motion';
import { useLaunchState } from '@/hooks/useLaunchState';
import { LAUNCH_CONFIG } from '@/config/launch';

interface SmartBannerProps {
  onOpenBetaModal: () => void;
  onOpenWaitlistModal: () => void;
}

export function SmartBanner({ onOpenBetaModal, onOpenWaitlistModal }: SmartBannerProps) {
  const { ctaState, betaSpotsRemaining, daysUntilLaunch, totalBetaSpots } = useLaunchState();

  const isUrgent = betaSpotsRemaining <= 5 && ctaState === 'BETA';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] px-3 sm:px-4 py-2.5 sm:py-3 shadow-md ${
          ctaState === 'BETA' 
            ? isUrgent 
              ? 'bg-gradient-to-r from-burgundy to-gold animate-pulse' 
              : 'bg-gradient-to-r from-gold to-gold-light'
            : ctaState === 'WAITLIST'
            ? 'bg-gradient-to-r from-charcoal to-charcoal/80'
            : 'bg-gradient-to-r from-sage to-sage/80'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          {ctaState === 'BETA' && (
            <>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-navy-dark/90 text-white text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                  🚀 FREE BETA
                </span>
                <span className={`text-xs sm:text-sm md:text-base font-medium text-center ${isUrgent ? 'text-white' : 'text-navy-dark'}`}>
                  <strong className="animate-pulse">{betaSpotsRemaining} of {totalBetaSpots} spots</strong> left! 
                  <span className="hidden xs:inline"> Launch in</span> <strong>{daysUntilLaunch} days</strong>
                </span>
              </div>
              <button
                onClick={onOpenBetaModal}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-navy-dark/90 text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-navy transition-all hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
              >
                Claim Free Spot →
              </button>
            </>
          )}

          {ctaState === 'WAITLIST' && (
            <>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-navy-dark/90 text-white text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                  📋 WAITLIST
                </span>
                <span className="text-xs sm:text-sm md:text-base font-medium text-white text-center">
                  Beta full! <span className="hidden sm:inline">Join waitlist for launch access + 50% discount.</span>
                  <span className="sm:hidden">Get 50% off at launch.</span>
                </span>
              </div>
              <button
                onClick={onOpenWaitlistModal}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-navy-dark text-xs sm:text-sm font-bold rounded-lg hover:bg-cream transition-all hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
              >
                Join Waitlist →
              </button>
            </>
          )}

          {ctaState === 'LAUNCH' && (
            <>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-navy-dark/90 text-white text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                  ✨ NOW LIVE
                </span>
                <span className="text-xs sm:text-sm md:text-base font-medium text-white text-center">
                  LexOrbit is here! <span className="hidden sm:inline">Try all features free for 14 days.</span>
                </span>
              </div>
              <button
                onClick={() => window.location.href = '/signup'}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-navy-dark text-xs sm:text-sm font-bold rounded-lg hover:bg-cream transition-all hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
              >
                Start Free Trial →
              </button>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
