import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const dynamic = "force-static";

const BASE = "https://instantverdict.com";

/* ─────────────────────────────────────────────
   Category data
───────────────────────────────────────────── */
interface CategoryData {
  title: string;
  desc: string;
  h1: string;
  sub: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
  examples: string[];
  emoji: string;
}

const CATEGORIES: Record<string, CategoryData> = {
  relationships: {
    emoji: "💔",
    title:
      "Settle Your Relationship Argument — AI Judge Decides Who's Right | InstantVerdict",
    desc: "Is your partner actually wrong? Submit your relationship dispute and get a legally-grounded verdict from an AI judge in seconds. Free.",
    h1: "Settle Your Relationship Argument",
    sub: "Is your partner wrong, or are you? Stop arguing in circles — get an actual verdict.",
    keywords: [
      "settle relationship argument",
      "who is right in relationship",
      "couples dispute resolver",
      "partner argument AI judge",
      "am i wrong in relationship",
    ],
    faqs: [
      {
        q: "Can AI settle a relationship argument?",
        a: "Yes — InstantVerdict analyses both sides using psychological and legal frameworks, delivering an impartial verdict. It won't take sides based on emotion.",
      },
      {
        q: "What kinds of relationship disputes work best?",
        a: "Anything from 'who forgot to pay the bill' to 'was it reasonable to cancel plans' — the more specific the argument, the sharper the verdict.",
      },
      {
        q: "Is the verdict binding?",
        a: "It's for guidance and entertainment. But when the AI says you were wrong, it's hard to argue.",
      },
      {
        q: "What if we both think we're right?",
        a: "That's exactly what we're here for. Submit both sides and let the court decide.",
      },
    ],
    examples: [
      "My partner forgot our anniversary — are they in the wrong?",
      "She cancelled plans last minute, am I right to be upset?",
      "He read my private messages — was that okay?",
    ],
  },

  workplace: {
    emoji: "💼",
    title:
      "Workplace Dispute Resolver — Know Your Employee Rights Instantly | InstantVerdict",
    desc: "Unfair treatment at work? Wage dispute? Get an AI verdict grounded in your country's employment law. Free, instant, no lawyer needed.",
    h1: "Resolve Your Workplace Dispute",
    sub: "Know your rights. Get a verdict grounded in your country's actual employment law.",
    keywords: [
      "workplace dispute resolution",
      "employee rights online",
      "unfair dismissal advice",
      "wage dispute resolver",
      "employer employee conflict",
    ],
    faqs: [
      {
        q: "Can I get employment law advice online?",
        a: "InstantVerdict provides AI-powered general guidance based on your jurisdiction's employment laws. For formal legal action, consult a qualified solicitor.",
      },
      {
        q: "What workplace disputes can I submit?",
        a: "Unfair dismissal, wage theft, harassment, discrimination, wrongful termination, contract disputes, unpaid leave — any employment conflict.",
      },
      {
        q: "How accurate is the legal analysis?",
        a: "Our AI references real statutes and case law from your jurisdiction. It's not infallible, but it gives you a solid grounding before speaking to a lawyer.",
      },
      {
        q: "My employer owes me money — what do I do?",
        a: "Submit the dispute here for an initial verdict, then use that analysis to approach your employer or HR. If unresolved, you'll know if it's worth escalating.",
      },
    ],
    examples: [
      "My employer hasn't paid my overtime for 3 months",
      "I was fired without notice — is this legal?",
      "My boss is creating a hostile work environment",
    ],
  },

  housing: {
    emoji: "🏠",
    title:
      "Landlord-Tenant Dispute? Know Your Rights — Free AI Verdict | InstantVerdict",
    desc: "Is your landlord wrong? Deposit not returned? Get a verdict based on your country's tenancy law. Free, instant, no lawyers needed.",
    h1: "Landlord Keeping Your Deposit? Know Your Rights.",
    sub: "Tenant law is complex. We make it simple. Get an AI verdict based on your actual jurisdiction.",
    keywords: [
      "landlord tenant dispute",
      "landlord not returning deposit",
      "tenant rights online",
      "property dispute resolution",
      "is my landlord wrong",
    ],
    faqs: [
      {
        q: "Is my landlord legally allowed to keep my deposit?",
        a: "It depends on your jurisdiction. Submit the details and InstantVerdict will analyse it against your country's tenancy protection laws.",
      },
      {
        q: "What housing disputes does InstantVerdict handle?",
        a: "Deposit disputes, eviction notices, repairs and maintenance, rent increases, lease violations, subletting disputes, and neighbor boundary issues.",
      },
      {
        q: "My landlord won't fix a broken boiler — what are my rights?",
        a: "In most jurisdictions landlords have a legal obligation to maintain habitable conditions. Submit your dispute for a jurisdiction-specific verdict.",
      },
      {
        q: "Can I use this verdict in a formal dispute?",
        a: "InstantVerdict is for general guidance. However, understanding your rights clearly before formal proceedings can be extremely valuable.",
      },
    ],
    examples: [
      "Landlord refusing to return £1,200 deposit",
      "Eviction notice with only 2 days warning — is this legal?",
      "Landlord entering property without permission",
    ],
  },

  consumer: {
    emoji: "🛒",
    title:
      "Consumer Rights Dispute? Get a Free AI Verdict | InstantVerdict",
    desc: "Company refusing a refund? Product not as described? Know your consumer rights with an AI verdict in seconds. Free.",
    h1: "Fight for Your Consumer Rights",
    sub: "Company treating you unfairly? Know exactly where you stand under your country's consumer protection law.",
    keywords: [
      "consumer rights advice online",
      "refund dispute resolver",
      "company refusing refund",
      "product not as described",
      "consumer complaint AI",
    ],
    faqs: [
      {
        q: "Am I entitled to a refund?",
        a: "Under most consumer protection laws, you have rights when a product is faulty, not as described, or a service wasn't delivered. Submit your dispute for a jurisdiction-specific verdict.",
      },
      {
        q: "What consumer disputes can I submit?",
        a: "Refunds, warranties, faulty goods, services not delivered, subscription cancellations, online purchase disputes, seller fraud, and more.",
      },
      {
        q: "Can I use this for disputes with large companies?",
        a: "Absolutely. Knowing your legal rights clearly is the first step. Our verdict gives you the grounding to escalate with confidence.",
      },
      {
        q: "Is this the same as Citizens Advice?",
        a: "InstantVerdict is AI-powered and global — available 24/7 in 140+ countries with jurisdiction-specific analysis. Citizens Advice covers the UK only.",
      },
    ],
    examples: [
      "Amazon refused to refund a faulty item worth £200",
      "Gym won't cancel my membership despite moving cities",
      "Online seller sent wrong item and won't respond",
    ],
  },

  family: {
    emoji: "👨‍👩‍👧",
    title:
      "Family Law Disputes — Free AI Verdict | InstantVerdict",
    desc: "Inheritance argument? Custody dispute? Family conflict? Get an AI verdict grounded in family law from your jurisdiction. Free.",
    h1: "Resolve Family Disputes — Get a Fair Verdict",
    sub: "Family arguments are the hardest to settle. An impartial AI judge doesn't take sides.",
    keywords: [
      "family dispute resolution online",
      "inheritance dispute",
      "custody argument resolver",
      "family conflict AI",
      "sibling inheritance dispute",
    ],
    faqs: [
      {
        q: "Can AI help with inheritance disputes?",
        a: "Yes. InstantVerdict analyses inheritance disputes using your jurisdiction's succession laws, providing clarity on who's legally entitled to what.",
      },
      {
        q: "What family disputes work best?",
        a: "Inheritance and will disputes, financial obligations between family members, custody disagreements, property division, and interpersonal family conflicts.",
      },
      {
        q: "My parents are treating siblings unequally — is that legal?",
        a: "Succession law varies by jurisdiction. Submit your situation and receive a country-specific analysis of your legal standing.",
      },
      {
        q: "Is this confidential?",
        a: "Your dispute is processed privately. We don't store personal details beyond the session.",
      },
    ],
    examples: [
      "My sibling got a bigger share of our parents' estate",
      "Dad promised me the house but now denies it",
      "Grandparent refuses to contribute to grandchild's medical bills",
    ],
  },

  money: {
    emoji: "💰",
    title:
      "Money Dispute — Who Owes What? Free AI Verdict | InstantVerdict",
    desc: "Friend owes you money? Loan dispute? Business partner conflict? Get a verdict grounded in contract law. Free, instant.",
    h1: "Money Disputes — Settle Who Owes What",
    sub: "Mixing money and relationships is messy. Get a clear, impartial verdict on who's legally in the right.",
    keywords: [
      "who owes money calculator",
      "friend owes me money",
      "debt dispute resolution",
      "loan argument resolver",
      "money dispute AI",
    ],
    faqs: [
      {
        q: "My friend owes me money and won't pay — what do I do?",
        a: "InstantVerdict will analyse the situation under your jurisdiction's contract and debt recovery laws, clarifying your legal options and who's in the wrong.",
      },
      {
        q: "What money disputes can be submitted?",
        a: "Personal loans between friends or family, business partner disputes, shared expense arguments, rent splitting, crowdfunding disputes, and informal contracts.",
      },
      {
        q: "Can a verbal agreement be legally binding?",
        a: "In many jurisdictions, yes — verbal contracts can be enforceable. The key is proving the agreement existed. Submit your case for jurisdiction-specific analysis.",
      },
      {
        q: "Is small claims court worth it?",
        a: "Get an AI verdict first to understand your legal standing, then decide if formal action is worthwhile.",
      },
    ],
    examples: [
      "Friend borrowed £500 six months ago and ignores my texts",
      "Business partner spent company funds on personal expenses",
      "Roommate owes 3 months' utilities and moved out",
    ],
  },

  neighbours: {
    emoji: "🏘️",
    title:
      "Neighbour Dispute? Get a Free AI Verdict | InstantVerdict",
    desc: "Noise complaints? Boundary disputes? Parking wars? Get an AI verdict grounded in your local law. Free.",
    h1: "Settle Your Neighbour Dispute",
    sub: "You shouldn't need to move house to solve a neighbour conflict. Get clarity on your legal rights.",
    keywords: [
      "neighbour dispute resolution",
      "neighbor noise complaint",
      "boundary dispute resolver",
      "HOA conflict AI",
      "property boundary dispute",
    ],
    faqs: [
      {
        q: "My neighbour's noise is keeping me up — what are my rights?",
        a: "Noise nuisance laws vary by jurisdiction but most countries have clear regulations. InstantVerdict analyses your specific situation against local laws.",
      },
      {
        q: "What neighbour disputes can I submit?",
        a: "Noise complaints, boundary and fence disputes, parking issues, garden encroachments, shared wall disputes, HOA conflicts, and antisocial behaviour.",
      },
      {
        q: "How do I approach my neighbour after getting a verdict?",
        a: "A clear understanding of your legal position makes difficult conversations much more productive. Print the verdict and present it as context.",
      },
      {
        q: "Can I take legal action against a noisy neighbour?",
        a: "In most jurisdictions, persistent noise nuisance can be actionable. Get your verdict first to understand if your situation meets the legal threshold.",
      },
    ],
    examples: [
      "Neighbour plays music until 3am every weekend",
      "Next-door fence is 30cm onto my land",
      "Neighbour's CCTV points directly at my garden",
    ],
  },

  online: {
    emoji: "💻",
    title:
      "Online Dispute & Social Media Conflict — AI Verdict | InstantVerdict",
    desc: "Online scam? Social media conflict? Digital purchase dispute? Get an AI verdict for online disputes. Free, instant.",
    h1: "Online Disputes — Get a Verdict on Your Digital Conflict",
    sub: "The internet creates new kinds of arguments every day. Our AI judges them all.",
    keywords: [
      "online dispute resolution",
      "social media conflict resolver",
      "digital purchase dispute",
      "online scam advice",
      "internet argument AI",
    ],
    faqs: [
      {
        q: "Can I dispute an online purchase that went wrong?",
        a: "Yes. Consumer protection laws apply to online purchases in most jurisdictions. InstantVerdict will analyse your dispute against applicable e-commerce and consumer laws.",
      },
      {
        q: "What online disputes can I submit?",
        a: "Online purchases gone wrong, social media defamation, digital product disputes, platform bans, content theft, online harassment, and freelancer payment disputes.",
      },
      {
        q: "Someone is spreading lies about me online — what can I do?",
        a: "Defamation law varies by jurisdiction but applies online in most countries. Submit the specifics for a legal analysis of your position.",
      },
      {
        q: "I was scammed online — do I have any recourse?",
        a: "Depending on your jurisdiction and payment method, you may have strong recourse. Submit your case for a clear verdict on your options.",
      },
    ],
    examples: [
      "Freelancer took payment and disappeared",
      "Someone is posting defamatory content about me on Instagram",
      "Bought a course online — it's nothing like advertised",
    ],
  },

  random: {
    emoji: "🎲",
    title:
      "Who Is Right? AI Decides Any Argument — Free | InstantVerdict",
    desc: "Who's right in your argument? Submit any dispute and get an AI verdict in seconds. The AI judge that settles everything. Free.",
    h1: "Who Is Right? AI Decides.",
    sub: "Any argument. Any topic. Any two people. Submit your case — the AI judge decides.",
    keywords: [
      "who is right in an argument",
      "argument decider AI",
      "settle any debate",
      "random argument resolver",
      "who is right calculator",
    ],
    faqs: [
      {
        q: "Can AI decide who's right in any argument?",
        a: "InstantVerdict applies legal frameworks, social norms, and logical analysis to any dispute — giving you a clear, impartial verdict backed by reasoning.",
      },
      {
        q: "What counts as a valid dispute?",
        a: "Anything where two or more people disagree. Serious legal matters, silly everyday debates, relationship conflicts, money disputes — everything gets a verdict.",
      },
      {
        q: "What if the AI can't decide?",
        a: "When the case is genuinely unclear, our AI returns a SPLIT DECISION — meaning both sides have valid points. Even that is useful.",
      },
      {
        q: "Is it really free?",
        a: "Yes — the first 3 verdicts per week are completely free. The brief verdict summary is always visible. Unlock the full detailed ruling for $1.",
      },
    ],
    examples: [
      "Who should pay on a first date?",
      "Is it rude to reply to messages with one word?",
      "Should the driver or passenger control the music?",
    ],
  },

  other: {
    emoji: "⚖️",
    title:
      "Any Dispute, Any Argument — Free AI Legal Verdict | InstantVerdict",
    desc: "Can't find your dispute category? Submit any argument and get an AI verdict grounded in law and logic. Free.",
    h1: "Any Dispute. Any Argument. AI Decides.",
    sub: "If it's a conflict and there's a right answer, our AI will find it.",
    keywords: [
      "online dispute resolution free",
      "AI legal advice online",
      "settle any argument",
      "argument resolver AI",
      "dispute resolution online free",
    ],
    faqs: [
      {
        q: "What kinds of disputes does InstantVerdict handle?",
        a: "Everything — from serious legal matters like landlord disputes and employment conflicts, to everyday arguments about who's in the wrong. If it's a dispute, we'll verdict it.",
      },
      {
        q: "How is this different from asking ChatGPT?",
        a: "InstantVerdict is purpose-built for disputes. You get structured legal analysis, jurisdiction-specific law citations, a formal verdict format, and a clear court order. It's a judge, not a chatbot.",
      },
      {
        q: "Do I need a lawyer?",
        a: "InstantVerdict gives you the clarity to know whether you need one. For simple disputes, the AI verdict is often all you need.",
      },
      {
        q: "How long does a verdict take?",
        a: "Typically 10–20 seconds. Substantially faster than the legal system.",
      },
    ],
    examples: [
      "My contractor left the job half-finished and wants full payment",
      "Business partner dissolved the company without my consent",
      "Friend used my car without asking and caused damage",
    ],
  },
};

const SLUGS = Object.keys(CATEGORIES);

/* ─────────────────────────────────────────────
   generateStaticParams + generateMetadata
───────────────────────────────────────────── */
export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES[slug] ?? CATEGORIES.other;
  const url = `${BASE}/for/${slug}`;
  return {
    title: cat.title,
    description: cat.desc,
    keywords: cat.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: cat.title,
      description: cat.desc,
      url,
      siteName: "InstantVerdict",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cat.title,
      description: cat.desc,
    },
  };
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = CATEGORIES[slug] ?? CATEGORIES.other;
  const url = `${BASE}/for/${slug}`;

  const relatedSlugs = SLUGS.filter((s) => s !== slug).slice(0, 6);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cat.faqs.map((f) => ({
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: `${BASE}/for`,
      },
      { "@type": "ListItem", position: 3, name: cat.h1, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-white text-[#0A0A0A] font-[var(--font-space)]">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#FF3B30] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#0A0A0A]">Categories</span>
              <span>/</span>
              <span className="text-[#FF3B30] font-medium capitalize">{slug}</span>
            </nav>

            {/* Category badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF0EF] text-[#FF3B30] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>{cat.emoji}</span>
              <span>{slug.replace(/-/g, " ")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
              {cat.h1}
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
              {cat.sub}
            </p>

            {/* Example chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {cat.examples.map((ex, i) => (
                <Link
                  key={i}
                  href="/case"
                  className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] text-[#0A0A0A] text-sm px-4 py-2.5 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all cursor-pointer"
                >
                  <span className="text-[#FF3B30]">→</span>
                  {ex}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link href="/case">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg shadow-[0_8px_30px_rgba(255,59,48,0.3)] hover:-translate-y-0.5 active:translate-y-0">
                ⚖️ Submit Your Case — Free
              </span>
            </Link>

            <p className="text-xs text-[#6B7280] mt-4">
              Free to start · Verdict in 10–20 seconds · No account required
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] max-w-6xl mx-auto" />

        {/* Why InstantVerdict strip */}
        <section className="py-14 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              Why InstantVerdict
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  label: "Instant",
                  body: "Verdict delivered in 10–20 seconds, not weeks.",
                },
                {
                  icon: "🌍",
                  label: "Jurisdiction-specific",
                  body: "Real laws from your country, not generic advice.",
                },
                {
                  icon: "🎯",
                  label: "Impartial",
                  body: "No emotions. No bias. Just an honest ruling.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-5"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="font-bold text-[#0A0A0A] mb-1">{item.label}</p>
                  <p className="text-sm text-[#6B7280]">{item.body}</p>
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
              Common Questions
            </h2>
            <FaqAccordion faqs={cat.faqs} />
          </div>
        </section>

        {/* Related categories */}
        <section className="py-14 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5">
              Other dispute categories
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedSlugs.map((s) => {
                const rel = CATEGORIES[s];
                return (
                  <Link
                    key={s}
                    href={`/for/${s}`}
                    className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-sm text-[#0A0A0A] px-4 py-2 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all font-medium"
                  >
                    <span>{rel.emoji}</span>
                    <span className="capitalize">{s.replace(/-/g, " ")}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 bg-[#0A0A0A] text-white text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              Case closed?
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Ready to get your verdict?
            </h2>
            <p className="text-[#6B7280] mb-8">
              Free to start. No account. No lawyers. Verdict in seconds.
            </p>
            <Link href="/case">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg">
                ⚖️ Get My Verdict — Free
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
