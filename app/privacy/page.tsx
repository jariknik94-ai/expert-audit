import type { Metadata } from "next";

import { politicsContent } from "@/lib/politics";

import styles from "./privacy.module.scss";

const PAGE_TITLE = "Политика обработки персональных данных";
const SOCIAL_TITLE = `${PAGE_TITLE} | Эксперт-Аудит`;
const PAGE_DESCRIPTION =
  "Политика ООО «Эксперт-Аудит» в отношении обработки и защиты персональных данных пользователей сайта.";
const OG_IMAGE = "/images/og-image.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.exspert-audit.ru/privacy",
    siteName: "Эксперт-Аудит",
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Политика обработки персональных данных — Эксперт-Аудит",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
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