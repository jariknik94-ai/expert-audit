"use client";

import { useEffect, useRef, useState } from "react";

type MapProps = {
  className: string;
};

const mapSrc =
  "https://yandex.ru/map-widget/v1/?ll=86.150745%2C55.355733&z=17&pt=86.150745%2C55.355733%2Cpm2rdm";

export function Map({ className }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = mapRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px 0px",
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={mapRef} className={className}>
      {shouldLoad && (
        <iframe
          src={mapSrc}
          title="Офис «Эксперт-Аудит» на карте"
          loading="lazy"
          allowFullScreen
        />
      )}
    </div>
  );
}