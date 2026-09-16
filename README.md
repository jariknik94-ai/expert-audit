# 🏢 Эксперт-Аудит — корпоративный сайт

Корпоративный сайт ООО «Эксперт-Аудит» — аудиторской компании из Кемерово.

Проект разработан на **Next.js, React, TypeScript и SCSS Modules**.

**Production:** https://www.exspert-audit.ru/

---

## 🛠️ Стек

| Технология             | Назначение              |
| ---------------------- | ----------------------- |
| **Next.js 15.5**       | Фреймворк приложения    |
| **React 19**           | Компонентный UI         |
| **TypeScript 5.9**     | Типизация               |
| **SCSS Modules**       | Стилизация              |
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
* 🏢 интерактивные карточки клиентов с 3D-переворотом;
* 📄 документы и годовая отчетность;
* 📞 контактные каналы;
* 🍪 Cookie Notice;
* 🔎 SEO и структурированные данные;
* 📊 Google Analytics 4 и Яндекс.Метрика;
* 🎯 отслеживание ключевых пользовательских действий;
* 🤖 `robots.txt` и `sitemap.xml`;
* ❌ кастомная страница 404;
* 🔀 подготовленные 301-редиректы.

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

Главная собрана из независимых секций:

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

Компоненты секций находятся в:

```text
app/sections/home/
```

Структура выстроена вокруг пользовательского сценария: знакомство с компанией → задача клиента → экспертиза → услуги → преимущества → процесс работы → клиенты → обращение.

---

## 🔎 SEO и аналитика

### SEO

Используются:

* Next.js Metadata API;
* уникальные `title` и `description`;
* `metadataBase`;
* canonical URL;
* Open Graph;
* Twitter Card;
* favicon;
* robots metadata;
* Schema.org JSON-LD типа `ProfessionalService`.

SEO-файлы:

```text
app/robots.ts
app/sitemap.ts
```

### Аналитика

Подключены:

* **Google Analytics 4**;
* **Яндекс.Метрика**.

Отслеживаются основные действия:

```text
click_phone
click_email
click_telegram
click_whatsapp
click_contact
download_annual_report
generate_lead
```

Аналитическая логика:

```text
components/AnalyticsLink/
lib/analytics.ts
```

GA4 использует ручную отправку `page_view` для клиентской навигации Next.js.

---

## 🔀 301-редиректы

Для сохранения старых URL предусмотрены:

| Старый URL        | Новый URL     |
| ----------------- | ------------- |
| `/aboutemployees` | `/team`       |
| `/about_us`       | `/disclosure` |
| `/privacypolitic` | `/privacy`    |

На production редиректы будут выполняться через Nginx.

```nginx
location = /aboutemployees {
    return 301 /team;
}

location = /about_us {
    return 301 /disclosure;
}

location = /privacypolitic {
    return 301 /privacy;
}
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
│       ├── Hero/
│       ├── ClientTasks/
│       ├── Trust/
│       ├── About/
│       ├── HomeServices/
│       ├── WhyUs/
│       ├── Process/
│       └── FinalCta/
├── fonts/
├── globals.scss
├── layout.tsx
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
├── images/
└── favicon.svg
```

---

## 📦 Данные и ресурсы

Документы:

```text
public/documents/
```

Изображения:

```text
public/images/
```

Данные проекта:

```text
lib/
```

Стили отдельных компонентов изолированы через SCSS Modules, общие стили находятся в:

```text
app/globals.scss
```

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

---

## 📌 Дальнейшее развитие

Планируемые направления:

* реальные кейсы;
* подтвержденные отзывы клиентов;
* FAQ;
* отдельные SEO-страницы услуг;
* локальное SEO по Кемерово;
* контентное развитие;
* дальнейшая оптимизация конверсии.

Фактические кейсы и отзывы добавляются только на основании реальных данных компании.

---

## 📌 Проект

**Эксперт-Аудит** — корпоративный сайт аудиторской компании с адаптивным интерфейсом, компонентной архитектурой, интерактивными элементами, SEO-инфраструктурой и веб-аналитикой.

**Стек:** Next.js · React · TypeScript · SCSS Modules · App Router
