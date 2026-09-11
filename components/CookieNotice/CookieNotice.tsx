"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./CookieNotice.module.scss";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={styles.cookieNotice}
      role="dialog"
      aria-label="Уведомление о cookies"
    >
      <div className={styles.content}>
        <p>
          ООО «Эксперт-Аудит» обрабатывает cookies с целью удобного
          использования вебсайта. Вы можете запретить обработку cookies в
          настройках браузера. Пожалуйста, ознакомьтесь с{" "}
          <Link href="/privacy">
            политикой обработки персональных данных
          </Link>
          .
        </p>

        <button type="button" onClick={handleAccept}>
          ОК
        </button>
      </div>
    </div>
  );
}