import type { Metadata } from "next";

import { politicsContent } from "@/lib/politics";

import styles from "./privacy.module.scss";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",

  description:
    "Политика ООО «Эксперт-Аудит» в отношении обработки и защиты персональных данных пользователей сайта.",

  alternates: {
    canonical: "/privacy",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.exspert-audit.ru/privacy",
    siteName: "Эксперт-Аудит",
    title: "Политика обработки персональных данных | Эксперт-Аудит",
    description:
      "Политика ООО «Эксперт-Аудит» в отношении обработки и защиты персональных данных пользователей сайта.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Политика обработки персональных данных — Эксперт-Аудит",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Политика обработки персональных данных | Эксперт-Аудит",
    description:
      "Политика ООО «Эксперт-Аудит» в отношении обработки и защиты персональных данных пользователей сайта.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</p>

          <h1>
            Политика общества с ограниченной ответственностью «Эксперт-Аудит»
            в отношении обработки персональных данных
          </h1>
        </div>
      </section>

      <article className="section">
        <div
          className={`container ${styles.legalDocument}`}
          dangerouslySetInnerHTML={{ __html: politicsContent }}
        />
      </article>
    </>
  );
}