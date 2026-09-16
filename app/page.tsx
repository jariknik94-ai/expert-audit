import Image from "next/image";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { Clients } from "@/components/Clients/Clients";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { services } from "@/lib/data";

import styles from "./page.module.scss";

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.exspert-audit.ru/#organization",
    name: "Эксперт-Аудит",
    legalName: "ООО «Эксперт-Аудит»",
    url: "https://www.exspert-audit.ru/",
    description:
      "Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза.",
    telephone: "+7 923 617 40 55",
    email: "exspert-audit@mail.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "проспект Московский, д. 18 к. 3, кв. 108",
      addressLocality: "Кемерово",
      addressRegion: "Кемеровская область — Кузбасс",
      postalCode: "650023",
      addressCountry: "RU",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Эксперт-Аудит · КЕМЕРОВО</p>

            <h1>
              Проверяем учет.
              <br />
              <span>Выявляем риски.</span>
              <br />
              Помогаем принимать решения.
            </h1>

            <p className={styles.heroLead}>
              Аудит и финансовый консалтинг для организаций, которым важны
              точность, достоверность, прозрачность и контроль.
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

          <div className={styles.heroVisual}>
            <div className={`${styles.orb} ${styles.orbOne}`} />
            <div className={`${styles.orb} ${styles.orbTwo}`} />

            <div className={styles.heroImage}>
              <Image
                src="/images/team/dorozhkina+bugasova2.jpg"
                alt="Команда аудиторской компании «Эксперт-Аудит»"
                fill
                priority
                sizes="(max-width: 980px) 90vw, 500px"
              />
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
              налогах, бухгалтерском учете и финансово-экономической экспертизе.
            </p>

            <div className={styles.quoteCard}>
              <span className={styles.quoteMark}>“</span>

              <p>
                Наша задача – не просто указать на проблему, а помочь понять
                ее причины, последствия и предложить варианты решения.
              </p>

              <div className={styles.quoteAuthor}>
                <div className={styles.quoteAuthorPhoto}>
                  <Image
                    src="/images/team/bugasovaFace.jpg"
                    alt="Елена Александровна Бугасова"
                    fill
                    sizes="48px"
                  />
                </div>

                <div className={styles.quoteAuthorInfo}>
                  <strong>Елена Александровна Бугасова</strong>
                  <span>Директор ООО «Эксперт-Аудит»</span>
                </div>
              </div>
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
            ].map(([key, t, d]) => (
              <article className={styles.feature} key={key}>
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
              <AnalyticsLink
                href="/contacts"
                className="button button-light"
                event="contact"
                location="home_cta"
              >
                Связаться
              </AnalyticsLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}