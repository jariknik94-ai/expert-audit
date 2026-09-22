import styles from "./Disclosure.module.scss";

interface DisclosureProps {
  title: string;
  description: string[];
  items: string[];
}

export function Disclosure({
  title,
  description,
  items,
}: DisclosureProps) {
  return (
    <details className={styles.disclosure}>
      <summary>
        <strong>{title}</strong>
        <i aria-hidden="true">+</i>
      </summary>

      <div className={styles.content}>
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}