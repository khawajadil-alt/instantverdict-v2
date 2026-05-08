import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const dynamic = "force-static";

const BASE = "https://instantverdict.com";

/* ─────────────────────────────────────────────
   Country data
───────────────────────────────────────────── */
interface CountryData {
  name: string;
  code: string; // ISO 3166-1 alpha-2 lowercase for flagcdn
  legalSystem: string;
  title: string;
  desc: string;
  h1: string;
  body: string;
  popularDisputes: string[];
  faqs: { q: string; a: string }[];
}

const COUNTRY_PAGES: Record<string, CountryData> = {
  "united-states": {
    name: "United States",
    code: "us",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in the United States — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on US federal and state law. Free, instant, no lawyer needed. Common Law jurisdiction.",
    h1: "Legal Disputes in the United States — Get Your Verdict",
    body: "InstantVerdict analyses your dispute against applicable US federal statutes, state law, and landmark case precedents. Whether you're in California, Texas, New York, or anywhere else in the country, you'll receive jurisdiction-aware guidance in seconds.",
    popularDisputes: [
      "Landlord withholding security deposit",
      "Employer not paying overtime (FLSA violation)",
      "Faulty product — consumer rights",
    ],
    faqs: [
      {
        q: "How does US common law affect my dispute?",
        a: "US law blends federal statutes with 50 state legal systems. InstantVerdict identifies the relevant jurisdiction — federal or state — and applies the correct legal framework to your dispute.",
      },
      {
        q: "What are the most common disputes in the United States?",
        a: "Landlord-tenant conflicts, workplace wage disputes, consumer refund issues, personal injury claims, and small claims matters are among the most common disputes submitted from the US.",
      },
      {
        q: "Is AI legal advice valid in the US?",
        a: "InstantVerdict is an AI tool for general guidance — not a licensed attorney. It provides clarity and direction so you understand your rights before deciding whether to consult a lawyer or take formal action.",
      },
    ],
  },

  "united-kingdom": {
    name: "United Kingdom",
    code: "gb",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in the United Kingdom — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on UK law — England, Wales, Scotland, and Northern Ireland. Free, instant, no solicitor needed.",
    h1: "Legal Disputes in the United Kingdom — Get Your Verdict",
    body: "InstantVerdict draws on UK statutory law, case law from English and Welsh courts, and Scots law where applicable. From the Consumer Rights Act to the Housing Act, your dispute is analysed against the actual legislation that governs your situation.",
    popularDisputes: [
      "Landlord refusing to return deposit (TDS rules)",
      "Unfair dismissal under Employment Rights Act",
      "Faulty goods — Consumer Rights Act 2015",
    ],
    faqs: [
      {
        q: "How does UK law work for everyday disputes?",
        a: "The UK has a well-established common law system with strong consumer protection, employment rights, and landlord-tenant legislation. InstantVerdict applies the relevant Acts and regulations to your specific dispute.",
      },
      {
        q: "What disputes are most common in the UK?",
        a: "Tenancy deposit disputes, unfair dismissal claims, consumer refund issues, and neighbour nuisance complaints are among the most frequently submitted UK disputes.",
      },
      {
        q: "Can I use this instead of Citizens Advice?",
        a: "InstantVerdict is an AI tool available 24/7 with jurisdiction-specific UK legal analysis. Citizens Advice is also excellent but limited in hours and scope. Both can be useful.",
      },
    ],
  },

  australia: {
    name: "Australia",
    code: "au",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in Australia — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Australian law — federal and state. Free, instant, no lawyer needed. Common Law jurisdiction.",
    h1: "Legal Disputes in Australia — Get Your Verdict",
    body: "InstantVerdict references Australian Consumer Law (ACL), the Fair Work Act, and state-specific tenancy legislation to deliver accurate, jurisdiction-specific verdicts. Whether your dispute falls under federal or state jurisdiction, you'll get clarity fast.",
    popularDisputes: [
      "Bond not returned by landlord (state tenancy authority)",
      "Unfair dismissal — Fair Work Act",
      "Faulty product — Australian Consumer Law",
    ],
    faqs: [
      {
        q: "How does Australian Common Law apply to my dispute?",
        a: "Australia operates under a federal system. InstantVerdict identifies whether your dispute is governed by federal law (e.g., Fair Work Act, ACL) or your specific state's legislation.",
      },
      {
        q: "What disputes are most common in Australia?",
        a: "Rental bond disputes, workplace unfair dismissal claims, consumer refund disputes, and neighbour noise complaints are among the most common.",
      },
      {
        q: "Is this the same as using Fair Trading?",
        a: "InstantVerdict gives you an instant AI verdict — Fair Trading handles formal complaints. Use us first to understand your position, then escalate if needed.",
      },
    ],
  },

  canada: {
    name: "Canada",
    code: "ca",
    legalSystem: "Common Law / Civil Law",
    title:
      "Free AI Legal Advice in Canada — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Canadian law — federal, provincial Common Law and Quebec Civil Law. Free, instant.",
    h1: "Legal Disputes in Canada — Get Your Verdict",
    body: "Canada has a dual legal system: Common Law in all provinces except Quebec, which operates under Civil Law. InstantVerdict applies the correct framework based on your province, drawing on the Canada Labour Code, provincial tenancy acts, and the Consumer Protection Act.",
    popularDisputes: [
      "Landlord not returning security deposit",
      "Wrongful dismissal — Canada Labour Code",
      "Online purchase dispute — provincial consumer protection",
    ],
    faqs: [
      {
        q: "Does Quebec law affect my dispute?",
        a: "If you're in Quebec, your dispute is analysed under the Civil Code of Quebec rather than Common Law. InstantVerdict adapts to your province automatically.",
      },
      {
        q: "What are common disputes in Canada?",
        a: "Landlord-tenant issues, wrongful dismissal, consumer refund disputes, and small claims matters are among the most frequently submitted cases from Canada.",
      },
      {
        q: "Is AI legal guidance valid in Canada?",
        a: "InstantVerdict is a general guidance tool, not a licensed paralegal or barrister. It helps you understand your legal position quickly before deciding on formal action.",
      },
    ],
  },

  india: {
    name: "India",
    code: "in",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in India — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Indian law. Free, instant, no advocate needed. Common Law jurisdiction.",
    h1: "Legal Disputes in India — Get Your Verdict",
    body: "InstantVerdict references the Indian Contract Act, Consumer Protection Act 2019, Transfer of Property Act, and relevant labour laws to deliver verdicts grounded in Indian jurisprudence. Get clarity on your rights before approaching a consumer forum or labour court.",
    popularDisputes: [
      "Builder or developer fraud",
      "E-commerce refund dispute (Consumer Protection Act 2019)",
      "Employer not paying salary or provident fund",
    ],
    faqs: [
      {
        q: "How does Indian Common Law apply to everyday disputes?",
        a: "India's legal system is rooted in British Common Law with significant domestic legislation. InstantVerdict applies the relevant Acts — from the Indian Contract Act to the Consumer Protection Act 2019.",
      },
      {
        q: "What disputes are most common in India?",
        a: "Consumer complaints against e-commerce platforms, builder/developer fraud, workplace salary disputes, and landlord-tenant conflicts are among the most common.",
      },
      {
        q: "Can I use this before approaching a consumer forum?",
        a: "Absolutely. Understanding your legal standing before filing a complaint with the National Consumer Disputes Redressal Commission can significantly strengthen your case.",
      },
    ],
  },

  pakistan: {
    name: "Pakistan",
    code: "pk",
    legalSystem: "Common Law / Islamic Law",
    title:
      "Free AI Legal Advice in Pakistan — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Pakistani law — Common Law and Islamic Law principles. Free, instant.",
    h1: "Legal Disputes in Pakistan — Get Your Verdict",
    body: "Pakistan operates under a dual legal framework combining inherited British Common Law with Islamic Law principles embedded in the constitution. InstantVerdict applies the Contract Act 1872, Rent Restriction Ordinance, and relevant labour legislation to analyse your dispute.",
    popularDisputes: [
      "Landlord dispute — Rent Restriction Ordinance",
      "Employer not paying wages",
      "Property inheritance dispute",
    ],
    faqs: [
      {
        q: "How does Pakistani law blend Common Law and Islamic Law?",
        a: "Pakistan's legal system uses Common Law procedures inherited from British rule, with Islamic Law principles applying to personal status matters. For most civil disputes, Common Law statutes govern.",
      },
      {
        q: "What disputes are most common in Pakistan?",
        a: "Landlord-tenant rent disputes, property and inheritance conflicts, workplace salary issues, and consumer purchase disputes are among the most common.",
      },
      {
        q: "Is this available in Urdu?",
        a: "Currently InstantVerdict operates in English. You can submit your dispute in English and receive a verdict you can share with relevant parties.",
      },
    ],
  },

  germany: {
    name: "Germany",
    code: "de",
    legalSystem: "Civil Law",
    title:
      "Free AI Legal Advice in Germany — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on German Civil Law — BGB, HGB, and employment law. Free, instant, no Anwalt needed.",
    h1: "Legal Disputes in Germany — Get Your Verdict",
    body: "Germany operates under a comprehensive Civil Law system centred on the Bürgerliches Gesetzbuch (BGB). InstantVerdict references the BGB, German employment law (Arbeitsrecht), tenancy law (Mietrecht), and consumer protection regulations to deliver precise verdicts.",
    popularDisputes: [
      "Landlord withholding Kaution (deposit)",
      "Employer violating Kündigungsschutz (dismissal protection)",
      "Online purchase Widerruf (right of withdrawal)",
    ],
    faqs: [
      {
        q: "How does German Civil Law (BGB) affect my dispute?",
        a: "The BGB provides strong protections for tenants, employees, and consumers. InstantVerdict identifies the relevant BGB sections and supplementary statutes that apply to your situation.",
      },
      {
        q: "What are common disputes in Germany?",
        a: "Mietrecht (tenancy) disputes, Kündigung (dismissal) conflicts, consumer Widerruf (withdrawal) rights, and neighbour disputes (Nachbarschaftsrecht) are among the most common.",
      },
      {
        q: "Muss ich einen Anwalt beauftragen?",
        a: "For general guidance, InstantVerdict provides an instant verdict. For formal proceedings before German courts, a licensed Rechtsanwalt (attorney) is advisable.",
      },
    ],
  },

  france: {
    name: "France",
    code: "fr",
    legalSystem: "Civil Law",
    title:
      "Free AI Legal Advice in France — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on French Civil Law — Code Civil and employment law. Free, instant.",
    h1: "Legal Disputes in France — Get Your Verdict",
    body: "France's legal system is built on the Code Civil, one of the most influential legal codes in history. InstantVerdict applies the Code Civil, Code du Travail (labour law), and consumer protection directives to deliver verdicts grounded in French jurisprudence.",
    popularDisputes: [
      "Propriétaire refusing to return dépôt de garantie",
      "Licenciement abusif (unfair dismissal)",
      "E-commerce droit de rétractation (withdrawal rights)",
    ],
    faqs: [
      {
        q: "How does the Code Civil affect my dispute in France?",
        a: "The Code Civil governs contracts, property, and obligations in France. InstantVerdict identifies the relevant articles and supplementary codes that apply to your specific dispute.",
      },
      {
        q: "What are common disputes in France?",
        a: "Rental deposit disputes, unfair dismissal claims, consumer withdrawal rights, and neighbourhood noise complaints (trouble de voisinage) are frequently submitted from France.",
      },
      {
        q: "Can I submit disputes in French?",
        a: "Currently InstantVerdict operates in English. Submit your dispute in English for a verdict you can share with the relevant parties.",
      },
    ],
  },

  uae: {
    name: "UAE",
    code: "ae",
    legalSystem: "Civil Law / Islamic Law",
    title:
      "Free AI Legal Advice in UAE — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on UAE Civil Law and labour law. Free, instant, no lawyer needed.",
    h1: "Legal Disputes in the UAE — Get Your Verdict",
    body: "The UAE operates a Civil Law system influenced by Egyptian law and Islamic Sharia principles. InstantVerdict references UAE Labour Law (Federal Decree-Law No. 33 of 2021), tenancy law RERA regulations, and consumer protection statutes for your dispute.",
    popularDisputes: [
      "Employer not paying end-of-service gratuity (EOSB)",
      "Landlord dispute — RERA regulations",
      "Online purchase dispute",
    ],
    faqs: [
      {
        q: "How does UAE labour law protect employees?",
        a: "Federal Decree-Law No. 33 of 2021 provides comprehensive employee protections including notice periods, gratuity entitlements, and anti-discrimination provisions. InstantVerdict applies this law to your situation.",
      },
      {
        q: "What are common disputes in the UAE?",
        a: "End-of-service gratuity (EOSB) disputes, rental disagreements, employer contract violations, and consumer complaints are among the most common in the UAE.",
      },
      {
        q: "Do Islamic Law principles affect civil disputes in the UAE?",
        a: "For most civil and commercial disputes, UAE federal law and DIFC regulations apply. Islamic Law principles are more prominent in personal status matters.",
      },
    ],
  },

  singapore: {
    name: "Singapore",
    code: "sg",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in Singapore — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Singapore Common Law and statutory legislation. Free, instant.",
    h1: "Legal Disputes in Singapore — Get Your Verdict",
    body: "Singapore's legal system is based on English Common Law with a robust set of modern statutes. InstantVerdict references the Employment Act, Consumer Protection (Fair Trading) Act, Residential Tenancies Act, and other Singapore legislation to analyse your dispute.",
    popularDisputes: [
      "Employer not paying salary — Employment Act",
      "HDB tenancy dispute",
      "E-commerce purchase dispute — CPFTA",
    ],
    faqs: [
      {
        q: "How does Singapore's legal system work for disputes?",
        a: "Singapore combines English Common Law with a comprehensive set of statutory protections. The Employment Act, Consumer Protection Act, and other legislation provide clear rights and remedies.",
      },
      {
        q: "What are common disputes in Singapore?",
        a: "Employment salary disputes, HDB tenancy issues, e-commerce consumer complaints, and neighbour disputes through the Community Disputes Resolution Tribunals (CDRT) are common.",
      },
      {
        q: "Is the Small Claims Tribunal worth using in Singapore?",
        a: "Get an InstantVerdict first to understand your legal position. If the verdict is in your favour, the Small Claims Tribunal (SCT) is a quick and cost-effective option for amounts up to S$20,000.",
      },
    ],
  },

  "south-africa": {
    name: "South Africa",
    code: "za",
    legalSystem: "Mixed",
    title:
      "Free AI Legal Advice in South Africa — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on South African law — Common Law, Roman-Dutch Law, and statutory legislation. Free, instant.",
    h1: "Legal Disputes in South Africa — Get Your Verdict",
    body: "South Africa's unique mixed legal system blends Roman-Dutch Law with English Common Law and a modern constitutional framework. InstantVerdict applies the Labour Relations Act, Consumer Protection Act, Rental Housing Act, and relevant constitutional rights to your dispute.",
    popularDisputes: [
      "Unfair dismissal — Labour Relations Act",
      "Landlord deposit dispute — Rental Housing Act",
      "Consumer rights — Consumer Protection Act 68 of 2008",
    ],
    faqs: [
      {
        q: "How does South Africa's mixed legal system affect disputes?",
        a: "South Africa blends Roman-Dutch and English Common Law with constitutional protections. For most disputes, statutory law (Labour Relations Act, Consumer Protection Act) provides the primary framework.",
      },
      {
        q: "What are common disputes in South Africa?",
        a: "Unfair dismissal claims through the CCMA, landlord deposit disputes, consumer refund issues, and neighbour boundary conflicts are among the most frequently submitted.",
      },
      {
        q: "Can I use this before approaching the CCMA?",
        a: "Yes. Understanding your legal rights before a CCMA hearing gives you a significant advantage. InstantVerdict's verdict can help you frame your case effectively.",
      },
    ],
  },

  nigeria: {
    name: "Nigeria",
    code: "ng",
    legalSystem: "Common Law / Customary",
    title:
      "Free AI Legal Advice in Nigeria — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Nigerian law — Common Law and customary law. Free, instant.",
    h1: "Legal Disputes in Nigeria — Get Your Verdict",
    body: "Nigeria's legal system applies English Common Law alongside customary and Sharia law in relevant states. InstantVerdict references the Labour Act, Federal Competition and Consumer Protection Act (FCCPA), and applicable state legislation to provide verdict guidance.",
    popularDisputes: [
      "Employer not paying wages or benefits",
      "Tenancy dispute — Recovery of Premises Act",
      "Consumer complaint — FCCPA",
    ],
    faqs: [
      {
        q: "How does Nigerian Common Law apply to disputes?",
        a: "Nigerian federal law follows English Common Law precedent. State laws and customary law apply in some contexts. InstantVerdict identifies the relevant legal framework for your dispute.",
      },
      {
        q: "What are common disputes in Nigeria?",
        a: "Salary and employment disputes, tenancy and property conflicts, and consumer protection complaints are among the most commonly submitted from Nigeria.",
      },
      {
        q: "Can I use this before approaching FCCPA?",
        a: "Yes. Getting an AI verdict first helps you understand your legal position before submitting a formal complaint to the Federal Competition and Consumer Protection Commission.",
      },
    ],
  },

  "new-zealand": {
    name: "New Zealand",
    code: "nz",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in New Zealand — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on New Zealand law. Free, instant, no lawyer needed. Common Law jurisdiction.",
    h1: "Legal Disputes in New Zealand — Get Your Verdict",
    body: "New Zealand's legal system is based on English Common Law with strong statutory protections. InstantVerdict references the Employment Relations Act, Residential Tenancies Act, Consumer Guarantees Act, and Fair Trading Act to analyse your dispute.",
    popularDisputes: [
      "Bond dispute — Residential Tenancies Act",
      "Unjustified dismissal — Employment Relations Act",
      "Faulty goods — Consumer Guarantees Act",
    ],
    faqs: [
      {
        q: "How does NZ consumer law protect buyers?",
        a: "The Consumer Guarantees Act and Fair Trading Act provide strong protections for NZ consumers. Goods must be of acceptable quality and match their description. InstantVerdict applies these standards to your dispute.",
      },
      {
        q: "What are common disputes in New Zealand?",
        a: "Bond disputes, unjustified dismissal claims, consumer refund issues, and neighbour conflicts are among the most common NZ disputes.",
      },
      {
        q: "Is the Disputes Tribunal worth using in NZ?",
        a: "Get an InstantVerdict first. If the ruling supports your position, the NZ Disputes Tribunal is an accessible, low-cost option for claims up to NZ$30,000.",
      },
    ],
  },

  ireland: {
    name: "Ireland",
    code: "ie",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in Ireland — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Irish law. Free, instant, no solicitor needed. Common Law jurisdiction.",
    h1: "Legal Disputes in Ireland — Get Your Verdict",
    body: "Ireland operates under English Common Law with a robust set of domestic statutes. InstantVerdict references the Employment Equality Acts, Residential Tenancies Act 2004, and Consumer Rights Act 2022 to deliver verdicts grounded in Irish law.",
    popularDisputes: [
      "Landlord not returning deposit — RTB rules",
      "Unfair dismissal — Workplace Relations Commission",
      "Faulty goods — Consumer Rights Act 2022",
    ],
    faqs: [
      {
        q: "How does Irish employment law protect workers?",
        a: "Ireland has strong employment protections through the Unfair Dismissals Act, Employment Equality Acts, and Payment of Wages Act. InstantVerdict applies the relevant legislation to your situation.",
      },
      {
        q: "What are common disputes in Ireland?",
        a: "Tenancy disputes through the RTB, unfair dismissal claims through the WRC, consumer refund issues, and landlord-tenant conflicts are among the most common.",
      },
      {
        q: "Can I use this before going to the WRC?",
        a: "Yes. Understanding your rights before a Workplace Relations Commission hearing can significantly strengthen your position. An InstantVerdict gives you clear legal grounding.",
      },
    ],
  },

  malaysia: {
    name: "Malaysia",
    code: "my",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in Malaysia — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Malaysian law. Free, instant, no lawyer needed. Common Law jurisdiction.",
    h1: "Legal Disputes in Malaysia — Get Your Verdict",
    body: "Malaysia's legal system is based on English Common Law with substantial domestic legislation. InstantVerdict references the Employment Act 1955, Contracts Act 1950, Consumer Protection Act 1999, and relevant tenancy law to analyse your dispute.",
    popularDisputes: [
      "Employer not paying overtime — Employment Act 1955",
      "Security deposit dispute",
      "Online purchase refund — Consumer Protection Act",
    ],
    faqs: [
      {
        q: "How does Malaysian employment law apply?",
        a: "The Employment Act 1955 provides the primary framework for employment disputes in Malaysia, covering wages, termination, and benefits. InstantVerdict applies this legislation to your situation.",
      },
      {
        q: "What are common disputes in Malaysia?",
        a: "Wage and overtime disputes, tenancy deposit conflicts, consumer complaints, and contractual disagreements are among the most commonly submitted from Malaysia.",
      },
      {
        q: "Can I use this before approaching the Labour Department?",
        a: "Yes. Getting an AI verdict helps you understand your legal rights before filing a claim with the Labour Department of Malaysia (Jabatan Tenaga Kerja).",
      },
    ],
  },

  kenya: {
    name: "Kenya",
    code: "ke",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in Kenya — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Kenyan law. Free, instant. Common Law jurisdiction.",
    h1: "Legal Disputes in Kenya — Get Your Verdict",
    body: "Kenya's legal system is rooted in English Common Law with a modern constitutional framework. InstantVerdict references the Employment Act 2007, Consumer Protection Act, Landlord and Tenant Act, and the Constitution of Kenya 2010 to provide verdict guidance.",
    popularDisputes: [
      "Employer not paying terminal benefits",
      "Landlord dispute — Distress for Rent Act",
      "Consumer complaint — Consumer Protection Act",
    ],
    faqs: [
      {
        q: "How does Kenyan employment law protect workers?",
        a: "The Employment Act 2007 and Labour Relations Act provide significant protections, including mandatory notice periods and terminal benefit entitlements. InstantVerdict applies these to your dispute.",
      },
      {
        q: "What are common disputes in Kenya?",
        a: "Employer payment disputes, landlord-tenant conflicts, and consumer complaints are among the most common disputes submitted from Kenya.",
      },
      {
        q: "Is the Employment and Labour Relations Court relevant to my case?",
        a: "Get an InstantVerdict first to understand your legal position. If the ruling supports you, the Employment and Labour Relations Court is the appropriate forum in Kenya.",
      },
    ],
  },

  ghana: {
    name: "Ghana",
    code: "gh",
    legalSystem: "Common Law",
    title:
      "Free AI Legal Advice in Ghana — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Ghanaian law. Free, instant. Common Law jurisdiction.",
    h1: "Legal Disputes in Ghana — Get Your Verdict",
    body: "Ghana's legal system is based on English Common Law, customary law, and modern statutory legislation. InstantVerdict references the Labour Act 2003, Consumer Protection Agency Act, and relevant property law to deliver verdict guidance.",
    popularDisputes: [
      "Employer not paying wages — Labour Act 2003",
      "Landlord deposit dispute",
      "Consumer rights complaint",
    ],
    faqs: [
      {
        q: "How does Ghanaian Common Law apply to disputes?",
        a: "Ghana applies English Common Law alongside local customary law and statutory legislation. InstantVerdict identifies the applicable framework for your specific dispute type.",
      },
      {
        q: "What are common disputes in Ghana?",
        a: "Employment wage disputes, landlord-tenant conflicts, consumer complaints, and contractual disagreements are among the most frequently submitted from Ghana.",
      },
      {
        q: "Can I use this before approaching the Labour Commission?",
        a: "Yes. Understanding your rights under the Labour Act 2003 before filing a complaint with the National Labour Commission can significantly strengthen your position.",
      },
    ],
  },

  netherlands: {
    name: "Netherlands",
    code: "nl",
    legalSystem: "Civil Law",
    title:
      "Free AI Legal Advice in the Netherlands — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Dutch Civil Law. Free, instant, no lawyer needed.",
    h1: "Legal Disputes in the Netherlands — Get Your Verdict",
    body: "The Netherlands operates under Burgerlijk Wetboek (Dutch Civil Code), one of Europe's most comprehensive civil law systems. InstantVerdict references the BW, Dutch labour law (Arbeidsrecht), tenancy law (Huurrecht), and consumer protection regulations.",
    popularDisputes: [
      "Landlord not returning waarborgsom (deposit)",
      "Employer violating ontslag (dismissal) law",
      "Online consumer withdrawal rights (herroepingsrecht)",
    ],
    faqs: [
      {
        q: "How does Dutch Civil Law affect my dispute?",
        a: "The Burgerlijk Wetboek provides comprehensive protections for tenants, employees, and consumers. InstantVerdict identifies the relevant BW articles and supplementary legislation for your dispute.",
      },
      {
        q: "What are common disputes in the Netherlands?",
        a: "Huurrecht (tenancy) disputes, Arbeidsrecht (employment) conflicts, consumer herroepingsrecht (withdrawal) cases, and contractual disputes are common in the Netherlands.",
      },
      {
        q: "Is the Kantonrechter (cantonal court) relevant?",
        a: "For disputes under €25,000, the Kantonrechter handles matters without legal representation being mandatory. An InstantVerdict first helps you assess whether formal proceedings are worthwhile.",
      },
    ],
  },

  sweden: {
    name: "Sweden",
    code: "se",
    legalSystem: "Civil Law",
    title:
      "Free AI Legal Advice in Sweden — Instant Verdict | InstantVerdict",
    desc: "Get AI-powered legal verdicts based on Swedish Civil Law. Free, instant, no lawyer needed.",
    h1: "Legal Disputes in Sweden — Get Your Verdict",
    body: "Sweden's legal system is based on Nordic Civil Law with strong statutory protections for employees, tenants, and consumers. InstantVerdict references the Employment Protection Act (LAS), Tenancy Act (Hyreslagen), and Consumer Sales Act (KKL) to deliver your verdict.",
    popularDisputes: [
      "Employer violating LAS (Employment Protection Act)",
      "Landlord deposit dispute — Hyreslagen",
      "Consumer refund — Konsumentköplagen",
    ],
    faqs: [
      {
        q: "How does Swedish employment law work?",
        a: "The Lagen om anställningsskydd (LAS) provides strong protection against unfair dismissal. InstantVerdict applies LAS and supplementary regulations to your specific employment dispute.",
      },
      {
        q: "What are common disputes in Sweden?",
        a: "Employment disputes under LAS, rental deposit conflicts, consumer refund issues, and contractual disagreements are among the most common in Sweden.",
      },
      {
        q: "Is the Allmänna reklamationsnämnden (ARN) relevant?",
        a: "ARN handles consumer complaints for free in Sweden. Get an InstantVerdict first, then file with ARN if the ruling supports your position.",
      },
    ],
  },
};

const ALL_SLUGS = Object.keys(COUNTRY_PAGES);

/* ─────────────────────────────────────────────
   generateStaticParams + generateMetadata
───────────────────────────────────────────── */
export function generateStaticParams() {
  return ALL_SLUGS.map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const data = COUNTRY_PAGES[country];
  if (!data) return { title: "Country Not Found" };

  const url = `${BASE}/in/${country}`;
  return {
    title: data.title,
    description: data.desc,
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      description: data.desc,
      url,
      siteName: "InstantVerdict",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.desc,
    },
  };
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const data = COUNTRY_PAGES[country];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#6B7280]">Country not found.</p>
      </div>
    );
  }

  const url = `${BASE}/in/${country}`;
  const otherCountries = ALL_SLUGS.filter((s) => s !== country).slice(0, 6);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
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
        name: "Countries",
        item: `${BASE}/in`,
      },
      { "@type": "ListItem", position: 3, name: data.name, item: url },
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
              <span className="text-[#0A0A0A]">Countries</span>
              <span>/</span>
              <span className="text-[#FF3B30] font-medium">{data.name}</span>
            </nav>

            {/* Flag + name */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={`https://flagcdn.com/w80/${data.code}.png`}
                alt={`${data.name} flag`}
                width={56}
                height={40}
                className="rounded shadow-sm"
                unoptimized
              />
              <div>
                <p className="font-bold text-lg leading-tight">{data.name}</p>
                {/* Legal system badge */}
                <span className="inline-block bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280] text-xs font-semibold px-3 py-1 rounded-full mt-1">
                  {data.legalSystem}
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
              {data.h1}
            </h1>

            <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-2xl">
              {data.body}
            </p>

            {/* Popular disputes */}
            <div className="flex flex-wrap gap-3 mb-10">
              {data.popularDisputes.map((d, i) => (
                <Link
                  key={i}
                  href="/case"
                  className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] text-[#0A0A0A] text-sm px-4 py-2.5 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all"
                >
                  <span className="text-[#FF3B30]">→</span>
                  {d}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link href="/case">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg shadow-[0_8px_30px_rgba(255,59,48,0.3)] hover:-translate-y-0.5 active:translate-y-0">
                ⚖️ Get a {data.name} Verdict — Free
              </span>
            </Link>

            <p className="text-xs text-[#6B7280] mt-4">
              Free to start · {data.legalSystem} jurisdiction · Verdict in
              10–20 seconds
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-[#E5E7EB] max-w-6xl mx-auto" />

        {/* Legal system explainer */}
        <section className="py-14 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
              Legal Framework
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">
                  Jurisdiction
                </p>
                <p className="text-2xl font-black text-[#0A0A0A]">
                  {data.legalSystem}
                </p>
                <p className="text-sm text-[#6B7280] mt-2">
                  InstantVerdict applies {data.name}'s {data.legalSystem}{" "}
                  statutes and precedents to your dispute.
                </p>
              </div>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">
                  Countries Supported
                </p>
                <p className="text-2xl font-black text-[#0A0A0A]">140+</p>
                <p className="text-sm text-[#6B7280] mt-2">
                  Submit disputes from any country and receive jurisdiction-specific verdicts.
                </p>
              </div>
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
              {data.name} Legal Questions
            </h2>
            <FaqAccordion faqs={data.faqs} />
          </div>
        </section>

        {/* Other countries */}
        <section className="py-14 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5">
              Other countries
            </p>
            <div className="flex flex-wrap gap-3">
              {otherCountries.map((slug) => {
                const c = COUNTRY_PAGES[slug];
                return (
                  <Link
                    key={slug}
                    href={`/in/${slug}`}
                    className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-sm text-[#0A0A0A] px-4 py-2 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all font-medium"
                  >
                    <Image
                      src={`https://flagcdn.com/w20/${c.code}.png`}
                      alt={c.name}
                      width={16}
                      height={12}
                      className="rounded-sm"
                      unoptimized
                    />
                    {c.name}
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
              {data.name}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Ready to get your verdict?
            </h2>
            <p className="text-[#6B7280] mb-8">
              Grounded in {data.name}'s actual laws. Free to start. Verdict in
              seconds.
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
