"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const STATS = [
  { value: 140, suffix: "+", label: "Countries" },
  { value: 12500, suffix: "+", label: "Cases Settled" },
  { value: 4, suffix: "", label: "Judge Styles" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
        },
      });
      return controls.stop;
    }
  }, [isInView, motionVal, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 border-b border-[#E5E7EB]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="py-8 px-6 text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-[#6B7280] font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
