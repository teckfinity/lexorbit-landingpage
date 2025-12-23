import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

const faqs = [
  {
    question: '"Is this actually accurate or just AI hallucination?"',
    answer: `Fair question. Here's the truth:

• 98% citation accuracy (verified by real attorneys)
• Every case cite links to original source
• AI flags low-confidence answers
• Human review always recommended
• We show our confidence score on every result`,
    cta: { label: "See Sample Output", url: "#" },
  },
  {
    question: '"I\'m terrible with technology. Is this complicated?"',
    answer: `If you can use Google, you can use this.

• Plain English questions (no Boolean operators)
• Results in under 3 seconds
• Clean, simple interface
• 5-minute video walkthrough
• Live chat if you get stuck

👵 Fun fact: Our oldest user is 68 and loves it.`,
  },
  {
    question: '"What about data security? My clients\' info is sensitive."',
    answer: `We take security as seriously as you take privilege.

• All data encrypted in transit and at rest (AES-256)
• Your documents are NEVER used to train AI models
• SOC 2 Type II compliant
• GDPR compliant
• You can delete all your data anytime

Your data belongs to you. Period.`,
  },
  {
    question: '"How is this different from Westlaw/LexisNexis?"',
    answer: `Great question. Here's the honest comparison:

Westlaw/Lexis:
• $3,000-10,000+/year
• Boolean search required
• No predictive analytics
• No judge analytics

LexOrbit:
• $39/month (that's $468/year)
• Plain English queries
• AI predictions included
• Judge analytics for 8,500+ judges

Same research power. 1/10th the price. 10x easier.`,
  },
  {
    question: '"How does billing work? What about refunds?"',
    answer: `Simple and transparent billing:

Monthly Plan:
• Charged on the same date each month
• Cancel anytime with one click
• No cancellation fees ever

Annual Plan:
• Pay upfront for 12 months (save up to 25%)
• Charged once per year on your anniversary date
• Cancel anytime—use remaining time, no partial refunds

Refund Policy:
• 30-day money-back guarantee on all new subscriptions
• Not satisfied? Full refund, no questions asked
• Contact support@getlexorbit.com for any billing issues`,
  },
  {
    question: '"What if I need to cancel?"',
    answer: `Cancel anytime. Literally one click.

• No contracts
• No penalties
• No awkward phone calls
• Keep access until end of billing period
• Export all your data first if you want

We'd rather earn your loyalty than lock you in.`,
  },
  {
    question: '"Can AI really replace my research skills?"',
    answer: `No. And that's the point.

LegalAI Pro doesn't replace your judgment—it amplifies it.

Think of it like this: A calculator doesn't replace a mathematician's understanding. It just removes the tedious arithmetic so they can focus on the real problem.

Same here. We handle the grunt work. You handle the lawyering.`,
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            "Yeah, But..."{" "}
            <span className="text-gradient-gold">We Get It.</span>
          </h2>
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto">
            Real questions from real attorneys. No corporate fluff.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gold/20 rounded-2xl px-6 data-[state=open]:shadow-card data-[state=open]:border-gold/30 transition-all"
              >
                <AccordionTrigger className="font-heading text-lg font-bold text-navy hover:text-gold py-6 hover:no-underline [&[data-state=open]>svg]:text-gold [&[data-state=open]>svg]:rotate-45 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="font-body text-charcoal/80 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                  {faq.cta && (
                    <a
                      href={faq.cta.url}
                      className="inline-flex items-center gap-2 mt-4 font-body text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                    >
                      🔍 {faq.cta.label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}