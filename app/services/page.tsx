import { services } from "@/lib/data";
import styles from "./services.module.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги аудиторской компании в Кемерово",
  description:
    "Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для организаций в Кемерово.",
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
          {services.map((s, i) => (
            <article
              className={styles.serviceDetail}
              id={s.slug}
              key={s.slug}
            >
              <div className={styles.serviceDetailNumber}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <p className="eyebrow">{s.label}</p>

                <h2>{s.title}</h2>

                <p className="lead">{s.description}</p>
                  {s.expertise ? (
                    <div>
                      {s.expertise.map((section) => (
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
                        {s.items?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                <div className={styles.resultBox}>
                  <strong>Результат</strong>
                  <p>{s.result}</p>
                </div>

                {s.price && (
                  <div className={styles.priceBox}>
                    <strong>Стоимость</strong>
                    <p>{s.price}</p>
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