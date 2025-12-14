import { motion } from "framer-motion";
import { MessageSquare, Cpu, Sparkles } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Ask Your Legal Question",
    description:
      "Type questions in plain English. Our AI understands legal context and nuance.",
  },
  {
    number: "2",
    icon: Cpu,
    title: "AI Analyzes Millions of Sources",
    description:
      "Searches 2.4M+ cases, federal statutes, regulations, and state law in seconds.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Get Actionable Insights",
    description:
      "Receive structured analysis with verified citations, judge analytics, and strategic recommendations.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Research to Results in 3 Steps
          </h2>
          <p className="font-body text-lg text-white/85 max-w-2xl mx-auto">
            Simple, powerful, and designed for the way you work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines - gold dashed */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gold-dark/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step number - 80px diameter with gold gradient */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold shadow-gold mb-6">
                <span className="font-heading text-3xl font-bold text-navy-dark">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>

              <p className="font-body text-white/75 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}