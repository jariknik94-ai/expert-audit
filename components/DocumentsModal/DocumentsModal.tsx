"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./DocumentsModal.module.scss";

type DocumentItem = {
  title: string;
  files: string[];
};

interface DocumentsModalProps {
  document: DocumentItem | null;
  personName: string;
  onClose: () => void;
}

const ANIMATION_DURATION = 480;

export function DocumentsModal({
  document: selectedDocument,
  personName,
  onClose,
}: DocumentsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const animationTimeoutRef = useRef<number | null>(null);

  const totalFiles = selectedDocument?.files.length ?? 0;

  /*
   * Полностью очищаем таймер анимации при размонтировании
   * или закрытии модального окна.
   */
  const clearAnimationTimeout = useCallback(() => {
    if (animationTimeoutRef.current !== null) {
      window.clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
  }, []);

  /*
   * Смена страницы.
   *
   * Индекс меняется сразу, а CSS-анимация отвечает
   * за плавное появление нового изображения.
   *
   * Важно: здесь нет сброса currentIndex в 0.
   */
  const changePage = useCallback(
    (nextIndex: number, nextDirection: "next" | "previous") => {
      if (
        !selectedDocument ||
        totalFiles <= 1 ||
        isAnimating ||
        nextIndex === currentIndex
      ) {
        return;
      }

      clearAnimationTimeout();

      setDirection(nextDirection);
      setIsAnimating(true);
      setCurrentIndex(nextIndex);

      animationTimeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
        animationTimeoutRef.current = null;
      }, ANIMATION_DURATION);
    },
    [
      selectedDocument,
      totalFiles,
      isAnimating,
      currentIndex,
      clearAnimationTimeout,
    ],
  );

  const goPrevious = useCallback(() => {
    if (!selectedDocument || totalFiles <= 1) {
      return;
    }

    const nextIndex =
      currentIndex > 0
        ? currentIndex - 1
        : totalFiles - 1;

    changePage(nextIndex, "previous");
  }, [
    selectedDocument,
    totalFiles,
    currentIndex,
    changePage,
  ]);

  const goNext = useCallback(() => {
    if (!selectedDocument || totalFiles <= 1) {
      return;
    }

    const nextIndex =
      currentIndex < totalFiles - 1
        ? currentIndex + 1
        : 0;

    changePage(nextIndex, "next");
  }, [
    selectedDocument,
    totalFiles,
    currentIndex,
    changePage,
  ]);

  /*
   * Сбрасываем страницу только тогда, когда открывается
   * другой документ.
   *
   * Перелистывание внутри одного документа сюда
   * не попадает и поэтому currentIndex не сбрасывается.
   */
  useEffect(() => {
    if (!selectedDocument) {
      return;
    }

    clearAnimationTimeout();

    setCurrentIndex(0);
    setDirection("next");
    setIsAnimating(false);
  }, [selectedDocument, clearAnimationTimeout]);

  /*
   * Блокируем прокрутку страницы и подключаем
   * управление с клавиатуры.
   */
  useEffect(() => {
    if (!selectedDocument) {
      return;
    }

    const originalOverflow = window.document.body.style.overflow;

    window.document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedDocument,
    onClose,
    goPrevious,
    goNext,
  ]);

  /*
   * Очистка таймера при размонтировании компонента.
   */
  useEffect(() => {
    return () => {
      clearAnimationTimeout();
    };
  }, [clearAnimationTimeout]);

  if (!selectedDocument || totalFiles === 0) {
    return null;
  }

  const currentFile = selectedDocument.files[currentIndex];
  const showNavigation = totalFiles > 1;

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${selectedDocument.title} — ${personName}`}
      onMouseDown={handleBackdropClick}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>
            <p className="eyebrow">{personName}</p>

            <h2>{selectedDocument.title}</h2>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Закрыть документ"
          >
            ×
          </button>
        </div>

        <div className={styles.viewer}>
          {showNavigation && (
            <button
              type="button"
              className={`${styles.navigation} ${styles.previous}`}
              onClick={goPrevious}
              disabled={isAnimating}
              aria-label="Предыдущая страница"
            >
              ‹
            </button>
          )}

          <div className={styles.imageWrapper}>
            <div
              key={currentIndex}
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
                sizes="(max-width: 640px) 92vw, 1000px"
                className={styles.image}
                priority
              />
            </div>
          </div>

          {showNavigation && (
            <button
              type="button"
              className={`${styles.navigation} ${styles.next}`}
              onClick={goNext}
              disabled={isAnimating}
              aria-label="Следующая страница"
            >
              ›
            </button>
          )}
        </div>

        <div className={styles.footer}>
          {showNavigation ? (
            <>
              <span>
                {currentIndex + 1} / {totalFiles}
              </span>

              <div className={styles.footerActions}>
                <button
                  type="button"
                  onClick={goPrevious}
                  disabled={isAnimating}
                >
                  Предыдущая
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={isAnimating}
                >
                  Следующая
                </button>
              </div>
            </>
          ) : (
            <span>Документ</span>
          )}
        </div>
      </div>
    </div>
  );
}