import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Accessibility as AccessibilityIcon, Eye, Keyboard, Monitor, Volume2, MousePointer, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "Full keyboard accessibility for all interactive elements. Navigate using Tab, Enter, and arrow keys."
  },
  {
    icon: Eye,
    title: "Screen Reader Support",
    description: "Optimized for NVDA, JAWS, and VoiceOver with proper ARIA labels and semantic HTML."
  },
  {
    icon: Monitor,
    title: "High Contrast Mode",
    description: "Support for system high contrast settings and sufficient color contrast ratios (WCAG AA)."
  },
  {
    icon: Volume2,
    title: "Audio Alternatives",
    description: "Captions and transcripts for video content. No audio-only content without text alternatives."
  },
  {
    icon: MousePointer,
    title: "Focus Indicators",
    description: "Clear, visible focus states on all interactive elements for keyboard and switch users."
  },
  {
    icon: Sparkles,
    title: "Reduced Motion",
    description: "Respects prefers-reduced-motion setting. Animations can be disabled system-wide."
  }
];

const standards = [
  { name: "WCAG 2.1 Level AA", status: "Compliant" },
  { name: "Section 508", status: "Compliant" },
  { name: "ADA", status: "Compliant" },
  { name: "EN 301 549", status: "Compliant" }
];

const shortcuts = [
  { keys: ["Tab"], action: "Navigate forward" },
  { keys: ["Shift", "Tab"], action: "Navigate backward" },
  { keys: ["Enter"], action: "Activate button/link" },
  { keys: ["Esc"], action: "Close modal/menu" },
  { keys: ["/"], action: "Focus search" },
  { keys: ["?"], action: "Show keyboard shortcuts" }
];

export default function Accessibility() {
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
              <AccessibilityIcon className="w-4 h-4" />
              WCAG 2.1 AA Compliant
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Accessibility
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              LexOrbit is committed to ensuring digital accessibility for people of all abilities.
              We continuously improve the user experience for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {standards.map((standard, i) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-gold/30 transition-colors"
              >
                <p className="text-white font-medium text-sm">{standard.name}</p>
                <p className="text-sage text-xs mt-1">{standard.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Accessibility Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Keyboard Shortcuts
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="divide-y divide-white/10">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.action} className="flex items-center justify-between p-4">
                  <span className="text-white/70">{shortcut.action}</span>
                  <div className="flex gap-1">
                    {shortcut.keys.map((key, i) => (
                      <span key={i}>
                        <kbd className="px-2 py-1 bg-navy border border-white/20 rounded text-white text-sm font-mono">
                          {key}
                        </kbd>
                        {i < shortcut.keys.length - 1 && <span className="text-white/40 mx-1">+</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy border border-white/10 rounded-2xl p-8 text-center">
            <AccessibilityIcon className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Accessibility Feedback
            </h2>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Encountered a barrier? We want to hear from you. 
              Help us improve accessibility for everyone.
            </p>
            <a
              href="mailto:accessibility@getlexorbit.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              <Mail className="w-4 h-4" />
              accessibility@getlexorbit.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
