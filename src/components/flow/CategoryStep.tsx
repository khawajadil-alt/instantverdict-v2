"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";
import { useVerdictStore } from "@/store/verdict-store";
import type { Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import FlagImg from "@/components/ui/FlagImg";

const CAT_COLORS: Record<string, string> = {
  relationships: "#FFF1F2",
  workplace: "#EFF6FF",
  housing: "#F0FDF4",
  consumer: "#FFF7ED",
  family: "#F5F3FF",
  money: "#FEFCE8",
  neighbors: "#F0FDF4",
  online: "#EFF6FF",
  random: "#FFF1F2",
  other: "#F9FAFB",
};

export default function CategoryStep() {
  const setCategory = useVerdictStore((s) => s.setCategory);
  const setStep = useVerdictStore((s) => s.setStep);
  const selected = useVerdictStore((s) => s.category);
  const country = useVerdictStore((s) => s.country);

  function handleSelect(cat: Category) {
    setCategory(cat);
    setTimeout(() => setStep("judge"), 250);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-sm text-[#6B7280] mb-2 bg-[#F5F5F5] px-3 py-1.5 rounded-full">
          {country && <FlagImg code={country.code} size={16} />}
          <span>{country?.name}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          What&apos;s the beef about?
        </h2>
        <p className="text-[#6B7280]">Pick the category that fits your dispute.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {CATEGORIES.map((cat, i) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            onClick={() => handleSelect(cat)}
            className={cn(
              "flex flex-col items-center gap-3 p-5 rounded-2xl text-center border-2 transition-all duration-200 cursor-pointer hover:-translate-y-0.5",
              selected?.id === cat.id
                ? "border-[#FF3B30]"
                : "border-[#E5E7EB] hover:border-[#0A0A0A]"
            )}
            style={{ background: CAT_COLORS[cat.id] ?? "#F9FAFB" }}
          >
            <span className="text-3xl">{cat.emoji}</span>
            <p className={cn("text-sm font-bold", selected?.id === cat.id ? "text-[#FF3B30]" : "text-[#0A0A0A]")}>
              {cat.label}
            </p>
          </motion.button>
        ))}
      </div>

      <div className="mt-6">
        <Button variant="ghost" onClick={() => setStep("country")}>← Back</Button>
      </div>
    </motion.div>
  );
}
