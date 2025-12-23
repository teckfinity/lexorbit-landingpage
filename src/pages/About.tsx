import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Linkedin, Twitter, Target, Heart, Zap, Shield, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-Founder",
    bio: "Former BigLaw partner turned legal tech visionary. 15 years of litigation experience.",
    image: "AC",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marcus Thompson",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher. PhD in Natural Language Processing from Stanford.",
    image: "MT",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Williams",
    role: "Chief Product Officer",
    bio: "Former Clio product lead. Passionate about making legal tools actually usable.",
    image: "SW",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    bio: "Built search infrastructure at Westlaw. Loves solving impossible problems.",
    image: "DP",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Customer Success",
    bio: "Former legal operations director. Knows what attorneys actually need.",
    image: "ER",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "James Liu",
    role: "Lead AI Researcher",
    bio: "Previously at OpenAI. Specializes in legal document understanding.",
    image: "JL",
    linkedin: "#",
    twitter: "#"
  }
];

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "Every citation verified. Every case checked. We never compromise on correctness."
  },
  {
    icon: Heart,
    title: "Attorney-Centric",
    description: "Built by people who understand the pressure of billable hours and client deadlines."
  },
  {
    icon: Zap,
    title: "Speed Matters",
    description: "Time is money in legal practice. We obsess over milliseconds so you save hours."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your client data is sacred. Enterprise-grade security is non-negotiable."
  }
];

const milestones = [
  { year: "2021", event: "Founded in San Francisco by two frustrated attorneys" },
  { year: "2022", event: "Launched beta with 50 law firms, $2M seed funding" },
  { year: "2023", event: "10,000+ attorneys using LexOrbit, Series A funding" },
  { year: "2024", event: "Expanded to all 50 states, launched Predictive AI" },
  { year: "2025", event: "Opening beta for next-gen features (that's now!)" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation showBanner={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              We're Building the Future of{" "}
              <span className="text-gold">Legal Intelligence</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              LexOrbit was born from a simple frustration: legal research takes too long 
              and costs too much. We're here to change that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  In 2021, Alexandra Chen was a senior litigation partner billing $800/hour. 
                  She spent 40% of her time on legal research—the same repetitive searches, 
                  the same clunky interfaces, the same frustration.
                </p>
                <p>
                  She met Marcus Thompson at a legal tech conference. He had just left Google, 
                  where he'd spent years building AI that could understand complex documents. 
                  They asked a simple question: <em className="text-gold">What if legal research 
                  could actually be intelligent?</em>
                </p>
                <p>
                  LexOrbit was born. Not as another database with a search bar, but as a 
                  true AI partner that understands legal context, verifies citations automatically, 
                  and learns from every query.
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-3xl font-bold text-white">10,000+</p>
                  <p className="text-white/60 text-sm">Attorneys trust LexOrbit</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-3xl font-bold text-white">2.1 sec</p>
                  <p className="text-white/60 text-sm">Average research time</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-3xl font-bold text-white">$2.4M+</p>
                  <p className="text-white/60 text-sm">Saved in research costs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <p className="text-gold font-bold text-xl">{milestone.year}</p>
                    <p className="text-white/70">{milestone.event}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold flex-shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-4">
            What We Stand For
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
            These aren't just words on a wall. They guide every feature we build 
            and every decision we make.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-4">
            Meet the Team
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
            Lawyers, engineers, and AI researchers united by one mission: 
            making legal work more human.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-gold/30 transition-colors group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-4 text-navy font-bold text-xl">
                  {member.image}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-3">{member.role}</p>
                <p className="text-white/60 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={member.linkedin} className="text-white/40 hover:text-gold transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} className="text-white/40 hover:text-gold transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-white/60 mb-8">
            Whether you're an attorney looking to save time or a talented individual 
            who wants to reshape legal tech—we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Try LexOrbit Free
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
