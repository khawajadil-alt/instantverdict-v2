"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] py-3" : "py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/">
          <Logo size="md" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#how-it-works", label: "How It Works" },
            { href: "#judges", label: "Judges" },
            { href: "#pricing", label: "Pricing" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Link href="/case">
          <Button size="md" variant="red">
            Get My Verdict →
          </Button>
        </Link>
      </div>
    </nav>
  );
}
