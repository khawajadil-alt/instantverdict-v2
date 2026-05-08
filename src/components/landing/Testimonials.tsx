"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "My landlord tried to keep my entire deposit. Judge Lawson cited the exact Housing Act clause. Got every penny back.",
    name: "Sarah M.",
    handle: "@sarahm_london",
    flag: "🇬🇧",
    judge: "Judge Lawson",
    result: "Won deposit back",
  },
  {
    quote: "Judge Roast absolutely obliterated my colleague's argument in the funniest way. We both died laughing but I was right.",
    name: "Marcus T.",
    handle: "@marcust",
    flag: "🇺🇸",
    judge: "Judge Roast",
    result: "Vindicated lol",
  },
  {
    quote: "Settled a 2-year family inheritance dispute in 90 seconds. Everyone accepted Judge Sage's verdict. Insane.",
    name: "Priya K.",
    handle: "@priyacode",
    flag: "🇮🇳",
    judge: "Judge Sage",
    result: "Family peace restored",
  },
  {
    quote: "Showed my boss the verdict about my unpaid overtime. Had to print it out. He paid up same day.",
    name: "James O.",
    handle: "@jamesokafor",
    flag: "🇳🇬",
    judge: "Judge Lawson",
    result: "Got paid",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 border-b border-[#E5E7EB]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">
            Real Verdicts, Real People
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              The people have spoken.
            </h2>
            <div className="flex items-center gap-1.5">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{ color: "#FF3B30", fontSize: "20px" }}>{s}</span>
              ))}
              <span className="text-sm text-[#6B7280] ml-1">4.8 avg</span>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#0A0A0A] transition-all duration-200 flex flex-col gap-4"
            >
              {/* Result badge */}
              <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0]">
                ✓ {t.result}
              </span>

              <p className="text-sm text-[#374151] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span>{t.flag}</span>
                    <p className="text-sm font-bold">{t.name}</p>
                  </div>
                  <p className="text-xs text-[#9CA3AF]">{t.handle}</p>
                </div>
                <span className="text-xs text-[#6B7280] text-right">{t.judge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
