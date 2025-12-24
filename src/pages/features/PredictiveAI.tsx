import { motion } from "framer-motion";
import { Brain, Target, Lightbulb, AlertTriangle, CheckCircle, Users, Building, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function PredictiveAI() {
  const [caseType] = useState("Employment Discrimination");
  const prediction = { success: 72, settlement: 85, duration: "14-18 months" };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation showBanner={true} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-28 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 165, 116, 0.03) 2px, rgba(212, 165, 116, 0.03) 4px)' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* <Link 
            to="/#features" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Features</span>
          </Link> */}
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-28 h-28 rounded-3xl mx-auto mb-8 flex items-center justify-center border-2 border-gold/30 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2), rgba(232, 204, 180, 0.1))', boxShadow: '0 12px 40px rgba(212, 165, 116, 0.2)' }}>
              <Brain className="w-14 h-14 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Predictive <span className="text-gold">AI</span>
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10">
              Know your odds before you file. Our AI analyzes millions of cases to predict outcomes, settlement likelihood, and case duration with 87% accuracy.
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
            <p className="text-charcoal/70 text-lg">Enter case details and see predicted outcomes</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-charcoal/70 mb-2">Case Type</label>
                <select className="w-full px-6 py-4 text-lg border-2 border-charcoal/20 rounded-xl focus:outline-none focus:border-gold transition-colors bg-white">
                  <option>Employment Discrimination</option>
                  <option>Contract Dispute</option>
                  <option>Personal Injury</option>
                  <option>Intellectual Property</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal/70 mb-2">Jurisdiction</label>
                <select className="w-full px-6 py-4 text-lg border-2 border-charcoal/20 rounded-xl focus:outline-none focus:border-gold transition-colors bg-white">
                  <option>Federal - 9th Circuit</option>
                  <option>Federal - 2nd Circuit</option>
                  <option>California State</option>
                  <option>New York State</option>
                </select>
              </div>
            </div>

            <Button className="w-full py-4 text-lg font-bold mb-8" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', color: '#0F1419' }}>
              Analyze Case →
            </Button>

            {/* Fixed Progress Circles - Fully visible on mobile */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Success Probability */}
              <div className="bg-cream rounded-xl p-6 text-center">
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                    <circle 
                      cx="50" cy="50" r="42" 
                      stroke="#D4A574" strokeWidth="8" fill="none"
                      strokeDasharray={`${prediction.success * 2.638} 263.8`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-black text-gold">{prediction.success}%</span>
                  </div>
                </div>
                <div className="text-charcoal/70 font-semibold">Success Probability</div>
              </div>

              {/* Settlement Likelihood */}
              <div className="bg-cream rounded-xl p-6 text-center">
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                    <circle 
                      cx="50" cy="50" r="42" 
                      stroke="#7A9B76" strokeWidth="8" fill="none"
                      strokeDasharray={`${prediction.settlement * 2.638} 263.8`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-black text-sage">{prediction.settlement}%</span>
                  </div>
                </div>
                <div className="text-charcoal/70 font-semibold">Settlement Likelihood</div>
              </div>

              {/* Estimated Duration */}
              <div className="bg-cream rounded-xl p-6 text-center">
                <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4 flex items-center justify-center bg-white/50 rounded-full">
                  <span className="text-xl sm:text-2xl font-black text-navy">{prediction.duration}</span>
                </div>
                <div className="text-charcoal/70 font-semibold">Est. Duration</div>
              </div>
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
              { icon: Target, title: "Outcome Prediction", desc: "Get success probability based on case type, jurisdiction, facts, and historical outcomes from similar cases." },
              { icon: Lightbulb, title: "Strategy Insights", desc: "Receive AI-powered recommendations on timing, venue selection, and argument emphasis." },
              { icon: AlertTriangle, title: "Risk Assessment", desc: "Identify weaknesses in your case before opposing counsel does. Prepare for likely challenges." },
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
              { value: "87%", label: "Prediction Accuracy" },
              { value: "5M+", label: "Cases Analyzed" },
              { value: "40+", label: "Practice Areas" },
              { value: "500+", label: "Factors Analyzed" },
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
              { num: "1", title: "Enter Case Details", desc: "Provide case type, jurisdiction, key facts, and parties. The more detail, the better the prediction." },
              { num: "2", title: "AI Analyzes Data", desc: "Our AI compares your case against millions of historical outcomes, identifying patterns and precedents." },
              { num: "3", title: "Get Predictions", desc: "Receive detailed predictions with confidence intervals, risk factors, and strategic recommendations." },
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
                title: "Plaintiff Attorneys", 
                desc: "Evaluate case strength before investing resources. Set realistic client expectations from day one.",
                benefits: ["Case screening", "Fee negotiations", "Client counseling"]
              },
              { 
                icon: Building, 
                title: "Defense Teams", 
                desc: "Assess exposure early. Make informed settlement decisions based on likely outcomes.",
                benefits: ["Risk quantification", "Settlement strategy", "Budget planning"]
              },
              { 
                icon: Briefcase, 
                title: "In-House Counsel", 
                desc: "Advise leadership with data. Justify litigation budgets with predicted outcomes.",
                benefits: ["Board reporting", "Vendor selection", "Cost forecasting"]
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Know Before You Go</h2>
              <p className="text-white/85 text-lg mb-10">Join 10,000+ attorneys who predict outcomes with LexOrbit.</p>
              
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