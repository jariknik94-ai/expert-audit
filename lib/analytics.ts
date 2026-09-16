type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export function trackEvent(
  eventName: string,
  params?: AnalyticsEventParams
) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackPhoneClick(location: string) {
  trackEvent("click_phone", {
    location,
  });
}

export function trackEmailClick(location: string) {
  trackEvent("click_email", {
    location,
  });
}

export function trackTelegramClick(location: string) {
  trackEvent("click_telegram", {
    location,
  });
}

export function trackWhatsAppClick(location: string) {
  trackEvent("click_whatsapp", {
    location,
  });
}

export function trackContactClick(location: string) {
  trackEvent("click_contact", {
    location,
  });
}

export function trackAnnualReportDownload(
  year: number,
  location: string
) {
  trackEvent("download_annual_report", {
    year,
    location,
  });
}

export function trackLead(source: string) {
  trackEvent("generate_lead", {
    lead_source: source,
  });
}
