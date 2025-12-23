import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Cookie, Shield, BarChart3, Target, Wrench, Info, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const cookieTypes = [
  {
    id: "essential",
    title: "Essential Cookies",
    icon: Shield,
    required: true,
    description: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you.",
    cookies: [
      { name: "session_id", purpose: "Maintains your login session", duration: "Session" },
      { name: "csrf_token", purpose: "Security token to prevent cross-site attacks", duration: "Session" },
      { name: "cookie-consent", purpose: "Remembers your cookie preferences", duration: "1 year" },
    ]
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    icon: BarChart3,
    required: false,
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    cookies: [
      { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics - distinguishes users", duration: "24 hours" },
      { name: "_gat", purpose: "Google Analytics - throttles request rate", duration: "1 minute" },
      { name: "plausible", purpose: "Privacy-focused analytics", duration: "Session" },
    ]
  },
  {
    id: "functional",
    title: "Functional Cookies",
    icon: Wrench,
    required: false,
    description: "These cookies enable personalized features and remember your preferences to enhance your experience.",
    cookies: [
      { name: "theme", purpose: "Remembers your dark/light mode preference", duration: "1 year" },
      { name: "language", purpose: "Stores your language preference", duration: "1 year" },
      { name: "recent_searches", purpose: "Remembers your recent legal searches", duration: "30 days" },
    ]
  },
  {
    id: "marketing",
    title: "Marketing Cookies",
    icon: Target,
    required: false,
    description: "These cookies are used to track visitors across websites to display relevant advertisements.",
    cookies: [
      { name: "_fbp", purpose: "Facebook - tracks visits across websites", duration: "3 months" },
      { name: "_gcl_au", purpose: "Google Ads - conversion tracking", duration: "3 months" },
      { name: "li_fat_id", purpose: "LinkedIn - conversion tracking", duration: "30 days" },
    ]
  }
];

const managementInfo = [
  {
    title: "Browser Settings",
    description: "Most browsers allow you to refuse or accept cookies through settings. Note that disabling cookies may affect website functionality."
  },
  {
    title: "Our Cookie Banner",
    description: "Use our cookie consent banner to manage your preferences at any time. Click 'Manage Cookies' in the footer to reopen it."
  },
  {
    title: "Opt-Out Tools",
    description: "You can opt out of Google Analytics at tools.google.com/dlpage/gaoptout and manage ad preferences at aboutads.info/choices."
  }
];

export default function Cookies() {
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
              <Cookie className="w-4 h-4" />
              Transparency First
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              We believe in transparency. Here's exactly what cookies we use, 
              why we use them, and how you can control them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <Info className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-2">
                What Are Cookies?
              </h2>
              <p className="text-white/70">
                Cookies are small text files stored on your device when you visit a website. 
                They help websites remember your preferences, understand how you use the site, 
                and provide relevant content. Some cookies are essential for the site to work, 
                while others help us improve your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-heading text-2xl font-bold text-white">
            Cookies We Use
          </h2>
          
          {cookieTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {type.title}
                      </h3>
                      {type.required && (
                        <span className="px-2 py-0.5 bg-sage/20 text-sage text-xs rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-white/5">
                <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-white/5 text-white/40 text-xs font-medium uppercase tracking-wider">
                  <span>Cookie Name</span>
                  <span>Purpose</span>
                  <span>Duration</span>
                </div>
                {type.cookies.map((cookie) => (
                  <div key={cookie.name} className="grid grid-cols-3 gap-4 px-6 py-4 text-sm">
                    <code className="text-gold font-mono text-xs">{cookie.name}</code>
                    <span className="text-white/70">{cookie.purpose}</span>
                    <span className="text-white/50">{cookie.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Managing Your Cookies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {managementInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-sage mb-3" />
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-4">
            For more information about how we handle your data:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/legal/privacy"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal/gdpr"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              GDPR Compliance
            </Link>
          </div>
          <p className="text-white/40 text-sm mt-8">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
