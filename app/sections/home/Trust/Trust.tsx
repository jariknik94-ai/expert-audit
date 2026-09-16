import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./Trust.module.scss";

const trustFacts = [
  [
    "qualification",
    "Квалифицированные аудиторы",
    "Все аудиторы ООО «Эксперт-Аудит» имеют квалификационные аттестаты по общему аудиту.",
  ],
  [
    "development",
    "Профессиональное развитие",
    "Аудиторы ежегодно проходят обучение по программам повышения квалификации.",
  ],
  [
    "quality",
    "Контроль качества",
    "В компании действуют правила внутреннего контроля качества выполняемых заданий.",
  ],
  [
    "standards",
    "Профессиональные стандарты",
    "Работа строится с учетом требований законодательства и применимых профессиональных стандартов.",
  ],
] as const;

export function Trust() {
  return (
    <section className={`section section-dark ${styles.trustSection}`}>
      <div className="container">
        <SectionTitle
          kicker="ПОЧЕМУ НАМ ДОВЕРЯЮТ?"
          title="Профессиональная основа для работы с финансовыми вопросами"
          light
        />

        <div className={styles.trustGrid}>
          {trustFacts.map(([key, title, description]) => (
            <article className={styles.trustCard} key={key}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className={styles.trustAction}>
          <p>Хотите понять, какие риски есть именно в вашем случае?</p>

          <AnalyticsLink
            href="/contacts"
            className="button button-light"
            event="contact"
            location="home_trust"
          >
            Обсудить задачу
          </AnalyticsLink>
        </div>
      </div>
    </section>
  );
}