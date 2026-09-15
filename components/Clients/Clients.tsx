"use client";

import Image from "next/image";
import { useState } from "react";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { clients } from "@/lib/clients";

import styles from "./Clients.module.scss";

export function Clients() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedIndex((current) => (current === index ? null : index));
  };

  const handleCardMouseEnter = (index: number) => {
    setFlippedIndex(index);
  };

  const handleCardMouseLeave = () => {
    setFlippedIndex(null);
  };

  return (
    <section className={`section ${styles.clients}`}>
      <div className="container">
        <SectionTitle
          kicker="НАШИ КЛИЕНТЫ"
          title="Организации которые нам доверяют"
        />

        <div className={styles.clientGrid}>
          {clients.map((client, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                className={`${styles.clientItem} ${
                  isFlipped ? styles.flipped : ""
                }`}
                key={`${client.logo}-${index}`}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => handleCardClick(index)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <div className={styles.logoWrapper}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 42vw, (max-width: 980px) 28vw, 220px"
                        className={styles.logo}
                      />
                    </div>

                    {/* Для клиентов с длинным юридическим названием
                        показываем короткое название под логотипом */}
                    {client.name.includes("ОЭСК") && (
                      <span className={styles.clientName}>ОЭСК</span>
                    )}

                    {client.name.includes("Гарант") && (
                      <span className={styles.clientName}>Гарант</span>
                    )}

                    <span className={styles.cardHint}>
                      <span className={styles.desktopHint}>
                        Наведите, чтобы узнать подробнее
                      </span>

                      <span className={styles.mobileHint}>
                        Нажмите, чтобы узнать подробнее
                      </span>
                    </span>
                  </div>

                  <div className={styles.cardBack}>
                    <span className={styles.backLabel}>КЛИЕНТ</span>

                    <h3>{client.name}</h3>

                    <p>{client.description}</p>

                    {/* <span className={styles.backHint}>
                      Наведите в сторону, чтобы вернуться
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}