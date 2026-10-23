"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-0V6J0E265V";
const READY_EVENT = "google-analytics-ready";

const GA_INIT_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", "${GA_MEASUREMENT_ID}", {
    send_page_view: false
  });
`;

function markAnalyticsReady(): void {
  window.__googleAnalyticsReady = true;
  window.dispatchEvent(new Event(READY_EVENT));
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    const sendPageView = () => {
      if (typeof window.gtag !== "function") return;

      const url = window.location.href;
      if (window.__lastGoogleAnalyticsUrl === url) return;

      const previousUrl = window.__lastGoogleAnalyticsUrl;
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: url,
        page_referrer: previousUrl ?? document.referrer,
      });
      window.__lastGoogleAnalyticsUrl = url;
    };

    if (window.__googleAnalyticsReady) {
      sendPageView();
      return;
    }

    window.addEventListener(READY_EVENT, sendPageView);
    return () => window.removeEventListener(READY_EVENT, sendPageView);
  }, [pathname, search]);

  return (
    <>
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: GA_INIT_SCRIPT }}
      />
      <Script
        id="google-analytics-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={markAnalyticsReady}
      />
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
    __lastGoogleAnalyticsUrl?: string;
    __googleAnalyticsReady?: boolean;
  }
}