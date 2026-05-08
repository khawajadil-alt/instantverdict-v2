"use client";

import { cn } from "@/lib/utils";

const STEPS = [
  { id: "country", label: "Nation", icon: "🌍" },
  { id: "category", label: "Dispute", icon: "📋" },
  { id: "judge", label: "Judge", icon: "⚖️" },
  { id: "arguments", label: "Plead", icon: "📝" },
];

export default function ProgressBar({ currentStep }: { currentStep: string }) {
  const currentIndex = STEPS.findIndex((s) => s.id === currentStep);
  if (currentIndex === -1) return null;

  return (
    <div className="w-full max-w-md mx-auto mb-12">
      <div className="flex items-center gap-0">
        {STEPS.map((step, i) => {
          const isDone = i < currentIndex;
          const isActive = i === currentIndex;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-400",
                    isDone && "bg-[#0A0A0A] text-white",
                    isActive && "bg-[#FF3B30] text-white shadow-[0_0_0_4px_rgba(255,59,48,0.15)]",
                    !isDone && !isActive && "bg-[#F5F5F5] text-[#9CA3AF]"
                  )}
                >
                  {isDone ? "✓" : isActive ? step.icon : <span className="text-xs">{i + 1}</span>}
                </div>
                <span
                  className={cn(
                    "text-xs font-semibold transition-colors duration-300",
                    isActive ? "text-[#FF3B30]" : isDone ? "text-[#0A0A0A]" : "text-[#9CA3AF]"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="flex-1 h-0.5 mx-2 mb-5 transition-all duration-500"
                  style={{ background: i < currentIndex ? "#0A0A0A" : "#E5E7EB" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
