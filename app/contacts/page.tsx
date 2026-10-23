import type { Metadata } from "next";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";
import { Map } from "@/components/Map/Map";

import styles from "./page.module.scss";

const PAGE_TITLE = "Контакты аудиторской компании в Кемерово";
const SOCIAL_TITLE = `${PAGE_TITLE} | Эксперт-Аудит`;
const PAGE_DESCRIPTION =
  "Контакты ООО «Эксперт-Аудит» в Кемерово: адрес офиса, телефон, электронная почта и расположение на карте.";
const OG_IMAGE = "/images/og-image.jpg";

const PHONE = {
  href: "tel:+79236174055",
  label: "+7 923 617 40 55",
};

const EMAIL = {
  href: "mailto:exspert-audit@mail.ru",
  label: "exspert-audit@mail.ru",
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/contacts",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.exspert-audit.ru/contacts",
    siteName: "Эксперт-Аудит",
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Контакты аудиторской компании «Эксперт-Аудит»",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function ContactsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ЭКСПЕРТ-АУДИТ · КЕМЕРОВО</p>
          <h1>Контакты</h1>
          <p>
            Будем рады обсудить вашу задачу и подобрать подходящий формат работы.
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
                Если у вас есть вопросы по аудиту, консалтингу или экспертизе,
                свяжитесь с нами удобным способом.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.label}>Телефон</span>
                  <AnalyticsLink
                    href={PHONE.href}
                    event="phone"
                    location="contacts_page"
                  >
                    {PHONE.label}
                  </AnalyticsLink>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.label}>Электронная почта</span>
                  <AnalyticsLink
                    href={EMAIL.href}
                    event="email"
                    location="contacts_page"
                  >
                    {EMAIL.label}
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
                  href={PHONE.href}
                  className="button button-primary"
                  ariaLabel="Позвонить в Эксперт-Аудит"
                  event="phone"
                  location="contacts_page_action"
                >
                  <FaPhoneAlt aria-hidden="true" />
                </AnalyticsLink>

                <AnalyticsLink
                  href={EMAIL.href}
                  className="button button-ghost"
                  ariaLabel="Написать на электронную почту"
                  event="email"
                  location="contacts_page_action"
                >
                  <FaEnvelope aria-hidden="true" />
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