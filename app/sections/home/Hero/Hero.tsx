import Image from "next/image";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";

import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <p className="eyebrow">Эксперт-Аудит · КЕМЕРОВО</p>

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
  );
}