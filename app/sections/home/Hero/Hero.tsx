import Image from "next/image";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";

import styles from "./Hero.module.scss";

const heroProof = [
  { value: "10+", label: "лет опыта команды" },
  { value: "6", label: "ключевых направлений" },
  { value: "360°", label: "взгляд на финансовые риски" },
] as const;

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <h1>
            Проверяем учет.
            <br />
            <span>Выявляем риски.</span>
            <br />
            Предоставляем рекомендации.
          </h1>

          <p className={styles.heroLead}>
            Аудит, налоговый и бухгалтерский консалтинг и
            финансово-экономическая экспертиза для бизнеса.
          </p>

          <div className={styles.heroActions}>
            <AnalyticsLink
              href="/contacts"
              className="button button-primary"
              event="contact"
              location="home_hero"
            >
              Обсудить задачу
            </AnalyticsLink>
          </div>

          <div className={styles.heroProof}>
            {heroProof.map(({ value, label }) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={`${styles.orb} ${styles.orbOne}`} aria-hidden="true" />
          <div className={`${styles.orb} ${styles.orbTwo}`} aria-hidden="true" />

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
  );
}