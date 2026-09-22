"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { trackContactClick } from "@/lib/analytics";

import styles from "./Navbar.module.scss";

const navItems = [
  { href: "/services", label: "Услуги" },
  { href: "/team", label: "Сотрудники" },
  { href: "/disclosure", label: "Раскрытие информации" },
  { href: "/contacts", label: "Контакты" },
];

export function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkTheme(false);
      document.documentElement.classList.add("light");
    } else {
      setDarkTheme(true);
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkTheme;

    setDarkTheme(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href === "/contacts") {
      trackContactClick("navbar");
    }

    closeMenu();
  };

  return (
    <nav
      className={styles.navbar}
      aria-label="Основная навигация"
    >
      <div className={`container ${styles.navbarInner}`}>
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenu}
          aria-label="Эксперт-Аудит — главная страница"
        >
          <span className={styles.brandMark}>
            <Image
              src="/icons/favicon.svg"
              alt="Эксперт-Аудит"
              width={72}
              height={44}
              priority
            />
          </span>

          <span className={styles.brandText}>
            <span>
              <strong>Эксперт</strong>-Аудит
            </span>

            <small>
              АУДИТ · КОНСАЛТИНГ · ЭКСПЕРТИЗА
            </small>
          </span>
        </Link>

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonActive : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="main-navigation"
          className={`${styles.navContent} ${
            menuOpen ? styles.navContentOpen : ""
          }`}
        >
          <div className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? styles.active : ""}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}