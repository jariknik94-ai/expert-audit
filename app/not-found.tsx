import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notFound">
      <div className="container notFound__inner">
        <p className="notFound__code">404</p>

        <h1>Страница не найдена</h1>

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