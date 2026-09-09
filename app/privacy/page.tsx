import { politicsContent } from "@/lib/politics";
import styles from "./privacy.module.scss";

export const metadata = {
  title: "Политика обработки персональных данных",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</p>

          <h1>
            Политика общества с ограниченной ответственностью «Эксперт-Аудит»
            в отношении обработки персональных данных
          </h1>
        </div>
      </section>

      <article className="section">
        <div
          className={`container ${styles.legalDocument}`}
          dangerouslySetInnerHTML={{ __html: politicsContent }}
        />
      </article>
    </>
  );
}