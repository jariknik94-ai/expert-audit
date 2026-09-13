import Link from "next/link";

import styles from "./page.module.scss";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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

                  <a href="tel:+79236174055">
                    +7 923 617 40 55
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.label}>Электронная почта</span>

                  <a href="mailto:audit@expert-audit.ru">
                    audit@expert-audit.ru
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
                >
                    <FaPhoneAlt />
                </a>

                <a
                  href="mailto:audit@expert-audit.ru"
                  className="button button-ghost"
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

              <div className={styles.map}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=86.150745%2C55.355733&z=17&pt=86.150745%2C55.355733%2Cpm2rdm"
                  title="Офис «Эксперт-Аудит» на карте"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

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