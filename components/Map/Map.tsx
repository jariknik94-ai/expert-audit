type MapProps = {
  className: string;
};

const mapSrc =
  "https://yandex.ru/map-widget/v1/?um=constructor%3A24754f51e89ef0102607dca90b6a91a84cbf0e85b63ea8262c21ec86ce3f502d&amp;source=constructor";

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
