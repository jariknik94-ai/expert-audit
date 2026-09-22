# 🏢 Эксперт-Аудит — корпоративный сайт

Корпоративный сайт ООО «Эксперт-Аудит» — аудиторской компании, оказывающей услуги в области аудита, налогового и бухгалтерского консалтинга, кадрового аудита и финансово-экономической экспертизы.

Проект разработан на **Next.js, React, TypeScript и SCSS Modules**.

**Production:** https://www.exspert-audit.ru/

---

## 🛠️ Стек

| Технология             | Назначение              |
| ---------------------- | ----------------------- |
| **Next.js 15.5.24**    | Фреймворк приложения    |
| **React 19.1.1**       | Компонентный UI         |
| **TypeScript 5.9**     | Типизация               |
| **SCSS Modules**       | Стилизация компонентов  |
| **Next.js App Router** | Маршрутизация           |
| **next/image**         | Оптимизация изображений |
| **next/font/local**    | Локальные шрифты        |
| **React Icons**        | Иконки                  |
| **Manrope**            | Основной шрифт          |
| **Google Analytics 4** | Веб-аналитика           |
| **Яндекс.Метрика**     | Веб-аналитика           |

---

## ✨ Возможности

* 📱 адаптивная верстка;
* 🧩 компонентная архитектура;
* 💼 страницы услуг;
* 👥 презентация сотрудников и команды;
* 🏢 интерактивные карточки клиентов;
* 📄 документы и годовая отчетность;
* 📞 контактные каналы;
* 🍪 Cookie Notice;
* 🔎 SEO и структурированные данные;
* 📊 Google Analytics 4 и Яндекс.Метрика;
* 🎯 отслеживание ключевых пользовательских действий;
* 🤖 `robots.txt` и `sitemap.xml`;
* ❌ кастомная страница 404;
* 🔀 301-редиректы;
* 📱 favicon и иконки для разных платформ.

---

## 📄 Страницы

| Маршрут       | Назначение                             |
| ------------- | -------------------------------------- |
| `/`           | Главная                                |
| `/services`   | Услуги                                 |
| `/team`       | Сотрудники                             |
| `/disclosure` | Раскрытие информации                   |
| `/contacts`   | Контакты                               |
| `/privacy`    | Политика обработки персональных данных |

Служебные маршруты:

```text
/robots.txt
/sitemap.xml
404
```

---

## 🏠 Главная страница

Главная страница состоит из независимых секций:

```text
Hero
ClientTasks
Trust
About
HomeServices
WhyUs
Process
Clients
FinalCta
```

Секции находятся в:

```text
app/sections/home/
```

---

## 🔎 SEO и аналитика

Используются:

* Next.js Metadata API;
* уникальные `title` и `description`;
* canonical URL;
* Open Graph;
* Twitter Card;
* Schema.org JSON-LD;
* `robots.txt`;
* `sitemap.xml`.

SEO-файлы:

```text
app/layout.tsx
app/robots.ts
app/sitemap.ts
```

Подключены:

* Google Analytics 4;
* Яндекс.Метрика.

Аналитическая логика:

```text
components/AnalyticsLink/
lib/analytics.ts
```

Основные отслеживаемые действия:

```text
click_phone
click_email
click_telegram
click_whatsapp
click_contact
download_annual_report
generate_lead
```

---

## 📁 Структура проекта

```text
app/
├── contacts/
├── disclosure/
├── privacy/
├── services/
├── team/
├── sections/
│   └── home/
├── fonts/
├── globals.scss
├── layout.tsx
├── manifest.ts
├── not-found.tsx
├── page.tsx
├── robots.ts
└── sitemap.ts

components/
├── AnalyticsLink/
├── Clients/
├── CookieNotice/
├── Disclosure/
├── DocumentsModal/
├── DocumentsSection/
├── Footer/
├── GoogleAnalytics/
├── Header/
├── Navbar/
├── SectionTitle/
├── ServiceCard/
└── YandexMetrica/

lib/
├── analytics.ts
├── clients.ts
├── data.ts
├── disclosure.ts
└── politics.ts

public/
├── documents/
├── icons/
└── images/
```

---

## 🖼️ Иконки

Иконки проекта находятся в:

```text
public/
├── favicon.ico
└── icons/
    ├── favicon.svg
    ├── favicon-32.png
    ├── apple-touch-icon.png
    ├── icon-192.png
    └── icon-512.png
```

`app/manifest.ts` используется для Web App Manifest и platform icons.

---

## 🚀 Запуск

Установка зависимостей:

```bash
npm install
```

Разработка:

```bash
npm run dev
```

Production-сборка:

```bash
npm run build
```

Запуск production:

```bash
npm start
```

Локальный адрес:

```text
http://localhost:3000
```

---

## 🖥️ Production

Проект предназначен для размещения на **VPS REG.RU**.

Архитектура production:

```text
Internet
   ↓
Nginx
   ├── HTTPS
   ├── 301 redirects
   └── reverse proxy
          ↓
      Next.js
          ↓
      npm start
```

Nginx используется как reverse proxy и отвечает за HTTPS и перенаправления.


## 📌 Проект

**Эксперт-Аудит** — корпоративный сайт аудиторской компании с адаптивным интерфейсом, компонентной архитектурой, интерактивными элементами, SEO-инфраструктурой и веб-аналитикой.

**Стек:** Next.js · React · TypeScript · SCSS Modules · App Router
