import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const dynamic = "force-static";

const BASE = "https://instantverdict.com";
const URL = `${BASE}/who-is-right`;

export const metadata: Metadata = {
  title:
    "Who Is Right? AI Decides Any Argument Instantly — Free | InstantVerdict",
  description:
    "Find out who is right in any argument. Our AI judge analyses both sides and delivers an impartial verdict based on logic, law, and fairness. Free.",
  keywords: [
    "who is right",
    "who is right in an argument",
    "who is right calculator",
    "decide who is right",
    "who is right AI",
    "find out who is right",
    "argument decider",
    "who was right",
    "settle an argument",
    "who is correct",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title:
      "Who Is Right? AI Decides Any Argument Instantly — Free | InstantVerdict",
    description:
      "Find out who is right in any argument. AI judge analyses both sides and delivers an impartial verdict. Free.",
    url: URL,
    siteName: "InstantVerdict",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Is Right? AI Decides — InstantVerdict",
    description:
      "Submit any argument. Get an AI verdict. Find out who was right — free and instant.",
  },
};

const ARGUMENT_EXAMPLES = [
  { category: "Relationship", example: "Who should apologise first after a fight?" },
  { category: "Money", example: "Should we split the bill equally or by what we ordered?" },
  { category: "Work", example: "Was it fair to skip me for a promotion?" },
  { category: "Social", example: "Is replying 'k' to a message rude?" },
  { category: "Housing", example: "Who is responsible for fixing the broken appliance?" },
  { category: "Family", example: "Should parents treat all siblings equally in a will?" },
];

const FAQS = [
  {
    q: "How does AI decide who is right in an argument?",
    a: "InstantVerdict's AI analyses both sides of the argument using a combination of logical reasoning, ethical frameworks, legal principles, and social norms. It weighs the evidence presented by each party and delivers a structured ruling with clear reasoning — not just a coin flip.",
  },
  {
    q: "Can AI really determine who is right in any argument?",
    a: "For most disputes, yes. The AI applies consistent frameworks that remove emotion and bias. For genuinely ambiguous cases, it returns a Split Decision — which itself is useful because it tells you both sides have valid points.",
  },
  {
    q: "What kinds of arguments can I submit?",
    a: "Any argument where at least two people disagree. Relationship conflicts, workplace disputes, money arguments, social disagreements, legal matters, household debates — if there's a disagreement, we'll find who's right.",
  },
  {
    q: "What if both people think they're right?",
    a: "That's the most common scenario — and exactly why InstantVerdict exists. Both parties submit their sides independently. The AI sees both perspectives and issues a ruling based on the full picture.",
  },
  {
    q: "Is the verdict based on logic or law?",
    a: "Both. For legal disputes, the AI applies the actual laws of your jurisdiction. For social and interpersonal arguments, it uses ethical reasoning and widely accepted social norms. You get the relevant framework for your specific situation.",
  },
  {
    q: "What does 'Split Decision' mean?",
    a: "When the AI determines that both parties have genuinely valid points and neither side is clearly in the wrong, it issues a Split Decision. This is an honest result — not a cop-out. It comes with an explanation of why the case is genuinely complex.",
  },
  {
    q: "Is it really free?",
    a: "Yes — 3 free verdicts per week with a summary ruling. Unlock the full detailed verdict with legal citations and complete reasoning for $1. Pro subscribers get unlimited verdicts for $5/month.",
  },
  {
    q: "How long does it take to find out who is right?",
    a: "Typically 10–20 seconds from submission to verdict. Substantially faster than asking Reddit, waiting for a friend's opinion, or consulting a lawyer.",
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
    { "@type": "ListItem", position: 2, name: "Who Is Right?", item: URL },
  ],
};

export default function WhoIsRightPage() {
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
              <span className="text-[#FF3B30] font-medium">Who Is Right?</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF0EF] text-[#FF3B30] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>⚖️</span>
              <span>AI Judge · Any Argument · Instant Verdict</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] mb-5">
              Who Is{" "}
              <span className="text-[#FF3B30]">Right?</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#6B7280] font-medium mb-5 max-w-2xl">
              The AI judge that settles any argument. Instantly.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
              Stop arguing in circles. Submit both sides of any dispute and get
              an impartial AI verdict grounded in logic, ethics, and the laws of
              your country. The judge has no agenda — it just rules on the facts.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/case">
                <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg shadow-[0_8px_30px_rgba(255,59,48,0.3)] hover:-translate-y-0.5 active:translate-y-0">
                  ⚖️ Find Out Who Is Right — Free
                </span>
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { value: "140+", label: "Countries" },
                { value: "10–20s", label: "Verdict time" },
                { value: "Free", label: "To start" },
                { value: "Impartial", label: "Every time" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="font-black text-[#FF3B30] text-base">
                    {s.value}
                  </span>
                  <span className="text-[#6B7280]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] max-w-6xl mx-auto" />

        {/* Example arguments */}
        <section className="py-16 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              Who is right in...
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">
              Common arguments our AI settles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {ARGUMENT_EXAMPLES.map((item, i) => (
                <Link key={i} href="/case">
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#FF3B30] hover:shadow-sm transition-all cursor-pointer group">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B30] mb-2 block">
                      {item.category}
                    </span>
                    <p className="text-sm text-[#0A0A0A] font-medium leading-snug group-hover:text-[#FF3B30] transition-colors">
                      "{item.example}"
                    </p>
                    <p className="text-xs text-[#6B7280] mt-2">
                      Click to submit this dispute →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              How it works
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">
              Four steps to finding out who is right
            </h2>
            <div className="space-y-5">
              {[
                {
                  step: "01",
                  title: "Select your country",
                  body: "Choose your jurisdiction from 140+ countries. The AI will apply your actual local laws where relevant.",
                },
                {
                  step: "02",
                  title: "Submit both sides",
                  body: "Each party describes their position. The more detail you provide, the sharper the verdict.",
                },
                {
                  step: "03",
                  title: "AI analyses the dispute",
                  body: "The judge weighs both arguments using logic, ethics, legal frameworks, and social norms — without bias.",
                },
                {
                  step: "04",
                  title: "Verdict delivered",
                  body: "Receive a clear ruling: who is right, who is wrong, and why. Case closed.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 items-start bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5"
                >
                  <span className="text-2xl font-black text-[#FF3B30] leading-none mt-0.5 w-8 flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-bold text-[#0A0A0A] mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#6B7280]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/case">
                <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg shadow-[0_8px_30px_rgba(255,59,48,0.3)]">
                  ⚖️ Start My Case — Free
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Verdict types */}
        <section className="py-16 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              Possible outcomes
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">
              What verdict will you receive?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  verdict: "PLAINTIFF WINS",
                  desc: "The party who submitted the dispute is in the right. The other party was wrong.",
                  color: "border-green-200 bg-green-50 text-green-800",
                },
                {
                  verdict: "DEFENDANT WINS",
                  desc: "The responding party's position is upheld. The claimant was in the wrong.",
                  color: "border-red-200 bg-red-50 text-red-700",
                },
                {
                  verdict: "SPLIT DECISION",
                  desc: "Both sides have valid arguments. The case is genuinely complex — no clear winner.",
                  color: "border-orange-200 bg-orange-50 text-orange-700",
                },
              ].map((v) => (
                <div
                  key={v.verdict}
                  className={`border rounded-2xl p-5 ${v.color}`}
                >
                  <p className="text-base font-black mb-2">{v.verdict}</p>
                  <p className="text-xs opacity-80 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">
              Questions about finding out who is right
            </h2>
            <FaqAccordion faqs={FAQS} />
          </div>
        </section>

        {/* Related pages */}
        <section className="py-14 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5">
              Related pages
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/aita", label: "AITA Verdict" },
                { href: "/for/relationships", label: "Relationship Arguments" },
                { href: "/for/workplace", label: "Workplace Disputes" },
                { href: "/for/money", label: "Money Disputes" },
                { href: "/for/random", label: "Any Argument" },
                { href: "/for/other", label: "All Categories" },
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

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 bg-[#0A0A0A] text-white text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              Case closed
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Stop arguing. Get the verdict.
            </h2>
            <p className="text-[#6B7280] mb-8">
              Free to start. No account. Verdict in seconds. The AI judge
              decides who is right.
            </p>
            <Link href="/case">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg">
                ⚖️ Find Out Who Is Right — Free
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
