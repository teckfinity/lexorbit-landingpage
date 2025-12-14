import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Check, Mail, Sparkles, MessageSquare, Gift, Zap, Users, Copy } from 'lucide-react';
import { LAUNCH_CONFIG } from '@/config/launch';
import { useState } from 'react';

export default function BetaSuccess() {
  const location = useLocation();
  const discountCode = location.state?.discountCode || 'BETA50-XXXX';
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark to-navy">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
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
              className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center"
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(212, 165, 116, 0.4)', '0 0 0 20px rgba(212, 165, 116, 0)', '0 0 0 0 rgba(212, 165, 116, 0)']
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Check className="w-12 h-12 text-navy-dark" strokeWidth={3} />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-3xl md:text-4xl font-black text-white text-center mb-3"
          >
            Welcome to Beta!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/60 text-center mb-8"
          >
            You've claimed one of 25 free beta spots!
          </motion.p>

          {/* What happens now */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6"
          >
            <h3 className="font-heading text-lg font-bold text-white mb-5 text-center">
              What happens next?
            </h3>

            <div className="space-y-4">
              {[
                { icon: Mail, num: '1', title: 'Check Your Email', desc: 'Access instructions sent (check spam)' },
                { icon: Sparkles, num: '2', title: 'Activate Account', desc: 'Click link within 24 hours' },
                { icon: MessageSquare, num: '3', title: 'Give Feedback', desc: 'Shape the product with your input' },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-4 items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold to-gold-light text-navy-dark flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <strong className="text-white block text-sm">{step.title}</strong>
                    <span className="text-white/50 text-xs">{step.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Beta Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl p-6 mb-6"
          >
            <h3 className="font-heading text-lg font-bold text-white mb-4 text-center">
              Your Beta Benefits
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { icon: Gift, text: '100% Free Beta' },
                { icon: Zap, text: '50% Off 6 Months' },
                { icon: Users, text: 'Founder Access' },
                { icon: Sparkles, text: 'Beta Badge' },
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg"
                >
                  <benefit.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-xs text-white/80 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Discount Code */}
            <div className="bg-navy-dark/50 rounded-xl p-4 border border-white/10">
              <p className="text-xs text-white/50 mb-2 text-center">Your discount code (save this!)</p>
              <div className="flex items-center justify-center gap-3">
                <code className="text-xl font-bold text-gold tracking-wider">{discountCode}</code>
                <button 
                  onClick={copyCode}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-sage" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/50" />
                  )}
                </button>
              </div>
              <p className="text-[10px] text-white/40 text-center mt-2">
                ${LAUNCH_CONFIG.BETA_DISCOUNT.monthly_price}/month for 6 months after launch
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="mailto:greg@lexorbit.ai"
              className="flex-1 px-6 py-4 bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25 transition-all text-center"
            >
              Questions? Email Greg
            </a>
            <Link
              to="/"
              className="flex-1 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-semibold rounded-xl transition-all text-center"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
