"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COUNTRIES } from "@/lib/data";
import { useVerdictStore } from "@/store/verdict-store";
import type { Country } from "@/lib/types";
import { cn } from "@/lib/utils";
import FlagImg from "@/components/ui/FlagImg";

export default function CountryStep() {
  const [search, setSearch] = useState("");
  const setCountry = useVerdictStore((s) => s.setCountry);
  const setStep = useVerdictStore((s) => s.setStep);
  const selected = useVerdictStore((s) => s.country);

  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, Country[]>>((acc, c) => {
    acc[c.continent] = acc[c.continent] ?? [];
    acc[c.continent].push(c);
    return acc;
  }, {});

  function handleSelect(country: Country) {
    setCountry(country);
    setTimeout(() => setStep("category"), 250);
  }

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Where&apos;s this happening?
        </h2>
        <p className="text-[#6B7280]">We apply the actual laws of your country.</p>
      </div>

      <div className="relative mb-5">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]">🔍</span>
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none border-2 transition-all duration-200 bg-white"
          style={{ borderColor: "#E5E7EB", color: "#0A0A0A" }}
          onFocus={(e) => (e.target.style.borderColor = "#0A0A0A")}
          onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
        />
      </div>

      <div className="max-h-[500px] overflow-y-auto space-y-5 pr-1">
        {Object.keys(grouped).sort().map((continent) => (
          <div key={continent}>
            <p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-bold mb-2.5 px-1">
              {continent}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {grouped[continent].map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleSelect(country)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm border-2 transition-all duration-200 cursor-pointer",
                    selected?.code === country.code
                      ? "border-[#FF3B30] bg-[#FFF1F2]"
                      : "border-[#E5E7EB] bg-white hover:border-[#0A0A0A] hover:bg-[#F9FAFB]"
                  )}
                >
                  <FlagImg code={country.code} size={28} />
                  <div className="min-w-0">
                    <p className="font-semibold truncate text-[#0A0A0A]">{country.name}</p>
                    <p className="text-xs text-[#9CA3AF] truncate">{country.legalSystem}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-[#9CA3AF] py-12">
            No results for &ldquo;{search}&rdquo;
          </p>
        )}
      </div>
    </motion.div>
  );
}
