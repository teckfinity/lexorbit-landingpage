import { Linkedin, Twitter, Youtube, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { useCookieContext } from "./CookieConsent";

const productLinks = [
  { label: "Legal Research", href: "/features/legal-research" },
  { label: "Document Summarizer", href: "/features/document-summarizer" },
  { label: "Judge Analytics", href: "/features/judge-analytics" },
  { label: "Citation Maps", href: "/features/citation-maps" },
  { label: "Predictive AI", href: "/features/predictive-ai" },
  { label: "Document Automation", href: "/features/document-automation" },
  { label: "Pricing", href: "/billing" },
];

const resourceLinks = [
  { label: "Blog", href: "/resources/blog" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Documentation", href: "/resources/documentation" },
  { label: "Video Tutorials", href: "/resources/video-tutorials" },
  { label: "Support Center", href: "/resources/support" },
  { label: "Billing & Payments", href: "/billing" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Security", href: "/legal/security" },
  { label: "GDPR Compliance", href: "/legal/gdpr" },
  { label: "Accessibility", href: "/legal/accessibility" },
];

export function Footer() {
  const { openCookieSettings } = useCookieContext();
  
  return (
<footer className="bg-navy py-12 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
      
      {/* Logo & Tagline */}
      <div className="col-span-2 md:col-span-2 lg:col-span-1">
        <a href="#" className="inline-flex items-center mb-4">
          {/* SVG Logo – no box, no background */}
          <img
            src="/logo.svg"
            alt="LexOrbit Logo"
            className="
              w-16 sm:w-20 md:w-24
              h-auto
              object-contain
            "
          />
        </a>

        <p className="font-legal text-xs sm:text-sm italic text-white/60 mb-4 sm:mb-6">
          "Legal Intelligence Made Human"
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-white/60 hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-primary transition-colors"
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-primary transition-colors"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

          {/* Product */}
          <div>
            <h4 className="font-body text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-xs sm:text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-xs sm:text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-xs sm:text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={openCookieSettings}
                  className="font-body text-xs sm:text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Cookie className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Manage Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="font-body text-xs sm:text-sm text-white/40">
            © 2024 LexOrbit. All rights reserved. Built with love for the legal community.
          </p>
        </div>
      </div>
    </footer>
  );
}
