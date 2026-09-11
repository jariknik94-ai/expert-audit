import Link from "next/link";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { Clients } from "@/components/Clients/Clients";
import { services } from "@/lib/data";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Эксперт-Аудит · КЕМЕРОВО</p>

            <h1>
              Проверяем цифры.
              <br />
              <span>Находим риски.</span>
              <br />
              Помогаем принимать решения.
            </h1>

            <p className={styles.heroLead}>
              Аудит и финансовый консалтинг для компаний, которым важны
              прозрачность, контроль и уверенность в финансовых результатах.
            </p>

            <div className={styles.heroProof}>
              <div>
                <strong>10+</strong>
                <span>лет опыта команды</span>
              </div>

              <div>
                <strong>6</strong>
                <span>ключевых направлений</span>
              </div>

              <div>
                <strong>360°</strong>
                <span>взгляд на финансовые риски</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={`${styles.orb} ${styles.orbOne}`} />
            <div className={`${styles.orb} ${styles.orbTwo}`} />

            <div className={styles.auditCard}>
              <div className={styles.auditCardTop}>
                <span>FINANCIAL REVIEW</span>
                <i>●</i>
              </div>

              <div className={styles.chart}>
                <span style={{ height: "38%" }} />
                <span style={{ height: "56%" }} />
                <span style={{ height: "44%" }} />
                <span style={{ height: "72%" }} />
                <span style={{ height: "63%" }} />
                <span style={{ height: "88%" }} />
                <span style={{ height: "76%" }} />
              </div>

              <div className={styles.auditCardBottom}>
                <strong>Контроль</strong>
                <span>Риски · Учет · Налоги</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle
            kicker="О КОМПАНИИ"
            title="Экспертность, которая помогает бизнесу двигаться увереннее"
          />

          <div className={styles.twoCol}>
            <p className={styles.lead}>
              ООО «Эксперт-Аудит» оказывает аудиторские, консультационные и
              экспертные услуги. Команда сочетает практический опыт в аудите,
              налогах, бухгалтерском учете и финансово-экономической
              экспертизе.
            </p>

            <div className={styles.quoteCard}>
              <span className={styles.quoteMark}>“</span>

              <p>
                Наша задача – не просто указать на проблему, а помочь понять
                ее причины, последствия и предложить варианты решения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            kicker="УСЛУГИ"
            title="Решения для ключевых финансовых задач"
          />

          <div className={styles.serviceGrid}>
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionTitle
            kicker="ПОЧЕМУ МЫ"
            title="Не ограничиваемся формальной проверкой"
            light
          />

          <div className={styles.featureGrid}>
            {[
              [
                "01",
                "Независимый взгляд",
                "Объективная оценка финансовой информации и потенциальных рисков.",
              ],
              [
                "02",
                "Практические рекомендации",
                "По итогам работы клиент получает не только выводы, но и понятные следующие шаги.",
              ],
              [
                "03",
                "Квалифицированная команда",
                "Глубокая экспертиза и многолетний практический опыт в области налогов, учета и финансов.",
              ],
              [
                "04",
                "Конфиденциальность",
                "Соблюдаем профессиональные требования и бережно работаем с информацией клиента.",
              ],
            ].map(([n, t, d]) => (
              <article className={styles.feature} key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            kicker="КАК МЫ РАБОТАЕМ"
            title="От задачи до понятного результата"
          />

          <div className={styles.processGrid}>
            {[
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
                "Показываем существенные выводы и причины выявленных отклонений.",
              ],
              [
                "05",
                "Рекомендуем",
                "Предлагаем практические меры по снижению рисков.",
              ],
            ].map(([n, t, d]) => (
              <div className={styles.processItem} key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Clients />

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">ГОТОВЫ ОБСУДИТЬ ЗАДАЧУ?</p>

            <h2>Расскажите, что происходит в вашем бизнесе.</h2>

            <p>
              Мы поможем определить подходящий формат работы и ответим
              на вопросы.
            </p>

            <div className={styles.ctaContacts}>
              <Link
                href="/contacts"
                className="button button-light"
              >
                Связаться
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}