import { AnalyticsLink } from "@/components/AnalyticsLink/AnalyticsLink";

import styles from "./FinalCta.module.scss";

export function FinalCta() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaInner}`}>
        <div>
          <p className="eyebrow">ГОТОВЫ ОБСУДИТЬ ЗАДАЧУ?</p>

          <h2>Расскажите, что происходит в вашем бизнесе.</h2>

          <p>
            Мы поможем определить подходящий формат работы и ответим
            на вопросы.
          </p>

          <div className={styles.ctaContacts}>
            <AnalyticsLink
              href="/contacts"
              className="button button-light"
              event="contact"
              location="home_cta"
            >
              Связаться
            </AnalyticsLink>
          </div>
        </div>
      </div>
    </section>
  );
}
