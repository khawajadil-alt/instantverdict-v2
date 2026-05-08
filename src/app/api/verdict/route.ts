export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

const WORKER_URL = "https://argument-settler-api.khawaj-adil.workers.dev";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const workerRes = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!workerRes.ok) {
      return NextResponse.json(
        { error: `Worker error: ${workerRes.status}` },
        { status: workerRes.status }
      );
    }

    const data = await workerRes.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Verdict API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
