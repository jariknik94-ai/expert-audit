import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { Map } from "@/components/Map/Map";

import styles from "./page.module.scss";

export const metadata = {
  title: "Контакты",
  description:
    "Контакты ООО «Эксперт-Аудит» в Кемерово. Адрес офиса, телефон, электронная почта и расположение на карте.",
};

export default function ContactsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ЭКСПЕРТ-АУДИТ · КЕМЕРОВО</p>

          <h1>Контакты</h1>

          <p>
            Будем рады обсудить вашу задачу и подобрать подходящий формат
            работы.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactsGrid}>
            <div className={styles.info}>
              <p className="eyebrow">СВЯЖИТЕСЬ С НАМИ</p>

              <h2>Будем рады помочь</h2>

              <p className={styles.intro}>
                Если у вас есть вопросы по аудиту, консалтингу или
                экспертизе, свяжитесь с нами удобным способом.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.label}>Телефон</span>

                  <a href="tel:+79236174055">+7 923 617 40 55</a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.label}>Электронная почта</span>

                  <a href="mailto:exspert-audit@mail.ru">
                    exspert-audit@mail.ru
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.label}>Адрес офиса</span>

                  <address>
                    650023, Кемеровская область – Кузбасс,
                    <br />
                    г. Кемерово, проспект Московский,
                    <br />
                    д. 18 к. 3, кв. 108
                  </address>
                </div>
              </div>

              <div className={styles.actions}>
                <a
                  href="tel:+79236174055"
                  className="button button-primary"
                  aria-label="Позвонить в Эксперт-Аудит"
                >
                  <FaPhoneAlt />
                </a>

                <a
                  href="mailto:exspert-audit@mail.ru"
                  className="button button-ghost"
                  aria-label="Написать на электронную почту"
                >
                  <FaEnvelope />
                </a>
              </div>

              <Link href="/" className={styles.backLink}>
                ← Вернуться на главную
              </Link>
            </div>

            <div className={styles.mapWrapper}>
              <div className={styles.mapHeader}>
                <div>
                  <p className="eyebrow">ГДЕ МЫ НАХОДИМСЯ</p>

                  <h2>Офис «Эксперт-Аудит»</h2>
                </div>
              </div>

              <Map className={styles.map} />

              <div className={styles.mapFooter}>
                <span>
                  Кемерово, проспект Московский, д. 18 к. 3 кв. 108
                </span>

                {/* <a
                  href="https://yandex.ru/maps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Открыть карту ↗
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}