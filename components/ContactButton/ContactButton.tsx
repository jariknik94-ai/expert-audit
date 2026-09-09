import styles from "./ContactButton.module.scss";

export function ContactButton() {
  return <a className={styles.floatingContact} href="mailto:exspert-audit@mail.ru" aria-label="Написать в Эксперт-Аудит">↗</a>;
}