import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Clock, DollarSign, TrendingUp, Zap } from "lucide-react";

const withoutData = {
  title: "WITHOUT LegalAI Pro",
  subtitle: "Your Current Reality",
  tasks: [
    { time: "3.5 hrs", label: "Legal Research", width: "100%" },
    { time: "2 hrs", label: "Document Review", width: "57%" },
    { time: "1.5 hrs", label: "Citation Check", width: "43%" },
    { time: "1 hr", label: "Judge Research", width: "29%" },
  ],
  totalTime: "8 hours",
  billable: "2 hours",
  revenue: "$500",
  revenueLabel: "Revenue Lost Daily",
};

const withData = {
  title: "WITH LexOrbit",
  subtitle: "The New Reality",
  tasks: [
    { time: "20 min", label: "All Research", width: "25%" },
    { time: "15 min", label: "Doc Summary", width: "19%" },
    { time: "5 min", label: "Judge Analytics", width: "6%" },
  ],
  totalTime: "40 min",
  billable: "7+ hours",
  revenue: "$1,750",
  revenueLabel: "Additional Revenue Daily",
};

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setDisplay(Math.round((value * step) / steps));
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{display.toLocaleString()}{suffix}</span>;
}

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(0 40% 39% / 0.3) 0%, transparent 40%), radial-gradient(circle at 70% 50%, hsl(130 16% 53% / 0.3) 0%, transparent 40%)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The{" "}
            <span className="text-gradient-gold">$250/hour</span>{" "}
            Reality Check
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Every hour you spend on research is $250 you're NOT making.
            <br />
            <span className="text-gold font-semibold">LexOrbit gives you those hours back.</span>
          </p>
        </motion.div>

        {/* Timeline Comparison with VS Badge */}
        <div className="relative grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
          {/* WITHOUT Card - Red/Burgundy theme */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full bg-[#2A1F1F] border-l-4 border-burgundy rounded-2xl p-6 lg:p-8 relative overflow-hidden">
              {/* Red glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 to-transparent pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-burgundy" />
                  <h3 className="font-heading text-xl font-bold text-white">{withoutData.title}</h3>
                </div>
                <p className="text-white/50 text-sm mb-6">{withoutData.subtitle}</p>

                {/* Time blocks as visual bars */}
                <div className="space-y-4 mb-8">
                  {withoutData.tasks.map((task, i) => (
                    <motion.div
                      key={task.label}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="origin-left"
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/70">{task.label}</span>
                        <span className="text-[#E57373] font-semibold">{task.time}</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-burgundy to-burgundy/60 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: task.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="bg-burgundy/20 rounded-xl p-4 text-center">
                    <div className="font-heading text-3xl font-bold text-[#E57373] mb-1">
                      <AnimatedNumber value={8} suffix=" hrs" />
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">Wasted Daily</div>
                  </div>
                  <div className="bg-burgundy/20 rounded-xl p-4 text-center">
                    <div className="font-heading text-3xl font-bold text-[#E57373] mb-1">
                      -<AnimatedNumber value={500} prefix="$" />
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">{withoutData.revenueLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VS Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-lg">
                <span className="font-heading text-xl font-bold text-navy-dark">VS</span>
              </div>
              {/* Connecting lines */}
              <div className="absolute top-1/2 -left-4 w-4 h-0.5 bg-gradient-to-r from-burgundy/50 to-transparent" />
              <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-gradient-to-l from-gold/50 to-transparent" />
            </div>
          </motion.div>

          {/* Mobile VS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:hidden flex justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <span className="font-heading text-lg font-bold text-navy-dark">VS</span>
            </div>
          </motion.div>

          {/* WITH Card - Gold theme */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full bg-[#1F2622] border-l-4 border-gold rounded-2xl p-6 lg:p-8 relative overflow-hidden">
              {/* Gold glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-gold" />
                  <h3 className="font-heading text-xl font-bold text-white">{withData.title}</h3>
                </div>
                <p className="text-white/50 text-sm mb-6">{withData.subtitle}</p>

                {/* Time blocks as visual bars */}
                <div className="space-y-4 mb-8">
                  {withData.tasks.map((task, i) => (
                    <motion.div
                      key={task.label}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="origin-left"
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/70">{task.label}</span>
                        <span className="text-sage font-semibold">{task.time}</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-sage to-sage/60 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: task.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                  {/* Empty space indicator */}
                  <div className="h-3 border border-dashed border-sage/30 rounded-full flex items-center justify-center">
                    <span className="text-sage/60 text-[10px] uppercase tracking-wider">Time Saved</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="bg-sage/20 rounded-xl p-4 text-center">
                    <div className="font-heading text-3xl font-bold text-sage mb-1">
                      <AnimatedNumber value={40} suffix=" min" />
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">Total Time</div>
                  </div>
                  <div className="bg-gold/20 rounded-xl p-4 text-center">
                    <div className="font-heading text-3xl font-bold text-gold mb-1">
                      +<AnimatedNumber value={1750} prefix="$" />
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">{withData.revenueLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 border border-gold/30 rounded-2xl px-8 py-5">
            <TrendingUp className="w-8 h-8 text-gold" />
            <div className="text-left">
              <p className="text-white/60 text-sm">Your potential daily gain:</p>
              <p className="font-heading text-2xl lg:text-3xl font-bold text-gold">
                +$2,250 <span className="text-white/60 text-lg font-normal">/ day</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}