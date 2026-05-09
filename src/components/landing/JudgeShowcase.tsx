"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { JUDGES } from "@/lib/data";
import Link from "next/link";
import Button from "@/components/ui/Button";

const JUDGE_BG: Record<string, string> = {
  roast: "#FFF1F2",
  lawson: "#EFF6FF",
  culture: "#F5F3FF",
  sage: "#F0FDF4",
};

export default function JudgeShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(JUDGES[0]);

  return (
    <section id="judges" className="py-24 border-b border-[#E5E7EB]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">
            The Judges
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Pick who decides
            <br />
            your fate.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Judge selector list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {JUDGES.map((j, i) => (
              <motion.button
                key={j.id}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(j)}
                className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer w-full"
                style={{
                  background: active.id === j.id ? JUDGE_BG[j.id] : "#F9FAFB",
                  border: `2px solid ${active.id === j.id ? j.color : "transparent"}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: JUDGE_BG[j.id] }}
                >
                  {j.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm">{j.name}</p>
                    {j.hot && (
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded-full bg-[#FFF1F2] text-[#FF3B30]">
                        🔥 Viral
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6B7280] truncate">{j.title}</p>
                </div>
                {active.id === j.id && (
                  <span className="text-[#FF3B30] text-lg flex-shrink-0">→</span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Active judge detail */}
          <motion.div
            key={active.id}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 rounded-2xl p-8 border-2 flex flex-col"
            style={{
              background: JUDGE_BG[active.id],
              borderColor: active.color,
            }}
          >
            <div className="text-6xl mb-5">{active.emoji}</div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-3xl font-bold">{active.name}</h3>
              {active.hot && (
                <span className="text-sm font-bold px-2 py-1 rounded-full bg-[#FF3B30] text-white">
                  🔥 Viral Pick
                </span>
              )}
            </div>
            <p className="text-sm font-semibold mb-4" style={{ color: active.color }}>
              {active.title}
            </p>
            <p className="text-[#374151] leading-relaxed mb-5 flex-1">
              {active.description}
            </p>
            <div
              className="rounded-xl p-4 mb-6"
              style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1">
                Ruling Style
              </p>
              <p className="text-sm text-[#374151]">{active.style}</p>
            </div>
            <Link href="/case">
              <Button variant="primary" size="lg">
                Judge me with {active.name} →
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
