import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalResearch from "./pages/features/LegalResearch";
import JudgeAnalytics from "./pages/features/JudgeAnalytics";
import DocumentSummarizer from "./pages/features/DocumentSummarizer";
import CitationMaps from "./pages/features/CitationMaps";
import PredictiveAI from "./pages/features/PredictiveAI";
import DocumentAutomation from "./pages/features/DocumentAutomation";
import BetaSuccess from "./pages/BetaSuccess";
import WaitlistSuccess from "./pages/WaitlistSuccess";
import Contact from "./pages/Contact";
import Blog from "./pages/resources/Blog";
import CaseStudies from "./pages/resources/CaseStudies";
import Documentation from "./pages/resources/Documentation";
import VideoTutorials from "./pages/resources/VideoTutorials";
import SupportCenter from "./pages/resources/SupportCenter";
import BlogPost from "./pages/resources/BlogPost";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Security from "./pages/legal/Security";
import GDPR from "./pages/legal/GDPR";
import Accessibility from "./pages/legal/Accessibility";
import Cookies from "./pages/legal/Cookies";
import About from "./pages/About";
import Billing from "./pages/Billing";
import { CookieConsentProvider } from "./components/CookieConsent";
import { GlobalBanner } from "./components/GlobalBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsentProvider>
          <GlobalBanner>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/features/legal-research" element={<LegalResearch />} />
              <Route path="/features/judge-analytics" element={<JudgeAnalytics />} />
              <Route path="/features/document-summarizer" element={<DocumentSummarizer />} />
              <Route path="/features/citation-maps" element={<CitationMaps />} />
              <Route path="/features/predictive-ai" element={<PredictiveAI />} />
              <Route path="/features/document-automation" element={<DocumentAutomation />} />
              <Route path="/beta-success" element={<BetaSuccess />} />
              <Route path="/waitlist-success" element={<WaitlistSuccess />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/blog/:id" element={<BlogPost />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/resources/documentation" element={<Documentation />} />
              <Route path="/resources/video-tutorials" element={<VideoTutorials />} />
              <Route path="/resources/support" element={<SupportCenter />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/security" element={<Security />} />
              <Route path="/legal/gdpr" element={<GDPR />} />
              <Route path="/legal/accessibility" element={<Accessibility />} />
              <Route path="/legal/cookies" element={<Cookies />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GlobalBanner>
        </CookieConsentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
