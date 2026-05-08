"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    num: "01",
    icon: "🌍",
    title: "Pick your country",
    desc: "140+ jurisdictions. Real laws. Real statutes. Not generic advice — actual rules from where you live.",
    bg: "#F0F9FF",
    accent: "#0EA5E9",
  },
  {
    num: "02",
    icon: "⚖️",
    title: "Choose your judge",
    desc: "Savage and funny, strictly legal, culturally aware, or wise and empathetic. Your dispute, your judge.",
    bg: "#FFF7ED",
    accent: "#F97316",
  },
  {
    num: "03",
    icon: "📝",
    title: "Each side pleads",
    desc: "Up to 6 parties. 800 characters each. Say what you need to say — no fluff, just facts.",
    bg: "#F5F3FF",
    accent: "#8B5CF6",
  },
  {
    num: "04",
    icon: "🔨",
    title: "Verdict drops",
    desc: "The gavel hits. Clear winner, legal citations, court order. Case closed — no more arguing.",
    bg: "#FFF1F2",
    accent: "#FF3B30",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 border-b border-[#E5E7EB]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            From argument to verdict
            <br />
            in under 2 minutes.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#0A0A0A] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: step.bg }}
                >
                  {step.icon}
                </div>
                <span className="text-5xl font-bold text-[#F5F5F5] leading-none select-none">
                  {step.num}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
