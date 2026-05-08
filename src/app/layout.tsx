import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://instantverdict.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "InstantVerdict — AI Judge Settles Any Argument Instantly",
    template: "%s | InstantVerdict",
  },
  description:
    "Get an impartial AI verdict on any argument or dispute in seconds. Legally grounded, jurisdiction-specific across 140+ countries. Free to start. Who was right? Find out now.",
  keywords: [
    "settle argument online",
    "who is right",
    "who was right AI",
    "AI judge",
    "argument settler",
    "dispute resolution online",
    "legal verdict AI",
    "settle dispute",
    "AI legal advice",
    "online dispute resolution",
    "argument resolver",
    "AITA judge",
    "am i the asshole",
    "landlord tenant dispute",
    "workplace dispute resolver",
    "relationship argument settler",
    "who owes money",
    "neighbour dispute resolution",
    "consumer rights advice",
    "free legal advice online",
    "settle disagreement AI",
    "AI arbitration",
    "instant legal verdict",
    "is my landlord wrong",
    "employee rights online",
    "tenant rights advice",
  ],
  authors: [{ name: "InstantVerdict" }],
  creator: "InstantVerdict",
  publisher: "InstantVerdict",
  category: "Legal Technology",
  applicationName: "InstantVerdict",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA", "en_IN"],
    url: BASE_URL,
    siteName: "InstantVerdict",
    title: "InstantVerdict — AI Judge Settles Any Argument Instantly",
    description:
      "Drop your argument. Get an AI verdict backed by real law from your country. Find out who was right in seconds. Free to start.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InstantVerdict — AI Judge Settles Arguments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@instantverdict",
    creator: "@instantverdict",
    title: "InstantVerdict — AI Judge Settles Any Argument",
    description:
      "Drop your argument. Get an AI verdict. Find out who was right — free, instant, legally grounded.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "en-GB": BASE_URL,
      "en-AU": BASE_URL,
      "en-CA": BASE_URL,
      "en-IN": BASE_URL,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${space.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}
