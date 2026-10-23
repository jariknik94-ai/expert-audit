import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import type { Service } from "@/lib/data";

import styles from "./ServiceCard.module.scss";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.serviceCard}>
      <p className="eyebrow">{service.label}</p>
      <h3>{service.title}</h3>
      <p className={styles.description}>{service.short}</p>

      <Link
        href={`/services#${service.slug}`}
        className={styles.detailsPanel}
        aria-label={`Подробнее: ${service.title}`}
      >
        <span>Подробнее</span>
        <span className={styles.detailsArrow} aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </Link>
    </article>
  );
}