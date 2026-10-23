import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "Страница не найдена";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: "Запрашиваемая страница не найдена.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="notFound">
      <div className="container notFound__inner">
        <p className="notFound__code">404</p>
        <h1>{PAGE_TITLE}</h1>
        <p className="notFound__text">
          Возможно, страница была перемещена, удалена или вы перешли по
          устаревшей ссылке.
        </p>

        <Link href="/" className="button button-primary">
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}