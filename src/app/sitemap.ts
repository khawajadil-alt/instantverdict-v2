import type { MetadataRoute } from "next";
import { US_STATES, AU_STATES, CA_PROVINCES, UK_REGIONS } from "@/lib/location-data";

export const dynamic = "force-static";

const BASE = "https://instantverdict.com";

const FOR_SLUGS = [
  "relationships", "workplace", "housing", "consumer",
  "family", "money", "neighbours", "online", "random", "other",
] as const;

const BASE_COUNTRY_SLUGS = [
  "united-states", "united-kingdom", "australia", "canada", "india",
  "pakistan", "germany", "france", "uae", "singapore", "south-africa",
  "nigeria", "new-zealand", "ireland", "malaysia", "kenya", "ghana",
  "netherlands", "sweden",
] as const;

const SETTLE_SLUGS = [
  "landlord-wont-return-deposit",
  "fired-without-notice",
  "noise-complaint-neighbour",
  "employer-not-paying-overtime",
  "online-purchase-scam",
  "who-pays-car-accident",
  "boundary-dispute",
  "inheritance-dispute",
  "friend-owes-me-money",
  "landlord-entered-without-notice",
  "workplace-harassment",
  "landlord-wont-fix-repairs",
  "hoa-fine-dispute",
  "company-refusing-refund",
  "unfair-dismissal",
  "roommate-owes-rent",
  "employer-not-paying-wages",
  "dog-bite-liability",
  "who-pays-for-damage",
  "subscription-cancellation-dispute",
  "defamation-online",
  "freelancer-not-paid",
  "eviction-notice",
  "business-partner-dispute",
  "neighbour-parking-dispute",
  "discrimination-rental",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/case`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/aita`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/who-is-right`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = FOR_SLUGS.map((slug) => ({
    url: `${BASE}/for/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const baseCountryPages: MetadataRoute.Sitemap = BASE_COUNTRY_SLUGS.map((c) => ({
    url: `${BASE}/in/${c}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const usStatePages: MetadataRoute.Sitemap = Object.keys(US_STATES).map((s) => ({
    url: `${BASE}/in/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const auStatePages: MetadataRoute.Sitemap = Object.keys(AU_STATES).map((s) => ({
    url: `${BASE}/in/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caProvincePages: MetadataRoute.Sitemap = Object.keys(CA_PROVINCES).map((s) => ({
    url: `${BASE}/in/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const ukRegionPages: MetadataRoute.Sitemap = Object.keys(UK_REGIONS).map((s) => ({
    url: `${BASE}/in/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const settlePages: MetadataRoute.Sitemap = SETTLE_SLUGS.map((s) => ({
    url: `${BASE}/settle/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...corePages,
    ...categoryPages,
    ...settlePages,
    ...baseCountryPages,
    ...usStatePages,
    ...auStatePages,
    ...caProvincePages,
    ...ukRegionPages,
  ];
}
