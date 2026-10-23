import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./WhyUs.module.scss";

const advantages = [
  {
    id: "independent",
    title: "Независимый взгляд",
    description:
      "Объективная оценка финансовой информации и потенциальных рисков.",
  },
  {
    id: "recommendations",
    title: "Практические рекомендации",
    description:
      "По итогам работы клиент получает не только выводы, но и понятные следующие шаги.",
  },
  {
    id: "team",
    title: "Квалифицированная команда",
    description:
      "Глубокая экспертиза и многолетний практический опыт в области налогов, учета и финансов.",
  },
  {
    id: "confidentiality",
    title: "Конфиденциальность",
    description:
      "Соблюдаем профессиональные требования и бережно работаем с информацией клиента.",
  },
] as const;

export function WhyUs() {
  return (
    <section className={`section section-dark ${styles.whyUsSection}`}>
      <div className="container">
        <SectionTitle
          kicker="ПОЧЕМУ МЫ"
          title="Не ограничиваемся формальной проверкой"
          light
        />

        <div className={styles.featureGrid}>
          {advantages.map(({ id, title, description }) => (
            <article key={id} className={styles.feature}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}