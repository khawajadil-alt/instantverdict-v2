import type { Country, Category, Judge, Party, VerdictResult } from "./types";
import { extractWinner, extractBody, extractCourtOrder, truncateToSentences } from "./utils";

const WORKER_URL = "https://argument-settler-api.khawaj-adil.workers.dev";

const JUDGE_SYSTEM: Record<string, string> = {
  roast:
    "You are Judge Roast — savage, witty, brutally honest. Deliver your verdict with sharp humour and zero tolerance for nonsense. Entertain while being legally correct.",
  lawson:
    "You are Judge Lawson — a formal legal scholar. Cite actual statutes, legislation, and landmark cases from the jurisdiction. Be rigorous, structured, and authoritative.",
  culture:
    "You are Judge Culture — you analyse disputes through social norms, cultural expectations, and community standards of the jurisdiction, alongside legal merit.",
  sage:
    "You are Judge Sage — a wise, empathetic mediator. Seek understanding and fair resolution. Identify root causes and offer constructive paths forward.",
};

function buildPrompt(
  country: Country,
  category: Category,
  parties: Party[]
): string {
  const partyLines = parties
    .map((p, i) => `Party ${i + 1} — ${p.name}: "${p.argument}"`)
    .join("\n\n");
  const partyNames = parties.map((p) => p.name).join(", ");

  return `JURISDICTION: ${country.name} (Legal System: ${country.legalSystem})
DISPUTE CATEGORY: ${category.label}
PARTIES INVOLVED: ${partyNames}

ARGUMENTS:
${partyLines}

VERDICT REQUIREMENTS:
1. Begin with either "VERDICT: [Winner Name] PREVAILS" or "SPLIT DECISION" on the first line
2. Write 250-380 words total
3. Reference 1-2 real court cases or specific legislation from ${country.name}
4. Address each party by name throughout
5. End with "THE COURT ORDERS:" followed by a concrete order
6. This is entertainment/general guidance — not formal legal advice

Deliver your verdict now:`;
}

export async function fetchVerdict(
  country: Country,
  category: Category,
  judge: Judge,
  parties: Party[]
): Promise<VerdictResult> {
  const system = JUDGE_SYSTEM[judge.id] ?? "";
  const userContent = buildPrompt(country, category, parties);

  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      system,
      messages: [{ role: "user", content: userContent }],
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  const text: string =
    data?.content?.[0]?.text ?? data?.completion ?? data?.text ?? "";

  if (!text) throw new Error("Empty response from API");

  const partyNames = parties.map((p) => p.name);
  const winner = extractWinner(text, partyNames);
  const isSplit = /SPLIT DECISION/i.test(text);
  const body = extractBody(text);
  const courtOrder = extractCourtOrder(text);
  const brief = truncateToSentences(body, 3);

  return { full: text, body, brief, courtOrder, winner, isSplit };
}
