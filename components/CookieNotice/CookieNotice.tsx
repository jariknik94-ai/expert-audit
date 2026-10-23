"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./CookieNotice.module.scss";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      setIsVisible(!localStorage.getItem(COOKIE_CONSENT_KEY));
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch {
      // Если хранилище недоступно, закрываем баннер до перезагрузки страницы.
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={styles.cookieNotice}
      role="region"
      aria-label="Уведомление о cookies"
    >
      <div className={styles.content}>
        <p>
          ООО «Эксперт-Аудит» обрабатывает cookies с целью удобного
          использования вебсайта. Вы можете запретить обработку cookies в
          настройках браузера. Пожалуйста, ознакомьтесь с{" "}
          <Link href="/privacy">
            политикой обработки персональных данных
          </Link>.
        </p>

        <button type="button" onClick={handleAccept}>
          ОК
        </button>
      </div>
    </div>
  );
}