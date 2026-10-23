import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./Trust.module.scss";

const trustFacts = [
  {
    id: "qualification",
    title: "Квалифицированные аудиторы",
    description:
      "Все аудиторы ООО «Эксперт-Аудит» имеют квалификационные аттестаты по общему аудиту.",
  },
  {
    id: "development",
    title: "Профессиональное развитие",
    description:
      "Аудиторы ежегодно проходят обучение по программам повышения квалификации.",
  },
  {
    id: "quality",
    title: "Контроль качества",
    description:
      "В компании действуют правила внутреннего контроля качества выполняемых заданий.",
  },
  {
    id: "standards",
    title: "Профессиональные стандарты",
    description:
      "Работа строится с учетом требований законодательства и применимых профессиональных стандартов.",
  },
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
          {trustFacts.map(({ id, title, description }) => (
            <article key={id} className={styles.trustCard}>
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