"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const TICKER_ITEMS = [
  "WHO WAS RIGHT?",
  "CASE CLOSED.",
  "THE AI DECIDED.",
  "NO MORE ARGUING.",
  "SETTLE IT NOW.",
  "LEGALLY GROUNDED.",
  "140+ COUNTRIES.",
  "4 JUDGE STYLES.",
];

const SAMPLE_VERDICTS = [
  {
    winner: "Sarah",
    loser: "Jake",
    topic: "Splitting the bill",
    country: "🇺🇸",
    judge: "🔥 Judge Roast",
    quote: "Jake, you ordered the lobster. Pay for the lobster.",
  },
  {
    winner: "Maria",
    loser: "Landlord",
    topic: "Security deposit",
    country: "🇬🇧",
    judge: "⚖️ Judge Lawson",
    quote: "Under Section 213 Housing Act 2004, the deposit must be returned in full.",
  },
  {
    winner: "Dev",
    loser: "Employer",
    topic: "Unpaid overtime",
    country: "🇮🇳",
    judge: "⚖️ Judge Lawson",
    quote: "The Factories Act, 1948 is unambiguous on this matter.",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Dark top half, white bottom */}
      <div className="absolute inset-0 bg-[#0A0A0A]" style={{ height: "65%" }} />
      <div className="absolute bottom-0 left-0 right-0 bg-white" style={{ height: "35%" }} />

      {/* Dot pattern on dark section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          height: "65%",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex flex-col flex-1 pt-32 pb-0">
        {/* Badge */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <Logo size="lg" dark />
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
              style={{ background: "rgba(255,59,48,0.15)", color: "#FF3B30", border: "1px solid rgba(255,59,48,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-pulse" />
              AI-Powered · Free to Start
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[88px] font-bold text-white leading-[1.0] tracking-tight mb-6"
          >
            Stop arguing.
            <br />
            <span className="text-[#FF3B30]">Get the verdict.</span>
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-[#9CA3AF] text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Drop your argument. Pick a judge. Get an AI verdict backed by actual law from
            your country. Find out who was right — in seconds.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/case">
              <Button variant="red" size="xl">
                ⚖️ Settle It Now — Free
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button
                size="xl"
                className="!bg-white/10 !text-white hover:!bg-white/20 border border-white/20"
              >
                See How It Works
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Ticker tape */}
        <div
          className="w-full overflow-hidden py-3 mb-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="animate-marquee whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 mr-8 text-xs font-bold uppercase tracking-widest text-white/40">
                {item}
                <span className="text-[#FF3B30]">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Floating verdict cards — on white section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {SAMPLE_VERDICTS.map((v, i) => (
              <motion.div
                key={i}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#0A0A0A] hover:-translate-y-1 transition-all duration-200 cursor-default"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    {v.country} · {v.topic}
                  </span>
                  <span className="text-xs font-semibold text-[#FF3B30] bg-[#FFF0EF] px-2 py-0.5 rounded-full">
                    Settled ✓
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] italic mb-4 leading-relaxed">
                  &ldquo;{v.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Ruled in favour of</p>
                    <p className="text-base font-bold">{v.winner}</p>
                  </div>
                  <span className="text-xs text-[#9CA3AF]">{v.judge}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
