export interface Country {
  code: string;
  name: string;
  flag: string;
  legalSystem: string;
  continent: string;
}

export interface Category {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

export interface Judge {
  id: string;
  emoji: string;
  name: string;
  title: string;
  description: string;
  style: string;
  hot?: boolean;
  color: string;
}

export interface Party {
  name: string;
  argument: string;
}

export type FlowStep =
  | "country"
  | "category"
  | "judge"
  | "arguments"
  | "loading"
  | "verdict";

export interface VerdictResult {
  full: string;
  body: string;
  brief: string;
  courtOrder: string;
  winner: string | null;
  isSplit: boolean;
}

export interface AppState {
  step: FlowStep;
  country: Country | null;
  category: Category | null;
  judge: Judge | null;
  parties: Party[];
  verdict: VerdictResult | null;
  isUnlocked: boolean;
  promoCode: string;
  weeklyCount: number;
  weekNumber: number;

  setStep: (step: FlowStep) => void;
  setCountry: (country: Country) => void;
  setCategory: (category: Category) => void;
  setJudge: (judge: Judge) => void;
  setParties: (parties: Party[]) => void;
  setVerdict: (verdict: VerdictResult) => void;
  setUnlocked: (v: boolean) => void;
  setPromoCode: (code: string) => void;
  incrementWeeklyCount: () => void;
  reset: () => void;
}
