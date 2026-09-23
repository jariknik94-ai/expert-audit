import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  let version = "development";

  try {
    version = (
      await readFile(
        path.join(process.cwd(), ".next", "BUILD_ID"),
        "utf8",
      )
    ).trim() || version;
  } catch {
    /*
     * Если BUILD_ID временно недоступен,
     * не ломаем работу сайта.
     */
  }

  return NextResponse.json(
    {
      version,
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, max-age=0, must-revalidate",
      },
    },
  );
}