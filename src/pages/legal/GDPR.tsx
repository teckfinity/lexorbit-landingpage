import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Users, Database, Globe, FileText, Clock, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const rights = [
  { title: "Right to Access", description: "Request a copy of your personal data we hold" },
  { title: "Right to Rectification", description: "Correct inaccurate or incomplete data" },
  { title: "Right to Erasure", description: "Request deletion of your personal data" },
  { title: "Right to Restrict Processing", description: "Limit how we use your data" },
  { title: "Right to Data Portability", description: "Receive your data in a portable format" },
  { title: "Right to Object", description: "Object to processing for certain purposes" },
  { title: "Rights Related to Automated Decisions", description: "Challenge decisions made solely by algorithms" },
  { title: "Right to Withdraw Consent", description: "Withdraw consent at any time" }
];

const sections = [
  {
    id: "lawful-basis",
    title: "Lawful Basis for Processing",
    icon: FileText,
    content: `We process personal data under the following lawful bases:

• **Contract Performance**: Processing necessary to provide our services
• **Legitimate Interests**: Improving services, security, and fraud prevention
• **Legal Obligations**: Compliance with applicable laws and regulations
• **Consent**: Where you have explicitly agreed to processing`
  },
  {
    id: "data-transfers",
    title: "International Data Transfers",
    icon: Globe,
    content: `When we transfer data outside the EEA, we ensure adequate protection through:

• Standard Contractual Clauses (SCCs) approved by the European Commission
• Adequacy decisions for countries with equivalent protection
• Binding Corporate Rules for intra-group transfers
• Your explicit consent where appropriate`
  },
  {
    id: "retention",
    title: "Data Retention",
    icon: Clock,
    content: `We retain personal data only as long as necessary:

• Account data: Duration of account plus 30 days
• Documents: Deleted within 30 days of processing
• Billing records: 7 years (legal requirement)
• Support inquiries: 2 years for quality purposes

You can request earlier deletion at any time.`
  },
  {
    id: "dpo",
    title: "Data Protection Officer",
    icon: Users,
    content: `Our DPO oversees GDPR compliance:

**Contact**: dpo@lexorbit.com
**Address**: 123 Legal Tech Plaza, San Francisco, CA 94102

The DPO is available to address any questions or concerns about how we handle your personal data.`
  }
];

export default function GDPR() {
  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation showBanner={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm mb-6">
              <Shield className="w-4 h-4" />
              EU Regulation 2016/679
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              GDPR Compliance
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              LexOrbit is fully compliant with the General Data Protection Regulation. 
              Here's how we protect the rights of EU citizens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Your Rights Under GDPR
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rights.map((right, i) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-gold/20 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-medium">{right.title}</h3>
                  <p className="text-white/60 text-sm">{right.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <section.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="text-white/70 leading-relaxed whitespace-pre-line prose prose-invert prose-sm">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Exercise Rights */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy border border-white/10 rounded-2xl p-8 text-center">
            <Database className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Exercise Your Rights
            </h2>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Submit a data subject access request or exercise any of your GDPR rights.
              We respond within 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@lexorbit.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                privacy@lexorbit.com
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
