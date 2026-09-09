import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import styles from "./team.module.scss";

export const metadata = {
  title: "Сотрудники",
};

const team = [
  {
    name: "Елена Александровна Бугасова",
    role: "Директор ООО «Эксперт-Аудит»",
    photo: "/images/team/bugasova3.jpg",
    documentPhoto: "/images/team/bugasova1.jpg",
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
        title: "Диплом об образовании",
        file: null,
      },
      {
        title: "Аттестат аудитора",
        file: null,
      },
      {
        title: "Повышение квалификации",
        file: null,
      },
    ],
  },
  {
    name: "Наталья Валерьевна Дорожкина",
    role: "Ведущий аудитор",
    photo: "/images/team/dorozhkina3.jpg",
    documentPhoto: "/images/team/dorozhkina1.jpg",
    text: (
      <>
        <p>
          Ведущий аудитор, имеющий право осуществления аудиторской деятельности
          в области общего аудита с опытом работы более 25 лет.
        </p>

        <p>
          Ведущий преподаватель кафедры экономики и производственного
          менеджмента, кафедры конкуренции и антимонопольного регулирования,
          преподаватель ценообразования и сметного нормирования Кузбасского
          государственного технического университета им. М.Ф. Горбачева, с
          опытом работы более 30 лет.
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
        title: "Диплом об образовании",
        file: null,
      },
      {
        title: "Аттестат аудитора",
        file: null,
      },
      {
        title: "Повышение квалификации",
        file: null,
      },
    ],
  },
  {
    name: "Валентина Ивановна Зайцева",
    role: "Ведущий аудитор",
    photo: "/images/team/zaitseva.jpg",
    documentPhoto: "/images/team/zaitseva2.jpg",
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
          государственного технического университета им. М.Ф. Горбачева, с
          опытом работы более 7 лет.
        </p>

        <p>
          Автор методик и научных статей в области экономики и финансов.
        </p>
      </>
    ),
    documents: [
      {
        title: "Диплом об образовании",
        file: null,
      },
      {
        title: "Аттестат аудитора",
        file: null,
      },
      {
        title: "Повышение квалификации",
        file: null,
      },
    ],
  },
  {
    name: "Людмила Анатольевна Мищенко",
    role: "Ведущий аудитор",
    photo: "/images/team/mishchenko.jpg",
    documentPhoto: "/images/team/mishchenko2.jpg",
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
          Кузбасского государственного технического университета им. М.Ф.
          Горбачева, с опытом работы более 20 лет.
        </p>

        <p>
          Автор методик и научных статей в области экономики и финансов.
        </p>
      </>
    ),
    documents: [
      {
        title: "Диплом об образовании",
        file: null,
      },
      {
        title: "Аттестат аудитора",
        file: null,
      },
      {
        title: "Повышение квалификации",
        file: null,
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">КОМАНДА</p>

          <h1>О сотрудниках</h1>

          <p>
            Профессиональная квалификация, опыт и документы специалистов —
            в одном месте.
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
            {team.map((person) => (
              <article className={styles.personCard} key={person.name}>
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

                <div className={styles.personText}>
                  {person.text}
                </div>
              </article>
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
            Образование, квалификационные аттестаты и документы о повышении
            квалификации сотрудников ООО «Эксперт-Аудит».
          </p>

          <div className={styles.documentsGrid}>
            {team.map((person) => (
              <article
                className={styles.documentsCard}
                key={person.name}
              >
                <div className={styles.documentsHeader}>
                  <div className={styles.documentsPerson}>
                    <div className={styles.documentsAvatar}>
                      <Image
                        src={person.documentPhoto}
                        alt={person.name}
                        fill
                        sizes="64px"
                      />
                    </div>

                    <div className={styles.documentsPersonInfo}>
                      <p className="eyebrow">{person.role}</p>

                      <h2>{person.name}</h2>
                    </div>
                  </div>
                </div>

                <div className={styles.documentList}>
                  {person.documents.map((document) => (
                    <div
                      className={styles.documentItem}
                      key={document.title}
                    >
                      <div className={styles.documentInfo}>
                        <strong>{document.title}</strong>

                        {document.file ? (
                          <a
                            href={document.file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Открыть документ →
                          </a>
                        ) : (
                          <small>Документ будет добавлен</small>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
