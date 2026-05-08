import Link from "next/link";
import Logo from "@/components/ui/Logo";

const CATEGORIES = [
  { slug: "relationships", label: "Relationship Arguments" },
  { slug: "workplace", label: "Workplace Disputes" },
  { slug: "housing", label: "Landlord-Tenant" },
  { slug: "consumer", label: "Consumer Rights" },
  { slug: "family", label: "Family Law" },
  { slug: "money", label: "Money & Debt" },
  { slug: "neighbours", label: "Neighbour Disputes" },
  { slug: "online", label: "Online Disputes" },
  { slug: "random", label: "Who Is Right?" },
];

const COUNTRIES = [
  { slug: "united-states", label: "United States" },
  { slug: "united-kingdom", label: "United Kingdom" },
  { slug: "australia", label: "Australia" },
  { slug: "canada", label: "Canada" },
  { slug: "india", label: "India" },
  { slug: "pakistan", label: "Pakistan" },
  { slug: "uae", label: "UAE" },
  { slug: "singapore", label: "Singapore" },
  { slug: "south-africa", label: "South Africa" },
  { slug: "nigeria", label: "Nigeria" },
  { slug: "new-zealand", label: "New Zealand" },
  { slug: "ireland", label: "Ireland" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Hub links section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#FF3B30] mb-5">Disputes by Category</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/for/${c.slug}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-all border border-white/10"
                >
                  {c.label}
                </Link>
              ))}
              <Link href="/aita" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-all border border-white/10">
                AITA Judge
              </Link>
              <Link href="/who-is-right" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-all border border-white/10">
                Who Is Right?
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#FF3B30] mb-5">Available In</p>
            <div className="flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/in/${c.slug}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-all border border-white/10"
                >
                  {c.label}
                </Link>
              ))}
              <Link href="/in/malaysia" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-all border border-white/10">Malaysia</Link>
              <Link href="/in/kenya" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-all border border-white/10">Kenya</Link>
              <Link href="/in/ghana" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-all border border-white/10">Ghana</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <div className="mb-3">
              <Logo size="md" dark />
            </div>
            <p className="text-sm text-[#6B7280] max-w-xs">
              AI-powered dispute resolution. Real law. Instant verdicts. No lawyers required.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-bold mb-3 text-[#9CA3AF] uppercase text-xs tracking-wider">Product</p>
              <div className="flex flex-col gap-2">
                <Link href="/case" className="text-[#6B7280] hover:text-white transition-colors">Get a Verdict</Link>
                <Link href="/aita" className="text-[#6B7280] hover:text-white transition-colors">AITA Judge</Link>
                <Link href="/who-is-right" className="text-[#6B7280] hover:text-white transition-colors">Who Is Right?</Link>
                <Link href="/#pricing" className="text-[#6B7280] hover:text-white transition-colors">Pricing</Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3 text-[#9CA3AF] uppercase text-xs tracking-wider">Top Cases</p>
              <div className="flex flex-col gap-2">
                <Link href="/for/relationships" className="text-[#6B7280] hover:text-white transition-colors">Relationship</Link>
                <Link href="/for/housing" className="text-[#6B7280] hover:text-white transition-colors">Landlord-Tenant</Link>
                <Link href="/for/workplace" className="text-[#6B7280] hover:text-white transition-colors">Workplace</Link>
                <Link href="/for/money" className="text-[#6B7280] hover:text-white transition-colors">Money & Debt</Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3 text-[#9CA3AF] uppercase text-xs tracking-wider">Legal</p>
              <div className="flex flex-col gap-2">
                <Link href="/terms" className="text-[#6B7280] hover:text-white transition-colors">Terms of Use</Link>
                <Link href="/privacy" className="text-[#6B7280] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms#disclaimer" className="text-[#6B7280] hover:text-white transition-colors">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4B5563]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p>© {new Date().getFullYear()} InstantVerdict. All rights reserved.</p>
          <p>For entertainment & general guidance only. Not legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
