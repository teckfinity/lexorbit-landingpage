import { useState, useEffect, useCallback } from 'react';
import { LAUNCH_CONFIG, CTAState, getCurrentCTAState, getDaysUntilLaunch, isPreLaunch, isPostLaunch } from '@/config/launch';

const STORAGE_KEY = 'lexorbit_beta_signups';

interface BetaSignup {
  id: string;
  name: string;
  email: string;
  firm_name: string;
  firm_size: string;
  practice_area: string;
  use_case?: string;
  discount_code: string;
  created_at: string;
}

interface WaitlistSignup {
  id: string;
  email: string;
  firm_size?: string;
  interest?: string;
  created_at: string;
}

// Mock storage functions (replace with API calls when backend is ready)
function getBetaSignups(): BetaSignup[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveBetaSignup(signup: BetaSignup): void {
  const signups = getBetaSignups();
  signups.push(signup);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(signups));
}

function getWaitlistSignups(): WaitlistSignup[] {
  try {
    const data = localStorage.getItem('lexorbit_waitlist');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveWaitlistSignup(signup: WaitlistSignup): void {
  const signups = getWaitlistSignups();
  signups.push(signup);
  localStorage.setItem('lexorbit_waitlist', JSON.stringify(signups));
}

function generateDiscountCode(): string {
  return `BETA50-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

export function useLaunchState() {
  const [betaSpotsRemaining, setBetaSpotsRemaining] = useState<number>(LAUNCH_CONFIG.BETA_TOTAL_SPOTS);
  const [ctaState, setCtaState] = useState<CTAState>('BETA');
  const [isLoading, setIsLoading] = useState(true);

  const updateState = useCallback(() => {
    const signups = getBetaSignups();
    const remaining = Math.max(0, LAUNCH_CONFIG.BETA_TOTAL_SPOTS - signups.length);
    setBetaSpotsRemaining(remaining);
    setCtaState(getCurrentCTAState(remaining));
  }, []);

  useEffect(() => {
    updateState();
    setIsLoading(false);

    // Update every 30 seconds
    const interval = setInterval(updateState, 30000);

    // Check launch date every minute
    const launchCheck = setInterval(() => {
      if (isPostLaunch()) {
        setCtaState('LAUNCH');
      }
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(launchCheck);
    };
  }, [updateState]);

  const submitBetaSignup = useCallback(async (data: {
    name: string;
    email: string;
    firm_name: string;
    firm_size: string;
    practice_area: string;
    use_case?: string;
  }): Promise<{ success: boolean; error?: string; discount_code?: string }> => {
    // Check if past launch
    if (isPostLaunch()) {
      return { success: false, error: 'BETA_ENDED' };
    }

    // Check if beta full
    const signups = getBetaSignups();
    if (signups.length >= LAUNCH_CONFIG.BETA_TOTAL_SPOTS) {
      return { success: false, error: 'BETA_FULL' };
    }

    // Check duplicate email
    if (signups.some(s => s.email.toLowerCase() === data.email.toLowerCase())) {
      return { success: false, error: 'DUPLICATE' };
    }

    const signup: BetaSignup = {
      id: crypto.randomUUID(),
      ...data,
      discount_code: generateDiscountCode(),
      created_at: new Date().toISOString(),
    };

    saveBetaSignup(signup);
    updateState();

    return { success: true, discount_code: signup.discount_code };
  }, [updateState]);

  const submitWaitlistSignup = useCallback(async (data: {
    email: string;
    firm_size?: string;
    interest?: string;
  }): Promise<{ success: boolean; error?: string }> => {
    const signups = getWaitlistSignups();
    
    // Check duplicate
    if (signups.some(s => s.email.toLowerCase() === data.email.toLowerCase())) {
      return { success: false, error: 'DUPLICATE' };
    }

    const signup: WaitlistSignup = {
      id: crypto.randomUUID(),
      ...data,
      created_at: new Date().toISOString(),
    };

    saveWaitlistSignup(signup);
    return { success: true };
  }, []);

  return {
    betaSpotsRemaining,
    betaSpotsTaken: LAUNCH_CONFIG.BETA_TOTAL_SPOTS - betaSpotsRemaining,
    totalBetaSpots: LAUNCH_CONFIG.BETA_TOTAL_SPOTS,
    ctaState,
    daysUntilLaunch: getDaysUntilLaunch(),
    isPreLaunch: isPreLaunch(),
    isPostLaunch: isPostLaunch(),
    isLoading,
    submitBetaSignup,
    submitWaitlistSignup,
    refresh: updateState,
  };
}
