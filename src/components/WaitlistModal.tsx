import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Check, Bell, Gift, Zap, Clock } from 'lucide-react';
import { useLaunchState } from '@/hooks/useLaunchState';
import { useNavigate } from 'react-router-dom';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FloatingInputProps {
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

function FloatingInput({ name, type = 'text', label, required = true, value, onChange }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300"
        placeholder={label}
        id={`waitlist-${name}`}
      />
      <label 
        htmlFor={`waitlist-${name}`}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue 
            ? '-top-2.5 text-xs px-2 bg-navy-dark text-gold' 
            : 'top-4 text-white/50'
        }`}
      >
        {label}
      </label>
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full"
        initial={false}
        animate={{ width: isFocused ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

interface FloatingSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

function FloatingSelect({ name, label, options, value, onChange, required = false }: FloatingSelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
        id={`waitlist-${name}`}
      >
        <option value="" className="bg-navy-dark text-white/50">{label}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-navy-dark text-white">
            {opt.label}
          </option>
        ))}
      </select>
      <label 
        htmlFor={`waitlist-${name}`}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue 
            ? '-top-2.5 text-xs px-2 bg-navy-dark text-gold' 
            : 'top-4 text-white/50'
        }`}
      >
        {label}
      </label>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const navigate = useNavigate();
  const { submitWaitlistSignup, daysUntilLaunch } = useLaunchState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firm_size: '',
    interest: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitWaitlistSignup({
      email: formData.email,
      firm_size: formData.firm_size || undefined,
      interest: formData.interest || undefined,
    });

    setIsSubmitting(false);

    if (result.success) {
      onClose();
      navigate('/waitlist-success');
    } else if (result.error === 'DUPLICATE') {
      alert('This email is already on the waitlist.');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  const updateField = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-navy-dark/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-b from-navy to-navy-dark rounded-3xl p-6 md:p-8 max-w-md w-full border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:rotate-90 duration-300"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              {/* Animated Icon */}
              <motion.div 
                className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center"
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(212, 165, 116, 0)', '0 0 0 12px rgba(212, 165, 116, 0.1)', '0 0 0 0 rgba(212, 165, 116, 0)']
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Bell className="w-10 h-10 text-gold" />
              </motion.div>
              
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Clock className="w-3 h-3 text-white/70" />
                <span className="text-xs font-medium text-white/70">
                  Launching in {daysUntilLaunch} days
                </span>
              </motion.div>
              
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Join the Waitlist
              </h2>
              <p className="text-sm text-white/50">
                Beta is full! Get notified at launch + exclusive 50% discount.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {[
                { icon: Bell, text: 'Launch Alert' },
                { icon: Gift, text: '50% Off Code' },
                { icon: Zap, text: 'Early Access' },
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full"
                >
                  <benefit.icon className="w-3.5 h-3.5 text-gold" />
                  <span className="text-xs text-white/80 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <FloatingInput 
                name="email" 
                type="email" 
                label="Email Address" 
                value={formData.email}
                onChange={updateField('email')}
              />
              
              <FloatingSelect 
                name="firm_size" 
                label="Firm Size (optional)"
                value={formData.firm_size}
                onChange={updateField('firm_size')}
                options={[
                  { value: 'solo', label: 'Solo practitioner' },
                  { value: '2-5', label: '2-5 attorneys' },
                  { value: '6-10', label: '6-10 attorneys' },
                  { value: '10+', label: '10+ attorneys' },
                ]}
              />
              
              <FloatingSelect 
                name="interest" 
                label="Most Interested In (optional)"
                value={formData.interest}
                onChange={updateField('interest')}
                options={[
                  { value: 'research', label: 'Legal Research' },
                  { value: 'judge', label: 'Judge Analytics' },
                  { value: 'predictive', label: 'Predictive AI' },
                  { value: 'docs', label: 'Document Automation' },
                ]}
              />

              <button
                type="submit"
                disabled={isSubmitting || !formData.email}
                className="w-full py-4 bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold rounded-xl hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4" />
                    <span>Join Waitlist</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer Note */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-5 text-center text-[11px] text-white/40"
            >
              🔒 No spam, ever. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
