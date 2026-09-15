import { Disclosure } from "@/components/Disclosure/Disclosure";
import { disclosures } from "@/lib/disclosure";
import styles from "./disclosure.module.scss";

export const metadata = {
  title: "Раскрытие информации",
};

const reports = [
  {
    year: 2025,
    file: "/documents/Годовой отчет 2025.pdf",
  },
  {
    year: 2024,
    file: "/documents/Годовой отчет 2024.pdf",
  },
];

export default function DisclosurePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ПРОЗРАЧНОСТЬ</p>

          <h1>Раскрытие информации</h1>

          <p>
            Официальная информация о деятельности аудиторской организации,
            размещаемая в соответствии с применимыми требованиями
            законодательства.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.disclosureLayout}`}>
          <div>
            {disclosures.map((section) => (
              <Disclosure
                key={section.title}
                title={section.title}
                description={section.description}
                items={section.items}
              />
            ))}
          </div>

          <aside className={styles.reportCard}>
            <p className="eyebrow">ОТЧЕТНОСТЬ</p>

            <h2>Годовая отчетность</h2>

            <p>
              Годовая отчетность аудиторской организации за соответствующие
              отчетные периоды.
            </p>

            {reports.map(({ year, file }) => (
              <a
                className={styles.fileButton}
                key={year}
                href={encodeURI(file)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {year}
                <span>PDF →</span>
              </a>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}