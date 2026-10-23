"use client";

import Image from "next/image";
import { useState, type KeyboardEvent, type PointerEvent } from "react";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { clients } from "@/lib/clients";

import styles from "./Clients.module.scss";

function getShortName(name: string): string | null {
  if (name.includes("ОЭСК")) return "ОЭСК";
  if (name.includes("Гарант")) return "Гарант";
  return null;
}

export function Clients() {
  const [flippedLogo, setFlippedLogo] = useState<string | null>(null);

  const toggleCard = (logo: string) => {
    setFlippedLogo((current) => (current === logo ? null : logo));
  };

  const handlePointerEnter = (
    logo: string,
    event: PointerEvent<HTMLElement>,
  ) => {
    if (event.pointerType === "mouse") setFlippedLogo(logo);
  };

  const handlePointerLeave = (
    logo: string,
    event: PointerEvent<HTMLElement>,
  ) => {
    if (event.pointerType === "mouse") {
      setFlippedLogo((current) => (current === logo ? null : current));
    }
  };

  const handleKeyDown = (logo: string, event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(logo);
    } else if (event.key === "Escape") {
      setFlippedLogo(null);
    }
  };

  return (
    <section className={`section ${styles.clients}`}>
      <div className="container">
        <SectionTitle
          kicker="НАШИ КЛИЕНТЫ"
          title="Организации, которые нам доверяют"
        />

        <div className={styles.clientGrid}>
          {clients.map((client) => {
            const isFlipped = flippedLogo === client.logo;
            const shortName = getShortName(client.name);
            const className = isFlipped
              ? `${styles.clientItem} ${styles.flipped}`
              : styles.clientItem;

            return (
              <article
                key={client.logo}
                className={className}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={client.name}
                aria-description={isFlipped ? client.description : undefined}
                onPointerEnter={(event) => handlePointerEnter(client.logo, event)}
                onPointerLeave={(event) => handlePointerLeave(client.logo, event)}
                onClick={() => toggleCard(client.logo)}
                onKeyDown={(event) => handleKeyDown(client.logo, event)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardFront} aria-hidden={isFlipped}>
                    <div className={styles.logoWrapper}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 42vw, (max-width: 980px) 45vw, 210px"
                        className={styles.logo}
                      />
                    </div>
                    {shortName && (
                      <span className={styles.clientName}>{shortName}</span>
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

                  <div className={styles.cardBack} aria-hidden={!isFlipped}>
                    <span className={styles.backLabel}>КЛИЕНТ</span>
                    <h3>{client.name}</h3>
                    <p>{client.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}