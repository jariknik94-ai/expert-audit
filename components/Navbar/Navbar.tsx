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
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (href: string) => {
    if (href === "/contacts") {
      trackContactClick("navbar");
    }

    closeMenu();
  };

  const menuButtonClassName = menuOpen
    ? `${styles.menuButton} ${styles.menuButtonActive}`
    : styles.menuButton;

  const navContentClassName = menuOpen
    ? `${styles.navContent} ${styles.navContentOpen}`
    : styles.navContent;

  return (
    <nav className={styles.navbar} aria-label="Основная навигация">
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
            <small>АУДИТ · КОНСАЛТИНГ · ЭКСПЕРТИЗА</small>
          </span>
        </Link>

        <button
          type="button"
          className={menuButtonClassName}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div id="main-navigation" className={navContentClassName}>
          <div className={styles.navLinks}>
            {navItems.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname?.startsWith(`${href}/`) === true;

              return (
                <Link
                  key={href}
                  href={href}
                  className={isActive ? styles.active : ""}
                  onClick={() => handleNavClick(href)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}