import type { Metadata } from "next";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { Map } from "@/components/Map/Map";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Контакты аудиторской компании в Кемерово",
  description:
    "Контакты ООО «Эксперт-Аудит» в Кемерово: адрес офиса, телефон, электронная почта и расположение на карте.",
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

                  <AnalyticsLink
                    href="tel:+79236174055"
                    event="phone"
                    location="contacts_page"
                  >
                    +7 923 617 40 55
                  </AnalyticsLink>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.label}>Электронная почта</span>

                  <AnalyticsLink
                    href="mailto:exspert-audit@mail.ru"
                    event="email"
                    location="contacts_page"
                  >
                    exspert-audit@mail.ru
                  </AnalyticsLink>
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
                <AnalyticsLink
                  href="tel:+79236174055"
                  className="button button-primary"
                  ariaLabel="Позвонить в Эксперт-Аудит"
                  event="phone"
                  location="contacts_page_action"
                >
                  <FaPhoneAlt />
                </AnalyticsLink>

                <AnalyticsLink
                  href="mailto:exspert-audit@mail.ru"
                  className="button button-ghost"
                  ariaLabel="Написать на электронную почту"
                  event="email"
                  location="contacts_page_action"
                >
                  <FaEnvelope />
                </AnalyticsLink>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}