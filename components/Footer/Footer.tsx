import Link from "next/link";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div>
          <Link href="/" className={styles.footerBrand}>
            Эксперт-Аудит
          </Link>

          <p>Аудит и финансовый консалтинг для бизнеса.</p>
        </div>

        <div>
          <h3>Навигация</h3>

          <Link href="/services">Услуги</Link>
          <Link href="/team">Сотрудники</Link>
          <Link href="/disclosure">Раскрытие информации</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/privacy">Политика</Link>
        </div>

        <div>
          <h3>Контакты</h3>

          <div className={styles.contactInfo}>
            <AnalyticsLink
              href="tel:+79236174055"
              event="phone"
              location="footer_contact"
            >
              +7 923 617 40 55
            </AnalyticsLink>

            <AnalyticsLink
              href="mailto:exspert-audit@mail.ru"
              event="email"
              location="footer_contact"
            >
              exspert-audit@mail.ru
            </AnalyticsLink>

            <p>
              Кемерово, проспект Московский,
              <br />
              д. 18 к. 3 кв. 108
            </p>

            <Link
              href="/contacts"
              className={styles.allContacts}
            >
              Все контакты →
            </Link>
          </div>
        </div>
      </div>

      <div className={`container ${styles.contactLinks}`}>
        <AnalyticsLink
          href="https://wa.me/79236174055"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButton}
          ariaLabel="WhatsApp"
          event="whatsapp"
          location="footer"
        >
          <FaWhatsapp />
        </AnalyticsLink>

        <AnalyticsLink
          href="https://t.me/Exspertaudit"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButton}
          ariaLabel="Telegram"
          event="telegram"
          location="footer"
        >
          <FaTelegramPlane />
        </AnalyticsLink>

        <AnalyticsLink
          href="tel:+79236174055"
          className={styles.contactButton}
          ariaLabel="Позвонить"
          event="phone"
          location="footer_social"
        >
          <FaPhoneAlt />
        </AnalyticsLink>

        <AnalyticsLink
          href="mailto:exspert-audit@mail.ru"
          className={styles.contactButton}
          ariaLabel="Email"
          event="email"
          location="footer_social"
        >
          <FaEnvelope />
        </AnalyticsLink>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <span>
          © 2023–{new Date().getFullYear()} Все права защищены. ООО
          «Эксперт-Аудит»
        </span>

        <span>
          Информация сайта не заменяет юридическую консультацию.
        </span>
      </div>

      <div className={`container ${styles.cookieNotice}`}>
        Продолжая использовать наш сайт, вы даете согласие на обработку
        файлов cookies и других пользовательских данных, в соответствии с{" "}
        <Link href="/privacy">
          политикой обработки персональных данных
        </Link>
        .
      </div>
    </footer>
  );
}
