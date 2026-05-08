"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { useVerdictStore } from "@/store/verdict-store";
import ProgressBar from "@/components/flow/ProgressBar";
import CountryStep from "@/components/flow/CountryStep";
import CategoryStep from "@/components/flow/CategoryStep";
import JudgeStep from "@/components/flow/JudgeStep";
import ArgumentsStep from "@/components/flow/ArgumentsStep";
import LoadingStep from "@/components/flow/LoadingStep";
import VerdictStep from "@/components/flow/VerdictStep";

const FLOW_STEPS = ["country", "category", "judge", "arguments"];

export default function CasePage() {
  const step = useVerdictStore((s) => s.step);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top navbar */}
      <nav className="border-b border-[#E5E7EB] px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        {step !== "loading" && step !== "verdict" && (
          <p className="text-xs text-[#9CA3AF] font-medium">Free · No account needed</p>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 py-10 pb-20">
        <div className="w-full max-w-2xl">
          {FLOW_STEPS.includes(step) && (
            <ProgressBar currentStep={step} />
          )}

          <AnimatePresence mode="wait">
            {step === "country" && <CountryStep key="country" />}
            {step === "category" && <CategoryStep key="category" />}
            {step === "judge" && <JudgeStep key="judge" />}
            {step === "arguments" && <ArgumentsStep key="arguments" />}
            {step === "loading" && <LoadingStep key="loading" />}
            {step === "verdict" && <VerdictStep key="verdict" />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
