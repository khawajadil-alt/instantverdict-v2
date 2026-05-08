import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import HowItWorks from "@/components/landing/HowItWorks";
import JudgeShowcase from "@/components/landing/JudgeShowcase";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://instantverdict.com/#webapp",
      name: "InstantVerdict",
      url: "https://instantverdict.com",
      description:
        "AI-powered legal dispute resolution platform. Get impartial verdicts on any argument backed by real laws from 140+ countries.",
      applicationCategory: "LegalService",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      offers: [
        {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free — 3 verdicts per week",
        },
        {
          "@type": "Offer",
          price: "1",
          priceCurrency: "USD",
          description: "Pay per verdict — full detailed ruling",
        },
        {
          "@type": "Offer",
          price: "5",
          priceCurrency: "USD",
          description: "Pro — unlimited verdicts per month",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1250",
        bestRating: "5",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://instantverdict.com/#org",
      name: "InstantVerdict",
      url: "https://instantverdict.com",
      logo: "https://instantverdict.com/icon.svg",
      sameAs: ["https://twitter.com/instantverdict"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does InstantVerdict work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You select your country, pick a judge personality, and each party submits their argument. Our AI analyses the dispute using actual laws and statutes from your jurisdiction and delivers an impartial verdict in seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is InstantVerdict free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — you get 3 free verdicts per week with a brief summary. Unlock the full detailed verdict with legal citations for $1, or subscribe to Pro for $5/month for unlimited verdicts.",
          },
        },
        {
          "@type": "Question",
          name: "Which countries does InstantVerdict support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "InstantVerdict supports 140+ countries including the United States, United Kingdom, Australia, Canada, India, Pakistan, Germany, France, UAE, Singapore, and more — with jurisdiction-specific legal analysis for each.",
          },
        },
        {
          "@type": "Question",
          name: "Is this real legal advice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "InstantVerdict is an AI-powered tool for general guidance and entertainment. It references real laws and cases but is not a substitute for advice from a qualified legal professional.",
          },
        },
        {
          "@type": "Question",
          name: "What types of disputes can I settle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "InstantVerdict handles relationships, workplace disputes, housing and tenancy issues, consumer rights, family law, money and debt, neighbour disputes, online conflicts, and everyday arguments.",
          },
        },
        {
          "@type": "Question",
          name: "Can multiple people be in the same case?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — free users can have up to 2 parties. Pro subscribers can include up to 6 parties in a single case.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to get an AI verdict on your argument",
      description: "Settle any dispute with an AI judge in under 2 minutes",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Choose your country",
          text: "Select your jurisdiction from 140+ countries. Our AI applies the actual laws and statutes from your location.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Pick your judge",
          text: "Choose from four judge personalities: savage & witty, strictly legal, culturally aware, or wise mediator.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Submit arguments",
          text: "Each party states their case in up to 800 characters. Up to 6 parties supported.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Receive your verdict",
          text: "Get a legally-grounded ruling with a clear winner, legal citations, and a court order. Case closed.",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "InstantVerdict",
      operatingSystem: "Web",
      applicationCategory: "UtilitiesApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1250",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <div className="pt-0">
          <Hero />
        </div>
        <Stats />
        <HowItWorks />
        <JudgeShowcase />
        <Testimonials />
        <Pricing />

        {/* Category + Country Hub — critical for internal linking & SEO */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-widest text-[#FF3B30] mb-3">Every Dispute Covered</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Whatever the argument — we judge it.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-16">
              {[
                { href: "/for/relationships", label: "💔 Relationship Arguments" },
                { href: "/for/workplace", label: "💼 Workplace Disputes" },
                { href: "/for/housing", label: "🏠 Landlord-Tenant" },
                { href: "/for/consumer", label: "🛒 Consumer Rights" },
                { href: "/for/family", label: "👨‍👩‍👧 Family Law" },
                { href: "/for/money", label: "💰 Money & Debt" },
                { href: "/for/neighbours", label: "🏘️ Neighbour Disputes" },
                { href: "/for/online", label: "📱 Online Conflicts" },
                { href: "/aita", label: "🤔 Am I The A**hole?" },
                { href: "/who-is-right", label: "⚖️ Who Is Right?" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-[#E5E7EB] text-sm font-semibold text-[#374151] hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all bg-white hover:bg-[#FFF1F2]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-4">35+ Jurisdictions — Real Local Law</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { href: "/in/united-states", label: "🇺🇸 USA" },
                  { href: "/in/united-kingdom", label: "🇬🇧 UK" },
                  { href: "/in/australia", label: "🇦🇺 Australia" },
                  { href: "/in/canada", label: "🇨🇦 Canada" },
                  { href: "/in/india", label: "🇮🇳 India" },
                  { href: "/in/pakistan", label: "🇵🇰 Pakistan" },
                  { href: "/in/uae", label: "🇦🇪 UAE" },
                  { href: "/in/singapore", label: "🇸🇬 Singapore" },
                  { href: "/in/south-africa", label: "🇿🇦 South Africa" },
                  { href: "/in/nigeria", label: "🇳🇬 Nigeria" },
                  { href: "/in/ireland", label: "🇮🇪 Ireland" },
                  { href: "/in/new-zealand", label: "🇳🇿 New Zealand" },
                ].map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#0A0A0A] text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-5">
              Ready?
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Find out who
              <br />
              <span className="text-[#FF3B30]">was actually right.</span>
            </h2>
            <p className="text-[#6B7280] text-lg mb-10">
              Free to start. Verdict in seconds. No account, no lawyers, no BS.
            </p>
            <Link href="/case">
              <Button variant="red" size="xl">
                ⚖️ Get My Verdict — Free
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
