import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  kicker: string;
  title: string;
  light?: boolean;
  wide?: boolean;
}

export function SectionTitle({
  kicker,
  title,
  light = false,
  wide = false,
}: SectionTitleProps) {
  return (
    <div
      className={`${styles.sectionTitle} ${
        light ? styles.light : ""
      } ${wide ? styles.wide : ""}`}
    >
      <p className="eyebrow">{kicker}</p>

      <h2>{title}</h2>
    </div>
  );
}
