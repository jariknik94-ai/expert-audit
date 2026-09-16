import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./WhyUs.module.scss";

const advantages = [
  [
    "independent",
    "Независимый взгляд",
    "Объективная оценка финансовой информации и потенциальных рисков.",
  ],
  [
    "recommendations",
    "Практические рекомендации",
    "По итогам работы клиент получает не только выводы, но и понятные следующие шаги.",
  ],
  [
    "team",
    "Квалифицированная команда",
    "Глубокая экспертиза и многолетний практический опыт в области налогов, учета и финансов.",
  ],
  [
    "confidentiality",
    "Конфиденциальность",
    "Соблюдаем профессиональные требования и бережно работаем с информацией клиента.",
  ],
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
          {advantages.map(([key, title, description]) => (
            <article className={styles.feature} key={key}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}