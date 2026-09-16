"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-0V6J0E265V";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.toString();

    const url = search
      ? `${window.location.origin}${pathname}?${search}`
      : `${window.location.origin}${pathname}`;

    const sendPageView = () => {
      if (typeof window.gtag !== "function") {
        return;
      }

      if (window.__lastGoogleAnalyticsUrl === url) {
        return;
      }

      const previousUrl = window.__lastGoogleAnalyticsUrl;

      window.__lastGoogleAnalyticsUrl = url;

      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: url,
        page_referrer: previousUrl,
      });
    };

    if (window.__googleAnalyticsReady) {
      sendPageView();
      return;
    }

    window.addEventListener(
      "google-analytics-ready",
      sendPageView
    );

    return () => {
      window.removeEventListener(
        "google-analytics-ready",
        sendPageView
      );
    };
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            window.gtag = function () {
              window.dataLayer.push(arguments);
            };

            window.gtag("js", new Date());

            window.gtag("config", "${GA_MEASUREMENT_ID}", {
              send_page_view: false
            });
          `,
        }}
      />

      <Script
        id="google-analytics-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          window.__googleAnalyticsReady = true;

          window.dispatchEvent(
            new Event("google-analytics-ready")
          );
        }}
      />
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];

    gtag?: (
      command: string,
      ...args: unknown[]
    ) => void;

    __lastGoogleAnalyticsUrl?: string;

    __googleAnalyticsReady?: boolean;
  }
}