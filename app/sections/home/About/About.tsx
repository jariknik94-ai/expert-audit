import Image from "next/image";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./About.module.scss";

const QUOTE_AUTHOR = {
  name: "Елена Александровна Бугасова",
  role: "Директор ООО «Эксперт-Аудит»",
  photo: "/images/team/bugasovaFace.jpg",
};

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
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>

            <p>
              Наша задача – не просто указать на проблему, а помочь понять
              ее причины, последствия и предложить варианты решения.
            </p>

            <div className={styles.quoteAuthor}>
              <div className={styles.quoteAuthorPhoto}>
                <Image
                  src={QUOTE_AUTHOR.photo}
                  alt={QUOTE_AUTHOR.name}
                  fill
                  sizes="48px"
                />
              </div>

              <div className={styles.quoteAuthorInfo}>
                <strong>{QUOTE_AUTHOR.name}</strong>
                <span>{QUOTE_AUTHOR.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}