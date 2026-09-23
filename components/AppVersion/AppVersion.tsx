"use client";

import { useCallback, useEffect } from "react";

const CURRENT_VERSION =
  process.env.NEXT_PUBLIC_BUILD_VERSION ?? "development";

const VERSION_CHECK_INTERVAL = 5 * 60 * 1000;

export function AppVersion() {
  const checkVersion = useCallback(async () => {
    if (CURRENT_VERSION === "development") {
      return;
    }

    try {
      const response = await fetch("/api/version", {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        return;
      }

      const data: { version?: string } = await response.json();

      if (!data.version || data.version === CURRENT_VERSION) {
        return;
      }

      /*
       * Не допускаем бесконечную перезагрузку,
       * если внешний кэш временно возвращает неожиданную версию.
       */
      const reloadVersion = sessionStorage.getItem(
        "expert-audit-reload-version",
      );

      if (reloadVersion === data.version) {
        return;
      }

      sessionStorage.setItem(
        "expert-audit-reload-version",
        data.version,
      );

      window.location.reload();
    } catch {
      /*
       * Проверка версии не должна ломать работу сайта,
       * если endpoint временно недоступен.
       */
    }
  }, []);

  useEffect(() => {
    void checkVersion();

    const interval = window.setInterval(() => {
      void checkVersion();
    }, VERSION_CHECK_INTERVAL);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void checkVersion();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      window.clearInterval(interval);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, [checkVersion]);

  return null;
}