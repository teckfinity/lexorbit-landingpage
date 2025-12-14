// Central launch configuration
export const LAUNCH_CONFIG = {
  LAUNCH_DATE: new Date('2026-01-15T00:00:00Z'),
  BETA_TOTAL_SPOTS: 25,
  BETA_ENABLED: true,
  WAITLIST_ENABLED: true,
  BETA_DISCOUNT: {
    percentage: 50,
    duration_months: 6,
    monthly_price: 19.50,
    original_price: 39,
  },
} as const;

export type CTAState = 'BETA' | 'WAITLIST' | 'LAUNCH';

export function getCurrentCTAState(betaSpotsRemaining: number): CTAState {
  const now = new Date();
  
  if (now >= LAUNCH_CONFIG.LAUNCH_DATE) {
    return 'LAUNCH';
  }
  
  if (betaSpotsRemaining > 0) {
    return 'BETA';
  }
  
  return 'WAITLIST';
}

export function getDaysUntilLaunch(): number {
  const now = new Date();
  if (now >= LAUNCH_CONFIG.LAUNCH_DATE) return 0;
  const diff = LAUNCH_CONFIG.LAUNCH_DATE.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function isPreLaunch(): boolean {
  return new Date() < LAUNCH_CONFIG.LAUNCH_DATE;
}

export function isPostLaunch(): boolean {
  return new Date() >= LAUNCH_CONFIG.LAUNCH_DATE;
}
