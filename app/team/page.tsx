import type { Metadata } from "next";
import Image from "next/image";

import { DocumentsSection } from "@/components/DocumentsSection/DocumentsSection";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

import styles from "./team.module.scss";

const PAGE_TITLE = "Команда аудиторов и экспертов";
const SOCIAL_TITLE = `${PAGE_TITLE} | Эксперт-Аудит`;
const PAGE_DESCRIPTION =
  "Команда ООО «Эксперт-Аудит»: квалифицированные аудиторы, налоговые и финансовые эксперты с многолетним опытом работы в аудите, налогах, бухгалтерском учете и финансах.";
const SOCIAL_DESCRIPTION =
  "Квалифицированные аудиторы, налоговые и финансовые эксперты ООО «Эксперт-Аудит» с многолетним профессиональным опытом.";
const OG_IMAGE = "/images/og-image.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/team" },
  openGraph: {
    type: "website",
    url: "https://www.exspert-audit.ru/team",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [{
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      alt: "Команда аудиторов и экспертов «Эксперт-Аудит»",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const team = [
  {
    name: "Елена Александровна Бугасова",
    role: "Директор ООО «Эксперт-Аудит»",
    photo: "/images/team/bugasova3.jpg",
    documentPhoto: "/images/team/bugasovaFace.jpg",
    text: (
      <>
        <p>
          Аудитор, имеющий право осуществления аудиторской деятельности в
          области общего аудита с опытом работы более 15 лет.
        </p>
        <p>
          Советник налоговой службы III ранга, специалист в области
          налогообложения с опытом работы в Инспекции федеральной налоговой
          службы более 15 лет.
        </p>
        <p>
          Специалист в области внутреннего аудита с опытом работы во внутреннем
          аудите крупнейшего строительного холдинга региона более 6 лет.
        </p>
      </>
    ),
    documents: [
      {
        title: "Аттестат аудитора",
        files: [
          "/documents/team/bugasova/certificate/Auditor Qualification Certificate Bugasova 2010.jpg",
        ],
      },
      {
        title: "Повышение квалификации",
        files: [
          "/documents/team/bugasova/professional development/Bugasov Certificate 25.07.23.jpg",
          "/documents/team/bugasova/professional development/Bugasov Certificate 10.06.24.jpg",
          "/documents/team/bugasova/professional development/Bugasova-1.jpg",
          "/documents/team/bugasova/professional development/Bugasova Certificate of Advanced Training 2023.jpg",
          "/documents/team/bugasova/professional development/Bugasova Certificate of Advanced Training 2025.jpg",
        ],
      },
    ],
  },
  {
    name: "Наталья Валерьевна Дорожкина",
    role: "Ведущий аудитор",
    photo: "/images/team/dorozhkina3.jpg",
    documentPhoto: "/images/team/dorozhkinaFace.jpg",
    text: (
      <>
        <p>
          Ведущий аудитор, имеющий право осуществления аудиторской деятельности
          в области общего аудита с опытом работы более 25 лет.
        </p>
        <p>
          Ведущий преподаватель кафедры экономики и производственного
          менеджмента, преподаватель ценообразования и сметного нормирования
          Кузбасского государственного технического университета им. Т.Ф.
          Горбачева, с опытом работы более 30 лет.
        </p>
        <p>
          Автор книг, методик и научных статей в области экономики, финансов.
        </p>
        <p>
          Соавтор разработок совершенствования производственных процессов в
          области строительства, в том числе дорожного.
        </p>
      </>
    ),
    documents: [
      {
        title: "Аттестат аудитора",
        files: [
          "/documents/team/dorozhkina/certificate/Auditor Qualification Certificate Dorozhkina 1996.jpg",
        ],
      },
      {
        title: "Повышение квалификации",
        files: [
          "/documents/team/dorozhkina/professional development/Dorozhkin Certificate 10.06.24.jpg",
          "/documents/team/dorozhkina/professional development/Dorozhkin Certificate 25.07.23.jpg",
          "/documents/team/dorozhkina/professional development/Dorozhkina Certificate of Advanced Training 2023.jpg",
          "/documents/team/dorozhkina/professional development/Dorozhkina Certificate of Advanced Training 2025.jpg",
          "/documents/team/dorozhkina/professional development/Dorozhkina-2.jpg",
        ],
      },
    ],
  },
  {
    name: "Людмила Анатольевна Мищенко",
    role: "Ведущий аудитор",
    photo: "/images/team/mishchenko.jpg",
    documentPhoto: "/images/team/mishchenkoFace.jpg",
    text: (
      <>
        <p>
          Кандидат экономических наук. Аудитор, имеющий право осуществления
          аудиторской деятельности в области общего аудита с опытом работы
          более 25 лет.
        </p>
        <p>
          Дипломированный внутренний аудитор с опытом работы во внутреннем
          аудите крупнейшего угольного холдинга региона более 10 лет.
        </p>
        <p>
          В прошлом доцент кафедры экономики и организации строительства
          Кузбасского государственного технического университета им. Т.Ф.
          Горбачева, с опытом работы более 20 лет.
        </p>
        <p>
          Автор методик и научных статей в области экономики и финансов.
        </p>
      </>
    ),
    documents: [
      {
        title: "Аттестат аудитора",
        files: [
          "/documents/team/mishchenko/certificate/Mishchenko Certificate.jpg",
        ],
      },
      {
        title: "Повышение квалификации",
        files: [
          "/documents/team/mishchenko/professional development/Mishchenko Certificate 30.09.24.jpg",
          "/documents/team/mishchenko/professional development/MISHCHENKO LYUDMILA ANATOLYEVNA_2025_0010001.jpg",
        ],
      },
    ],
  },
  {
    name: "Валентина Ивановна Зайцева",
    role: "Ведущий аудитор",
    photo: "/images/team/zaitseva2.jpg",
    documentPhoto: "/images/team/zaitsevaFace2.jpg",
    text: (
      <>
        <p>
          Кандидат экономических наук. Аудитор, имеющий право осуществления
          аудиторской деятельности в области общего аудита с опытом работы
          более 20 лет.
        </p>
        <p>
          Квалифицированный налоговый консультант с опытом работы более 10 лет.
        </p>
        <p>
          Специалист в области бухгалтерского учета с опытом работы более 10
          лет.
        </p>
        <p>
          В прошлом доцент кафедры бухгалтерского учета и аудита Кузбасского
          государственного технического университета им. Т.Ф. Горбачева, с
          опытом работы более 7 лет.
        </p>
        <p>
          Автор методик и научных статей в области экономики и финансов.
        </p>
      </>
    ),
    documents: [
      {
        title: "Аттестат аудитора",
        files: [
          "/documents/team/zaitseva/certificate/Zaitseva Certificate.jpg",
        ],
      },
      {
        title: "Повышение квалификации",
        files: [
          "/documents/team/zaitseva/professional development/Zaytsev Certificate 10.06.24.jpg",
          "/documents/team/zaitseva/professional development/ZAYTSEVA VALENTINA IVANOVNA_2025_0010001.jpg",
        ],
      },
    ],
  },
];

type TeamMember = (typeof team)[number];

type PersonCardProps = {
  person: TeamMember;
  wide: boolean;
};

const documentTeam = team.map(
  ({ name, role, documentPhoto, documents }) => ({
    name,
    role,
    documentPhoto,
    documents,
  }),
);

function PersonCard({ person, wide }: PersonCardProps) {
  const className = wide
    ? `${styles.personCard} ${styles.personCardWide}`
    : styles.personCard;

  return (
    <article className={className}>
      <div className={styles.personAvatar}>
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
        />
      </div>
      <p className="eyebrow">{person.role}</p>
      <h2>{person.name}</h2>
      <div className={styles.personText}>{person.text}</div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">КОМАНДА</p>
          <h1>{PAGE_TITLE}</h1>
          <p>
            Квалифицированные специалисты с многолетним опытом в аудите,
            налогообложении, бухгалтерском учете, финансах и внутреннем аудите.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            kicker="ЭКСПЕРТЫ"
            title="Люди, которые отвечают за результат"
          />
          <div className={styles.teamGrid}>
            {team.map((person, index) => (
              <PersonCard
                key={person.name}
                person={person}
                wide={index === team.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle
            kicker="ПОДТВЕРЖДЕНИЕ КОМПЕТЕНЦИЙ"
            title="Документы, подтверждающие квалификацию специалистов"
            wide
          />
          <p className={styles.documentsIntro}>
            Квалификационные аттестаты и документы о повышении квалификации
            сотрудников ООО «Эксперт-Аудит».
          </p>
          <DocumentsSection team={documentTeam} />
        </div>
      </section>
    </>
  );
}
