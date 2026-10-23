"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const METRIKA_ID = 97203330;
const READY_EVENT = "yandex-metrika-ready";

const METRIKA_LOADER = `
  (function () {
    var loaded = false;
    var timer = null;
    var events = ["scroll", "touchstart", "mousemove", "click", "keydown"];

    function loadMetrika() {
      if (loaded) return;
      loaded = true;

      events.forEach(function (event) {
        window.removeEventListener(event, loadMetrika);
      });
      if (timer !== null) {
        window.clearTimeout(timer);
        timer = null;
      }

      (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
        m[i].l = Date.now();

        for (var j = 0; j < e.scripts.length; j++) {
          if (e.scripts[j].src === r) return;
        }

        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = true;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      var initialUrl = window.location.href;

      window.ym(${METRIKA_ID}, "init", {
        defer: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        referrer: document.referrer,
        url: initialUrl
      });

      window.ym(${METRIKA_ID}, "hit", initialUrl, {
        referer: document.referrer,
        title: document.title
      });

      window.__lastMetrikaUrl = initialUrl;
      window.__yandexMetrikaReady = true;
      window.dispatchEvent(new Event("${READY_EVENT}"));
    }

    events.forEach(function (event) {
      window.addEventListener(event, loadMetrika, { passive: true });
    });
    timer = window.setTimeout(loadMetrika, 1500);
  })();
`;

export function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    const sendPageView = () => {
      if (typeof window.ym !== "function") return;

      const url = window.location.href;
      if (window.__lastMetrikaUrl === url) return;

      const previousUrl = window.__lastMetrikaUrl;
      window.ym(METRIKA_ID, "hit", url, {
        referer: previousUrl,
        title: document.title,
      });
      window.__lastMetrikaUrl = url;
    };

    if (window.__yandexMetrikaReady) {
      sendPageView();
      return;
    }

    window.addEventListener(READY_EVENT, sendPageView);
    return () => window.removeEventListener(READY_EVENT, sendPageView);
  }, [pathname, search]);

  return (
    <>
      <Script
        id="yandex-metrika-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: METRIKA_LOADER }}
      />

      <noscript>
        <div>
          {/* Пиксель должен загружаться напрямую с сервера Метрики. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
    __lastMetrikaUrl?: string;
    __yandexMetrikaReady?: boolean;
  }
}