import Image from "next/image";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { clients } from "@/lib/clients";

import styles from "./Clients.module.scss";

export function Clients() {
  return (
    <section className={`section ${styles.clients}`}>
      <div className="container">
        <SectionTitle
          kicker="НАШИ КЛИЕНТЫ"
          title="Работаем с организациями разных отраслей"
        />

        {/* <p className={styles.sectionSubtitle}>
          Логотипы и наименования клиентов размещаются только при наличии
          соответствующего разрешения.
        </p> */}

        <div className={styles.clientGrid}>
          {clients.map((client, index) => (
            <div
              className={styles.clientItem}
              key={`${client.logo}-${index}`}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 42vw, (max-width: 980px) 28vw, 220px"
                  className={styles.logo}
                />
              </div>

              {client.name === "ОЭСК" && (
                <span className={styles.clientName}>
                  ОЭСК
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}