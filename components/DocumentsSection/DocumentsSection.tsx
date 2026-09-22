"use client";

import Image from "next/image";
import { useState } from "react";

import { DocumentsModal } from "@/components/DocumentsModal/DocumentsModal";

import styles from "./DocumentsSection.module.scss";

type DocumentItem = {
  title: string;
  files: string[];
};

type Person = {
  name: string;
  role: string;
  documentPhoto: string;
  documents: DocumentItem[];
};

interface DocumentsSectionProps {
  team: Person[];
}

export function DocumentsSection({
  team,
}: DocumentsSectionProps) {
  const [selectedDocument, setSelectedDocument] = useState<{
    document: DocumentItem;
    personName: string;
  } | null>(null);

  return (
    <>
      <div className={styles.documentsGrid}>
        {team.map((person) => (
          <article
            className={styles.documentsCard}
            key={person.name}
          >
            <div className={styles.documentsHeader}>
              <div className={styles.documentsPerson}>
                <div className={styles.documentsAvatar}>
                  <Image
                    src={person.documentPhoto}
                    alt={person.name}
                    fill
                    sizes="64px"
                  />
                </div>

                <div className={styles.documentsPersonInfo}>
                  <p className="eyebrow">{person.role}</p>

                  <h3>{person.name}</h3>
                </div>
              </div>
            </div>

            <div className={styles.documentList}>
              {person.documents.map((document) => {
                const hasFiles = document.files.length > 0;

                return (
                  <div
                    className={styles.documentItem}
                    key={document.title}
                  >
                    <div className={styles.documentInfo}>
                      <strong>{document.title}</strong>

                      {hasFiles ? (
                        <button
                          type="button"
                          aria-label={`Открыть документ «${document.title}» — ${person.name}`}
                          onClick={() =>
                            setSelectedDocument({
                              document,
                              personName: person.name,
                            })
                          }
                        >
                          Открыть документ →
                        </button>
                      ) : (
                        <small>Документ будет добавлен</small>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      <DocumentsModal
        document={selectedDocument?.document ?? null}
        personName={selectedDocument?.personName ?? ""}
        onClose={() => setSelectedDocument(null)}
      />
    </>
  );
}
