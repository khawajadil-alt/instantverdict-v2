"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVerdictStore } from "@/store/verdict-store";
import { VALID_PROMO_CODES } from "@/lib/utils";
import FlagImg from "@/components/ui/FlagImg";
import Link from "next/link";

const PAYPAL_CLIENT_ID = "AeezeY9FIQ6FWoBKq3T3oSMoHheHq3TKPVsAXaGKO5T_AiCuiM_pm1Hg9549Saa4CfHalUQSfVGADqys";

const CONFETTI_COLORS = ["#FF3B30", "#FFD700", "#0EA5E9", "#8B5CF6", "#16A34A", "#F97316"];

const PARTICLE_DATA = Array.from({ length: 28 }, (_, i) => ({
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: 5 + (i / 28) * 90,
  dx: ((i % 7) - 3) * 55 + (i % 3) * 20,
  dy: -(100 + (i % 8) * 35),
  rotate: (i % 2 === 0 ? 1 : -1) * (90 + i * 25),
  delay: (i % 5) * 0.08,
  size: i % 3 === 0 ? 10 : 6,
}));

function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {PARTICLE_DATA.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm"
          style={{ background: p.color, left: `${p.left}%`, top: "50%", width: p.size, height: p.size }}
          initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
          animate={{ y: p.dy, x: p.dx, opacity: [1, 1, 0], rotate: p.rotate }}
          transition={{ duration: 1.5, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function VerdictStep() {
  const { verdict, judge, country, category, parties, isUnlocked } = useVerdictStore();
  const setUnlocked = useVerdictStore((s) => s.setUnlocked);
  const setPromoCode = useVerdictStore((s) => s.setPromoCode);
  const reset = useVerdictStore((s) => s.reset);

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const confettiShownRef = useRef(false);
  const paypalContainerRef = useRef<HTMLDivElement>(null);
  const paypalInitRef = useRef(false);

  useEffect(() => {
    const t1 = setTimeout(() => setRevealed(true), 300);
    const t2 = setTimeout(() => {
      if (!confettiShownRef.current && verdict && !verdict.isSplit) {
        setShowConfetti(true);
        confettiShownRef.current = true;
        setTimeout(() => setShowConfetti(false), 2000);
      }
    }, 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [verdict]);

  useEffect(() => {
    if (isUnlocked || paypalInitRef.current) return;

    function renderButtons() {
      const container = paypalContainerRef.current;
      if (!container || paypalInitRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pp = (window as any).paypal;
      if (!pp) return;
      paypalInitRef.current = true;
      container.innerHTML = "";
      pp.Buttons({
        style: { layout: "vertical", color: "gold", shape: "rect", label: "pay", height: 45 },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createOrder: (_data: unknown, actions: any) =>
          actions.order.create({
            purchase_units: [{
              amount: { value: "1.00", currency_code: "USD" },
              description: "InstantVerdict — Full Verdict Unlock",
            }],
          }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onApprove: (_data: unknown, actions: any) =>
          actions.order.capture().then(() => {
            setUnlocked(true);
            if (!confettiShownRef.current) {
              setShowConfetti(true);
              confettiShownRef.current = true;
              setTimeout(() => setShowConfetti(false), 2000);
            }
          }),
        onError: (err: unknown) => console.error("PayPal error:", err),
      }).render(container);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).paypal) {
      renderButtons();
    } else {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture`;
      script.onload = renderButtons;
      document.head.appendChild(script);
    }
  }, [isUnlocked, setUnlocked]);

  if (!verdict) return null;

  const bodyParagraphs = verdict.body
    ? verdict.body.split(/\n\n+/).filter((p) => p.trim().length > 0)
    : [verdict.brief];

  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    if (VALID_PROMO_CODES.has(code)) {
      setPromoCode(code);
      setUnlocked(true);
      if (!confettiShownRef.current) {
        setShowConfetti(true);
        confettiShownRef.current = true;
        setTimeout(() => setShowConfetti(false), 2000);
      }
    } else {
      setPromoError("Invalid code. Try PRODUCTHUNT or INSTANTVERDICT.");
    }
  }

  function shareToX() {
    if (!verdict) return;
    const name = verdict.winner ?? "both sides";
    const text = verdict.isSplit
      ? `⚖️ AI ruled SPLIT DECISION on our argument!\n\nSettle yours → instantverdict.com`
      : `⚖️ AI just ruled: ${name} WINS!\n\n"${verdict.brief.slice(0, 120)}..."\n\nSettle your argument → instantverdict.com`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank",
      "width=560,height=420,noopener"
    );
  }

  async function handleCopy() {
    if (!verdict) return;
    const text = verdict.isSplit
      ? `⚖️ AI Verdict: SPLIT DECISION\n\n"${verdict.brief}"\n\nSettle yours → instantverdict.com`
      : `⚖️ AI Verdict: ${verdict.winner ?? "Winner"} WINS\n\n"${verdict.brief}"\n\nSettle yours → instantverdict.com`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch { /* */ }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>

      {/* Meta chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
        {country && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F5F5F5] text-[#6B7280] px-3 py-1.5 rounded-full">
            <FlagImg code={country.code} size={14} />{country.name}
          </span>
        )}
        {category && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F5F5F5] text-[#6B7280] px-3 py-1.5 rounded-full">
            {category.emoji} {category.label}
          </span>
        )}
        {judge && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F5F5F5] text-[#6B7280] px-3 py-1.5 rounded-full">
            {judge.emoji} {judge.name}
          </span>
        )}
      </div>

      {/* Winner banner */}
      <div className="relative mb-5 overflow-visible">
        <AnimatePresence>{showConfetti && <Confetti />}</AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 20 }}
          className="rounded-2xl p-7 text-center"
          style={{
            background: verdict.isSplit
              ? "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)"
              : "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)",
            border: `2px solid ${verdict.isSplit ? "#8B5CF6" : "#FF3B30"}`,
          }}
        >
          <motion.p
            className="text-xs font-black uppercase tracking-[0.25em] mb-3"
            style={{ color: verdict.isSplit ? "#7C3AED" : "#CC2E24" }}
          >
            {verdict.isSplit ? "⚖️ Split Decision" : "⚖️ The Court Rules In Favour Of"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={revealed ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <p
              className="font-black tracking-tight leading-none"
              style={{
                fontSize: "clamp(2.5rem, 10vw, 4rem)",
                color: verdict.isSplit ? "#7C3AED" : "#FF3B30",
              }}
            >
              {verdict.isSplit ? "SPLIT" : verdict.winner}
            </p>
            {!verdict.isSplit && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-sm font-bold mt-2"
                style={{ color: verdict.isSplit ? "#7C3AED" : "#CC2E24" }}
              >
                PREVAILS
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Party result row */}
      <div
        className="grid gap-2 mb-6"
        style={{ gridTemplateColumns: `repeat(${Math.min(parties.length, 4)}, 1fr)` }}
      >
        {parties.map((party, i) => {
          const isWinner = !verdict.isSplit && party.name.toLowerCase() === verdict.winner?.toLowerCase();
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.07 }}
              className="rounded-xl p-3 text-center border-2"
              style={{
                background: isWinner ? "#F0FDF4" : verdict.isSplit ? "#F5F3FF" : "#FFF9F9",
                borderColor: isWinner ? "#86EFAC" : verdict.isSplit ? "#C4B5FD" : "#FECACA",
              }}
            >
              <p className={`text-xs font-black mb-0.5 ${isWinner ? "text-[#16A34A]" : verdict.isSplit ? "text-[#7C3AED]" : "text-[#DC2626]"}`}>
                {isWinner ? "✓ WINS" : verdict.isSplit ? "~ DRAW" : "✗ LOSES"}
              </p>
              <p className="text-sm font-bold text-[#0A0A0A] truncate">{party.name}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Judge ruling card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="rounded-2xl border-2 border-[#E5E7EB] overflow-hidden mb-5"
      >
        <div className="px-5 py-3.5 bg-[#F9FAFB] border-b border-[#E5E7EB] flex items-center gap-2.5">
          <span className="text-xl">{judge?.emoji}</span>
          <div>
            <p className="text-sm font-black">{judge?.name}&apos;s Full Ruling</p>
            <p className="text-xs text-[#9CA3AF]">{judge?.title}</p>
          </div>
        </div>

        <div className="relative p-5 bg-white">
          {/* Always-visible brief */}
          <div className="space-y-3 mb-4">
            {verdict.brief.split(/\n\n+/).filter(Boolean).map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-[#374151]">{para}</p>
            ))}
          </div>

          {!isUnlocked ? (
            <div className="relative">
              {/* Blurred preview */}
              <div
                className="text-sm leading-relaxed text-[#374151] space-y-3 select-none"
                style={{ filter: "blur(6px)", userSelect: "none", pointerEvents: "none" }}
              >
                {bodyParagraphs.slice(1).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {verdict.courtOrder && (
                  <div className="mt-4 rounded-xl p-4 bg-[#0A0A0A]">
                    <p className="text-xs font-black text-[#FF3B30] mb-1">⚖️ THE COURT ORDERS</p>
                    <p className="text-sm text-white font-semibold">{verdict.courtOrder}</p>
                  </div>
                )}
              </div>

              {/* Paywall overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-8 pb-6 rounded-xl"
                style={{ background: "linear-gradient(to top, white 55%, rgba(255,255,255,0.85) 80%, transparent 100%)" }}
              >
                <div className="text-3xl mb-2">🔒</div>
                <p className="font-black text-xl mb-1">Full verdict locked</p>
                <p className="text-sm text-[#6B7280] mb-5 max-w-xs leading-relaxed">
                  Get the complete ruling with legal citations, case law references, and the binding court order.
                </p>
                <div className="w-full max-w-xs mx-auto mb-4">
                  <p className="text-xs font-bold text-center text-[#6B7280] mb-2">
                    🔓 Unlock Full Verdict — $1 one-time
                  </p>
                  <div ref={paypalContainerRef} />
                </div>
                <div className="flex gap-2 w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Have a promo code?"
                    value={promoInput}
                    onChange={(e) => { setPromoInput(e.target.value.toUpperCase()); setPromoError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && applyPromo()}
                    className="flex-1 px-3 py-2 rounded-lg text-sm outline-none border-2 border-[#E5E7EB] focus:border-[#0A0A0A] transition-colors bg-white font-semibold"
                  />
                  <button
                    onClick={applyPromo}
                    className="px-4 py-2 rounded-lg text-sm font-bold border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-xs text-red-500 mt-2">{promoError}</p>}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {bodyParagraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-[#374151]">{para}</p>
              ))}

              {verdict.courtOrder && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-5 rounded-xl p-4"
                  style={{ background: "#0A0A0A" }}
                >
                  <p className="text-xs font-black uppercase tracking-widest text-[#FF3B30] mb-2">
                    ⚖️ The Court Orders
                  </p>
                  <p className="text-sm text-white font-semibold leading-relaxed">
                    {verdict.courtOrder}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-3 justify-center mb-5"
      >
        <button
          onClick={shareToX}
          className="inline-flex items-center gap-2 h-10 px-5 rounded-xl text-sm font-bold bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] hover:-translate-y-0.5 transition-all"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share on X
        </button>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 h-10 px-5 rounded-xl text-sm font-bold border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all hover:-translate-y-0.5"
        >
          {copied ? "✓ Copied!" : "📋 Copy Verdict"}
        </button>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 h-10 px-5 rounded-xl text-sm font-bold bg-[#FF3B30] text-white hover:bg-[#CC2E24] hover:-translate-y-0.5 transition-all"
        >
          ⚖️ New Case
        </button>
      </motion.div>

      <div className="text-center">
        <Link href="/" className="text-xs text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors">
          ← Back to Home
        </Link>
      </div>

      <p className="text-xs text-center text-[#BDBDBD] mt-4">
        For entertainment & general guidance only. Not a substitute for qualified legal advice.
      </p>
    </motion.div>
  );
}
