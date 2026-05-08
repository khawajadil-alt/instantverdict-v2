import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  iconOnly?: boolean;
  dark?: boolean; // true = used on dark background
}

export default function Logo({ size = "md", className, iconOnly, dark }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-base", gap: "gap-2" },
    md: { icon: 36, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 48, text: "text-3xl", gap: "gap-3" },
    xl: { icon: 64, text: "text-4xl", gap: "gap-4" },
  };

  const s = sizes[size];
  const bgColor = dark ? "#FFFFFF" : "#0A0A0A";
  const fgColor = dark ? "#0A0A0A" : "#FFFFFF";
  const textColor = dark ? "#FFFFFF" : "#0A0A0A";

  return (
    <div className={cn("flex items-center", s.gap, className)}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="48" height="48" rx="12" fill={bgColor} />

        {/* Center pole */}
        <rect x="23" y="10" width="2" height="26" rx="1" fill={fgColor} />

        {/* Base */}
        <rect x="16" y="35" width="16" height="2.5" rx="1.25" fill={fgColor} />

        {/* Crossbar */}
        <rect x="11" y="14" width="26" height="2" rx="1" fill={fgColor} />

        {/* Left chain */}
        <rect x="11.5" y="16" width="1.5" height="7" rx="0.75" fill={fgColor} opacity="0.6" />
        {/* Right chain */}
        <rect x="35" y="16" width="1.5" height="7" rx="0.75" fill={fgColor} opacity="0.6" />

        {/* Left pan */}
        <path d="M8 23 Q12.25 27.5 16.5 23" stroke={fgColor} strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Right pan */}
        <path d="M31.5 23 Q35.75 27.5 40 23" stroke={fgColor} strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Red accent dot */}
        <circle cx="39" cy="9" r="4" fill="#FF3B30" />
      </svg>

      {!iconOnly && (
        <span
          className={cn("font-bold tracking-tight leading-none", s.text)}
          style={{ color: textColor, fontFamily: "var(--font-space), system-ui, sans-serif" }}
        >
          Instant<span className="text-[#FF3B30]">Verdict</span>
        </span>
      )}
    </div>
  );
}
