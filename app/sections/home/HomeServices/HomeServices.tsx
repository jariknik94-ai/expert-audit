import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { services } from "@/lib/data";

import styles from "./HomeServices.module.scss";

export function HomeServices() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          kicker="УСЛУГИ"
          title="Решения для ключевых финансовых задач"
        />

        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}