import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Check, FileText, Zap, BarChart3, Star, ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useLaunchState } from "@/hooks/useLaunchState";
import { LAUNCH_CONFIG } from "@/config/launch";

interface HeroSectionProps {
  onOpenBetaModal?: () => void;
  onOpenWaitlistModal?: () => void;
}

interface QueryData {
  query: string;
  results: {
    type: "case" | "statute";
    title: string;
    citation: string;
    excerpt: string;
  }[];
  summary: {
    cases: number;
    statutes: number;
    time: string;
  };
}

const queryDatabase: QueryData[] = [
  {
    query: "What is the burden of proof in Title VII claims?",
    results: [
      {
        type: "case",
        title: "McDonnell Douglas Corp. v. Green",
        citation: "411 U.S. 792 (1973)",
        excerpt: "...burden of proof requires plaintiff to establish prima facie case of discrimination..."
      },
      {
        type: "case",
        title: "Texas Dept. of Community Affairs v. Burdine",
        citation: "450 U.S. 248 (1981)",
        excerpt: "...defendant must articulate legitimate, nondiscriminatory reason for employment decision..."
      },
      {
        type: "statute",
        title: "42 U.S.C. § 2000e-2",
        citation: "Title VII of the Civil Rights Act",
        excerpt: "...unlawful employment practice for an employer to discriminate..."
      }
    ],
    summary: { cases: 12, statutes: 4, time: "2.1" }
  },
  {
    query: "Title VII discrimination burden of proof",
    results: [
      {
        type: "case",
        title: "St. Mary's Honor Ctr. v. Hicks",
        citation: "509 U.S. 502 (1993)",
        excerpt: "...trier of fact may still reject employer's explanation and find for plaintiff..."
      },
      {
        type: "case",
        title: "Reeves v. Sanderson Plumbing Products",
        citation: "530 U.S. 133 (2000)",
        excerpt: "...plaintiff's prima facie case plus sufficient evidence to reject employer's explanation..."
      },
      {
        type: "statute",
        title: "42 U.S.C. § 2000e-5",
        citation: "Enforcement Provisions",
        excerpt: "...civil action may be brought against respondent..."
      }
    ],
    summary: { cases: 18, statutes: 3, time: "1.8" }
  },
  {
    query: "Qualified immunity standard",
    results: [
      {
        type: "case",
        title: "Harlow v. Fitzgerald",
        citation: "457 U.S. 800 (1982)",
        excerpt: "...government officials performing discretionary functions entitled to immunity..."
      },
      {
        type: "case",
        title: "Pearson v. Callahan",
        citation: "555 U.S. 223 (2009)",
        excerpt: "...courts may determine which prong of analysis to address first..."
      },
      {
        type: "statute",
        title: "42 U.S.C. § 1983",
        citation: "Civil Action for Deprivation of Rights",
        excerpt: "...every person who subjects any citizen to deprivation of rights..."
      }
    ],
    summary: { cases: 24, statutes: 2, time: "2.3" }
  },
  {
    query: "Summary judgment requirements",
    results: [
      {
        type: "case",
        title: "Celotex Corp. v. Catrett",
        citation: "477 U.S. 317 (1986)",
        excerpt: "...moving party bears initial responsibility of informing court of basis for motion..."
      },
      {
        type: "case",
        title: "Anderson v. Liberty Lobby, Inc.",
        citation: "477 U.S. 242 (1986)",
        excerpt: "...genuine issue of material fact exists if evidence sufficient for jury..."
      },
      {
        type: "statute",
        title: "Fed. R. Civ. P. 56",
        citation: "Summary Judgment",
        excerpt: "...court shall grant summary judgment if movant shows no genuine dispute..."
      }
    ],
    summary: { cases: 31, statutes: 1, time: "1.9" }
  }
];

type AnimationPhase = "idle" | "typing" | "loading" | "results";

export function HeroSection({ onOpenBetaModal, onOpenWaitlistModal }: HeroSectionProps) {
  const { ctaState, betaSpotsRemaining, daysUntilLaunch, totalBetaSpots } = useLaunchState();
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const [visibleResults, setVisibleResults] = useState<number[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showTryInput, setShowTryInput] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [customQueryData, setCustomQueryData] = useState<QueryData | null>(null);

  const currentQuery = customQueryData || queryDatabase[currentQueryIndex];

  const runAnimation = useCallback((queryIndex: number, customQuery?: QueryData) => {
    const query = customQuery || queryDatabase[queryIndex];
    setTypedText("");
    setPhase("typing");
    setVisibleResults([]);
    setShowSummary(false);
    setLoadingProgress(0);

    // Typing animation
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= query.query.length) {
        setTypedText(query.query.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Start loading phase
        setPhase("loading");
        
        // Loading progress
        let progress = 0;
        const loadingInterval = setInterval(() => {
          progress += 20;
          setLoadingProgress(progress);
          if (progress >= 100) {
            clearInterval(loadingInterval);
            setPhase("results");
            
            // Stream in results one by one
            query.results.forEach((_, index) => {
              setTimeout(() => {
                setVisibleResults(prev => [...prev, index]);
              }, (index + 1) * 500);
            });
            
            // Show summary after all results
            setTimeout(() => {
              setShowSummary(true);
            }, (query.results.length + 1) * 500);
          }
        }, 100);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  // Auto-start and loop animation (only when not paused)
  useEffect(() => {
    if (isPaused) return;

    const startAnimation = () => {
      setCustomQueryData(null);
      runAnimation(currentQueryIndex);
    };

    // Initial delay before starting
    const initialTimeout = setTimeout(startAnimation, 500);

    // Loop every 10 seconds
    const loopInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentQueryIndex(prev => (prev + 1) % queryDatabase.length);
      }
    }, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(loopInterval);
    };
  }, [currentQueryIndex, runAnimation, isPaused]);

  const handleExampleClick = (index: number) => {
    setIsPaused(false);
    setShowTryInput(false);
    setCustomQueryData(null);
    setCurrentQueryIndex(index);
    runAnimation(index);
  };

  const handleTryOwnQuery = () => {
    setIsPaused(true);
    setShowTryInput(true);
    setPhase("idle");
    setTypedText("");
    setVisibleResults([]);
    setShowSummary(false);
  };

  const handleUserQuerySubmit = () => {
    if (!userQuery.trim()) return;
    
    // Create custom query data based on user input
    const customData: QueryData = {
      query: userQuery,
      results: [
        {
          type: "case",
          title: "Relevant Case Law Found",
          citation: "Based on your query",
          excerpt: `...analysis related to "${userQuery.slice(0, 30)}${userQuery.length > 30 ? '...' : ''}"...`
        },
        {
          type: "case",
          title: "Supporting Precedent",
          citation: "Federal Reporter",
          excerpt: "...court held that the standard applies when examining similar legal questions..."
        },
        {
          type: "statute",
          title: "Applicable Statute",
          citation: "U.S. Code",
          excerpt: "...statutory provisions governing this area of law..."
        }
      ],
      summary: { cases: 8, statutes: 2, time: "2.4" }
    };
    
    setCustomQueryData(customData);
    setShowTryInput(false);
    runAnimation(0, customData);
  };

  const handleResumeDemo = () => {
    setIsPaused(false);
    setShowTryInput(false);
    setCustomQueryData(null);
    setUserQuery("");
    runAnimation(currentQueryIndex);
  };

  const exampleQueries = [
    "Title VII discrimination burden of proof",
    "Qualified immunity standard",
    "Summary judgment requirements"
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1A2332 0%, #0F1419 100%)' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30L20 20h20L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Subtle glow effects - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4A574]/5 rounded-full blur-[120px]" />
      <div className="hidden sm:block absolute bottom-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4A574]/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-36 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 lg:pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE - Content (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Headline - responsive sizes */}
            <motion.h1 
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-black text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Type Any Legal Question.{" "}
              <span className="bg-gradient-to-r from-[#D4A574] to-[#E5C69F] bg-clip-text text-transparent">
                Watch AI Work.
              </span>
            </motion.h1>

            {/* Subheadline - responsive */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-body text-base sm:text-lg text-white/85 mb-6 sm:mb-8 max-w-md leading-relaxed"
            >
              Get instant Bluebook citations in under 3 seconds. No Boolean operators. Just ask.
            </motion.p>

            {/* Example Queries - hidden on small mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="hidden sm:block mb-6 sm:mb-8"
            >
              <p className="text-white/50 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">Try These Examples:</p>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {exampleQueries.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(index + 1)}
                    className="text-left text-white/70 hover:text-[#D4A574] transition-colors duration-300 text-xs sm:text-sm group flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 sm:-ml-5 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      "{query}"
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Primary CTA - Smart Beta/Waitlist/Launch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mb-4 sm:mb-6"
            >
              <Button 
                size="lg" 
                onClick={() => {
                  if (ctaState === 'BETA' && onOpenBetaModal) onOpenBetaModal();
                  else if (ctaState === 'WAITLIST' && onOpenWaitlistModal) onOpenWaitlistModal();
                  else window.location.href = '/signup';
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold rounded-xl group"
                style={{
                  background: ctaState === 'BETA' 
                    ? 'linear-gradient(135deg, #D4A574 0%, #E5C69F 100%)'
                    : ctaState === 'WAITLIST'
                    ? 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)'
                    : 'linear-gradient(135deg, #7A9B76 0%, #9BC49A 100%)',
                  color: ctaState === 'BETA' ? '#0F1419' : '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(212, 165, 116, 0.4)',
                }}
              >
                {ctaState === 'BETA' && `Claim Free Beta Spot →`}
                {ctaState === 'WAITLIST' && 'Join Waitlist →'}
                {ctaState === 'LAUNCH' && 'Start Free Trial →'}
              </Button>
            </motion.div>

            {/* Beta/Waitlist Info Badge */}
            {ctaState !== 'LAUNCH' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-4 sm:mb-6"
              >
                <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-gold/30 rounded-full text-xs sm:text-sm">
                  {ctaState === 'BETA' ? (
                    <>
                      <span className="text-gold font-bold">{betaSpotsRemaining} of {totalBetaSpots}</span>
                      <span className="text-white/70">spots left</span>
                      <span className="hidden sm:inline text-white/40">•</span>
                      <span className="hidden sm:inline text-white/70">Launch in {daysUntilLaunch} days</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white/70">Beta full!</span>
                      <span className="text-white/40">•</span>
                      <span className="text-gold">50% off at launch</span>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {/* Stats Row - Hidden on mobile, condensed on tablet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="hidden sm:flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/70"
            >
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4A574]" />
                <span>2.1 sec average</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-[#D4A574]" />
                <span>98% accuracy</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#D4A574]" />
                <span>10,000+ attorneys</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Interactive Demo (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 will-change-transform"
            style={{ isolation: 'isolate' }}
          >
            {/* White Demo Container - Fixed height to prevent layout shifts */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[520px] lg:h-[560px] flex flex-col relative" style={{ contain: 'layout' }}>
              {/* Component 1: Search Input */}
              <div className="p-5 lg:p-6 border-b border-gray-100 flex-shrink-0">
                <div className="bg-[#FFFBF5] border-2 border-[#D4A574]/20 rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                    <div className="flex-1 min-h-[24px] flex items-center">
                      <span className="font-body text-[#1A2332] text-sm lg:text-base">
                        {typedText}
                        {phase === "typing" && (
                          <span className="inline-block w-0.5 h-4 bg-[#D4A574] ml-0.5 animate-pulse" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

{/* Component 2: Loading State - Ab bilkul neeche aur centered, no overlap at all */}
<AnimatePresence>
  {phase === "loading" && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-4 sm:inset-x-8 md:inset-x-16 top-40 sm:top-48 md:top-56 lg:top-64 mx-auto max-w-4xl p-8 bg-white rounded-3xl shadow-2xl z-50 border-4 border-[#D4A574]/50 backdrop-blur-lg"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-6">
          <Loader2 className="w-10 h-10 text-[#D4A574] animate-spin" />
          <span className="text-2xl sm:text-3xl font-bold text-[#1A2332]">
            Searching 2.4M cases
            <span className="animate-pulse">...</span>
          </span>
        </div>
        
        <div className="w-full h-6 bg-gray-300/80 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full rounded-full"
            style={{ 
              background: 'linear-gradient(90deg, #D4A574, #E5C69F)',
              boxShadow: '0 6px 20px rgba(212, 165, 116, 0.6)'
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
              {/* Component 3: Results Stream In */}
              <div className="p-5 lg:p-6 space-y-3 flex-1 overflow-hidden">
                {/* Skeleton Loaders - Show when idle or typing */}
                {(phase === "idle" || phase === "typing") && (
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-[#FFFBF5] border border-[#D4A574]/10 rounded-lg p-3"
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-md skeleton-shimmer-gold flex-shrink-0" />
                          <div className="flex-1 space-y-1.5">
                            <div className="h-3 skeleton-shimmer-gold rounded w-3/4" />
                            <div className="h-2.5 skeleton-shimmer-gold rounded w-1/2" style={{ animationDelay: '100ms' }} />
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Skeleton Summary */}
                    <div className="border border-[#D4A574]/20 rounded-lg p-3 bg-gradient-to-r from-[#D4A574]/5 to-transparent">
                      <div className="flex flex-wrap gap-3">
                        <div className="h-3 skeleton-shimmer-gold rounded w-20" />
                        <div className="h-3 skeleton-shimmer-gold rounded w-20" style={{ animationDelay: '100ms' }} />
                        <div className="h-3 skeleton-shimmer-gold rounded w-16" style={{ animationDelay: '200ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {phase === "results" && (
                    <>
                      {currentQuery.results.map((result, index) => (
                        <motion.div
                          key={`${currentQueryIndex}-${index}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ 
                            opacity: visibleResults.includes(index) ? 1 : 0, 
                            y: visibleResults.includes(index) ? 0 : 8
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="bg-[#FFFBF5] border border-[#D4A574]/10 rounded-lg p-3 hover:border-[#D4A574]/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                              result.type === "case" 
                                ? "bg-[#7A9B76]/20 text-[#7A9B76]" 
                                : "bg-[#D4A574]/20 text-[#B8936F]"
                            }`}>
                              {result.type === "case" ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <FileText className="w-3 h-3" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-heading font-bold text-[#1A2332] text-xs truncate">
                                {result.title}
                              </h4>
                              <p className="text-[10px] text-[#B8936F] font-medium truncate">
                                {result.citation}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Component 4: Summary Box */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: showSummary ? 1 : 0, 
                          y: showSummary ? 0 : 10 
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="border border-[#D4A574]/30 rounded-lg p-3"
                        style={{ background: 'linear-gradient(135deg, rgba(212,165,116,0.1), rgba(212,165,116,0.05))' }}
                      >
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#7A9B76]" />
                            <span className="font-semibold text-[#1A2332]">
                              {currentQuery.summary.cases} Cases
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#7A9B76]" />
                            <span className="font-semibold text-[#1A2332]">
                              {currentQuery.summary.statutes} Statutes
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Zap className="w-3 h-3 text-[#D4A574]" />
                            <span className="font-semibold text-[#1A2332]">
                              {currentQuery.summary.time}s
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showSummary ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex flex-wrap gap-2 pt-1"
                      >
                        <Button
                          size="sm"
                          className="text-xs font-medium h-8 px-3"
                          style={{
                            background: 'linear-gradient(135deg, #D4A574 0%, #E5C69F 100%)',
                            color: '#0F1419',
                          }}
                        >
                          View Results
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleTryOwnQuery}
                          className="text-xs font-medium h-8 px-3 border-[#D4A574]/30 text-[#1A2332] hover:bg-[#D4A574]/10"
                        >
                          Try Your Own
                        </Button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* Try Your Own Input - Shows when paused */}
                <AnimatePresence>
                  {showTryInput && isPaused && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col items-center justify-center min-h-[320px] gap-4"
                    >
                      <p className="text-[#1A2332]/70 text-sm">Enter your legal question below:</p>
                      <div className="w-full max-w-md flex flex-col gap-3">
                        <input
                          type="text"
                          value={userQuery}
                          onChange={(e) => setUserQuery(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleUserQuerySubmit()}
                          placeholder="Type your legal question..."
                          className="w-full px-4 py-3 border-2 border-[#D4A574]/30 rounded-xl text-base focus:outline-none focus:border-[#D4A574] bg-white"
                          autoFocus
                        />
                        <div className="flex gap-2 justify-center">
                          <Button
                            onClick={handleUserQuerySubmit}
                            disabled={!userQuery.trim()}
                            style={{
                              background: userQuery.trim() ? 'linear-gradient(135deg, #D4A574 0%, #E5C69F 100%)' : '#e5e5e5',
                              color: userQuery.trim() ? '#0F1419' : '#999',
                            }}
                          >
                            <Search className="w-4 h-4 mr-2" />
                            Search
                          </Button>
                          <Button
                            variant="outline"
                            onClick={handleResumeDemo}
                            className="border-[#D4A574]/30 text-[#1A2332] hover:bg-[#D4A574]/10"
                          >
                            Resume Demo
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
