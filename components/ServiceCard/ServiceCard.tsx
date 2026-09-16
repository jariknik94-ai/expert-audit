import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import type { Service } from "@/lib/data";

import styles from "./ServiceCard.module.scss";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article className={styles.serviceCard}>
      {/* <span className={styles.serviceNumber}>
        {String(index).padStart(2, "0")}
      </span> */}

      <p className="eyebrow">{service.label}</p>

      <h3>{service.title}</h3>

      <p className={styles.description}>{service.short}</p>

      <Link
        href={`/services#${service.slug}`}
        className={styles.detailsPanel}
      >
        <span className={styles.detailsText}>Подробнее</span>

        <span className={styles.detailsArrow} aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </Link>
    </article>
  );
}
