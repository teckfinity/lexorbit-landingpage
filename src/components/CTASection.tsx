import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Lock, Award } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLaunchState } from "@/hooks/useLaunchState";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Link } from "react-router-dom";

interface CTASectionProps {
  onOpenBetaModal?: () => void;
  onOpenWaitlistModal?: () => void;
}

const trustBadges = [
  { icon: Shield, label: "SOC 2 Certified" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: Award, label: "GDPR Compliant" },
];

const guarantees = [
  "Full access to all features",
  "Cancel anytime (literally one click)",
  "30-day money-back guarantee",
];

function AnimatedTrialCount() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(1247);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function CTASection({ onOpenBetaModal, onOpenWaitlistModal }: CTASectionProps) {
  const { ctaState, betaSpotsRemaining, totalBetaSpots, daysUntilLaunch } = useLaunchState();

  const handleCTAClick = () => {
    if (ctaState === 'BETA' && onOpenBetaModal) onOpenBetaModal();
    else if (ctaState === 'WAITLIST' && onOpenWaitlistModal) onOpenWaitlistModal();
    else window.location.href = '/signup';
  };

  const getSmartCTAText = () => {
    switch (ctaState) {
      case 'BETA': return 'CLAIM FREE BETA SPOT →';
      case 'WAITLIST': return 'JOIN WAITLIST →';
      case 'LAUNCH': return 'START FREE TRIAL →';
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-navy relative overflow-hidden">
      {/* Dramatic radial gradient with gold glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-navy-radial" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-100"
          style={{
            background: `radial-gradient(circle, hsla(30, 45%, 65%, 0.15) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            {ctaState === 'BETA' ? (
              <>Get In Free. <span className="text-shimmer">Shape The Future.</span></>
            ) : ctaState === 'WAITLIST' ? (
              <>Join The Waitlist. <span className="text-shimmer">Get 50% Off.</span></>
            ) : (
              <>Try It. Love It. <span className="text-shimmer">Or Don't Pay.</span></>
            )}
          </h2>
          <p className="font-body text-lg lg:text-xl text-white/70">
            {ctaState === 'BETA' 
              ? `Only ${betaSpotsRemaining} of ${totalBetaSpots} free beta spots remaining. Launch in ${daysUntilLaunch} days.`
              : ctaState === 'WAITLIST'
              ? `Beta is full! Get notified at launch on January 15 + exclusive 50% discount.`
              : 'Start your 14-day free trial. No credit card required.'
            }
          </p>
        </motion.div>

        {/* Beta Benefits */}
        {ctaState === 'BETA' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10"
          >
            {[
              '100% FREE during beta',
              '50% off for 6 months after launch',
              'Direct founder access',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80">
                <Check className="w-5 h-5 text-gold" />
                <span className="font-body">{item}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Standard Guarantees for Launch */}
        {ctaState === 'LAUNCH' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10"
          >
            {guarantees.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80">
                <Check className="w-5 h-5 text-sage" />
                <span className="font-body">{item}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Button 
            onClick={handleCTAClick}
            variant="hero" 
            size="xxl" 
            className="text-xl px-14 py-6 rounded-xl pulse-glow relative overflow-hidden group"
            style={{
              background: ctaState === 'WAITLIST' 
                ? 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)'
                : undefined,
              boxShadow: '0 12px 40px hsla(30, 45%, 65%, 0.5)',
            }}
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
            <span className="relative">{getSmartCTAText()}</span>
          </Button>
        </motion.div>

        {/* Secondary CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-white/60 mb-12"
        >
          {ctaState === 'BETA' ? (
            <>
              Not ready for beta?{" "}
              <button 
                onClick={onOpenWaitlistModal}
                className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
              >
                Join Waitlist Instead
              </button>
            </>
          ) : (
            <>
              Already convinced?{" "}
              <Link to="/contact" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
                Schedule Demo Call
              </Link>
            </>
          )}
        </motion.p>

        {/* Urgency Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-gold/20 rounded-2xl px-8 py-6 mb-12 inline-block"
        >
          {ctaState === 'BETA' ? (
            <>
              <p className="font-body text-white/70 text-lg mb-2">
                <span className="text-gold font-bold text-2xl">{betaSpotsRemaining}</span>{" "}
                beta spots remaining out of {totalBetaSpots}.
              </p>
              <p className="font-heading text-xl text-white font-semibold">
                Will you be one of the first?
              </p>
            </>
          ) : (
            <>
              <p className="font-body text-white/70 text-lg mb-2">
                <span className="text-gold font-bold text-2xl"><AnimatedTrialCount /></span>{" "}
                attorneys started their trial this week.
              </p>
              <p className="font-heading text-xl text-white font-semibold">
                Will you be next?
              </p>
            </>
          )}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-white/50">
              <badge.icon className="w-5 h-5" />
              <span className="font-body text-sm">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
