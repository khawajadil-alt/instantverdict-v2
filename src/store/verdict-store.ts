"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AppState, Country, Category, Judge, Party, VerdictResult, FlowStep } from "@/lib/types";
import { getISOWeek } from "@/lib/utils";

const currentWeek = getISOWeek(new Date());

export const useVerdictStore = create<AppState>()(
  persist(
    (set, get) => ({
      step: "country",
      country: null,
      category: null,
      judge: null,
      parties: [
        { name: "", argument: "" },
        { name: "", argument: "" },
      ],
      verdict: null,
      isUnlocked: false,
      promoCode: "",
      weeklyCount: 0,
      weekNumber: currentWeek,

      setStep: (step: FlowStep) => set({ step }),

      setCountry: (country: Country) => set({ country }),

      setCategory: (category: Category) => set({ category }),

      setJudge: (judge: Judge) => set({ judge }),

      setParties: (parties: Party[]) => set({ parties }),

      setVerdict: (verdict: VerdictResult) => set({ verdict }),

      setUnlocked: (v: boolean) => set({ isUnlocked: v }),

      setPromoCode: (code: string) => set({ promoCode: code }),

      incrementWeeklyCount: () => {
        const { weekNumber, weeklyCount } = get();
        const thisWeek = getISOWeek(new Date());
        if (thisWeek !== weekNumber) {
          set({ weeklyCount: 1, weekNumber: thisWeek });
        } else {
          set({ weeklyCount: weeklyCount + 1 });
        }
      },

      reset: () =>
        set({
          step: "country",
          country: null,
          category: null,
          judge: null,
          parties: [
            { name: "", argument: "" },
            { name: "", argument: "" },
          ],
          verdict: null,
          isUnlocked: false,
          promoCode: "",
        }),
    }),
    {
      name: "iv-storage",
      partialize: (state) => ({
        step: state.step,
        country: state.country,
        category: state.category,
        judge: state.judge,
        parties: state.parties,
        verdict: state.verdict,
        isUnlocked: state.isUnlocked,
        weeklyCount: state.weeklyCount,
        weekNumber: state.weekNumber,
      }),
    }
  )
);
