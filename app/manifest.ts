import type { MetadataRoute } from "next";

const APP_NAME = "Эксперт-Аудит";
const APP_COLOR = "#071426";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description:
      "Аудиторская компания «Эксперт-Аудит». Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для бизнеса.",
    start_url: "/",
    display: "standalone",
    background_color: APP_COLOR,
    theme_color: APP_COLOR,
    lang: "ru",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}