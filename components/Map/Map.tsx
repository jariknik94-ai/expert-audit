type MapProps = {
  className: string;
};

const mapSrc =
  "https://yandex.ru/map-widget/v1/?ll=86.150745%2C55.355733&z=17&pt=86.150745%2C55.355733%2Cpm2rdm";

export function Map({ className }: MapProps) {
  return (
    <div className={className}>
      <iframe
        src={mapSrc}
        title="Офис «Эксперт-Аудит» на карте"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
