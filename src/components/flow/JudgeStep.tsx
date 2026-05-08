"use client";

import { motion } from "framer-motion";
import { JUDGES } from "@/lib/data";
import { useVerdictStore } from "@/store/verdict-store";
import type { Judge } from "@/lib/types";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const JUDGE_BG: Record<string, string> = {
  roast: "#FFF1F2",
  lawson: "#EFF6FF",
  culture: "#F5F3FF",
  sage: "#F0FDF4",
};

export default function JudgeStep() {
  const setJudge = useVerdictStore((s) => s.setJudge);
  const setStep = useVerdictStore((s) => s.setStep);
  const selected = useVerdictStore((s) => s.judge);

  function handleSelect(judge: Judge) {
    setJudge(judge);
    setTimeout(() => setStep("arguments"), 250);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Who&apos;s judging you?
        </h2>
        <p className="text-[#6B7280]">Pick your judge. Each one rules differently.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {JUDGES.map((judge, i) => (
          <motion.button
            key={judge.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            onClick={() => handleSelect(judge)}
            className={cn(
              "text-left rounded-2xl p-6 border-2 transition-all duration-200 cursor-pointer hover:-translate-y-0.5",
              selected?.id === judge.id
                ? "border-[#FF3B30]"
                : "border-[#E5E7EB] hover:border-[#0A0A0A]"
            )}
            style={{ background: JUDGE_BG[judge.id] }}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">{judge.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{judge.name}</h3>
                  {judge.hot && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FF3B30] text-white">
                      🔥 Viral
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-[#6B7280] mb-3">{judge.title}</p>
                <p className="text-sm text-[#374151] leading-relaxed">{judge.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-6">
        <Button variant="ghost" onClick={() => setStep("category")}>← Back</Button>
      </div>
    </motion.div>
  );
}
