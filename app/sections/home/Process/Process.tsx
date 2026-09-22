import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./Process.module.scss";

const processSteps = [
  [
    "01",
    "Знакомимся с задачей",
    "Определяем цели, объем работ и ключевые риски.",
  ],
  [
    "02",
    "Анализируем",
    "Изучаем документы, процессы и необходимую сопутствующую информацию.",
  ],
  [
    "03",
    "Проверяем",
    "Проводим процедуры и формируем доказательную базу.",
  ],
  [
    "04",
    "Объясняем",
    "Формулируем существенные выводы и причины выявленных отклонений.",
  ],
  [
    "05",
    "Рекомендуем",
    "Предлагаем практические меры по снижению рисков.",
  ],
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
          {processSteps.map(([number, title, description]) => (
            <div className={styles.processItem} key={number}>
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
