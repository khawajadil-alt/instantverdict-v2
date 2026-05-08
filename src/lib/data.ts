import type { Country, Category, Judge } from "./types";

export const COUNTRIES: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸", legalSystem: "Common Law", continent: "Americas" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", legalSystem: "Common Law", continent: "Europe" },
  { code: "AU", name: "Australia", flag: "🇦🇺", legalSystem: "Common Law", continent: "Oceania" },
  { code: "CA", name: "Canada", flag: "🇨🇦", legalSystem: "Common Law / Civil Law", continent: "Americas" },
  { code: "IN", name: "India", flag: "🇮🇳", legalSystem: "Common Law", continent: "Asia" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", legalSystem: "Common Law / Islamic Law", continent: "Asia" },
  { code: "DE", name: "Germany", flag: "🇩🇪", legalSystem: "Civil Law", continent: "Europe" },
  { code: "FR", name: "France", flag: "🇫🇷", legalSystem: "Civil Law", continent: "Europe" },
  { code: "JP", name: "Japan", flag: "🇯🇵", legalSystem: "Civil Law", continent: "Asia" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", legalSystem: "Civil Law", continent: "Americas" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", legalSystem: "Mixed", continent: "Africa" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", legalSystem: "Common Law / Customary", continent: "Africa" },
  { code: "AE", name: "UAE", flag: "🇦🇪", legalSystem: "Civil Law / Islamic Law", continent: "Asia" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", legalSystem: "Common Law", continent: "Asia" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", legalSystem: "Common Law", continent: "Oceania" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", legalSystem: "Common Law", continent: "Europe" },
  { code: "IT", name: "Italy", flag: "🇮🇹", legalSystem: "Civil Law", continent: "Europe" },
  { code: "ES", name: "Spain", flag: "🇪🇸", legalSystem: "Civil Law", continent: "Europe" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", legalSystem: "Civil Law", continent: "Americas" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", legalSystem: "Civil Law", continent: "Americas" },
  { code: "KE", name: "Kenya", flag: "🇰🇪", legalSystem: "Common Law", continent: "Africa" },
  { code: "GH", name: "Ghana", flag: "🇬🇭", legalSystem: "Common Law", continent: "Africa" },
  { code: "PH", name: "Philippines", flag: "🇵🇭", legalSystem: "Mixed", continent: "Asia" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", legalSystem: "Common Law", continent: "Asia" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", legalSystem: "Common Law", continent: "Asia" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", legalSystem: "Civil Law / Islamic Law", continent: "Africa" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", legalSystem: "Islamic Law", continent: "Asia" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", legalSystem: "Civil Law", continent: "Asia/Europe" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", legalSystem: "Civil Law", continent: "Asia" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", legalSystem: "Civil Law", continent: "Europe" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", legalSystem: "Civil Law", continent: "Europe" },
  { code: "NO", name: "Norway", flag: "🇳🇴", legalSystem: "Civil Law", continent: "Europe" },
  { code: "DK", name: "Denmark", flag: "🇩🇰", legalSystem: "Civil Law", continent: "Europe" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", legalSystem: "Civil Law", continent: "Europe" },
  { code: "PL", name: "Poland", flag: "🇵🇱", legalSystem: "Civil Law", continent: "Europe" },
];

export const CATEGORIES: Category[] = [
  {
    id: "relationships",
    label: "Relationships",
    emoji: "💔",
    description: "Romantic disputes, breakups, dating conflicts",
  },
  {
    id: "workplace",
    label: "Workplace",
    emoji: "💼",
    description: "Employment, wages, HR disputes, office conflicts",
  },
  {
    id: "housing",
    label: "Housing",
    emoji: "🏠",
    description: "Landlord-tenant, property, neighbor boundary disputes",
  },
  {
    id: "consumer",
    label: "Consumer Rights",
    emoji: "🛒",
    description: "Purchases, refunds, warranties, fraud",
  },
  {
    id: "family",
    label: "Family Law",
    emoji: "👨‍👩‍👧",
    description: "Inheritance, custody, parental obligations",
  },
  {
    id: "money",
    label: "Money & Debt",
    emoji: "💰",
    description: "Loans, contracts, financial agreements",
  },
  {
    id: "neighbors",
    label: "Neighbors",
    emoji: "🏘️",
    description: "Noise, boundaries, shared spaces, HOA disputes",
  },
  {
    id: "online",
    label: "Online & Social",
    emoji: "📱",
    description: "Social media, online purchases, digital disputes",
  },
  {
    id: "random",
    label: "Random Debate",
    emoji: "🤔",
    description: "Who's right in an everyday disagreement",
  },
  {
    id: "other",
    label: "Other",
    emoji: "⚖️",
    description: "Any dispute that doesn't fit above categories",
  },
];

export const JUDGES: Judge[] = [
  {
    id: "roast",
    emoji: "🔥",
    name: "Judge Roast",
    title: "The Savage Realist",
    description:
      "Delivers razor-sharp verdicts with brutal honesty and dark humour. Zero tolerance for nonsense.",
    style:
      "Witty, savage, entertainingly brutal. Calls out BS with precision. Goes viral.",
    hot: true,
    color: "#FF6B35",
  },
  {
    id: "lawson",
    emoji: "⚖️",
    name: "Judge Lawson",
    title: "The Legal Scholar",
    description:
      "Formal analysis grounded in actual statutes, case law, and legal precedent. Rigorous and thorough.",
    style:
      "Cites real legislation and landmark cases. Structured. Authoritative. Definitive.",
    hot: false,
    color: "#4A7CC7",
  },
  {
    id: "culture",
    emoji: "🌍",
    name: "Judge Culture",
    title: "The Social Mirror",
    description:
      "Judges through the lens of social norms, cultural expectations, and community standards.",
    style:
      "Contextual, empathetic to cultural nuance. Weighs societal impact alongside legal merit.",
    hot: false,
    color: "#7B6CF6",
  },
  {
    id: "sage",
    emoji: "🧘",
    name: "Judge Sage",
    title: "The Wise Mediator",
    description:
      "Seeks understanding, common ground, and healing resolutions. Fair but firm.",
    style:
      "Empathetic, balanced, constructive. Identifies root causes and paths to resolution.",
    hot: false,
    color: "#34C77B",
  },
];

export const FLOW_STEPS = ["country", "category", "judge", "arguments"] as const;
