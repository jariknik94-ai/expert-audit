import { Clients } from "@/components/Clients/Clients";

import { About } from "./sections/home/About/About";
import { ClientTasks } from "./sections/home/ClientTasks/ClientTasks";
import { FinalCta } from "./sections/home/FinalCta/FinalCta";
import { Hero } from "./sections/home/Hero/Hero";
import { HomeServices } from "./sections/home/HomeServices/HomeServices";
import { Process } from "./sections/home/Process/Process";
import { Trust } from "./sections/home/Trust/Trust";
import { WhyUs } from "./sections/home/WhyUs/WhyUs";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.exspert-audit.ru/#organization",

    name: "Эксперт-Аудит",
    legalName: "ООО «Эксперт-Аудит»",

    url: "https://www.exspert-audit.ru/",

    logo: "https://www.exspert-audit.ru/favicon.svg",
    image: "https://www.exspert-audit.ru/images/og-image.jpg",

    description:
      "Аудиторская компания «Эксперт-Аудит». Аудит, налоговый и бухгалтерский консалтинг, кадровый аудит и финансово-экономическая экспертиза для бизнеса.",

    serviceType: [
      "Аудит",
      "Налоговый консалтинг",
      "Бухгалтерский консалтинг",
      "Кадровый аудит",
      "Финансово-экономическая экспертиза",
    ],

    areaServed: {
      "@type": "Country",
      name: "Россия",
    },

    telephone: "+7 923 617 40 55",
    email: "exspert-audit@mail.ru",

    address: {
      "@type": "PostalAddress",
      streetAddress: "проспект Московский, д. 18 к. 3, кв. 108",
      addressLocality: "Кемерово",
      addressRegion: "Кемеровская область — Кузбасс",
      postalCode: "650023",
      addressCountry: "RU",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Hero />

      <ClientTasks />

      <Trust />

      <About />

      <HomeServices />

      <WhyUs />

      <Process />

      <Clients />

      <FinalCta />
    </>
  );
}