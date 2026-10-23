import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";

import styles from "./Footer.module.scss";

const PHONE = { href: "tel:+79236174055", label: "+7 923 617 40 55" };
const EMAIL = {
  href: "mailto:exspert-audit@mail.ru",
  label: "exspert-audit@mail.ru",
};

const navItems = [
  { href: "/services", label: "Услуги" },
  { href: "/team", label: "Сотрудники" },
  { href: "/disclosure", label: "Раскрытие информации" },
  { href: "/contacts", label: "Контакты" },
  { href: "/privacy", label: "Политика" },
] as const;

const contactLinks = [
  {
    href: "https://wa.me/79236174055",
    label: "Написать в WhatsApp",
    event: "whatsapp",
    location: "footer",
    external: true,
    Icon: FaWhatsapp,
  },
  {
    href: "https://t.me/Exspertaudit",
    label: "Написать в Telegram",
    event: "telegram",
    location: "footer",
    external: true,
    Icon: FaTelegramPlane,
  },
  {
    href: PHONE.href,
    label: "Позвонить в «Эксперт-Аудит»",
    event: "phone",
    location: "footer_social",
    external: false,
    Icon: FaPhoneAlt,
  },
  {
    href: EMAIL.href,
    label: "Написать на электронную почту",
    event: "email",
    location: "footer_social",
    external: false,
    Icon: FaEnvelope,
  },
] as const;

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
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Контакты</h3>
          <div className={styles.contactInfo}>
            <AnalyticsLink
              href={PHONE.href}
              event="phone"
              location="footer_contact"
            >
              {PHONE.label}
            </AnalyticsLink>
            <AnalyticsLink
              href={EMAIL.href}
              event="email"
              location="footer_contact"
            >
              {EMAIL.label}
            </AnalyticsLink>
            <p>
              Кемерово, проспект Московский,
              <br />
              д. 18 к. 3 кв. 108
            </p>
            <Link href="/contacts" className={styles.allContacts}>
              Все контакты →
            </Link>
          </div>
        </div>
      </div>

      <div className={`container ${styles.contactLinks}`}>
        {contactLinks.map(({ href, label, event, location, external, Icon }) => (
          <AnalyticsLink
            key={event}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={styles.contactButton}
            ariaLabel={label}
            event={event}
            location={location}
          >
            <Icon aria-hidden="true" />
          </AnalyticsLink>
        ))}
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <span>
          © 2023–{new Date().getFullYear()} Все права защищены. ООО
          «Эксперт-Аудит»
        </span>
        <span>Информация сайта не заменяет юридическую консультацию.</span>
      </div>

      <div className={`container ${styles.cookieNotice}`}>
        Продолжая использовать наш сайт, вы даете согласие на обработку
        файлов cookies и других пользовательских данных, в соответствии с{" "}
        <Link href="/privacy">политикой обработки персональных данных</Link>.
      </div>
    </footer>
  );
}