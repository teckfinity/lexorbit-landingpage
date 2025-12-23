import { motion } from "framer-motion";
import { Wand2, FileCheck, Layers, Sparkles, CheckCircle, Users, Building, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function DocumentAutomation() {
  const [selectedTemplate, setSelectedTemplate] = useState("Employment Agreement");

  const templates = [
    { name: "Employment Agreement", category: "Contracts", time: "3 min" },
    { name: "Motion to Dismiss", category: "Litigation", time: "5 min" },
    { name: "NDA - Mutual", category: "Contracts", time: "2 min" },
    { name: "Discovery Request", category: "Litigation", time: "4 min" },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation showBanner={true} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 165, 116, 0.03) 2px, rgba(212, 165, 116, 0.03) 4px)' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link 
            to="/#features" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Features</span>
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-28 h-28 rounded-3xl mx-auto mb-8 flex items-center justify-center border-2 border-gold/30 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2), rgba(232, 204, 180, 0.1))', boxShadow: '0 12px 40px rgba(212, 165, 116, 0.2)' }}>
              <Wand2 className="w-14 h-14 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Document <span className="text-gold">Automation</span>
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10">
              156+ templates for contracts, motions, briefs, and more. Generate professional legal documents in minutes, not hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-10 py-6 text-lg font-bold shadow-lg hover:-translate-y-1 transition-all" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', color: '#0F1419', boxShadow: '0 8px 24px rgba(212, 165, 116, 0.4)' }}>
                Start Free Trial
              </Button>
                <Button 
  size="lg" 
  variant="outline" 
  className="px-10 py-6 text-lg border-2 border-white/30 text-white hover:bg-gold hover:text-black hover:border-gold bg-transparent transition-all duration-300"
>
  Watch Demo
</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 px-4 bg-cream-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">See It in Action</h2>
            <p className="text-charcoal/70 text-lg">Select a template and generate your document instantly</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Select Template</h3>
                <div className="space-y-3">
                  {templates.map((template, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedTemplate(template.name)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedTemplate === template.name 
                          ? 'border-gold bg-gold/5' 
                          : 'border-charcoal/10 hover:border-gold/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-navy">{template.name}</div>
                          <div className="text-sm text-charcoal/60">{template.category}</div>
                        </div>
                        <div className="text-gold font-semibold text-sm">{template.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Fill Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-1">Party 1 Name</label>
                    <input 
                      type="text" 
                      placeholder="Acme Corporation"
                      className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-1">Party 2 Name</label>
                    <input 
                      type="text" 
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-1">Effective Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:outline-none focus:border-gold"
                    />
                  </div>
                  <Button className="w-full py-4 text-lg font-bold mt-4" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', color: '#0F1419' }}>
                    Generate Document →
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-gold/20">
              {[
                { value: "3 min", label: "Generation time" },
                { value: "Word + PDF", label: "Export formats" },
                { value: "100%", label: "Customizable" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <div className="font-bold text-gold">{stat.value}</div>
                    <div className="text-xs text-charcoal/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            What Makes It Powerful
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "156+ Templates", desc: "Contracts, motions, briefs, discovery requests, and more. All professionally drafted and regularly updated." },
              { icon: Sparkles, title: "AI-Powered Drafting", desc: "Smart suggestions and auto-fill based on your case details. Never start from scratch again." },
              { icon: FileCheck, title: "Compliance Built-In", desc: "Templates updated for current court rules and requirements across 50+ jurisdictions." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-2xl p-8 border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(212, 165, 116, 0.12)' }}>
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #1A2332 0%, #0F1419 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
            {[
              { value: "200+", label: "Templates Available" },
              { value: "90%", label: "Time Saved" },
              { value: "15+", label: "Document Types" },
              { value: "100%", label: "Court Compliant" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-white/70 uppercase tracking-wider text-sm font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-charcoal/70 text-lg">Simple process, powerful results</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
            {[
              { num: "1", title: "Choose Template", desc: "Browse our library of 156+ professional templates organized by practice area and document type." },
              { num: "2", title: "Fill in Details", desc: "Enter case-specific information. AI auto-suggests based on your input and past documents." },
              { num: "3", title: "Generate & Export", desc: "Get a polished, court-ready document in Word or PDF format. Edit as needed." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex-1 flex flex-col md:flex-row items-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 w-full">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-black mb-6" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', boxShadow: '0 4px 12px rgba(212, 165, 116, 0.3)' }}>
                    {step.num}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex w-16 items-center justify-center text-gold text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Who Benefits Most
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                title: "Solo Practitioners", 
                desc: "Create professional documents without a support staff. Focus on strategy, not formatting.",
                benefits: ["No paralegal needed", "Consistent branding", "Faster turnaround"]
              },
              { 
                icon: Building, 
                title: "Small Firms", 
                desc: "Standardize document quality across your team. Reduce training time for new associates.",
                benefits: ["Firm-wide templates", "Quality control", "Knowledge management"]
              },
              { 
                icon: Briefcase, 
                title: "In-House Teams", 
                desc: "Handle routine documents internally. Free up budget for complex matters.",
                benefits: ["Cost reduction", "Faster execution", "Self-sufficiency"]
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 border-2 border-gold/20 hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all"
                style={{ background: 'linear-gradient(135deg, rgba(245, 230, 210, 0.15) 0%, #FFFFFF 50%)' }}
              >
                <item.icon className="w-14 h-14 text-gold mb-6" />
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-charcoal/80">
                      <CheckCircle className="w-5 h-5 text-sage" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 px-4 bg-cream-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1A2332 0%, #0F1419 100%)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(212, 165, 116, 0.12) 0%, transparent 70%)' }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Draft Smarter. Bill More.</h2>
              <p className="text-white/85 text-lg mb-10">Join 10,000+ attorneys who automate documents with LexOrbit.</p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button size="lg" className="px-12 py-6 text-lg font-bold" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', color: '#0F1419', boxShadow: '0 12px 32px rgba(212, 165, 116, 0.4)' }}>
                  Start Free Trial
                </Button>
                <Link to="/#pricing">
          <Button 
  size="lg" 
  variant="outline" 
  className="px-12 py-6 text-lg border-2 border-white/30 text-white hover:bg-gold hover:text-black hover:border-gold bg-transparent transition-all duration-300"
>
  View Pricing
</Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-white/70 text-sm">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sage" /> No credit card required</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sage" /> 14-day free trial</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sage" /> Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
