import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText, Scale, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: FileText,
    content: `By accessing or using LexOrbit's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all users, including attorneys, law firms, legal professionals, and any other individuals or entities accessing our platform.`
  },
  {
    id: "services",
    title: "2. Description of Services",
    icon: Scale,
    content: `LexOrbit provides AI-powered legal research tools, document analysis, judge analytics, citation mapping, and related legal technology services.

Our services are designed to assist legal professionals but do not constitute legal advice. Users remain responsible for verifying all information and exercising professional judgment.`
  },
  {
    id: "accounts",
    title: "3. User Accounts",
    icon: Users,
    content: `You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.

You must notify us immediately of any unauthorized access or security breach. We reserve the right to suspend accounts that violate these terms.`
  },
  {
    id: "usage",
    title: "4. Acceptable Use",
    icon: Shield,
    content: `You agree to use LexOrbit only for lawful purposes and in accordance with these terms. Prohibited activities include:

• Attempting to gain unauthorized access to our systems
• Using automated tools to scrape or extract data
• Sharing account credentials with unauthorized parties
• Using the service to harass, defame, or harm others
• Violating any applicable laws or regulations`
  },
  {
    id: "ip",
    title: "5. Intellectual Property",
    icon: FileText,
    content: `All content, features, and functionality of LexOrbit are owned by us and protected by intellectual property laws. You may not copy, modify, or distribute our proprietary materials without permission.

Content you upload remains yours, but you grant us a license to process it for providing our services.`
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    icon: Scale,
    content: `LexOrbit is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.

Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.`
  },
  {
    id: "termination",
    title: "7. Termination",
    icon: Users,
    content: `We may terminate or suspend your access at any time for violations of these terms. Upon termination, your right to use the service ceases immediately.

You may cancel your account at any time through your account settings or by contacting support.`
  },
  {
    id: "changes",
    title: "8. Changes to Terms",
    icon: FileText,
    content: `We may update these terms from time to time. We will notify you of material changes via email or through the platform. Continued use after changes constitutes acceptance.

Last updated: December 2024`
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation showBanner={true} />
      
      {/* Hero */}
         <section className="pt-40 pb-28 px-4">
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
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-white/60 text-lg">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-full bg-white/5 text-white/60 text-sm hover:bg-gold/20 hover:text-gold transition-all"
              >
                {section.title.split(". ")[1]}
              </a>
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

      {/* Contact */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-4">
            Questions about these terms?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            Contact our legal team
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
