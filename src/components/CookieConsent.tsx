import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";

interface CookieContextType {
  openCookieSettings: () => void;
}

const CookieContext = createContext<CookieContextType | null>(null);

export const useCookieContext = () => {
  const context = useContext(CookieContext);
  if (!context) {
    return { openCookieSettings: () => {} };
  }
  return context;
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const saved = JSON.parse(consent);
        if (saved.preferences) {
          setPreferences(saved.preferences);
        }
      } catch {}
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true, functional: true };
    localStorage.setItem("cookie-consent", JSON.stringify({ accepted: true, preferences: allAccepted }));
    setPreferences(allAccepted);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleDecline = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false, functional: false };
    localStorage.setItem("cookie-consent", JSON.stringify({ accepted: false, preferences: essentialOnly }));
    setPreferences(essentialOnly);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ accepted: true, preferences }));
    setIsVisible(false);
    setShowSettings(false);
  };

  const openCookieSettings = () => {
    setShowSettings(true);
    setIsVisible(true);
  };

  return (
    <CookieContext.Provider value={{ openCookieSettings }}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto bg-navy border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              {!showSettings ? (
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">We value your privacy</h3>
                    <p className="text-white/60 text-sm">
                      We use cookies to enhance your experience. Read our{" "}
                      <Link to="/legal/cookies" className="text-gold hover:text-gold-light underline">
                        Cookie Policy
                      </Link>{" "}
                      to learn more.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="flex items-center gap-1 px-3 py-2 text-white/60 hover:text-white text-sm transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </button>
                    <button
                      onClick={handleDecline}
                      className="px-4 py-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
                    >
                      Decline
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
                    >
                      Accept All
                    </button>
                  </div>

                  <button
                    onClick={handleDecline}
                    className="absolute top-4 right-4 md:hidden text-white/40 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium flex items-center gap-2">
                      <Settings className="w-5 h-5 text-gold" />
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {[
                      { key: "essential", label: "Essential", description: "Required for the website to function", locked: true },
                      { key: "analytics", label: "Analytics", description: "Help us understand how you use our site", locked: false },
                      { key: "functional", label: "Functional", description: "Remember your preferences and settings", locked: false },
                      { key: "marketing", label: "Marketing", description: "Personalized ads and content", locked: false },
                    ].map((cookie) => (
                      <div key={cookie.key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">{cookie.label}</p>
                          <p className="text-white/50 text-xs">{cookie.description}</p>
                        </div>
                        <button
                          onClick={() => !cookie.locked && setPreferences(p => ({ ...p, [cookie.key]: !p[cookie.key as keyof typeof p] }))}
                          disabled={cookie.locked}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            preferences[cookie.key as keyof typeof preferences]
                              ? "bg-gold"
                              : "bg-white/20"
                          } ${cookie.locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full transition-transform mx-0.5 ${
                            preferences[cookie.key as keyof typeof preferences] ? "translate-x-6" : "translate-x-0"
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleDecline}
                      className="flex-1 px-4 py-2 text-white/60 hover:text-white text-sm font-medium transition-colors border border-white/10 rounded-lg"
                    >
                      Decline All
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CookieContext.Provider>
  );
}
