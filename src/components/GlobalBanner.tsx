import { useState, createContext, useContext, ReactNode } from "react";
import { SmartBanner } from "./SmartBanner";
import { BetaModal } from "./BetaModal";
import { WaitlistModal } from "./WaitlistModal";

interface BannerContextType {
  openBetaModal: () => void;
  openWaitlistModal: () => void;
}

const BannerContext = createContext<BannerContextType | null>(null);

export const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (!context) {
    return { openBetaModal: () => {}, openWaitlistModal: () => {} };
  }
  return context;
};

interface GlobalBannerProps {
  children: ReactNode;
}

export function GlobalBanner({ children }: GlobalBannerProps) {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const contextValue: BannerContextType = {
    openBetaModal: () => setIsBetaModalOpen(true),
    openWaitlistModal: () => setIsWaitlistModalOpen(true),
  };

  return (
    <BannerContext.Provider value={contextValue}>
      <SmartBanner
        onOpenBetaModal={() => setIsBetaModalOpen(true)}
        onOpenWaitlistModal={() => setIsWaitlistModalOpen(true)}
      />
      {children}
      <BetaModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        onSwitchToWaitlist={() => {
          setIsBetaModalOpen(false);
          setIsWaitlistModalOpen(true);
        }}
      />
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </BannerContext.Provider>
  );
}
