"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useVerdictStore } from "@/store/verdict-store";
import type { Party } from "@/lib/types";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import FlagImg from "@/components/ui/FlagImg";
import { fetchVerdict } from "@/lib/api";

const MAX_CHARS = 800;
const PARTY_COLORS = ["#FF3B30", "#0EA5E9", "#8B5CF6", "#16A34A", "#F97316", "#EC4899"];

export default function ArgumentsStep() {
  const { country, category, judge, parties } = useVerdictStore();
  const setParties = useVerdictStore((s) => s.setParties);
  const setVerdict = useVerdictStore((s) => s.setVerdict);
  const setStep = useVerdictStore((s) => s.setStep);
  const incrementWeeklyCount = useVerdictStore((s) => s.incrementWeeklyCount);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateParty(i: number, field: keyof Party, value: string) {
    setParties(parties.map((p, idx) => (idx === i ? { ...p, [field]: value } : p)));
  }

  const isValid =
    parties.every((p) => p.name.trim().length > 0 && p.argument.trim().length > 3) &&
    !!country && !!category && !!judge;

  const missingFields = parties
    .map((p, i) => {
      if (!p.name.trim()) return `Party ${i + 1} needs a name`;
      if (p.argument.trim().length <= 3) return `Party ${i + 1} needs an argument`;
      return null;
    })
    .filter(Boolean);

  async function handleSubmit() {
    if (!isValid || !country || !category || !judge) return;
    setError(null);
    setLoading(true);
    setStep("loading");
    try {
      const verdict = await fetchVerdict(country, category, judge, parties);
      setVerdict(verdict);
      incrementWeeklyCount();
      setStep("verdict");
    } catch {
      setError("Something went wrong. Please try again.");
      setStep("arguments");
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {country && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold bg-[#F5F5F5] text-[#6B7280] px-3 py-1.5 rounded-full">
            <FlagImg code={country.code} size={16} />
            {country.name}
          </span>
        )}
        {category && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F5F5F5] text-[#6B7280] px-3 py-1.5 rounded-full">
            {category.emoji} {category.label}
          </span>
        )}
        {judge && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F5F5F5] text-[#6B7280] px-3 py-1.5 rounded-full">
            {judge.emoji} {judge.name}
          </span>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          State your case.
        </h2>
        <p className="text-[#6B7280]">{MAX_CHARS} characters each. No fluff, just facts.</p>
      </div>

      <div className="space-y-5 mb-5">
        {parties.map((party, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border-2 overflow-hidden bg-white"
            style={{ borderColor: party.name ? (PARTY_COLORS[i] ?? "#E5E7EB") + "60" : "#E5E7EB" }}
          >
            {/* Card header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: PARTY_COLORS[i] ?? "#0A0A0A" }}
                >
                  {i + 1}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  Party {i + 1}
                </span>
              </div>
              {parties.length > 2 && (
                <button
                  onClick={() => setParties(parties.filter((_, idx) => idx !== i))}
                  className="text-xs text-[#9CA3AF] hover:text-red-500 transition-colors cursor-pointer"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="p-4 space-y-4">
              {/* Name field — clearly labelled, full-width */}
              <div>
                <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  placeholder={`e.g. Alex, My Landlord, The Company...`}
                  value={party.name}
                  onChange={(e) => updateParty(i, "name", e.target.value)}
                  maxLength={50}
                  className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold outline-none border-2 transition-all duration-200 bg-white"
                  style={{ borderColor: "#E5E7EB", color: "#0A0A0A" }}
                  onFocus={(e) => (e.target.style.borderColor = PARTY_COLORS[i] ?? "#0A0A0A")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
              </div>

              {/* Argument field */}
              <div>
                <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                  Argument
                </label>
                <textarea
                  placeholder={`${party.name || `Party ${i + 1}`}'s side of the story — state the facts clearly...`}
                  value={party.argument}
                  onChange={(e) => updateParty(i, "argument", e.target.value.slice(0, MAX_CHARS))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none border-2 transition-all duration-200 bg-white text-[#374151] placeholder:text-[#9CA3AF] resize-none leading-relaxed"
                  style={{ borderColor: "#E5E7EB" }}
                  onFocus={(e) => (e.target.style.borderColor = PARTY_COLORS[i] ?? "#0A0A0A")}
                  onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                />
                <div className="flex justify-end mt-1">
                  <span className={cn("text-xs font-medium",
                    party.argument.length >= MAX_CHARS ? "text-red-500" :
                    party.argument.length > 700 ? "text-orange-500" : "text-[#9CA3AF]"
                  )}>
                    {party.argument.length}/{MAX_CHARS}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {parties.length < 6 && (
        <button
          onClick={() => setParties([...parties, { name: "", argument: "" }])}
          className="w-full rounded-2xl py-3 text-sm font-semibold border-2 border-dashed border-[#E5E7EB] text-[#9CA3AF] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all duration-200 cursor-pointer mb-5"
        >
          + Add Another Party ({parties.length}/6)
        </button>
      )}

      {error && (
        <div className="rounded-xl p-4 mb-4 text-sm bg-[#FFF1F2] border border-[#FECDD3] text-red-600">
          {error}
        </div>
      )}

      {!isValid && missingFields.length > 0 && (
        <div className="rounded-xl p-3 mb-4 text-xs bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
          {missingFields[0]}
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => setStep("judge")}>← Back</Button>
        <Button variant="red" size="lg" disabled={!isValid || loading} loading={loading} onClick={handleSubmit}>
          ⚖️ Submit to Court
        </Button>
      </div>

      <p className="text-xs text-center text-[#9CA3AF] mt-5">
        General guidance only — not a substitute for qualified legal advice.
      </p>
    </motion.div>
  );
}
