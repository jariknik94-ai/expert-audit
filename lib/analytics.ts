type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export const METRIKA_ID = 97203330;
export const METRIKA_READY_EVENT = "yandex-metrika-ready";

export function trackEvent(
  eventName: string,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);

  const sendMetrikaGoal = () => {
    window.ym?.(METRIKA_ID, "reachGoal", eventName, params);
  };

  if (window.__yandexMetrikaReady) {
    sendMetrikaGoal();
  } else {
    window.addEventListener(METRIKA_READY_EVENT, sendMetrikaGoal, {
      once: true,
    });
  }
}

export function trackPhoneClick(location: string): void {
  trackEvent("click_phone", { location });
}

export function trackEmailClick(location: string): void {
  trackEvent("click_email", { location });
}

export function trackTelegramClick(location: string): void {
  trackEvent("click_telegram", { location });
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("click_whatsapp", { location });
}

export function trackContactClick(location: string): void {
  trackEvent("click_contact", { location });
}

export function trackAnnualReportDownload(
  year: number,
  location: string,
): void {
  trackEvent("download_annual_report", { year, location });
}

export function trackLead(source: string): void {
  trackEvent("generate_lead", { lead_source: source });
}
