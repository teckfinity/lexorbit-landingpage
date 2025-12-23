import { motion } from "framer-motion";
import { ArrowLeft, Search, Book, Rocket, Settings, Shield, Zap, HelpCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const sections = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Set up your account and run your first search",
    articles: ["Quick Start Guide", "Account Setup", "Your First Search", "Understanding Results"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Search,
    title: "Legal Research",
    description: "Master the search tools and filters",
    articles: ["Advanced Search Syntax", "Boolean Operators", "Jurisdiction Filters", "Citation Formats"],
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Zap,
    title: "AI Features",
    description: "Get the most from predictive analytics",
    articles: ["Predictive AI Overview", "Judge Analytics", "Document Summarizer", "Citation Maps"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Settings,
    title: "Integrations",
    description: "Connect with your existing tools",
    articles: ["API Documentation", "Webhooks", "Microsoft 365", "Google Workspace"],
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise security and data protection",
    articles: ["SOC 2 Compliance", "Data Encryption", "Access Controls", "Audit Logs"],
    color: "from-red-500/20 to-red-500/5",
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    articles: ["Login Issues", "Search Problems", "Billing Questions", "Contact Support"],
    color: "from-orange-500/20 to-orange-500/5",
  },
];

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.articles.some(article => article.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-cream">
      <Navigation showBanner={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 165, 116, 0.03) 2px, rgba(212, 165, 116, 0.03) 4px)' }} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link> */}
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-8 h-8 text-gold" />
              <h1 className="font-heading text-4xl md:text-5xl font-black text-white">
                Docs
              </h1>
            </div>
            <p className="text-lg text-white/70 max-w-xl mb-8">
              Everything you need to get the most out of LexOrbit.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation..."
                className="pl-12 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all ${
                    expandedSection === index
                      ? "border-gold bg-white shadow-lg"
                      : "border-charcoal/10 bg-white hover:border-gold/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0`}>
                      <section.icon className="w-6 h-6 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-navy mb-1">{section.title}</h3>
                      <p className="text-sm text-charcoal/60">{section.description}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-charcoal/40 transition-transform ${expandedSection === index ? "rotate-90" : ""}`} />
                  </div>

                  {expandedSection === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 pt-4 border-t border-charcoal/10"
                    >
                      <ul className="space-y-2">
                        {section.articles.map((article) => (
                          <li key={article}>
                            <span className="text-sm text-charcoal/70 hover:text-gold cursor-pointer transition-colors flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-gold" />
                              {article}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12 p-6 bg-navy rounded-2xl text-center">
            <p className="text-white/70 mb-4">Can't find what you're looking for?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">
                Contact Support
              </Link>
              <span className="text-white/30">•</span>
              <Link to="/#faq" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
