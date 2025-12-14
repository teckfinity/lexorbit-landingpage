import { motion } from "framer-motion";
import { Check, Calculator, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLaunchState } from "@/hooks/useLaunchState";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingSectionProps {
  onOpenBetaModal?: () => void;
  onOpenWaitlistModal?: () => void;
}

interface PlanData {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  annualSavings: string;
  description: string;
  target: string;
  features: string[];
  cta: string;
  variant: "outline" | "hero";
  featured: boolean;
  badge?: string;
}

const plans: PlanData[] = [
  {
    name: "Starter",
    monthlyPrice: "FREE",
    annualPrice: "FREE",
    annualSavings: "",
    description: "Perfect for trying LexOrbit",
    target: "Students & trials",
    features: [
      "5 AI research queries/month",
      "2 document summaries/month",
      "Basic citation maps (1 level)",
      "View-only judge analytics",
      "Forum support",
    ],
    cta: "Start Free",
    variant: "outline" as const,
    featured: false,
  },
  {
    name: "Professional",
    monthlyPrice: "$39",
    annualPrice: "$29",
    annualSavings: "Save $120/year",
    description: "For solo practitioners",
    target: "Solo practitioners",
    features: [
      "Unlimited AI research queries",
      "Unlimited document summaries",
      "Basic judge analytics",
      "Citation maps (2 levels)",
      "30 doc automations/month",
      "Email support (24h response)",
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    featured: true,
    badge: "BEST VALUE",
  },
  {
    name: "Business",
    monthlyPrice: "$119",
    annualPrice: "$99",
    annualSavings: "Save $240/year",
    description: "For small firms",
    target: "Small firms (5-20)",
    features: [
      "Everything in Professional",
      "Advanced judge analytics",
      "Predictive AI included",
      "Citation maps (4 levels)",
      "Unlimited doc automation",
      "Priority support (4h response)",
      "Up to 10 team members",
    ],
    cta: "Start Free Trial",
    variant: "outline" as const,
    featured: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: "$249+",
    annualPrice: "Custom",
    annualSavings: "",
    description: "For larger organizations",
    target: "Large firms (20+)",
    features: [
      "Everything in Business",
      "Custom judge analytics",
      "Unlimited citation maps",
      "Unlimited team members",
      "Custom AI training",
      "Dedicated support (1h response)",
      "On-premise option & SLA",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    featured: false,
  },
];

export function PricingSection({ onOpenBetaModal, onOpenWaitlistModal }: PricingSectionProps) {
  const { ctaState, betaSpotsRemaining, totalBetaSpots, daysUntilLaunch } = useLaunchState();
  const [hourlyRate, setHourlyRate] = useState(250);
  const [researchHours, setResearchHours] = useState(15);
  const [isAnnual, setIsAnnual] = useState(true);

  const weeklyLoss = hourlyRate * researchHours;
  const annualLoss = weeklyLoss * 52;
  const weeklySavings = hourlyRate * (researchHours - 3);
  const monthlySubscription = isAnnual ? 29 : 39;
  const roi = Math.round((weeklySavings * 52 / (monthlySubscription * 12)) * 100);

  const handleCTAClick = () => {
    if (ctaState === 'BETA' && onOpenBetaModal) onOpenBetaModal();
    else if (ctaState === 'WAITLIST' && onOpenWaitlistModal) onOpenWaitlistModal();
    else window.location.href = '/signup';
  };

  const getSmartCTAText = () => {
    switch (ctaState) {
      case 'BETA': return 'Claim Free Beta Spot →';
      case 'WAITLIST': return 'Join Waitlist →';
      case 'LAUNCH': return 'Start Free Trial →';
    }
  };

  const getDisplayPrice = (plan: PlanData) => {
    if (plan.monthlyPrice === "FREE") return "FREE";
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Beta Banner */}
        {ctaState !== 'LAUNCH' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-full">
              {ctaState === 'BETA' ? (
                <>
                  <span className="text-2xl">🚀</span>
                  <span className="text-navy font-semibold">
                    <span className="text-gold font-bold">{betaSpotsRemaining}</span> of {totalBetaSpots} FREE beta spots left!
                  </span>
                  <span className="text-charcoal/50">•</span>
                  <span className="text-charcoal/70">100% free during beta + 50% off after</span>
                </>
              ) : (
                <>
                  <span className="text-2xl">📋</span>
                  <span className="text-navy font-semibold">Beta is full!</span>
                  <span className="text-charcoal/50">•</span>
                  <span className="text-charcoal/70">Join waitlist for 50% discount at launch</span>
                </>
              )}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            {ctaState === 'LAUNCH' ? (
              <>Pay Once. <span className="text-gradient-gold">Save Forever.</span></>
            ) : (
              <>Free Beta Access. <span className="text-gradient-gold">Limited Spots.</span></>
            )}
          </h2>
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto">
            {ctaState === 'LAUNCH' 
              ? 'Calculate your potential savings before you decide'
              : `Launch: January 15, 2026 • ${daysUntilLaunch} days away`
            }
          </p>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-navy rounded-2xl p-8 mb-16 shadow-elevated relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 pointer-events-none" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Calculator className="w-6 h-6 text-navy-dark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                How Much Money Are You Losing Right Now?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <label className="block font-body text-sm text-white/70 mb-3">
                    Your Hourly Rate: <span className="text-gold font-bold text-lg">${hourlyRate}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="500"
                    step="25"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>$100</span>
                    <span>$500</span>
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-white/70 mb-3">
                    Hours on Research/Week: <span className="text-gold font-bold text-lg">{researchHours}</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={researchHours}
                    onChange={(e) => setResearchHours(Number(e.target.value))}
                    className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>5 hrs</span>
                    <span>40 hrs</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-burgundy/20 border border-burgundy/30 rounded-xl p-5">
                  <div className="text-white/60 text-sm mb-1">💸 YOU'RE LOSING:</div>
                  <div className="font-heading text-3xl font-bold text-[#E57373]">
                    ${weeklyLoss.toLocaleString()}/week
                  </div>
                  <div className="text-white/50 text-sm">
                    ${annualLoss.toLocaleString()} annually
                  </div>
                </div>
                
                <div className="bg-sage/20 border border-sage/30 rounded-xl p-5">
                  <div className="text-white/60 text-sm mb-2">
                    With LexOrbit {ctaState === 'BETA' ? '(FREE during beta!)' : `($${monthlySubscription}/month)`}:
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-sage" />
                      <span className="text-white/80">Save {researchHours - 3} hours/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-sage" />
                      <span className="text-white/80">Generate ${weeklySavings.toLocaleString()} MORE per week</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                      <Sparkles className="w-5 h-5 text-gold" />
                      <span className="text-gold font-bold text-lg">ROI: {roi.toLocaleString()}% annually</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleCTAClick}
                variant="hero" 
                size="xl" 
                className="pulse-glow"
              >
                {getSmartCTAText()}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Monthly/Annual Toggle */}
        <TooltipProvider delayDuration={0}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <span className={`font-body text-sm flex items-center gap-1 ${!isAnnual ? 'text-navy font-semibold' : 'text-slate'}`}>
              Monthly
              <Tooltip>
                <TooltipTrigger asChild>
                  <button type="button" className="inline-flex">
                    <Info className="w-4 h-4 text-slate hover:text-navy cursor-help" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs bg-navy text-white p-3 z-[100]">
                  <p className="text-sm">
                    <strong>Monthly billing:</strong> Pay month-to-month with no long-term commitment. 
                    Cancel anytime with no cancellation fees.
                  </p>
                </TooltipContent>
              </Tooltip>
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-gradient-gold' : 'bg-charcoal/20'
              }`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ left: isAnnual ? '2.25rem' : '0.25rem' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`font-body text-sm flex items-center gap-1 ${isAnnual ? 'text-navy font-semibold' : 'text-slate'}`}>
              Annual
              <Tooltip>
                <TooltipTrigger asChild>
                  <button type="button" className="inline-flex">
                    <Info className="w-4 h-4 text-slate hover:text-navy cursor-help" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs bg-navy text-white p-3 z-[100]">
                  <p className="text-sm">
                    <strong>Annual billing:</strong> Pay upfront for 12 months and save up to 25%. 
                    Your card is charged once per year on your subscription anniversary date.
                  </p>
                </TooltipContent>
              </Tooltip>
            </span>
            <span className={`ml-2 px-3 py-1 bg-sage/20 text-sage text-xs font-semibold rounded-full transition-opacity duration-200 ${isAnnual ? 'opacity-100' : 'opacity-0'}`}>
              Save up to $240/year
            </span>
          </motion.div>
        </TooltipProvider>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-cream rounded-2xl p-6 lg:p-8 transition-all duration-300 h-full flex flex-col ${
                plan.featured
                  ? "border-[3px] border-gold shadow-gold-lg scale-105 z-10"
                  : "border border-muted shadow-card hover:-translate-y-1 hover:shadow-elevated hover:border-gold/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/10 rounded-2xl pointer-events-none" />
              )}

              {plan.badge && (
                <motion.span 
                  className="absolute -top-4 right-8 bg-gradient-gold text-navy-dark text-xs font-bold px-4 py-2 rounded-full shadow-gold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {ctaState === 'BETA' ? 'FREE BETA' : plan.badge}
                </motion.span>
              )}

              <div className="relative h-full flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                  {plan.name}
                </h3>

                <div className="mb-2">
                  {ctaState === 'BETA' && plan.featured ? (
                    <>
                      <span className="font-heading text-5xl font-bold text-gold">$0</span>
                      <span className="font-body text-slate ml-2 line-through">{plan.monthlyPrice}/mo</span>
                    </>
                  ) : (
                    <>
                      <span className={`font-heading text-5xl font-bold ${plan.featured ? "text-gold" : "text-navy"}`}>
                        {getDisplayPrice(plan)}
                      </span>
                      {plan.monthlyPrice !== "FREE" && (
                        <span className="font-body text-slate">/month</span>
                      )}
                    </>
                  )}
                </div>

                {/* Annual savings badge */}
                {isAnnual && plan.annualSavings && ctaState === 'LAUNCH' && (
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-sage bg-sage/10 px-2 py-1 rounded-full">
                      {plan.annualSavings}
                    </span>
                  </div>
                )}

                <p className="font-body text-sm text-slate mb-6">
                  {ctaState === 'BETA' && plan.featured ? 'Free during beta period' : plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm text-charcoal"
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 font-bold ${plan.featured ? "text-gold" : "text-sage"}`} strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.cta === "Contact Sales" ? (
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={plan.featured ? handleCTAClick : undefined}
                    variant={plan.featured ? "hero" : "outline"}
                    className={`w-full mt-auto ${plan.featured ? "shadow-gold" : ""}`}
                  >
                    {plan.featured ? getSmartCTAText() : plan.cta}
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="font-body text-sm text-slate">
            <span className="text-sage">✓</span> 30-Day Money Back Guarantee • <span className="text-sage">✓</span> Secure Payments • <span className="text-sage">✓</span> No Hidden Fees • <span className="text-sage">✓</span> Cancel Anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
