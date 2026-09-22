import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

// @ts-ignore
import "./globals.scss";

import { CookieNotice } from "@/components/CookieNotice/CookieNotice";
import { Footer } from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Header } from "@/components/Header/Header";
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
    default: "Эксперт-Аудит — аудит и финансовый консалтинг",
    template: "%s | Эксперт-Аудит",
  },

  description:
    "Аудиторская компания «Эксперт-Аудит». Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для бизнеса.",

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
    url: "https://www.exspert-audit.ru/",
    siteName: "Эксперт-Аудит",
    title: "Эксперт-Аудит — аудит и финансовый консалтинг",
    description:
      "Аудиторская компания «Эксперт-Аудит». Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для бизнеса.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Эксперт-Аудит — аудиторская компания",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Эксперт-Аудит — аудит и финансовый консалтинг",
    description:
      "Аудиторская компания «Эксперт-Аудит». Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для бизнеса.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
      // {
      //   url: "/icons/favicon.svg",
      //   type: "image/svg+xml",
      // },
      // {
      //   url: "/icons/favicon-32.png",
      //   type: "image/png",
      //   sizes: "32x32",
      // },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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