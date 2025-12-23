import { motion } from "framer-motion";
import { ArrowLeft, Search, MessageCircle, Mail, Phone, Clock, CheckCircle, HelpCircle, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const quickLinks = [
  { icon: HelpCircle, label: "FAQ", href: "/#faq" },
  { icon: FileText, label: "Documentation", href: "/resources/documentation" },
  { icon: Users, label: "Community", href: "#" },
];

const commonIssues = [
  { question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the email instructions." },
  { question: "Why isn't my search returning results?", answer: "Try broadening your search terms or adjusting jurisdiction filters." },
  { question: "How do I upgrade my plan?", answer: "Go to Settings > Billing > Change Plan to view upgrade options." },
  { question: "Can I export my research?", answer: "Yes! Click the export button on any search results page to download as PDF or Word." },
];

const statusItems = [
  { service: "Legal Research", status: "operational" },
  { service: "Document Analysis", status: "operational" },
  { service: "Predictive AI", status: "operational" },
  { service: "API", status: "operational" },
];

export default function SupportCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIssue, setExpandedIssue] = useState<number | null>(null);

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
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
              Support <span className="text-gold">Center</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">
              We're here to help. Find answers or reach out directly.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Describe your issue..."
                className="pl-12 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-4 border-b border-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-charcoal/10 hover:border-gold/30 transition-all"
              >
                <link.icon className="w-4 h-4 text-gold" />
                <span className="font-medium text-navy">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Options */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="font-heading text-lg font-bold text-navy mb-4">Get in Touch</h2>
              
              <Link to="/contact" className="block p-4 bg-white rounded-xl border border-charcoal/10 hover:border-gold/30 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy group-hover:text-gold transition-colors">Live Chat</p>
                    <p className="text-xs text-charcoal/60">Usually responds in minutes</p>
                  </div>
                </div>
              </Link>

              <a href="mailto:support@lexorbit.ai" className="block p-4 bg-white rounded-xl border border-charcoal/10 hover:border-gold/30 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy group-hover:text-gold transition-colors">Email</p>
                    <p className="text-xs text-charcoal/60">support@lexorbit.ai</p>
                  </div>
                </div>
              </a>

              <div className="p-4 bg-white rounded-xl border border-charcoal/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Hours</p>
                    <p className="text-xs text-charcoal/60">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              {/* System Status */}
              <div className="mt-8 p-4 bg-navy rounded-xl">
                <h3 className="font-semibold text-white mb-3">System Status</h3>
                <div className="space-y-2">
                  {statusItems.map((item) => (
                    <div key={item.service} className="flex items-center justify-between text-sm">
                      <span className="text-white/70">{item.service}</span>
                      <span className="flex items-center gap-1 text-sage">
                        <CheckCircle className="w-3 h-3" />
                        Operational
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Common Issues */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-lg font-bold text-navy mb-4">Common Questions</h2>
              
              <div className="space-y-3">
                {commonIssues.map((issue, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setExpandedIssue(expandedIssue === index ? null : index)}
                      className={`w-full text-left p-4 bg-white rounded-xl border transition-all ${
                        expandedIssue === index ? "border-gold" : "border-charcoal/10 hover:border-gold/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-navy">{issue.question}</span>
                        <span className={`text-gold transition-transform ${expandedIssue === index ? "rotate-180" : ""}`}>
                          ↓
                        </span>
                      </div>
                      {expandedIssue === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-3 pt-3 border-t border-charcoal/10 text-sm text-charcoal/70"
                        >
                          {issue.answer}
                        </motion.p>
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Still need help */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl text-center">
                <p className="text-navy mb-4">Still can't find what you need?</p>
                <Link to="/contact">
                  <Button
                    className="px-8"
                    style={{ 
                      background: 'linear-gradient(135deg, #D4A574, #E5C69F)', 
                      color: '#0F1419',
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
