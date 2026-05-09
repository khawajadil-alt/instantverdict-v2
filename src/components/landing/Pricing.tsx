"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    sub: "Try it out",
    features: [
      "3 verdicts per week",
      "Brief verdict summary",
      "140+ jurisdictions",
      "All 4 judges",
    ],
    excluded: ["Full detailed verdict", "PDF download", "Up to 6 parties"],
    cta: "Start Free",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Per Verdict",
    price: "$1",
    period: "/ verdict",
    sub: "Pay when it matters",
    features: [
      "3 verdicts per week",
      "Brief verdict summary",
      "140+ jurisdictions",
      "All 4 judges",
      "Full detailed verdict",
      "PDF download",
    ],
    excluded: ["Up to 6 parties"],
    cta: "Get Full Verdict",
    variant: "red" as const,
    highlight: true,
  },
  {
    name: "Pro",
    price: "$5",
    period: "/ month",
    sub: "For power users",
    features: [
      "Unlimited verdicts",
      "Brief verdict summary",
      "140+ jurisdictions",
      "All 4 judges",
      "Full detailed verdict",
      "PDF download",
      "Up to 6 parties",
    ],
    excluded: [],
    cta: "Go Pro",
    variant: "primary" as const,
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 border-b border-[#E5E7EB]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Fair pricing.
            <br />
            Fairer verdicts.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl p-7 flex flex-col"
              style={{
                background: tier.highlight ? "#0A0A0A" : "#FFFFFF",
                border: tier.highlight ? "2px solid #FF3B30" : "2px solid #E5E7EB",
              }}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-[#FF3B30] text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-7">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: tier.highlight ? "#FF6B62" : "#9CA3AF" }}
                >
                  {tier.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: tier.highlight ? "#FFFFFF" : "#0A0A0A" }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className="text-sm mb-1.5"
                      style={{ color: tier.highlight ? "#9CA3AF" : "#6B7280" }}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="text-xs" style={{ color: tier.highlight ? "#6B7280" : "#9CA3AF" }}>
                  {tier.sub}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold"
                      style={{
                        background: tier.highlight ? "rgba(255,59,48,0.2)" : "#F0FDF4",
                        color: tier.highlight ? "#FF6B62" : "#16A34A",
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ color: tier.highlight ? "#D1D5DB" : "#374151" }}>{f}</span>
                  </li>
                ))}
                {tier.excluded.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm opacity-40">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                      style={{ background: "#F5F5F5" }}
                    >
                      ×
                    </span>
                    <span style={{ color: tier.highlight ? "#6B7280" : "#9CA3AF" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/case" className="w-full">
                <Button variant={tier.variant} size="lg" className="w-full">
                  {tier.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[#9CA3AF] mt-8"
        >
          No account required. Cancel Pro anytime. Promo codes available.
        </motion.p>
      </div>
    </section>
  );
}
