import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const dynamic = "force-static";

const BASE = "https://instantverdict.com";
const URL = `${BASE}/aita`;

export const metadata: Metadata = {
  title: "AITA? AI Judge Settles 'Am I The A**hole' Disputes — InstantVerdict",
  description:
    "Submit your AITA scenario and get a real AI verdict — not just Reddit votes. Impartial judge analyses both sides using law and ethics. Free.",
  keywords: [
    "AITA",
    "am i the asshole",
    "AITA verdict",
    "AITA AI judge",
    "am i wrong",
    "AITA reddit alternative",
    "who is the asshole",
    "AITA checker",
    "am i being unreasonable",
    "AITA judgment",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title:
      "AITA? AI Judge Settles 'Am I The A**hole' Disputes — InstantVerdict",
    description:
      "Submit your AITA scenario and get a real AI verdict — not just Reddit votes. Free.",
    url: URL,
    siteName: "InstantVerdict",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AITA? AI Decides Who's The A**hole — InstantVerdict",
    description:
      "Submit your AITA scenario. Get a real verdict — not 1,000 Reddit opinions. Free.",
  },
};

const EXAMPLES = [
  "AITA for not paying for my friend's dinner when they ordered the most expensive item?",
  "AITA for telling my sister her baby name is ugly?",
  "AITA for refusing to lend my car to my roommate?",
  "AITA for cancelling a wedding venue booking 3 months out?",
  "AITA for blocking my ex on all platforms after they texted me?",
  "AITA for not attending my stepsibling's graduation?",
];

const FAQS = [
  {
    q: "What does AITA mean?",
    a: "AITA stands for 'Am I The Asshole?' — a popular format originating on Reddit's r/AmItheAsshole community where people describe a conflict and ask whether they were in the wrong. InstantVerdict delivers an impartial AI verdict rather than relying on crowd votes.",
  },
  {
    q: "How is this better than posting on Reddit r/AITA?",
    a: "Reddit votes are crowdsourced opinions that often reflect popular sentiment rather than fairness. InstantVerdict's AI analyses both sides using logical and ethical frameworks, delivers a structured verdict in seconds, and doesn't require waiting hours or days for responses.",
  },
  {
    q: "What are the AITA verdict categories?",
    a: "The classic categories are: YTA (You're The Asshole), NTA (Not The Asshole), ESH (Everyone Sucks Here), NAH (No Assholes Here), and INFO (need more information). InstantVerdict uses these formats with a full written explanation of the ruling.",
  },
  {
    q: "Can the other person submit their side too?",
    a: "Yes — that's what makes InstantVerdict powerful. Both parties can submit their arguments. The AI weighs both sides before issuing the final ruling.",
  },
  {
    q: "Is the verdict just for fun, or is it useful?",
    a: "Both. Many AITA situations have real underlying questions about fairness, obligations, and social norms. Our AI draws on ethical reasoning and social frameworks alongside legal principles, making the verdict genuinely illuminating — not just entertaining.",
  },
  {
    q: "What if the verdict goes against me?",
    a: "The verdict reflects an impartial analysis of the facts you submitted. If you disagree, you can resubmit with additional context. The AI doesn't have an agenda — it just rules on what you've given it.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "AITA", item: URL },
  ],
};

export default function AitaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-white text-[#0A0A0A] font-[var(--font-space)]">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#FF3B30] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF3B30] font-medium">AITA</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF0EF] text-[#FF3B30] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>⚖️</span>
              <span>AI Judge · Not Reddit Votes</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] mb-5">
              Am I The
              <br />
              <span className="text-[#FF3B30]">A**hole?</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#6B7280] leading-relaxed mb-4 max-w-2xl font-medium">
              Get a real verdict — not 1,000 Reddit opinions.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
              InstantVerdict's AI judge analyses both sides of your AITA
              scenario using logic, ethics, and social norms — then delivers an
              impartial ruling in seconds. No waiting for upvotes. No angry
              comment threads. Just a verdict.
            </p>

            {/* Example AITA chips */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4">
                Try one of these
              </p>
              <div className="flex flex-wrap gap-3">
                {EXAMPLES.map((ex, i) => (
                  <Link
                    key={i}
                    href="/case"
                    className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] text-[#0A0A0A] text-sm px-4 py-2.5 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all"
                  >
                    <span className="text-[#FF3B30]">→</span>
                    <span>{ex}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/case">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg shadow-[0_8px_30px_rgba(255,59,48,0.3)] hover:-translate-y-0.5 active:translate-y-0">
                ⚖️ Get My AITA Verdict — Free
              </span>
            </Link>
            <p className="text-xs text-[#6B7280] mt-4">
              Free to start · Verdict in 10–20 seconds · No account required
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] max-w-6xl mx-auto" />

        {/* Why AI beats Reddit */}
        <section className="py-16 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              AI Judge vs. Reddit
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">
              Why InstantVerdict beats r/AITA
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "⚡",
                  label: "Instant verdict",
                  body: "No waiting hours or days for comments. Your ruling arrives in seconds.",
                },
                {
                  icon: "🎯",
                  label: "Both sides heard",
                  body: "The other party can submit their side too. The AI weighs both before ruling.",
                },
                {
                  icon: "🧠",
                  label: "Logic-based analysis",
                  body: "No mob mentality, no biased comments. Pure impartial reasoning.",
                },
                {
                  icon: "📋",
                  label: "Structured ruling",
                  body: "You get a formal verdict — YTA, NTA, ESH, or NAH — with full reasoning.",
                },
                {
                  icon: "🌍",
                  label: "Jurisdiction-aware",
                  body: "When legal rights are involved, the AI applies your actual country's laws.",
                },
                {
                  icon: "🔒",
                  label: "Private",
                  body: "Your situation stays between you and the AI. No public humiliation.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex gap-4"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-bold text-[#0A0A0A] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#6B7280]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AITA verdict types */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              Verdict types
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">
              The four AITA rulings
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  code: "NTA",
                  label: "Not The Asshole",
                  desc: "You acted reasonably. The other party is in the wrong.",
                  color: "bg-green-50 border-green-200 text-green-800",
                },
                {
                  code: "YTA",
                  label: "You're The Asshole",
                  desc: "The evidence suggests you were in the wrong here.",
                  color: "bg-red-50 border-red-200 text-red-700",
                },
                {
                  code: "ESH",
                  label: "Everyone Sucks Here",
                  desc: "Both parties behaved poorly. Nobody walks away clean.",
                  color: "bg-orange-50 border-orange-200 text-orange-700",
                },
                {
                  code: "NAH",
                  label: "No Assholes Here",
                  desc: "Both sides acted reasonably given the circumstances.",
                  color: "bg-blue-50 border-blue-200 text-blue-700",
                },
              ].map((v) => (
                <div
                  key={v.code}
                  className={`border rounded-2xl p-5 ${v.color}`}
                >
                  <p className="text-xl font-black mb-1">{v.code}</p>
                  <p className="font-semibold text-sm mb-1">{v.label}</p>
                  <p className="text-xs opacity-75">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social share CTA */}
        <section className="py-16 px-4 sm:px-6 bg-[#0A0A0A] text-white">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">
                Share the verdict
              </p>
              <h2 className="text-2xl sm:text-3xl font-black mb-3">
                Win the argument. Share the proof.
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Got an NTA ruling? Screenshot it and send it to the person who
                said you were wrong. The AI has spoken. Case closed.
              </p>
            </div>
            <Link href="/case" className="flex-shrink-0">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-7 py-4 hover:bg-[#CC2E24] transition-all text-base">
                ⚖️ Get My Verdict
              </span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">
              AITA Questions Answered
            </h2>
            <FaqAccordion faqs={FAQS} />
          </div>
        </section>

        {/* Related */}
        <section className="py-14 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5">
              Related pages
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/who-is-right", label: "Who Is Right?" },
                { href: "/for/relationships", label: "Relationship Disputes" },
                { href: "/for/family", label: "Family Disputes" },
                { href: "/for/money", label: "Money Disputes" },
                { href: "/for/neighbours", label: "Neighbour Disputes" },
                { href: "/for/random", label: "Any Argument" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center bg-white border border-[#E5E7EB] text-sm text-[#0A0A0A] px-4 py-2 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
