import Image from "next/image";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./About.module.scss";

export function About() {
  return (
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
  );
}