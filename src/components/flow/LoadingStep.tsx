"use client";

import { motion } from "framer-motion";
import { useVerdictStore } from "@/store/verdict-store";
import FlagImg from "@/components/ui/FlagImg";

const JUDGE_MESSAGES: Record<string, string[]> = {
  roast: [
    "Sharpening the insults...",
    "Loading brutal honesty...",
    "Consulting the roast dictionary...",
    "Preparing savage commentary...",
    "Finding the funniest verdict...",
    "Dropping the mic...",
  ],
  lawson: [
    "Consulting the statutes...",
    "Citing landmark cases...",
    "Cross-referencing legislation...",
    "Reviewing the evidence...",
    "Deliberating with rigour...",
    "Writing the ruling...",
  ],
  culture: [
    "Consulting community standards...",
    "Reviewing social norms...",
    "Weighing cultural expectations...",
    "Assessing the context...",
    "Reading the room...",
    "Crafting the verdict...",
  ],
  sage: [
    "Seeking deeper wisdom...",
    "Meditating on the facts...",
    "Finding the root cause...",
    "Weighing both perspectives...",
    "Deliberating...",
    "Crafting a fair resolution...",
  ],
};

const DEFAULT_MESSAGES = [
  "Reviewing the evidence...",
  "Consulting the statutes...",
  "Weighing both sides...",
  "Cross-referencing case law...",
  "Deliberating...",
  "Writing the verdict...",
];

export default function LoadingStep() {
  const judge = useVerdictStore((s) => s.judge);
  const country = useVerdictStore((s) => s.country);

  const messages = judge ? (JUDGE_MESSAGES[judge.id] ?? DEFAULT_MESSAGES) : DEFAULT_MESSAGES;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      {/* Animated gavel */}
      <div className="relative mb-10">
        <motion.div
          animate={{ rotate: [-35, 12, -4, 4, 0], y: [-12, 4, -2, 2, 0] }}
          transition={{ duration: 1.0, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
          className="text-8xl"
          style={{ display: "inline-block", transformOrigin: "75% 80%" }}
        >
          🔨
        </motion.div>

        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-1/2 rounded-full"
            style={{ border: "2px solid #FF3B30" }}
            animate={{ width: [10, 100], height: [10, 100], opacity: [0.7, 0], x: "-50%", y: "40%" }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.35 + 1.0, ease: "easeOut" }}
          />
        ))}
      </div>

      <p className="text-xl font-bold mb-1">
        {judge?.emoji} {judge?.name ?? "The Court"} is deliberating
      </p>
      <p className="text-sm text-[#6B7280] mb-10 flex items-center gap-1.5 justify-center">
        {country && <FlagImg code={country.code} size={16} className="inline" />}
        {country?.name} jurisdiction
      </p>

      {/* Message cycling */}
      <div className="h-6 overflow-hidden mb-10 w-64">
        {messages.map((msg, i) => (
          <motion.p
            key={msg}
            className="text-sm text-[#9CA3AF] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
            transition={{
              duration: 2.2,
              delay: i * 2.6,
              repeat: Infinity,
              repeatDelay: messages.length * 2.6 - 2.2,
            }}
          >
            {msg}
          </motion.p>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1.5 rounded-full bg-[#F0F0F0] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[#FF3B30]"
          animate={{ width: ["0%", "90%"] }}
          transition={{ duration: 16, ease: "easeInOut" }}
        />
      </div>

      <p className="text-xs text-[#BDBDBD] mt-4">Usually takes 10–20 seconds</p>
    </motion.div>
  );
}
