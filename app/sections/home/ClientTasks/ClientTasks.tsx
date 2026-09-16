import { FiArrowUpRight } from "react-icons/fi";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./ClientTasks.module.scss";

const clientTasks = [
  [
    "accounting",
    "Проверить бухгалтерский учет",
    "Нужно понять, насколько корректно ведется учет и где могут скрываться ошибки.",
  ],
  [
    "tax",
    "Оценить налоговые риски",
    "Хотите заранее выявить проблемные участки и снизить вероятность налоговых претензий.",
  ],
  [
    "audit",
    "Подготовиться к аудиту",
    "Предстоит обязательный или инициативный аудит и важно пройти его подготовленными.",
  ],
  [
    "chief-accountant",
    "Смена главного бухгалтера",
    "Нужно принять дела, оценить состояние учета и понять, какие вопросы требуют внимания.",
  ],
  [
    "business",
    "Покупка или продажа бизнеса",
    "Нужен независимый взгляд на финансовое состояние, обязательства и возможные риски.",
  ],
  [
    "expertise",
    "Нужна финансовая экспертиза",
    "Требуется профессиональный анализ финансово-экономической ситуации или отдельных показателей.",
  ],
] as const;

export function ClientTasks() {
  return (
    <section className="section section-light">
      <div className="container">
        <SectionTitle
          kicker="С ЧЕМ ВЫ ПРИШЛИ?"
          title="С какой задачей вы пришли?"
        />

        <div className={styles.taskGrid}>
          {clientTasks.map(([key, title, description]) => (
            <article className={styles.taskCard} key={key}>
              <div className={styles.taskContent}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>

              <AnalyticsLink
                href="/contacts"
                className={styles.taskAction}
                event="contact"
                location={`home_task_${key}`}
                ariaLabel={`Обсудить задачу: ${title}`}
              >
                <span>Обсудить задачу</span>

                <span
                  className={styles.taskActionArrow}
                  aria-hidden="true"
                >
                  <FiArrowUpRight />
                </span>
              </AnalyticsLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
