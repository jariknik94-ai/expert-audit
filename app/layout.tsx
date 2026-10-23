import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense, type ReactNode } from "react";

import { AppVersion } from "@/components/AppVersion/AppVersion";
import { CookieNotice } from "@/components/CookieNotice/CookieNotice";
import { Footer } from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Header } from "@/components/Header/Header";
import { YandexMetrika } from "@/components/YandexMetrika/YandexMetrika";

import "./globals.scss";

const SITE_NAME = "Эксперт-Аудит";
const SITE_URL = "https://www.exspert-audit.ru";
const SITE_TITLE = `${SITE_NAME} — аудит и финансовый консалтинг`;
const SITE_DESCRIPTION =
  "Аудиторская компания «Эксперт-Аудит». Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для бизнеса.";
const OG_IMAGE = "/images/og-image.jpg";

const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  verification: {
    yandex: "6bc42f71f06f3688",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Эксперт-Аудит — аудиторская компания",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body className={manrope.variable}>
        <Suspense fallback={null}>
          <YandexMetrika />
          <GoogleAnalytics />
        </Suspense>

        <Header />
        <main>{children}</main>
        <CookieNotice />
        <AppVersion />
        <Footer />
      </body>
    </html>
  );
}