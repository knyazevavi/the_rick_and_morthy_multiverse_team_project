# Rick and Morty's Multiverse - React + TypeScript + Vite + React Router + Redux Toolkit

Проект для поиска информации о персонажах мультивселенной Рика и Морти с использованием Rick and Morty API.
Позволяет искать персонажей, просматривать их подробное описание, добавлять в избранное и сохранять историю поиска.

## Развертывание проекта

1. **Клонирование репозитория**
   git clone https://github.com/knyazevavi/the_rick_and_morthy_multiverse_team_project.git

# Убедитесь, что установлена Node.js (версия 18+)

node -v
Если Node.js не установлена, скачайте и установите отсюда.

2. **Установка зависимостей**
   npm install
3. **Запуск проекта**
   npm run dev
   Проект будет доступен по адресу `http://localhost:5173`.

## Структура проекта

multiverse-search/
│── public/ # Статические файлы  
│── src/  
│ ├── components/ # Переиспользуемые компоненты  
│ ├── features/ # Фичи проекта (поиск, избранное, история и т.д.)  
│ ├── pages/ # Страницы приложения  
│ ├── store/ # Redux store  
│ ├── api/ # API-запросы  
│ ├── hooks/ # Кастомные хуки  
│ ├── styles/ # Глобальные стили  
│ ├── widgets.tsx # Виджеты проекта  
│ ├── shared/
│ ├── ├── constants/ # Константы
│ ├── ├── lib/ # Вспомогательные хелперы и функции
│ ├── ├── types/ # TypeScript-типизации
│ ├── ├── ui/ # Переиспользуемые UI-компоненты (кнопки, инпуты и т.д.)
│ ├── App.tsx # Корневой компонент  
│ ├── main.tsx # Точка входа  
│ ├── router.tsx # Конфигурация роутов  
│── .gitignore # Игнорируемые файлы  
│── package.json # Зависимости проекта  
│── README.md # Описание проекта

## Технологии

React
React Router
Redux Toolkit
RTK Query
Material UI
Vite
Jest

## Функциональность

Поиск персонажей с дебаунсом
Страница с результатами поиска
Страница с детальной информацией о персонаже
Добавление персонажа в избранное
История поиска
Авторизация и регистрация через LocalStorage
Адаптивный дизайн

## Как вносить изменения (Pull Request Workflow)

Перед коммитом обязательно выполните:

1. **Форматирование кода**
   npm run format
   Это автоматически исправит отступы, кавычки, точки с запятой.

2. **Проверка кода на ошибки**
   npm run lint
   Если будут найдены ошибки, их необходимо исправить перед коммитом.

3. **Добавление файлов в Git**
   git add .

4. **Создание коммита с описанием изменений**
   git commit -m "fix: исправил ошибки линтера"

5. **Отправка изменений в удаленный репозиторий**
   git push origin feature/my-feature
6. **Создание Pull Request (PR)**
7. **Перейдите в GitHub, во вкладку Pull Requests.**
8. **Нажмите New Pull Request.**
9. **Выберите develop как целевую ветку.**
10. **Описывайте внесенные изменения и отправьте на ревью..**

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
