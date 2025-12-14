import { motion, useInView } from "framer-motion";
import { Star, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote: "I was spending 20+ hours weekly on research. Now it's 2 hours. This tool paid for itself on Day 1.",
    author: "Sarah Chen",
    title: "Employment Law • Chicago",
    rating: 5,
    videoTime: "0:47",
    avatar: "SC",
  },
  {
    quote: "Finally, an AI tool that doesn't require a PhD to use or a massive budget. The document summarizer is a game-changer.",
    author: "James Rodriguez",
    title: "Small Firm Partner • Seattle",
    rating: 5,
    videoTime: "1:12",
    avatar: "JR",
  },
  {
    quote: "The judge analytics helped me win a motion I thought was a long shot. Knowing the 78% grant rate gave me confidence.",
    author: "Maria Thompson",
    title: "Solo Practitioner • Austin",
    rating: 5,
    videoTime: "0:58",
    avatar: "MT",
  },
];

const stats = [
  { value: 1.75, suffix: "M", label: "Saved in Research", prefix: "$", displayValue: "1.75" },
  { value: 20000, suffix: "+", label: "Hours Saved", displayValue: "20,000" },
  { value: 98, suffix: "%", label: "Success Rate", displayValue: "98" },
  { value: 4.9, suffix: "/5", label: "Rating", displayValue: "4.9" },
];

function AnimatedCounter({ value, suffix = "", prefix = "", displayValue }: { value: number; suffix?: string; prefix?: string; displayValue: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      
      if (value >= 1000) {
        setDisplay(Math.round(value * eased).toLocaleString());
      } else if (value < 10) {
        setDisplay((value * eased).toFixed(1));
      } else {
        setDisplay(Math.round(value * eased).toString());
      }
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplay(displayValue);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, value, displayValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Real Attorneys.{" "}
            <span className="text-gradient-gold">Real Results.</span>{" "}
            Real Talk.
          </h2>
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto">
            See why 10,000+ attorneys trust LexOrbit
          </p>
        </motion.div>

        {/* BIG Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-navy rounded-2xl p-10 lg:p-14 mb-16 shadow-elevated relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-gold mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix} 
                    displayValue={stat.displayValue}
                  />
                </div>
                <div className="font-body text-sm lg:text-base text-white/80 uppercase tracking-wider">
                  {stat.label}
                </div>
                <motion.div 
                  className="w-12 h-1 bg-gold/40 mx-auto mt-3 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-2 hover:border-gold border border-transparent transition-all duration-300"
            >
              {/* Video Thumbnail Area */}
              <div className="relative aspect-[4/3] bg-gradient-navy flex items-center justify-center cursor-pointer overflow-hidden">
                {/* Animated overlay on hover */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-all duration-300"
                    whileHover={{ scale: 1.15 }}
                  >
                    <Play className="w-6 h-6 lg:w-8 lg:h-8 text-navy-dark fill-navy-dark ml-1" />
                  </motion.div>
                </div>
                
                {/* Avatar in corner */}
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center border-3 border-white shadow-lg">
                  <span className="font-heading text-lg font-bold text-navy-dark">{testimonial.avatar}</span>
                </div>

                {/* Video duration */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-sm font-semibold">
                  {testimonial.videoTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-legal text-base italic text-charcoal leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>

                <div>
                  <div className="font-body text-base font-semibold text-navy">
                    {testimonial.author}
                  </div>
                  <div className="font-body text-sm text-slate">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}