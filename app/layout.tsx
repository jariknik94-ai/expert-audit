import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

// @ts-ignore
import "./globals.scss";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieNotice } from "@/components/CookieNotice/CookieNotice";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { YandexMetrika } from "@/components/YandexMetrika/YandexMetrika";

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
  metadataBase: new URL("https://www.exspert-audit.ru"),

  title: {
    default: "Эксперт-Аудит — аудит и консалтинг в Кемерово",
    template: "%s | Эксперт-Аудит",
  },

  description:
    "Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза в Кемерово.",

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
    url: "https://www.exspert-audit.ru/",
    siteName: "Эксперт-Аудит",
    title: "Эксперт-Аудит — аудит и консалтинг в Кемерово",
    description:
      "Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза в Кемерово.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Эксперт-Аудит — аудит и консалтинг в Кемерово",
    description:
      "Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза в Кемерово.",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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

        <Footer />
      </body>
    </html>
  );
}