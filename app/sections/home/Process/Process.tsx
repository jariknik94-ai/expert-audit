import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./Process.module.scss";

const processSteps = [
  {
    number: "01",
    title: "Знакомимся с задачей",
    description: "Определяем цели, объем работ и ключевые риски.",
  },
  {
    number: "02",
    title: "Анализируем",
    description:
      "Изучаем документы, процессы и необходимую сопутствующую информацию.",
  },
  {
    number: "03",
    title: "Проверяем",
    description: "Проводим процедуры и формируем доказательную базу.",
  },
  {
    number: "04",
    title: "Объясняем",
    description:
      "Формулируем существенные выводы и причины выявленных отклонений.",
  },
  {
    number: "05",
    title: "Рекомендуем",
    description: "Предлагаем практические меры по снижению рисков.",
  },
] as const;

export function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          kicker="КАК МЫ РАБОТАЕМ"
          title="От задачи до понятного результата"
        />

        <div className={styles.processGrid}>
          {processSteps.map(({ number, title, description }) => (
            <div key={number} className={styles.processItem}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}