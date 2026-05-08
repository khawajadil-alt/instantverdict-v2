"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#E5E7EB]">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-[#0A0A0A] text-base leading-snug group-hover:text-[#FF3B30] transition-colors">
                {faq.q}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center transition-all duration-200 ${
                  isOpen
                    ? "border-[#FF3B30] bg-[#FF3B30] text-white rotate-45"
                    : "text-[#6B7280]"
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[#6B7280] leading-relaxed text-sm">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
