"use client";

import { useCallback, useEffect } from "react";

const STORAGE_KEY = "expert-audit-build-version";
const VERSION_CHECK_INTERVAL = 5 * 60 * 1000;

export function AppVersion() {
  const checkVersion = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/version?t=${Date.now()}`,
        {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
          },
        },
      );

      if (!response.ok) {
        return;
      }

      const data: { version?: string } = await response.json();

      if (!data.version) {
        return;
      }

      const knownVersion = sessionStorage.getItem(STORAGE_KEY);

      /*
       * Первый запуск после установки механизма проверки.
       * Запоминаем текущую версию и не перезагружаем страницу.
       */
      if (!knownVersion) {
        sessionStorage.setItem(STORAGE_KEY, data.version);
        return;
      }

      /*
       * Сервер сообщает, что опубликована новая сборка.
       */
      if (knownVersion === data.version) {
        return;
      }

      /*
       * Сохраняем новую версию до перезагрузки,
       * чтобы не получить бесконечный цикл reload.
       */
      sessionStorage.setItem(STORAGE_KEY, data.version);

      window.location.reload();
    } catch {
      /*
       * Проверка версии не должна влиять
       * на работу сайта при временной ошибке сети.
       */
    }
  }, []);

  useEffect(() => {
    /*
     * Проверяем версию сразу после загрузки страницы.
     */
    void checkVersion();

    /*
     * Периодическая проверка открытой вкладки.
     */
    const interval = window.setInterval(() => {
      void checkVersion();
    }, VERSION_CHECK_INTERVAL);

    /*
     * Если пользователь вернулся на вкладку,
     * сразу проверяем наличие новой версии.
     */
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