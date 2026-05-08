"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "red";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] disabled:opacity-40 disabled:pointer-events-none leading-none";

    const variants = {
      primary:
        "bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] active:translate-y-0",
      red: "bg-[#FF3B30] text-white hover:bg-[#CC2E24] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,59,48,0.35)] active:translate-y-0",
      outline:
        "border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white active:bg-[#1A1A1A]",
      ghost: "text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F5F5F5]",
    };

    const sizes = {
      sm: "h-8 px-4 text-xs",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-7 text-base",
      xl: "h-14 px-10 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
