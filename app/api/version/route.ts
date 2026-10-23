import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const FALLBACK_VERSION = "development";
const CACHE_CONTROL = "no-store, no-cache, max-age=0, must-revalidate";

async function getBuildVersion(): Promise<string> {
  try {
    const buildId = await readFile(
      path.join(process.cwd(), ".next", "BUILD_ID"),
      "utf8",
    );

    return buildId.trim() || FALLBACK_VERSION;
  } catch {
    // Сохраняем ответ API, если BUILD_ID недоступен.
    return FALLBACK_VERSION;
  }
}

export async function GET() {
  const version = await getBuildVersion();

  return NextResponse.json(
    { version },
    { headers: { "Cache-Control": CACHE_CONTROL } },
  );
}