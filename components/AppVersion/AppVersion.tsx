"use client";

import { useEffect } from "react";

const STORAGE_KEY = "expert-audit-build-version";
const VERSION_CHECK_INTERVAL = 5 * 60 * 1000;

function getVersion(data: unknown): string | null {
  if (
    typeof data !== "object" ||
    data === null ||
    !("version" in data) ||
    typeof data.version !== "string" ||
    data.version.trim().length === 0
  ) {
    return null;
  }

  return data.version;
}

export function AppVersion() {
  useEffect(() => {
    let controller: AbortController | null = null;
    let disposed = false;

    const checkVersion = async (): Promise<void> => {
      if (disposed || controller) return;

      const requestController = new AbortController();
      controller = requestController;

      try {
        const response = await fetch(`/api/version?t=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
          signal: requestController.signal,
        });
        if (!response.ok) return;

        const data: unknown = await response.json();
        const version = getVersion(data);
        if (disposed || !version) return;

        const knownVersion = sessionStorage.getItem(STORAGE_KEY);
        if (knownVersion === version) return;

        // Записываем версию до reload, чтобы избежать цикла перезагрузок.
        sessionStorage.setItem(STORAGE_KEY, version);
        if (knownVersion) window.location.reload();
      } catch {
        // Ошибки сети и хранилища не должны мешать работе сайта.
      } finally {
        controller = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void checkVersion();
      }
    };

    void checkVersion();
    const interval = window.setInterval(() => {
      void checkVersion();
    }, VERSION_CHECK_INTERVAL);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      disposed = true;
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      controller?.abort();
    };
  }, []);

  return null;
}