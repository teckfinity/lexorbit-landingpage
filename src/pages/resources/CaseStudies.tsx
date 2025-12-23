import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    company: "Morrison & Associates",
    industry: "Litigation",
    size: "45 attorneys",
    metric: "73%",
    metricLabel: "faster research",
    quote: "LexOrbit transformed how we prepare for trials. What used to take days now takes hours.",
    author: "James Morrison",
    role: "Managing Partner",
    results: ["$2.1M saved annually", "4x faster case prep", "98% accuracy rate"],
  },
  {
    id: 2,
    company: "Chen Legal Group",
    industry: "Corporate Law",
    size: "120 attorneys",
    metric: "89%",
    metricLabel: "time saved",
    quote: "The predictive AI helped us win a case we almost didn't take. Game changer.",
    author: "Linda Chen",
    role: "Senior Partner",
    results: ["$890K in new wins", "12 hrs/week saved", "3x ROI in 6 months"],
  },
  {
    id: 3,
    company: "Public Defenders Office",
    industry: "Criminal Defense",
    size: "28 attorneys",
    metric: "156",
    metricLabel: "cases managed",
    quote: "With limited resources, LexOrbit levels the playing field for our clients.",
    author: "Marcus Johnson",
    role: "Chief Public Defender",
    results: ["40% more cases handled", "Better client outcomes", "Zero learning curve"],
  },
];

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(0);
  const study = caseStudies[activeStudy];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation showBanner={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 165, 116, 0.03) 2px, rgba(212, 165, 116, 0.03) 4px)' }} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link> */}
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
              Case <span className="text-gold">Studies</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Real results from real firms. See how others are winning with LexOrbit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Case Study Viewer */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {caseStudies.map((cs, index) => (
              <button
                key={cs.id}
                onClick={() => setActiveStudy(index)}
                className={`flex-shrink-0 px-6 py-4 rounded-xl border-2 transition-all ${
                  activeStudy === index
                    ? "border-gold bg-gold/5"
                    : "border-charcoal/10 hover:border-gold/30"
                }`}
              >
                <div className="text-left">
                  <p className="font-bold text-navy">{cs.company}</p>
                  <p className="text-sm text-charcoal/60">{cs.industry}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Study */}
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Left - Quote & Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold text-gold">{study.company.charAt(0)}</span>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-navy">{study.company}</h2>
                  <p className="text-charcoal/60 text-sm">{study.industry} • {study.size}</p>
                </div>
              </div>

              <blockquote className="text-xl text-navy font-medium leading-relaxed mb-6 border-l-4 border-gold pl-6">
                "{study.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-charcoal/10" />
                <div>
                  <p className="font-semibold text-navy">{study.author}</p>
                  <p className="text-sm text-charcoal/60">{study.role}</p>
                </div>
              </div>
            </div>

            {/* Right - Results */}
            <div className="space-y-6">
              {/* Big Metric */}
              <div className="bg-navy rounded-2xl p-8 text-center">
                <p className="font-heading text-6xl font-black text-gold mb-2">{study.metric}</p>
                <p className="text-white/70">{study.metricLabel}</p>
              </div>

              {/* Results List */}
              <div className="space-y-3">
                {study.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-charcoal/5"
                  >
                    <TrendingUp className="w-5 h-5 text-gold" />
                    <span className="font-medium text-navy">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-charcoal/10">
            <button
              onClick={() => setActiveStudy(prev => prev === 0 ? caseStudies.length - 1 : prev - 1)}
              className="flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
            <div className="flex gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStudy(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeStudy === i ? "bg-gold w-6" : "bg-charcoal/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveStudy(prev => prev === caseStudies.length - 1 ? 0 : prev + 1)}
              className="flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
