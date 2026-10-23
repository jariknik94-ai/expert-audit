import { FiArrowUpRight } from "react-icons/fi";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./ClientTasks.module.scss";

const clientTasks = [
  {
    id: "accounting",
    title: "Проверить бухгалтерский учет",
    description:
      "Нужно понять, насколько корректно ведется учет и где могут скрываться ошибки.",
  },
  {
    id: "tax",
    title: "Оценить налоговые риски",
    description:
      "Хотите заранее выявить проблемные участки и снизить вероятность налоговых претензий.",
  },
  {
    id: "audit",
    title: "Подготовиться к аудиту",
    description:
      "Предстоит обязательный или инициативный аудит и важно пройти его подготовленными.",
  },
  {
    id: "chief-accountant",
    title: "Смена главного бухгалтера",
    description:
      "Нужно принять дела, оценить состояние учета и понять, какие вопросы требуют внимания.",
  },
  {
    id: "business",
    title: "Покупка или продажа бизнеса",
    description:
      "Нужен независимый взгляд на финансовое состояние, обязательства и возможные риски.",
  },
  {
    id: "expertise",
    title: "Нужна финансовая экспертиза",
    description:
      "Требуется профессиональный анализ финансово-экономической ситуации или отдельных показателей.",
  },
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
          {clientTasks.map(({ id, title, description }) => (
            <article key={id} className={styles.taskCard}>
              <div className={styles.taskContent}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>

              <AnalyticsLink
                href="/contacts"
                className={styles.taskAction}
                event="contact"
                location={`home_task_${id}`}
                ariaLabel={`Обсудить задачу: ${title}`}
              >
                <span>Обсудить задачу</span>
                <span className={styles.taskActionArrow} aria-hidden="true">
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