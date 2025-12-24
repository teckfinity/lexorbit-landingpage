import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BetaModal } from "@/components/BetaModal";
import { WaitlistModal } from "@/components/WaitlistModal";
import { SmartCTAButton } from "@/components/SmartCTAButton";
import {
  VisaIcon,
  MastercardIcon,
  AmexIcon,
  ApplePayIcon,
  GooglePayIcon,
  PaypalIcon,
  BankTransferIcon,
  WireTransferIcon,
} from "@/components/PaymentIcons";
import { 
  CreditCard, 
  Receipt, 
  Calendar, 
  Shield, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight,
  FileText,
  RefreshCcw,
  Ban
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Starter",
    monthlyPrice: "FREE",
    annualPrice: "FREE",
    description: "Perfect for trying LexOrbit",
    features: ["5 AI queries/month", "2 document summaries", "Basic citation maps", "View-only analytics"],
  },
  {
    name: "Professional",
    monthlyPrice: "$39",
    annualPrice: "$29",
    annualTotal: "$348",
    savings: "$120",
    description: "For solo practitioners",
    features: ["Unlimited AI queries", "Unlimited summaries", "Basic judge analytics", "Email support"],
    popular: true,
  },
  {
    name: "Business",
    monthlyPrice: "$119",
    annualPrice: "$99",
    annualTotal: "$1,188",
    savings: "$240",
    description: "For small firms (5-20)",
    features: ["Everything in Professional", "Advanced analytics", "Predictive AI", "Priority support"],
  },
  {
    name: "Enterprise",
    monthlyPrice: "$249+",
    annualPrice: "Custom",
    description: "For larger organizations",
    features: ["Everything in Business", "Custom AI training", "Dedicated support", "On-premise option"],
  },
];

const paymentMethods = [
  { name: "Visa", Icon: VisaIcon, recommended: true },
  { name: "Mastercard", Icon: MastercardIcon, recommended: true },
  { name: "American Express", Icon: AmexIcon },
  { name: "Apple Pay", Icon: ApplePayIcon },
  { name: "Google Pay", Icon: GooglePayIcon },
  { name: "PayPal", Icon: PaypalIcon },
  { name: "Bank Transfer", Icon: BankTransferIcon },
  { name: "Wire Transfer", Icon: WireTransferIcon },
];

const billingFAQs = [
  {
    question: "When am I charged?",
    answer: "Monthly plans are charged on the same date each month. Annual plans are charged once per year on your subscription anniversary date.",
  },
  {
    question: "Can I switch between monthly and annual?",
    answer: "Yes! You can switch anytime. When upgrading to annual, you'll receive a prorated credit for the remaining monthly period.",
  },
  {
    question: "How do refunds work?",
    answer: "We offer a 30-day money-back guarantee on all new subscriptions. If you're not satisfied, contact us for a full refund—no questions asked.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. Cancel with one click, no penalties or awkward phone calls. You'll keep access until the end of your billing period.",
  },
  {
    question: "How do I get an invoice?",
    answer: "Invoices are automatically sent to your email after each payment. You can also download them from your account dashboard anytime.",
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes! Annual plans save up to 25%. We also offer special rates for non-profits, legal aid organizations, and students.",
  },
];

export default function Billing() {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-28 bg-gradient-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-6">
              <Receipt className="w-4 h-4 text-gold" />
              <span className="text-gold font-body text-sm font-medium">Billing & Payments</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Simple, Transparent <span className="text-gradient-gold">Billing</span>
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              No hidden fees. No surprise charges. Just straightforward pricing that works for your practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Pricing Breakdown
            </h2>
            <p className="font-body text-charcoal/70">
              Compare monthly vs. annual billing at a glance
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-card overflow-hidden">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="font-heading text-left py-4 px-6">Plan</th>
                  <th className="font-heading text-center py-4 px-6">Monthly</th>
                  <th className="font-heading text-center py-4 px-6">Annual (per month)</th>
                  <th className="font-heading text-center py-4 px-6">Annual Total</th>
                  <th className="font-heading text-center py-4 px-6">You Save</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, index) => (
                  <tr 
                    key={tier.name} 
                    className={`border-b border-muted ${tier.popular ? 'bg-gold/5' : ''}`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-navy">{tier.name}</span>
                        {tier.popular && (
                          <span className="text-xs bg-gold text-navy-dark px-2 py-0.5 rounded-full font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="font-body text-sm text-charcoal/60">{tier.description}</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="font-heading font-bold text-navy">{tier.monthlyPrice}</span>
                      {tier.monthlyPrice !== "FREE" && <span className="text-charcoal/60">/mo</span>}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="font-heading font-bold text-gold">{tier.annualPrice}</span>
                      {tier.annualPrice !== "FREE" && tier.annualPrice !== "Custom" && <span className="text-charcoal/60">/mo</span>}
                    </td>
                    <td className="py-4 px-6 text-center font-body text-charcoal/70">
                      {tier.annualTotal || "—"}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {tier.savings ? (
                        <span className="text-sage font-semibold">{tier.savings}/year</span>
                      ) : (
                        <span className="text-charcoal/40">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <SmartCTAButton
              onOpenBetaModal={() => setIsBetaModalOpen(true)}
              onOpenWaitlistModal={() => setIsWaitlistModalOpen(true)}
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* How Billing Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              How Billing Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Billing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cream rounded-2xl p-8 border border-muted"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-charcoal/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">Monthly Billing</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Charged on the same date each month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Cancel anytime with no fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Perfect for flexibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Switch to annual anytime</span>
                </li>
              </ul>
            </motion.div>

            {/* Annual Billing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-8 border-2 border-gold"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-navy-dark" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy">Annual Billing</h3>
                  <span className="text-xs bg-sage/20 text-sage px-2 py-0.5 rounded-full font-semibold">
                    Save up to 25%
                  </span>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Pay once per year, save significantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Charged on your anniversary date</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Best value for committed users</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-body text-charcoal">Lock in current pricing</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Accepted Payment Methods
            </h2>
            <p className="font-body text-charcoal/70">
              We accept all major payment methods for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white rounded-xl p-4 text-center border border-muted hover:border-gold/50 hover:shadow-[0_8px_24px_rgba(212,165,116,0.4)] transition-all cursor-pointer relative"
              >
                {method.recommended && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] bg-gold text-navy-dark px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                    Recommended
                  </span>
                )}
                <method.Icon className="w-12 h-8 mx-auto mb-2" />
                <span className="font-body text-sm text-charcoal">{method.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-6 text-charcoal/60"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sage" />
              <span className="font-body text-sm">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sage" />
              <span className="font-body text-sm">PCI Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sage" />
              <span className="font-body text-sm">SOC 2 Certified</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Invoice Information */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Invoices & Receipts
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">Automatic Invoices</h3>
              <p className="font-body text-sm text-charcoal/70">
                Invoices are automatically emailed after each payment for your records.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-cream rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <RefreshCcw className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">Download Anytime</h3>
              <p className="font-body text-sm text-charcoal/70">
                Access and download all past invoices from your account dashboard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-cream rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Receipt className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">Custom Details</h3>
              <p className="font-body text-sm text-charcoal/70">
                Add your firm name, address, and tax ID to invoices for easy expensing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refunds & Cancellation */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-navy rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold text-white mb-4">
                  30-Day Money-Back Guarantee
                </h2>
                <p className="font-body text-white/70 mb-6">
                  Not satisfied? Get a full refund within 30 days of your first payment—no questions asked. 
                  We're confident you'll love LexOrbit, but if it's not right for you, we'll make it right.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="text-white/80">Full refund, no questions asked</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="text-white/80">Cancel with one click</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="text-white/80">Export your data before leaving</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gold/20 flex items-center justify-center">
                  <Ban className="w-16 h-16 text-gold" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Billing Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {billingFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-cream rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-2">{faq.question}</h3>
                    <p className="font-body text-sm text-charcoal/70">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-charcoal/60 mb-4">
              Have more questions about billing?
            </p>
            <Link to="/contact">
              <Button variant="outline">
                Contact Support <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <BetaModal 
        isOpen={isBetaModalOpen} 
        onClose={() => setIsBetaModalOpen(false)}
        onSwitchToWaitlist={() => {
          setIsBetaModalOpen(false);
          setIsWaitlistModalOpen(true);
        }}
      />
      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </div>
  );
}