import type { Metadata } from "next";
// @ts-expect-error: TypeScript does not resolve SCSS side-effect imports without a declaration file.
import "./globals.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ContactButton } from "@/components/ContactButton/ContactButton";
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
        <ContactButton />
        <CookieNotice />
        <Footer />
      </body>
    </html>
  );
}
