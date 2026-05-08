import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getISOWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function extractBody(text: string): string {
  const lines = text.split("\n");
  let startIdx = 0;
  for (let i = 0; i < Math.min(4, lines.length); i++) {
    if (/^(VERDICT:|SPLIT DECISION)/i.test(lines[i].trim())) {
      startIdx = i + 1;
      while (startIdx < lines.length && lines[startIdx].trim() === "") startIdx++;
      break;
    }
  }
  const body = lines.slice(startIdx).join("\n");
  const courtIdx = body.search(/THE COURT ORDERS:/i);
  return (courtIdx > -1 ? body.slice(0, courtIdx) : body).trim();
}

export function extractCourtOrder(text: string): string {
  const match = text.match(/THE COURT ORDERS:([\s\S]+?)$/i);
  return match ? match[1].trim() : "";
}

export function extractWinner(verdictText: string, partyNames: string[]): string | null {
  const splitMatch = verdictText.match(/SPLIT DECISION/i);
  if (splitMatch) return null;

  const verdictMatch = verdictText.match(/VERDICT:\s*([^!.\n]+?)\s*PREVAILS/i);
  if (verdictMatch) {
    const name = verdictMatch[1].trim();
    return partyNames.find(
      (p) => p.toLowerCase() === name.toLowerCase()
    ) ?? name;
  }
  return null;
}

export function truncateToSentences(text: string, count: number): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [];
  return sentences.slice(0, count).join(" ").trim();
}

export const VALID_PROMO_CODES = new Set([
  "414100",
  "PRODUCTHUNT",
  "TAAFT",
  "INSTANTVERDICT",
]);
