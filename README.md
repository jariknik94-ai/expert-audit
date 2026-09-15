# Эксперт-Аудит — корпоративный сайт

Корпоративный сайт ООО «Эксперт-Аудит», разработанный на **Next.js, React, TypeScript и SCSS Modules**.

Сайт содержит информацию о компании, услугах, сотрудниках, клиентах, раскрытии информации и контактных данных.

## Стек

- Next.js 15
- React
- TypeScript
- SCSS Modules
- Next.js App Router
- `next/image`
- `next/font/local`
- React Icons
- Manrope

## Возможности

- адаптивная верстка для desktop и mobile;
- компонентная архитектура;
- отдельные страницы услуг, сотрудников, клиентов и раскрытия информации;
- интерактивные карточки клиентов с 3D-анимацией переворота;
- просмотр документов и годовой отчетности;
- локальное подключение шрифта Manrope;
- Cookie Notice;
- SEO-метаданные;
- адаптивная навигация и Footer.

## Страницы

- `/` — Главная
- `/services` — Услуги
- `/team` — Сотрудники
- `/disclosure` — Раскрытие информации
- `/contacts` — Контакты
- `/privacy` — Политика обработки персональных данных

## Запуск

Установить зависимости:

    npm install

Запустить в режиме разработки:

    npm run dev

Сайт будет доступен по адресу:

    http://localhost:3000

Production-сборка:

    npm run build
    npm start

## Структура

    app/
    ├── contacts/
    ├── disclosure/
    ├── privacy/
    ├── services/
    ├── team/
    ├── fonts/
    ├── globals.scss
    ├── layout.tsx
    └── page.tsx

    components/
    ├── Clients/
    ├── CookieNotice/
    ├── Disclosure/
    ├── DocumentsModal/
    ├── DocumentsSection/
    ├── Footer/
    ├── Header/
    ├── Navbar/
    ├── SectionTitle/
    └── ServiceCard/

    lib/
    ├── clients.ts
    ├── data.ts
    ├── disclosure.ts
    └── politics.ts

    public/
    ├── documents/
    ├── images/
    └── favicon.png

## Документы и изображения

Документы хранятся в:

    public/documents/

Изображения и логотипы:

    public/images/

## Перед публикацией

Необходимо проверить актуальность:

- юридической и контактной информации;
- сведений о сотрудниках и клиентах;
- документов и годовой отчетности;
- политики обработки персональных данных;
- внутренних и внешних ссылок;
- отображения сайта на мобильных устройствах.