import type { Metadata } from "next";

import { services } from "@/lib/data";

import styles from "./services.module.scss";

const PAGE_TITLE = "Услуги аудиторской компании";
const SOCIAL_TITLE = `${PAGE_TITLE} | Эксперт-Аудит`;
const PAGE_DESCRIPTION =
  "Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для организаций и бизнеса.";
const OG_IMAGE = "/images/og-image.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.exspert-audit.ru/services",
    siteName: "Эксперт-Аудит",
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Услуги аудиторской компании «Эксперт-Аудит»",
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

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">НАПРАВЛЕНИЯ РАБОТЫ</p>
          <h1>Спектр предоставляемых услуг</h1>
          <p>
            Комплексная работа с финансовыми, налоговыми, кадровыми и
            экспертными задачами бизнеса.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceDetails}`}>
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className={styles.serviceDetail}
            >
              <div className={styles.serviceDetailNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <p className="eyebrow">{service.label}</p>
                <h2>{service.title}</h2>
                <p className="lead">{service.description}</p>

                {service.expertise ? (
                  <div>
                    {service.expertise.map((section) => (
                      <div key={section.title}>
                        <h3>{section.title}</h3>
                        <ul>
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <h3>Что входит</h3>
                    <ul>
                      {service.items?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                <div className={styles.resultBox}>
                  <strong>Результат</strong>
                  <p>{service.result}</p>
                </div>

                {service.price && (
                  <div className={styles.priceBox}>
                    <strong>Стоимость</strong>
                    <p>{service.price}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}