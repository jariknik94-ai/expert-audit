"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

export function DocumentsModal({
  document: selectedDocument,
  personName,
  onClose,
}: DocumentsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] =
    useState<"next" | "previous">("next");

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const isOpen = selectedDocument !== null;
  const files = selectedDocument?.files ?? [];

  const currentFile = files[currentIndex] ?? null;

  useEffect(() => {
    if (!selectedDocument) {
      setCurrentIndex(0);
      setDirection("next");
      return;
    }

    setCurrentIndex(0);
    setDirection("next");
  }, [selectedDocument]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current =
      document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;

      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        if (currentIndex > 0) {
          setDirection("previous");
          setCurrentIndex((index) => index - 1);
        }

        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        if (currentIndex < files.length - 1) {
          setDirection("next");
          setCurrentIndex((index) => index + 1);
        }

        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const modal = modalRef.current;

      if (!modal) {
        return;
      }

      const focusableElements =
        modal.querySelectorAll<HTMLElement>(
          [
            "button:not([disabled])",
            "a[href]",
            "input:not([disabled])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            "[tabindex]:not([tabindex='-1'])",
          ].join(","),
        );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, files.length, onClose]);

  if (!selectedDocument || !currentFile) {
    return null;
  }

  const handlePrevious = () => {
    if (currentIndex === 0) {
      return;
    }

    setDirection("previous");
    setCurrentIndex((index) => index - 1);
  };

  const handleNext = () => {
    if (currentIndex === files.length - 1) {
      return;
    }

    setDirection("next");
    setCurrentIndex((index) => index + 1);
  };

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="documents-modal-title"
        aria-describedby="documents-modal-description"
      >
        <div className={styles.header}>
          <div>
            <p
              id="documents-modal-description"
              className="eyebrow"
            >
              {personName}
            </p>

            <h2 id="documents-modal-title">
              {selectedDocument.title}
            </h2>
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
            disabled={currentIndex === 0}
            aria-label="Предыдущая страница документа"
          >
            ‹
          </button>

          <div className={styles.imageWrapper}>
            <div
              key={`${currentIndex}-${direction}`}
              className={`${styles.imageSlide} ${
                direction === "next"
                  ? styles.slideNext
                  : styles.slidePrevious
              }`}
            >
              <Image
                src={currentFile}
                alt={`${selectedDocument.title}, страница ${
                  currentIndex + 1
                }`}
                fill
                sizes="(max-width: 768px) 80vw, 850px"
                className={styles.image}
                priority
              />
            </div>
          </div>

          <button
            type="button"
            className={`${styles.navigation} ${styles.next}`}
            onClick={handleNext}
            disabled={currentIndex === files.length - 1}
            aria-label="Следующая страница документа"
          >
            ›
          </button>
        </div>

        <div className={styles.footer}>
          <span>
            Страница {currentIndex + 1} из {files.length}
          </span>

          <div className={styles.footerActions}>
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Перейти к предыдущей странице"
            >
              Назад
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === files.length - 1}
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