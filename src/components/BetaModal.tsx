import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, Sparkles, Zap, Gift, Users } from 'lucide-react';
import { useLaunchState } from '@/hooks/useLaunchState';
import { LAUNCH_CONFIG } from '@/config/launch';
import { useNavigate } from 'react-router-dom';

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToWaitlist: () => void;
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
        id={name}
      />
      <label 
        htmlFor={name}
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
}

function FloatingSelect({ name, label, options, value, onChange }: FloatingSelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
        id={name}
      >
        <option value="" className="bg-navy-dark text-white/50">{label}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-navy-dark text-white">
            {opt.label}
          </option>
        ))}
      </select>
      <label 
        htmlFor={name}
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

export function BetaModal({ isOpen, onClose, onSwitchToWaitlist }: BetaModalProps) {
  const navigate = useNavigate();
  const { betaSpotsRemaining, betaSpotsTaken, totalBetaSpots, submitBetaSignup } = useLaunchState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm_name: '',
    firm_size: '',
    practice_area: '',
    use_case: '',
    consent: false,
  });

  const progressPercentage = (betaSpotsTaken / totalBetaSpots) * 100;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitBetaSignup({
      name: formData.name,
      email: formData.email,
      firm_name: formData.firm_name,
      firm_size: formData.firm_size,
      practice_area: formData.practice_area,
      use_case: formData.use_case,
    });

    setIsSubmitting(false);

    if (result.success) {
      onClose();
      navigate('/beta-success', { state: { discountCode: result.discount_code } });
    } else if (result.error === 'BETA_FULL') {
      alert('Sorry! Beta spots just filled up. Redirecting to waitlist...');
      onClose();
      onSwitchToWaitlist();
    } else if (result.error === 'DUPLICATE') {
      alert('This email is already registered for beta.');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  const canProceedToStep2 = formData.name && formData.email && formData.firm_name;

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
            className="relative bg-gradient-to-b from-navy to-navy-dark rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:rotate-90 duration-300"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>

            {/* Header with Animated Progress Ring */}
            <div className="flex items-center gap-6 mb-6">
              <div className="relative">
                <svg className="w-24 h-24 -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4A574" />
                      <stop offset="100%" stopColor="#E5C69F" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gold">{betaSpotsRemaining}</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">left</span>
                </div>
              </div>
              
              <div className="flex-1">
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 rounded-full mb-2"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span className="text-xs font-bold text-gold uppercase tracking-wide">Free Beta</span>
                </motion.div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">
                  Claim Your Spot
                </h2>
              </div>
            </div>

            {/* Perks - Compact Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: Gift, text: '100% Free Access' },
                { icon: Zap, text: '50% Off After' },
                { icon: Users, text: 'Shape Features' },
              ].map((perk, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full"
                >
                  <perk.icon className="w-3.5 h-3.5 text-gold" />
                  <span className="text-xs text-white/80 font-medium">{perk.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Step Indicator */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2].map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => step === 1 ? setCurrentStep(1) : (canProceedToStep2 && setCurrentStep(2))}
                  className="flex items-center gap-2"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep >= step 
                      ? 'bg-gold text-navy-dark' 
                      : 'bg-white/10 text-white/40'
                  }`}>
                    {currentStep > step ? <Check className="w-4 h-4" /> : step}
                  </div>
                  {step === 1 && (
                    <div className={`hidden sm:block h-0.5 w-12 rounded-full transition-all ${
                      currentStep > 1 ? 'bg-gold' : 'bg-white/10'
                    }`} />
                  )}
                </button>
              ))}
              <span className="text-xs text-white/50 ml-2">
                {currentStep === 1 ? 'Basic Info' : 'Details'}
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {currentStep === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <FloatingInput 
                      name="name" 
                      label="Full Name" 
                      value={formData.name}
                      onChange={updateField('name')}
                    />
                    <FloatingInput 
                      name="email" 
                      type="email" 
                      label="Work Email" 
                      value={formData.email}
                      onChange={updateField('email')}
                    />
                    <FloatingInput 
                      name="firm_name" 
                      label="Law Firm / Organization" 
                      value={formData.firm_name}
                      onChange={updateField('firm_name')}
                    />
                    
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      disabled={!canProceedToStep2}
                      className="w-full py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      Continue
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <FloatingSelect 
                      name="firm_size" 
                      label="Firm Size"
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
                      name="practice_area" 
                      label="Practice Area"
                      value={formData.practice_area}
                      onChange={updateField('practice_area')}
                      options={[
                        { value: 'civil', label: 'Civil Litigation' },
                        { value: 'criminal', label: 'Criminal Defense' },
                        { value: 'family', label: 'Family Law' },
                        { value: 'corporate', label: 'Corporate/Business' },
                        { value: 'personal_injury', label: 'Personal Injury' },
                        { value: 'employment', label: 'Employment Law' },
                        { value: 'real_estate', label: 'Real Estate' },
                        { value: 'immigration', label: 'Immigration' },
                        { value: 'other', label: 'Other' },
                      ]}
                    />
                    
                    <div className="relative">
                      <textarea
                        placeholder="How would you use LexOrbit? (optional)"
                        rows={2}
                        value={formData.use_case}
                        onChange={(e) => setFormData(prev => ({ ...prev, use_case: e.target.value }))}
                        className="w-full px-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300 resize-none text-sm"
                      />
                    </div>

                    {/* Consent */}
                    <label className="flex gap-3 items-start cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                          className="sr-only peer"
                        />
                        <div className="w-5 h-5 rounded border-2 border-white/20 peer-checked:border-gold peer-checked:bg-gold transition-all flex items-center justify-center">
                          {formData.consent && <Check className="w-3 h-3 text-navy-dark" />}
                        </div>
                      </div>
                      <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                        I agree to provide feedback and receive updates
                      </span>
                    </label>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.firm_size || !formData.practice_area || !formData.consent}
                        className="flex-1 py-4 bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold rounded-xl hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Claiming...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>Claim My Spot</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Footer Note */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center text-[11px] text-white/40"
            >
              ⏰ First-come, first-served • Access details within 24 hours
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
