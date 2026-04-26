# Ceramic Soul 🏺

![Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-MIT-yellow)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)

![Education](https://img.shields.io/badge/Udemy-Course-A435F0?logo=udemy&logoColor=white)

Цей проєкт розроблено в рамках курсу ["WEB-разработчик"](https://www.udemy.com/course/webdeveloper/) на платформі Udemy.  
Це адаптивний багатосторінковий сайт, зібраний за допомогою сучасного інструментарію (Vite, SCSS, PostCSS) з використанням популярних бібліотек для створення крутого UI/UX.

## 🔗 Посилання

- **Макет у Figma:** [Ceramic soul Design](https://www.figma.com/design/s7lupEHeDAPQDuGyrp3955/Ceramic-soul?node-id=0-1&t=fNyzjjEOByrH9drG-1)

## ✨ Особливості та Технології

Під час розробки застосовувалися сучасні інструменти та підходи:

- **Vite:** Надшвидке середовище для розробки та збірки проєкту (`vite`).
- **CSS-препроцесор SCSS:** Стилі структуровані за модульним принципом (base, blocks, ui) та скомкомпільовані за допомогою пакету `sass`.
- **Responsive Typography:** Використано плагін `postcss-pxtorem` для автоматичної конвертації `px` в `rem`.
- **Swiper JS:** Інтеграція потужного слайдера для каруселей (`swiper`).
- **JustValidate:** Легка та швидка валідація форм на стороні клієнта (`just-validate`).
- **Оптимізація:** Автоматичне стиснення зображень при збірці за допомогою `vite-plugin-imagemin`.
- **Базові стилі:** Використано `purecss` та `modern-normalize` для кросбраузерного скидання стилів.
- **BEM:** Іменування класів за методологією "Блок-Елемент-Модифікатор".

## 🚀 Запуск проєкту локально

Щоб запустити цей проєкт на своєму комп'ютері, виконайте наступні команди у терміналі:

1. Встановіть залежності проєкту:
   ```bash
   npm install
   ```
2. Запустіть локальний сервер для розробки (з гарячим перезавантаженням HMR):
   ```bash
   npx vite
   ```
3. Для створення оптимізованої продакшн-збірки (файли зберуться у папку `dist`):
   ```bash
   npx vite build
   ```
4. Для локального попереднього перегляду готової збірки з папки `dist`:
   ```bash
   npx vite preview
   ```

## 📂 Структура проєкту

```text
├── dist/                   # Готова оптимізована збірка (створюється після build)
├── src/                    # Директорія з вихідними файлами (assets)
│   ├── font/               # Локальні шрифти (напр., fontello)
│   ├── img/                # Зображення розбиті по секціях (about, form, promo, works)
│   ├── js/                 # JavaScript файли (script.js)
│   ├── logo/               # Логотипи проєкту
│   └── sass/               # Струкутуровані SCSS стилі
│       ├── base/           # Змінні, міксини, анімації, базові стилі
│       ├── blocks/         # Стилі компонентів/секцій (header, footer, catalog, тощо)
│       ├── libs/           # Сторонні бібліотеки стилів
│       └── ui/             # Дрібні UI-елементи (кнопки, тайтли)
├── *.html                  # Окремі HTML-сторінки (index, about, blog, catalog, terms)
├── package.json            # Залежності та скрипти проєкту
├── postcss.config.js       # Налаштування PostCSS (pxtorem)
├── vite.config.js          # Конфігурація збирача Vite
└── README.md               # Документація (цей файл)
```

## 📄 Ліцензія

Цей проєкт поширюється за ліцензією MIT. Деталі можна знайти у файлі `LICENSE`.  
Copyright (c) 2026 Oleh Bondarenko

## 🙏 Подяка

Цей проєкт створено на базі навчальних матеріалів школи **Campfire School**.
Велика подяка автору курсу [Івану Петриченку](https://campfire-school.com/) за глибоке занурення у світ сучасного Front-End, круту практику роботи зі збирачами та якісний дизайн макета. 💻

_Created by [Oleh Bondarenko](https://github.com/OlegBon)_
