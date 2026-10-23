import { Navbar } from "../Navbar/Navbar";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <Navbar />
    </header>
  );
}