import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://instantverdict.com";

const FOR_SLUGS = [
  "relationships",
  "workplace",
  "housing",
  "consumer",
  "family",
  "money",
  "neighbours",
  "online",
  "random",
  "other",
] as const;

const COUNTRY_SLUGS = [
  "united-states",
  "united-kingdom",
  "australia",
  "canada",
  "india",
  "pakistan",
  "germany",
  "france",
  "uae",
  "singapore",
  "south-africa",
  "nigeria",
  "new-zealand",
  "ireland",
  "malaysia",
  "kenya",
  "ghana",
  "netherlands",
  "sweden",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/case`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/aita`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/who-is-right`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = FOR_SLUGS.map((slug) => ({
    url: `${BASE}/for/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const countryPages: MetadataRoute.Sitemap = COUNTRY_SLUGS.map((country) => ({
    url: `${BASE}/in/${country}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...categoryPages, ...countryPages];
}
