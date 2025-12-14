import { motion } from "framer-motion";
import { Check, X, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  { feature: "Pricing", legalai: "$39/month", enterprise: "$3,000-10,000/year" },
  { feature: "Setup Time", legalai: "Instant", enterprise: "2-4 weeks" },
  { feature: "Learning Curve", legalai: "Minutes", enterprise: "Days/weeks" },
  { feature: "Judge Analytics", legalai: "8,500+ judges", enterprise: "Limited" },
  { feature: "Predictive AI", legalai: "Included", enterprise: "Extra $$$$" },
  { feature: "Free Trial", legalai: "14 days", enterprise: "Demo only" },
  { feature: "Support", legalai: "24-hour response", enterprise: "Dedicated rep (extra cost)" },
  { feature: "Contract", legalai: "Monthly, cancel anytime", enterprise: "Annual commitment" },
];

export function ComparisonSection() {
  const annualSavings = 2851;

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Why Solo Practitioners Choose{" "}
            <span className="text-gradient-gold">LexOrbit</span>
          </h2>
          <p className="font-body text-lg text-charcoal max-w-2xl mx-auto">
            See how we compare to enterprise legal tools
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-elevated"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-navy">
                <th className="font-heading text-base font-semibold text-white text-left py-5 px-6 w-[40%]">
                  Feature
                </th>
                <th className="font-heading text-base font-semibold text-left pt-8 pb-5 px-6 w-[30%] bg-gradient-gold relative">
                  <motion.span 
                    className="absolute top-2 left-1/2 -translate-x-1/2 bg-white text-gold text-xs font-bold px-3 py-1 rounded-full shadow-gold flex items-center gap-1 whitespace-nowrap"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Trophy className="w-3 h-3" />
                    Best Value
                  </motion.span>
                  <div className="flex items-center gap-2 text-navy-dark">
                    <Sparkles className="w-5 h-5" />
                    LexOrbit
                  </div>
                </th>
                <th className="font-heading text-base font-semibold text-white text-left py-5 px-6 w-[30%]">
                  Enterprise Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-muted hover:bg-gold/5 transition-colors"
                >
                  <td className="font-body text-charcoal py-4 px-6 font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 bg-gold/5 border-l-[3px] border-r-[3px] border-gold">
                    <span className="font-body font-bold text-navy">
                      {row.legalai}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-body text-charcoal/70">
                      {row.enterprise}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Savings Footer with CTA */}
          <div className="bg-gradient-gold px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-navy-dark/80 font-body">💰 Switch to LexOrbit and</span>
                <span className="font-heading text-2xl font-bold text-navy-dark">
                  SAVE ${annualSavings.toLocaleString()}+
                </span>
                <span className="text-navy-dark/80 font-body">annually</span>
              </div>
              <Button variant="default" size="lg" className="bg-navy-dark text-white hover:bg-navy whitespace-nowrap">
                Start Free Trial →
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {/* LegalAI Pro Card - First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-elevated border-2 border-gold"
          >
            <div className="bg-gradient-gold px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-navy-dark" />
                  <span className="font-heading font-bold text-navy-dark text-lg">LexOrbit</span>
                </div>
                <span className="bg-white text-gold text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  Best Value
                </span>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {comparisonData.map((row) => (
                <div key={row.feature} className="flex justify-between items-center py-2 border-b border-muted last:border-0">
                  <span className="font-body text-charcoal/70 text-sm">{row.feature}</span>
                  <span className="font-body font-bold text-navy text-sm">{row.legalai}</span>
                </div>
              ))}
            </div>
            <div className="px-5 pb-5">
              <Button variant="hero" size="lg" className="w-full">
                Start Free Trial →
              </Button>
            </div>
          </motion.div>

          {/* Enterprise Card - Second */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-card"
          >
            <div className="bg-navy px-5 py-4">
              <span className="font-heading font-bold text-white text-lg">Enterprise Tools</span>
            </div>
            <div className="p-5 space-y-3">
              {comparisonData.map((row) => (
                <div key={row.feature} className="flex justify-between items-center py-2 border-b border-muted last:border-0">
                  <span className="font-body text-charcoal/70 text-sm">{row.feature}</span>
                  <span className="font-body text-charcoal/60 text-sm">{row.enterprise}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Savings Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-gold rounded-2xl p-6 text-center"
          >
            <p className="text-navy-dark/80 font-body mb-2">💰 Switch to LexOrbit and</p>
            <p className="font-heading text-3xl font-bold text-navy-dark mb-4">
              SAVE ${annualSavings.toLocaleString()}+ annually
            </p>
            <Button variant="default" size="lg" className="bg-navy-dark text-white hover:bg-navy w-full">
              Start Free Trial →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
