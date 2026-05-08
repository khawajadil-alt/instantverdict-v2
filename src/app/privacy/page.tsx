import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy | InstantVerdict",
  description: "Privacy Policy for InstantVerdict — how we handle your data when you use our AI dispute resolution service.",
  alternates: { canonical: "https://instantverdict.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#E5E7EB] py-4 px-6">
        <Link href="/"><Logo size="sm" /></Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-[#9CA3AF] text-sm mb-12">Last updated: May 2026</p>

        <div className="space-y-8 text-[#374151] leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">1. What We Collect</h2>
            <p>When you use InstantVerdict, we may collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Dispute content</strong> — the arguments you submit to generate a verdict</li>
              <li><strong>Usage data</strong> — anonymous analytics such as pages visited and time on site</li>
              <li><strong>Payment data</strong> — processed securely by our payment provider; we never store card numbers</li>
              <li><strong>Local storage</strong> — we store your weekly verdict count in your browser&apos;s local storage (no account needed)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">2. How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Generate AI verdicts on submitted disputes</li>
              <li>Improve the quality of our Service</li>
              <li>Process payments</li>
              <li>Prevent abuse and maintain security</li>
            </ul>
            <p className="mt-3">We do not sell your personal data to third parties. We do not use your disputes to train advertising models.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">3. AI Processing</h2>
            <p>Dispute content you submit is processed by an AI model to generate your verdict. This content is transmitted securely. We do not permanently store the content of your disputes beyond the duration of your session.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">4. Cookies</h2>
            <p>InstantVerdict uses minimal cookies and browser local storage for session management and usage tracking. We do not use advertising or tracking cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Cloudflare</strong> — hosting and CDN (privacy policy at cloudflare.com)</li>
              <li><strong>Anthropic Claude API</strong> — AI verdict generation (privacy policy at anthropic.com)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, or delete your data. Since we do not maintain accounts or persistent personal data, most requests are satisfied automatically when you clear your browser data.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">7. Children</h2>
            <p>InstantVerdict is not directed at children under 13. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">8. Changes</h2>
            <p>We may update this Privacy Policy. We will note the date of last update at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0A0A0A] mb-3">9. Contact</h2>
            <p>For privacy questions, contact us via our website.</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex gap-4 text-sm">
          <Link href="/terms" className="text-[#FF3B30] font-semibold hover:underline">Terms of Use</Link>
          <Link href="/" className="text-[#6B7280] hover:text-[#0A0A0A]">← Home</Link>
        </div>
      </main>
    </div>
  );
}
