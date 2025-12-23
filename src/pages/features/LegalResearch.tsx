import { motion } from "framer-motion";
import { Search, MessageSquare, BookOpen, Globe, CheckCircle, Users, Building, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function LegalResearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

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
              <Search className="w-14 h-14 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Legal Research <span className="text-gold">That Thinks</span>
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10">
              Get instant answers with Bluebook citations from Supreme Court cases, federal statutes, and state law. Our AI understands context, not just keywords.
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
            <p className="text-charcoal/70 text-lg">Try a sample query and watch AI work</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="What is the burden of proof in Title VII claims?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 px-6 py-4 text-lg border-2 border-charcoal/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching}
                className="px-8 py-4 text-lg font-bold whitespace-nowrap" 
                style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', color: '#0F1419' }}
              >
                {isSearching ? 'Searching...' : 'Research →'}
              </Button>
            </div>

            {showResults && (
              <div className="space-y-4">
                <div className="bg-cream rounded-xl p-6 border-l-4 border-gold">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-gold text-white text-xs font-bold rounded-full uppercase">Case Law</span>
                    <span className="text-gold font-semibold text-sm">0.8s</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-2">McDonnell Douglas Corp. v. Green, 411 U.S. 792 (1973)</h4>
                  <p className="text-charcoal/70 mb-3">"The complainant in a Title VII trial must carry the initial burden under the statute of establishing a prima facie case of racial discrimination..."</p>
                  <code className="text-sm text-charcoal/50 italic">411 U.S. 792, 802 (1973)</code>
                </div>

                <div className="bg-cream rounded-xl p-6 border-l-4 border-sage">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-sage text-white text-xs font-bold rounded-full uppercase">Statute</span>
                    <span className="text-gold font-semibold text-sm">1.2s</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-2">42 U.S.C. § 2000e-2(a)</h4>
                  <p className="text-charcoal/70">"It shall be an unlawful employment practice for an employer to fail or refuse to hire or to discharge any individual..."</p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-gold/20">
                  {[
                    { value: "12 Cases", label: "Relevant precedents" },
                    { value: "4 Statutes", label: "Primary authorities" },
                    { value: "2.1 sec", label: "Total time" },
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
              </div>
            )}
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
              { icon: MessageSquare, title: "Natural Language Search", desc: "Ask questions in plain English. No Boolean operators required. Our AI understands context, not just keywords." },
              { icon: BookOpen, title: "Bluebook Citations", desc: "Every result includes proper Bluebook citations ready for your briefs. With pinpoint references and full case information." },
              { icon: Globe, title: "Multi-Jurisdiction", desc: "Search across federal, state, and local law simultaneously. Filter by court level, date, and specific judges." },
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
              { value: "2.4M+", label: "Cases Indexed" },
              { value: "98%", label: "Citation Accuracy" },
              { value: "2.1s", label: "Avg Response Time" },
              { value: "50+", label: "Jurisdictions" },
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
              { num: "1", title: "Ask Your Question", desc: "Type your legal question in plain English. No special syntax or keywords required." },
              { num: "2", title: "AI Analyzes Context", desc: "Our AI understands legal concepts, synonyms, and related doctrines to find the most relevant authorities." },
              { num: "3", title: "Get Verified Results", desc: "Receive properly formatted citations with case summaries, statutes, and regulations in seconds." },
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
                desc: "Compete with large firms by accessing the same quality research in a fraction of the time. Save $2,000+ monthly on research costs.",
                benefits: ["Replace expensive databases", "Research during client consultations", "Increase billable hours"]
              },
              { 
                icon: Building, 
                title: "Small Law Firms", 
                desc: "Standardize research quality across your team. Reduce training time for junior associates by 60%.",
                benefits: ["Consistent citation formatting", "Collaborative research", "Quality control built-in"]
              },
              { 
                icon: GraduationCap, 
                title: "Legal Researchers", 
                desc: "Focus on analysis, not searching. Let AI handle the mechanical research while you apply legal expertise.",
                benefits: ["Faster memo completion", "More cases per day", "Better work-life balance"]
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Research?</h2>
              <p className="text-white/85 text-lg mb-10">Join 10,000+ attorneys who save 20+ hours per month with LexOrbit.</p>
              
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
