import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Lock, Server, Eye, CheckCircle2, AlertTriangle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  { name: "SOC 2 Type II", status: "Certified", icon: Shield },
  { name: "ISO 27001", status: "Certified", icon: Lock },
  { name: "GDPR", status: "Compliant", icon: Users },
  { name: "CCPA", status: "Compliant", icon: Eye }
];

const securityFeatures = [
  {
    title: "Encryption",
    icon: Lock,
    items: [
      "AES-256 encryption at rest",
      "TLS 1.3 in transit",
      "End-to-end document encryption",
      "Encrypted backups"
    ]
  },
  {
    title: "Infrastructure",
    icon: Server,
    items: [
      "SOC 2 certified data centers",
      "Geographic redundancy",
      "DDoS protection",
      "24/7 monitoring"
    ]
  },
  {
    title: "Access Control",
    icon: Users,
    items: [
      "Multi-factor authentication",
      "Role-based permissions",
      "Session management",
      "SSO integration"
    ]
  },
  {
    title: "Monitoring",
    icon: Eye,
    items: [
      "Real-time threat detection",
      "Anomaly alerts",
      "Audit logging",
      "Incident response team"
    ]
  }
];

const practices = [
  {
    icon: Clock,
    title: "Regular Audits",
    description: "Quarterly security assessments and annual penetration testing by independent firms."
  },
  {
    icon: Users,
    title: "Employee Training",
    description: "All team members complete security awareness training and background checks."
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Documented procedures with 1-hour response time for critical issues."
  },
  {
    icon: Shield,
    title: "Bug Bounty",
    description: "Active program rewarding responsible security researchers."
  }
];

export default function Security() {
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
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Security
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Enterprise-grade security protecting sensitive legal data. 
              Your client information deserves the highest standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-gold/30 transition-colors"
              >
                <cert.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-white font-medium">{cert.name}</p>
                <p className="text-sage text-sm mt-1">{cert.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sage/10 border border-sage/30 rounded-xl p-6 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-sage animate-pulse" />
            <div>
              <p className="text-white font-medium">All Systems Operational</p>
              <p className="text-white/60 text-sm">Last incident: None in the past 90 days</p>
            </div>
            <a 
              href="#" 
              className="ml-auto text-gold text-sm hover:text-gold-light transition-colors"
            >
              View Status Page →
            </a>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Security Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Security Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <practice.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {practice.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {practice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Vulnerability */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy border border-white/10 rounded-2xl p-8 text-center">
            <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Report a Vulnerability
            </h2>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Found a security issue? We appreciate responsible disclosure 
              and offer rewards through our bug bounty program.
            </p>
            <a
              href="mailto:security@getlexorbit.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              security@getlexorbit.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
