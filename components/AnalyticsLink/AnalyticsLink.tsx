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

const eventHandlers = {
  phone: trackPhoneClick,
  email: trackEmailClick,
  telegram: trackTelegramClick,
  whatsapp: trackWhatsAppClick,
  contact: trackContactClick,
};

type AnalyticsEvent = keyof typeof eventHandlers | "annual_report";

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
  const handleClick = (): void => {
    if (event === "annual_report") {
      if (year !== undefined) {
        trackAnnualReportDownload(year, location);
      }
      return;
    }

    eventHandlers[event](location);
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