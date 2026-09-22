import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Эксперт-Аудит",
    short_name: "Эксперт-Аудит",

    description:
      "Аудиторская компания «Эксперт-Аудит». Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для бизнеса.",

    start_url: "/",
    display: "standalone",

    background_color: "#071426",
    theme_color: "#071426",

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