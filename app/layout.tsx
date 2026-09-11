import type { Metadata } from "next";
import localFont from "next/font/local";

// @ts-ignore
import "./globals.scss";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieNotice } from "@/components/CookieNotice/CookieNotice";

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
  title: {
    default: "Эксперт-Аудит",
    template: "%s | Эксперт-Аудит",
  },

  description:
    "Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={manrope.variable}>
        <Header />
        <main>{children}</main>
        <CookieNotice />
        <Footer />
      </body>
    </html>
  );
}