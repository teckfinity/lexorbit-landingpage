import { motion } from "framer-motion";
import { Search, FileText, User, Network, Brain, Wand2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 xl:py-28" style={{ background: '#F5F3EE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">
            <span className="text-navy-dark">Six Superpowers.</span>{" "}
            <span className="text-gold">One Platform.</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/60">
            <span className="hidden sm:inline">Hover over each feature to see it in action</span>
            <span className="sm:hidden">Tap each feature to explore</span>
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:block max-w-[1280px] mx-auto">
          {/* Row 1: 2 cards */}
          <div className="grid grid-cols-[1.5fr_1fr] gap-4 xl:gap-6 mb-4 xl:mb-6">
            {/* Legal Research - ALWAYS Premium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[20px] p-10 min-h-[520px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(232, 204, 180, 0.25) 0%, rgba(245, 240, 230, 0.9) 20%, #FFFCF7 40%)',
                  border: '1px solid rgba(212, 165, 116, 0.3)',
                  borderLeft: '4px solid #D4A574',
                  boxShadow: '0 2px 8px rgba(180, 140, 100, 0.12)',
                }}
              >
                {/* Badge */}
                <span className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.5px] z-10"
                  style={{
                    background: '#D4A574',
                    color: '#1A2332',
                  }}
                >
                  Most Popular
                </span>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.05] group-hover:rotate-3"
                    style={{
                      background: 'rgba(212, 165, 116, 0.12)',
                      border: '1px solid rgba(212, 165, 116, 0.2)',
                    }}
                  >
                    <Search className="w-9 h-9 text-gold" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-[28px] font-extrabold mb-5 tracking-[-0.5px] leading-tight pr-24"
                  style={{ color: '#1A2332' }}
                >
                  Legal Research That Thinks
                </h3>

                {/* Demo Box */}
                <div className="rounded-xl p-4 mb-5"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-[18px] h-[18px] flex-shrink-0" style={{ color: '#6B7280' }} />
                    <span className="font-body text-[15px] italic" style={{ color: '#6B7280' }}>
                      "What is the burden of proof in Title VII claims?"
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-base leading-relaxed mb-5" style={{ color: '#3D4451' }}>
                  Get instant answers with Bluebook citations from Supreme Court cases, federal statutes, and state law. Our AI understands context, not just keywords.
                </p>

                {/* Stats */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-body text-sm font-semibold" style={{ color: '#D4A574' }}>12 Cases</span>
                  <span style={{ color: '#D4A574', opacity: 0.5 }}>•</span>
                  <span className="font-body text-sm font-semibold" style={{ color: '#D4A574' }}>4 Statutes</span>
                  <span style={{ color: '#D4A574', opacity: 0.5 }}>•</span>
                  <span className="font-body text-sm font-semibold" style={{ color: '#D4A574' }}>2.1 sec</span>
                </div>

                {/* Learn More */}
                <Link to="/features/legal-research" className="inline-flex items-center gap-1.5 font-body text-[15px] font-semibold transition-all duration-300 hover:gap-2.5 mb-6"
                  style={{ color: '#D4A574' }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Browser Mockup */}
                <div className="rounded-xl p-4 mt-4"
                  style={{
                    background: 'rgba(240, 235, 225, 0.7)',
                    border: '1px solid rgba(212, 165, 116, 0.15)',
                  }}
                >
                  <div className="flex gap-1.5 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(232, 104, 92, 0.6)' }}></span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(247, 196, 85, 0.6)' }}></span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(122, 155, 118, 0.6)' }}></span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h-2 rounded w-4/5" style={{ background: 'rgba(212, 165, 116, 0.15)' }}></div>
                    <div className="h-2 rounded w-3/5" style={{ background: 'rgba(212, 165, 116, 0.15)' }}></div>
                    <div className="flex gap-3 mt-2">
                      <div className="h-8 w-20 rounded-md" style={{ background: 'rgba(232, 204, 180, 0.4)' }}></div>
                      <div className="h-8 w-16 rounded-md" style={{ background: 'rgba(122, 155, 118, 0.3)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Judge Analytics - Standard Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl p-8 h-full bg-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_32px_rgba(212,165,116,0.18)]"
                style={{
                  border: '1px solid rgba(184, 147, 111, 0.12)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Left border accent - appears on hover */}
                <div 
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                  style={{ background: '#D4A574' }}
                />
                {/* Badge */}
                <span className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.5px] z-10 text-white"
                  style={{ background: '#7A9B76' }}
                >
                  Data-Driven
                </span>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.05] group-hover:rotate-3"
                    style={{
                      background: 'rgba(212, 165, 116, 0.1)',
                      border: '1px solid rgba(212, 165, 116, 0.15)',
                    }}
                  >
                    <User className="w-6 h-6 text-gold" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold mb-4 leading-tight pr-20"
                  style={{ color: '#1A2332' }}
                >
                  Judge Analytics
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: '#3D4451' }}>
                  Access grant rates, decision times, and ruling patterns for 8,500+ judges. Know your judge before stepping into court.
                </p>

                {/* Stats */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="font-body text-base font-semibold" style={{ color: '#D4A574' }}>78% Grant Rate</span>
                  <span style={{ color: '#D4A574', opacity: 0.5 }}>•</span>
                  <span className="font-body text-base font-semibold" style={{ color: '#D4A574' }}>45d Avg</span>
                </div>

                {/* Learn More */}
                <Link to="/features/judge-analytics" className="inline-flex items-center gap-1.5 font-body text-[15px] font-semibold transition-all duration-300 hover:gap-2.5"
                  style={{ color: '#D4A574' }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Row 2: 4 equal Standard cards */}
          <div className="grid grid-cols-4 gap-6">
            <StandardCard
              icon={FileText}
              title="Document Summarizer"
              description="Upload 50-page contracts. Get IRAC summaries in under 60 seconds."
              stat="⏱ Generated in 43 sec"
              delay={0.2}
              href="/features/document-summarizer"
            />

            <StandardCard
              icon={Network}
              title="Citation Maps"
              description="Explore 2.4M+ cases mapped by citations to find supporting precedents."
              stat="8.3M citations"
              delay={0.3}
              href="/features/citation-maps"
            />

            <StandardCard
              icon={Brain}
              title="Predictive AI"
              description="AI analyzes historical data to predict success rates for your cases."
              stat="82% accuracy"
              badge="Popular"
              delay={0.4}
              showProgress
              href="/features/predictive-ai"
            />

            <StandardCard
              icon={Wand2}
              title="Document Automation"
              description="156+ templates for contracts, motions, briefs, and more."
              stat="156 Templates"
              delay={0.5}
              href="/features/document-automation"
            />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block md:hidden max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <LegalResearchCardCompact />
            <StandardCardCompact icon={User} title="Judge Analytics" description="Access grant rates for 8,500+ judges." stat="78% Grant Rate • 45d Avg" badge="Data-Driven" badgeColor="#7A9B76" href="/features/judge-analytics" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <StandardCardCompact icon={FileText} title="Document Summarizer" description="Get IRAC summaries in under 60 seconds." stat="⏱ 43 sec" href="/features/document-summarizer" />
            <StandardCardCompact icon={Network} title="Citation Maps" description="Explore 2.4M+ cases mapped by citations." stat="8.3M citations" href="/features/citation-maps" />
            <StandardCardCompact icon={Brain} title="Predictive AI" description="AI predicts success rates." stat="82% accuracy" badge="Popular" href="/features/predictive-ai" />
            <StandardCardCompact icon={Wand2} title="Document Automation" description="156+ templates for contracts, motions." stat="156 Templates" href="/features/document-automation" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex flex-col gap-4">
          <LegalResearchCardCompact />
          <StandardCardCompact icon={User} title="Judge Analytics" description="Access grant rates for 8,500+ judges." stat="78% Grant Rate • 45d Avg" badge="Data-Driven" badgeColor="#7A9B76" href="/features/judge-analytics" />
          <StandardCardCompact icon={FileText} title="Document Summarizer" description="Get IRAC summaries in under 60 seconds." stat="⏱ 43 sec" href="/features/document-summarizer" />
          <StandardCardCompact icon={Network} title="Citation Maps" description="Explore 2.4M+ cases mapped by citations." stat="8.3M citations" href="/features/citation-maps" />
          <StandardCardCompact icon={Brain} title="Predictive AI" description="AI predicts success rates." stat="82% accuracy" badge="Popular" href="/features/predictive-ai" />
          <StandardCardCompact icon={Wand2} title="Document Automation" description="156+ templates for contracts, motions." stat="156 Templates" href="/features/document-automation" />
        </div>
      </div>
    </section>
  );
}

// Standard Card Component (simple default, premium on hover)
function StandardCard({ 
  icon: Icon, 
  title, 
  description, 
  stat, 
  badge, 
  delay = 0,
  showProgress = false,
  href = "#"
}: { 
  icon: any; 
  title: string; 
  description: string; 
  stat: string; 
  badge?: string; 
  delay?: number;
  showProgress?: boolean;
  href?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl p-7 h-full min-h-[280px] bg-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_32px_rgba(212,165,116,0.18)]"
        style={{
          border: '1px solid rgba(184, 147, 111, 0.12)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Left border accent - appears on hover */}
        <div 
          className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
          style={{ background: '#D4A574' }}
        />
        {badge && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.5px] z-10"
            style={{
              background: '#D4A574',
              color: '#1A2332',
            }}
          >
            {badge}
          </span>
        )}

        {/* Icon */}
        <div className="mb-5">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.05] group-hover:rotate-3"
            style={{
              background: 'rgba(212, 165, 116, 0.1)',
              border: '1px solid rgba(212, 165, 116, 0.15)',
            }}
          >
            <Icon className="w-6 h-6 text-gold" />
          </div>
        </div>

        <h3 className={`font-heading text-xl font-bold mb-3 leading-tight ${badge ? 'pr-14' : ''}`} style={{ color: '#1A2332' }}>
          {title}
        </h3>

        <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#3D4451' }}>
          {description}
        </p>

        {showProgress ? (
          <div className="mb-4">
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(212, 165, 116, 0.2)' }}>
              <div className="h-full rounded-full" style={{ width: '82%', background: '#D4A574' }}></div>
            </div>
            <div className="font-body text-sm font-semibold mt-2" style={{ color: '#D4A574' }}>{stat}</div>
          </div>
        ) : (
          <div className="font-body text-sm font-semibold mb-4" style={{ color: '#D4A574' }}>
            {stat}
          </div>
        )}

        <Link to={href} className="inline-flex items-center gap-1.5 font-body text-[15px] font-semibold transition-all duration-300 hover:gap-2.5"
          style={{ color: '#D4A574' }}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

// Legal Research Card Compact (for tablet/mobile)
function LegalResearchCardCompact() {
  return (
    <div className="relative overflow-hidden rounded-[20px] p-6"
      style={{
        background: 'linear-gradient(135deg, rgba(232, 204, 180, 0.25) 0%, rgba(245, 240, 230, 0.9) 20%, #FFFCF7 40%)',
        border: '1px solid rgba(212, 165, 116, 0.3)',
        borderLeft: '4px solid #D4A574',
        boxShadow: '0 2px 8px rgba(180, 140, 100, 0.12)',
      }}
    >
      <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase" style={{ background: '#D4A574', color: '#1A2332' }}>Most Popular</span>
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(212, 165, 116, 0.12)', border: '1px solid rgba(212, 165, 116, 0.2)' }}>
        <Search className="w-7 h-7 text-gold" />
      </div>
      <h3 className="font-heading text-xl font-bold mb-3 pr-20" style={{ color: '#1A2332' }}>Legal Research That Thinks</h3>
      <p className="font-body text-sm leading-relaxed mb-3" style={{ color: '#3D4451' }}>Get instant answers with Bluebook citations from Supreme Court cases.</p>
      <div className="font-body text-sm font-semibold mb-3" style={{ color: '#D4A574' }}>12 Cases • 4 Statutes • 2.1 sec</div>
      <Link to="/features/legal-research" className="inline-flex items-center gap-1.5 font-body text-sm font-semibold" style={{ color: '#D4A574' }}>Learn More <ArrowRight className="w-4 h-4" /></Link>
    </div>
  );
}

// Standard Card Compact (for tablet/mobile)
function StandardCardCompact({ 
  icon: Icon, 
  title, 
  description, 
  stat, 
  badge,
  badgeColor,
  href = "#"
}: { 
  icon: any; 
  title: string; 
  description: string; 
  stat: string; 
  badge?: string;
  badgeColor?: string;
  href?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-6 bg-white transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(212,165,116,0.15)]"
      style={{
        border: '1px solid rgba(184, 147, 111, 0.12)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div 
        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
        style={{ background: '#D4A574' }}
      />
      {badge && (
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase" 
          style={{ background: badgeColor || '#D4A574', color: badgeColor ? 'white' : '#1A2332' }}
        >
          {badge}
        </span>
      )}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.05] group-hover:rotate-3"
        style={{ background: 'rgba(212, 165, 116, 0.1)', border: '1px solid rgba(212, 165, 116, 0.15)' }}
      >
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className={`font-heading text-lg font-bold mb-2 ${badge ? 'pr-16' : ''}`} style={{ color: '#1A2332' }}>{title}</h3>
      <p className="font-body text-sm leading-relaxed mb-3" style={{ color: '#3D4451' }}>{description}</p>
      <div className="font-body text-sm font-semibold mb-3" style={{ color: '#D4A574' }}>{stat}</div>
      <Link to={href} className="inline-flex items-center gap-1.5 font-body text-sm font-semibold" style={{ color: '#D4A574' }}>Learn More <ArrowRight className="w-4 h-4" /></Link>
    </div>
  );
}
