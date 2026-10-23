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

type DocumentsSectionProps = {
  team: Person[];
};

type SelectedDocument = {
  document: DocumentItem;
  personName: string;
};

export function DocumentsSection({ team }: DocumentsSectionProps) {
  const [selectedDocument, setSelectedDocument] =
    useState<SelectedDocument | null>(null);

  const closeModal = () => setSelectedDocument(null);

  return (
    <>
      <div className={styles.documentsGrid}>
        {team.map(({ name, role, documentPhoto, documents }) => (
          <article key={name} className={styles.documentsCard}>
            <div className={styles.documentsHeader}>
              <div className={styles.documentsPerson}>
                <div className={styles.documentsAvatar}>
                  <Image
                    src={documentPhoto}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 56px, 64px"
                  />
                </div>

                <div className={styles.documentsPersonInfo}>
                  <p className="eyebrow">{role}</p>
                  <h3>{name}</h3>
                </div>
              </div>
            </div>

            <div className={styles.documentList}>
              {documents.map((document) => (
                <div key={document.title} className={styles.documentItem}>
                  <div className={styles.documentInfo}>
                    <strong>{document.title}</strong>
                    {document.files.length > 0 ? (
                      <button
                        type="button"
                        aria-label={`Открыть документ «${document.title}» — ${name}`}
                        onClick={() =>
                          setSelectedDocument({ document, personName: name })
                        }
                      >
                        Открыть документ →
                      </button>
                    ) : (
                      <small>Документ будет добавлен</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <DocumentsModal
        document={selectedDocument?.document ?? null}
        personName={selectedDocument?.personName ?? ""}
        onClose={closeModal}
      />
    </>
  );
}