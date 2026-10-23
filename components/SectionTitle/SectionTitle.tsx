import styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
  kicker: string;
  title: string;
  light?: boolean;
  wide?: boolean;
};

export function SectionTitle({
  kicker,
  title,
  light = false,
  wide = false,
}: SectionTitleProps) {
  const className = [
    styles.sectionTitle,
    light && styles.light,
    wide && styles.wide,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}