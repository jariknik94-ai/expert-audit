"use client";

import type { ReactNode } from "react";

import {
  trackAnnualReportDownload,
  trackContactClick,
  trackEmailClick,
  trackPhoneClick,
  trackTelegramClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

type AnalyticsEvent =
  | "phone"
  | "email"
  | "telegram"
  | "whatsapp"
  | "contact"
  | "annual_report";

type AnalyticsLinkProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  event: AnalyticsEvent;
  location: string;
  year?: number;
  children: ReactNode;
};

export function AnalyticsLink({
  href,
  className,
  ariaLabel,
  target,
  rel,
  event,
  location,
  year,
  children,
}: AnalyticsLinkProps) {
  const handleClick = () => {
    switch (event) {
      case "phone":
        trackPhoneClick(location);
        break;

      case "email":
        trackEmailClick(location);
        break;

      case "telegram":
        trackTelegramClick(location);
        break;

      case "whatsapp":
        trackWhatsAppClick(location);
        break;

      case "contact":
        trackContactClick(location);
        break;

      case "annual_report":
        if (year !== undefined) {
          trackAnnualReportDownload(year, location);
        }
        break;
    }
  };

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}