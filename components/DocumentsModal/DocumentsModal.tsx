"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import styles from "./DocumentsModal.module.scss";

type DocumentItem = {
  title: string;
  files: string[];
};

type DocumentsModalProps = {
  document: DocumentItem | null;
  personName: string;
  onClose: () => void;
};

type OpenDocumentProps = Omit<DocumentsModalProps, "document"> & {
  selectedDocument: DocumentItem;
};

const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function DocumentsModal({
  document: selectedDocument,
  personName,
  onClose,
}: DocumentsModalProps) {
  if (!selectedDocument || selectedDocument.files.length === 0) {
    return null;
  }

  return (
    <OpenDocument
      key={JSON.stringify([personName, selectedDocument])}
      selectedDocument={selectedDocument}
      personName={personName}
      onClose={onClose}
    />
  );
}

function OpenDocument({
  selectedDocument,
  personName,
  onClose,
}: OpenDocumentProps) {
  const [{ index, direction }, setPage] = useState({
    index: 0,
    direction: "next" as "next" | "previous",
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const { files, title } = selectedDocument;
  const currentFile = files[index];
  const isFirstPage = index === 0;
  const isLastPage = index === files.length - 1;

  const changePage = useCallback(
    (step: -1 | 1) => {
      setPage((page) => {
        const nextIndex = page.index + step;
        if (nextIndex < 0 || nextIndex >= files.length) {
          return page;
        }

        return {
          index: nextIndex,
          direction: step === 1 ? "next" : "previous",
        };
      });
    },
    [files.length],
  );

  const handlePrevious = () => changePage(-1);
  const handleNext = () => changePage(1);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frameId = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus();
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          return;
        case "ArrowLeft":
          event.preventDefault();
          changePage(-1);
          return;
        case "ArrowRight":
          event.preventDefault();
          changePage(1);
          return;
        case "Tab":
          break;
        default:
          return;
      }

      const modal = modalRef.current;
      if (!modal) return;

      const focusableElements = Array.from(
        modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter(
        (element) =>
          !element.matches(":disabled") &&
          element.tabIndex >= 0 &&
          element.getClientRects().length > 0 &&
          getComputedStyle(element).visibility !== "hidden",
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        modal.focus();
        return;
      }

      const activeElement = document.activeElement;
      const focusOutside = !focusableElements.some(
        (element) => element === activeElement,
      );
      if (focusOutside || (event.shiftKey && activeElement === firstElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [changePage, onClose]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const slideClassName = `${styles.imageSlide} ${
    direction === "next" ? styles.slideNext : styles.slidePrevious
  }`;

  return (
    <div className={styles.overlay} onMouseDown={handleOverlayClick}>
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        <div className={styles.header}>
          <div>
            <p id={descriptionId} className="eyebrow">{personName}</p>
            <h2 id={titleId}>{title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Закрыть окно просмотра документа"
          >
            ×
          </button>
        </div>

        <div className={styles.viewer}>
          <button
            type="button"
            className={`${styles.navigation} ${styles.previous}`}
            onClick={handlePrevious}
            disabled={isFirstPage}
            aria-label="Предыдущая страница документа"
          >
            ‹
          </button>
          <div className={styles.imageWrapper}>
            <div key={`${index}-${direction}`} className={slideClassName}>
              {currentFile && (
                <Image
                  src={currentFile}
                  alt={`${title}, страница ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 850px"
                  className={styles.image}
                  priority
                />
              )}
            </div>
          </div>
          <button
            type="button"
            className={`${styles.navigation} ${styles.next}`}
            onClick={handleNext}
            disabled={isLastPage}
            aria-label="Следующая страница документа"
          >
            ›
          </button>
        </div>

        <div className={styles.footer}>
          <span aria-live="polite" aria-atomic="true">
            Страница {index + 1} из {files.length}
          </span>
          <div className={styles.footerActions}>
            <button
              type="button"
              onClick={handlePrevious}
              disabled={isFirstPage}
              aria-label="Перейти к предыдущей странице"
            >
              Назад
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={isLastPage}
              aria-label="Перейти к следующей странице"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}