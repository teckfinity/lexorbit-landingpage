import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Eye, Database, Lock, Globe, UserCheck, Trash2, Bell, Mail } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "collect",
    title: "Information We Collect",
    icon: Database,
    content: `We collect information you provide directly, including:

• Account information (name, email, organization)
• Payment details (processed securely via Stripe)
• Documents you upload for analysis
• Usage data and search queries
• Communication preferences

We also automatically collect device information, IP addresses, and usage analytics to improve our services.`
  },
  {
    id: "use",
    title: "How We Use Your Data",
    icon: Eye,
    content: `Your information helps us:

• Provide and improve our legal research services
• Process transactions and send confirmations
• Personalize your experience and recommendations
• Communicate updates, tips, and support
• Ensure security and prevent fraud
• Comply with legal obligations

We never sell your personal data to third parties.`
  },
  {
    id: "security",
    title: "Data Security",
    icon: Lock,
    content: `We implement industry-leading security measures:

• AES-256 encryption for data at rest
• TLS 1.3 for data in transit
• SOC 2 Type II certified infrastructure
• Regular security audits and penetration testing
• Role-based access controls
• 24/7 security monitoring

Your documents are encrypted and isolated. Only you can access your uploaded content.`
  },
  {
    id: "sharing",
    title: "Data Sharing",
    icon: Globe,
    content: `We share data only when necessary:

• With service providers (hosting, payment processing)
• To comply with legal requirements
• To protect our rights and prevent fraud
• With your explicit consent

All third-party providers are bound by strict data protection agreements.`
  },
  {
    id: "rights",
    title: "Your Rights",
    icon: UserCheck,
    content: `You have the right to:

• Access your personal data
• Correct inaccurate information
• Request data deletion
• Export your data in portable format
• Opt out of marketing communications
• Withdraw consent at any time

Exercise these rights through your account settings or by contacting us.`
  },
  {
    id: "retention",
    title: "Data Retention",
    icon: Trash2,
    content: `We retain your data as follows:

• Account data: Until you delete your account
• Documents: Automatically deleted 30 days after processing (configurable)
• Usage logs: 90 days for security purposes
• Payment records: As required by law (typically 7 years)

You can request earlier deletion at any time.`
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: Bell,
    content: `We use cookies for:

• Essential site functionality
• Remembering your preferences
• Analytics and performance monitoring
• Security and fraud prevention

You can manage cookie preferences in your browser settings. Some features may not work without essential cookies.`
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    content: `For privacy-related inquiries:

Email: privacy@getlexorbit.com
Address: 123 Legal Tech Plaza, San Francisco, CA 94102

Data Protection Officer: dpo@getlexorbit.com

We respond to all privacy requests within 30 days.`
  }
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation showBanner={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm mb-6">
              <Lock className="w-4 h-4" />
              GDPR & CCPA Compliant
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60 text-lg">
              Your privacy matters. Here's how we protect it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Data Encrypted", value: "AES-256" },
              { label: "Compliance", value: "SOC 2 Type II" },
              { label: "Data Sold", value: "Never" }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-gold font-heading text-2xl font-bold">{item.value}</p>
                <p className="text-white/60 text-sm mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
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
                  <div className="text-white/70 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
