import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useBannerContext } from "@/components/GlobalBanner";

const Index = () => {
  const { openBetaModal, openWaitlistModal } = useBannerContext();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation showBanner={true} />
      <main>
        <HeroSection 
          onOpenBetaModal={openBetaModal}
          onOpenWaitlistModal={openWaitlistModal}
        />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ComparisonSection />
        <TestimonialsSection />
        <PricingSection 
          onOpenBetaModal={openBetaModal}
          onOpenWaitlistModal={openWaitlistModal}
        />
        <FAQSection />
        <CTASection 
          onOpenBetaModal={openBetaModal}
          onOpenWaitlistModal={openWaitlistModal}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
