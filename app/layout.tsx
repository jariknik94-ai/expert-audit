import type { Metadata } from "next";
// @ts-ignore
import "./globals.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieNotice } from "@/components/CookieNotice/CookieNotice";

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
      <body>
        <Header />
        <main>{children}</main>
        <CookieNotice />
        <Footer />
      </body>
    </html>
  );
}
