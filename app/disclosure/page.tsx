import type { Metadata } from "next";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { Disclosure } from "@/components/Disclosure/Disclosure";
import { disclosures } from "@/lib/disclosure";

import styles from "./disclosure.module.scss";

export const metadata: Metadata = {
  title: "Раскрытие информации аудиторской организации",

  description:
    "Раскрытие информации ООО «Эксперт-Аудит»: сведения об аудиторской организации, деятельности, квалификации специалистов и годовой отчетности.",

  alternates: {
    canonical: "/disclosure",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.exspert-audit.ru/disclosure",
    siteName: "Эксперт-Аудит",
    title: "Раскрытие информации | Эксперт-Аудит",
    description:
      "Раскрытие информации ООО «Эксперт-Аудит»: сведения об аудиторской организации, деятельности, квалификации специалистов и годовой отчетности.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Раскрытие информации — Эксперт-Аудит",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Раскрытие информации | Эксперт-Аудит",
    description:
      "Раскрытие информации ООО «Эксперт-Аудит»: сведения об аудиторской организации, деятельности, квалификации специалистов и годовой отчетности.",
    images: ["/images/og-image.jpg"],
  },
};

const reports = [
  {
    year: 2025,
    file: "/documents/Годовой отчет 2025.pdf",
  },
  {
    year: 2024,
    file: "/documents/Годовой отчет 2024.pdf",
  },
];

export default function DisclosurePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ПРОЗРАЧНОСТЬ</p>

          <h1>Раскрытие информации</h1>

          <p>
            Официальная информация о деятельности аудиторской организации,
            размещаемая в соответствии с применимыми требованиями
            законодательства.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.disclosureLayout}`}>
          <div>
            {disclosures.map((section) => (
              <Disclosure
                key={section.title}
                title={section.title}
                description={section.description}
                items={section.items}
              />
            ))}
          </div>

          <aside className={styles.reportCard}>
            <p className="eyebrow">ОТЧЕТНОСТЬ</p>

            <h2>Годовая отчетность</h2>

            <p>
              Годовая отчетность аудиторской организации за соответствующие
              отчетные периоды.
            </p>

            {[...reports]
              .sort((a, b) => b.year - a.year)
              .map(({ year, file }) => (
                <AnalyticsLink
                  key={year}
                  href={encodeURI(file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fileButton}
                  event="annual_report"
                  location="disclosure"
                  year={year}
                >
                  {year}
                  <span>PDF →</span>
                </AnalyticsLink>
              ))}
          </aside>
        </div>
      </section>
    </>
  );
}