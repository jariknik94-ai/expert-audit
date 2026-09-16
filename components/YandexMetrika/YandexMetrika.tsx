"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const METRIKA_ID = 97203330;

export function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.toString();

    const url = search
      ? `${window.location.origin}${pathname}?${search}`
      : `${window.location.origin}${pathname}`;

    const sendPageView = () => {
      if (typeof window.ym !== "function") {
        return;
      }

      if (window.__lastMetrikaUrl === url) {
        return;
      }

      const previousUrl = window.__lastMetrikaUrl;

      window.__lastMetrikaUrl = url;

      window.ym(METRIKA_ID, "hit", url, {
        referer: previousUrl,
        title: document.title,
      });
    };

    if (window.__yandexMetrikaReady) {
      sendPageView();
      return;
    }

    window.addEventListener(
      "yandex-metrika-ready",
      sendPageView
    );

    return () => {
      window.removeEventListener(
        "yandex-metrika-ready",
        sendPageView
      );
    };
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="yandex-metrika-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              let metrikaLoaded = false;
              let metrikaTimer = null;

              function loadMetrika() {
                if (metrikaLoaded) {
                  return;
                }

                metrikaLoaded = true;

                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){
                    (m[i].a=m[i].a||[]).push(arguments);
                  };

                  m[i].l=1*new Date();

                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                      return;
                    }
                  }

                  k=e.createElement(t);
                  a=e.getElementsByTagName(t)[0];

                  k.async=1;
                  k.src=r;

                  a.parentNode.insertBefore(k,a);
                })(
                  window,
                  document,
                  "script",
                  "https://mc.yandex.ru/metrika/tag.js",
                  "ym"
                );

                ym(${METRIKA_ID}, "init", {
                  defer: true,
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true,
                  referrer: document.referrer,
                  url: location.href
                });

                const initialUrl = location.href;

                window.__lastMetrikaUrl = initialUrl;

                ym(${METRIKA_ID}, "hit", initialUrl, {
                  referer: document.referrer,
                  title: document.title
                });

                window.__yandexMetrikaReady = true;

                window.dispatchEvent(
                  new Event("yandex-metrika-ready")
                );

                window.removeEventListener(
                  "scroll",
                  loadMetrika
                );

                window.removeEventListener(
                  "touchstart",
                  loadMetrika
                );

                window.removeEventListener(
                  "mousemove",
                  loadMetrika
                );

                window.removeEventListener(
                  "click",
                  loadMetrika
                );

                window.removeEventListener(
                  "keydown",
                  loadMetrika
                );

                if (metrikaTimer) {
                  clearTimeout(metrikaTimer);
                  metrikaTimer = null;
                }
              }

              window.addEventListener(
                "scroll",
                loadMetrika,
                { passive: true }
              );

              window.addEventListener(
                "touchstart",
                loadMetrika,
                { passive: true }
              );

              window.addEventListener(
                "mousemove",
                loadMetrika,
                { passive: true }
              );

              window.addEventListener(
                "click",
                loadMetrika,
                { passive: true }
              );

              window.addEventListener(
                "keydown",
                loadMetrika,
                { passive: true }
              );

              metrikaTimer = window.setTimeout(
                loadMetrika,
                1500
              );
            })();
          `,
        }}
      />

      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
            style={{
              position: "absolute",
              left: "-9999px",
            }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

declare global {
  interface Window {
    ym?: (
      counterId: number,
      method: string,
      ...args: unknown[]
    ) => void;

    __lastMetrikaUrl?: string;

    __yandexMetrikaReady?: boolean;
  }
}