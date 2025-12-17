import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLaunchState } from "@/hooks/useLaunchState";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

interface NavigationProps {
  showBanner?: boolean;
}

export function Navigation({ showBanner = true }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 w-full z-50 transition-all duration-500",
        showBanner ? "top-[48px] sm:top-[52px]" : "top-0",
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
              <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-shadow">
              <img src="/logo.svg" alt="LexOrbit Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="font-heading text-xl sm:text-2xl font-bold text-white">
              LexOrbit
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                {isHomePage ? (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="font-body text-sm xl:text-[15px] font-medium text-white/80 hover:text-gold relative group transition-colors duration-300"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    to={`/${link.href}`}
                    className="font-body text-sm xl:text-[15px] font-medium text-white/80 hover:text-gold relative group transition-colors duration-300"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a
              href="#"
              className="font-body text-sm xl:text-[15px] font-medium text-white/80 hover:text-gold transition-colors duration-300"
            >
              Sign In
            </a>
            <Button variant="hero" size="sm" className="text-sm px-4 py-2">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy/98 backdrop-blur-lg border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 sm:py-6 space-y-1">
              {navLinks.map((link, i) => (
                isHomePage ? (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="block font-body text-base sm:text-lg text-white/80 hover:text-gold hover:bg-white/5 py-3 px-4 rounded-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const target = document.querySelector(link.href);
                      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={`/${link.href}`}
                      className="block font-body text-base sm:text-lg text-white/80 hover:text-gold hover:bg-white/5 py-3 px-4 rounded-lg transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3 mt-4">
                <a
                  href="#"
                  className="block font-body text-base sm:text-lg text-white/80 hover:text-gold py-3 px-4"
                >
                  Sign In
                </a>
                <div className="px-4">
                  <Button variant="hero" className="w-full py-3">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}