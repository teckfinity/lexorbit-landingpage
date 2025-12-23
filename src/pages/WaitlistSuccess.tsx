import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Bell, Gift, Zap, Share2 } from 'lucide-react';
import { useLaunchState } from '@/hooks/useLaunchState';

export default function WaitlistSuccess() {
  const { daysUntilLaunch } = useLaunchState();

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark to-navy">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-sage/5 rounded-full blur-[80px]" />
      </div>
      
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <motion.div 
              className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center"
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(255, 255, 255, 0.2)', '0 0 0 20px rgba(255, 255, 255, 0)', '0 0 0 0 rgba(255, 255, 255, 0)']
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Bell className="w-10 h-10 text-gold" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-3xl md:text-4xl font-black text-white text-center mb-3"
          >
            You're on the List!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/60 text-center mb-8"
          >
            We'll notify you when LexOrbit launches.
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 rounded-2xl p-6 mb-6 text-center"
          >
            <p className="text-white/50 text-sm mb-2">Launching in</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl font-black text-gold">{daysUntilLaunch}</span>
              <span className="text-white/60 text-lg">days</span>
            </div>
            <p className="text-white/40 text-xs mt-2">January 15, 2026</p>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6"
          >
            <h3 className="font-heading text-lg font-bold text-white mb-5 text-center">
              What you'll receive
            </h3>

            <div className="space-y-4">
              {[
                { icon: Bell, title: 'Launch Notification', desc: 'Be first to know when we go live' },
                { icon: Gift, title: '50% Discount Code', desc: 'Exclusive pricing for 6 months' },
                { icon: Zap, title: 'Early Access', desc: 'Skip the line when we launch' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-4 items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-white block text-sm">{item.title}</strong>
                    <span className="text-white/50 text-xs">{item.desc}</span>
                  </div>
                  <Check className="w-5 h-5 text-sage" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="w-5 h-5 text-white/50" />
              <p className="text-white/70 text-sm">
                Know an attorney who would love this?
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=Just%20joined%20the%20LexOrbit%20waitlist%20%E2%80%94%20AI-powered%20legal%20research%20launching%20Jan%2015!&url=${encodeURIComponent(window.location.origin)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded-xl transition-colors text-center"
              >
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-[#0077B5] hover:bg-[#005885] text-white text-sm font-semibold rounded-xl transition-colors text-center"
              >
                Share on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {/* <Link
              to="/"
              className="block w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-semibold rounded-xl transition-all text-center"
            >
              ← Back to Home
            </Link> */}
          </motion.div>

          {/* Footer Note */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-center text-xs text-white/30"
          >
            🔒 No spam, ever. Unsubscribe anytime.
          </motion.p>
        </div>
      </main>
    </div>
  );
}
