type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export function trackEvent(
  eventName: string,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
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