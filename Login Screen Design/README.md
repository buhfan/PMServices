# Login Screen (Angular Material)

Современный экран аутентификации, собранный на Angular 18 и Angular Material. Интерфейс выполнен в двухколоночном адаптивном макете с акцентом на чистую типографику и стеклянные карточки.

## Стек

- Angular 18 (standalone компоненты)
- Angular Material с кастомной темой
- Reactive Forms для валидации полей
- SCSS (можно подключить и другие препроцессоры при необходимости)

## Запуск

> Требуется установленный Node.js LTS и доступ к npm

```bash
npm install
npm start
```

Сборка для продакшена:

```bash
npm run build
```

Запуск тестов:

```bash
npm test
```

## Структура

- `src/app/app.component.*` — компонент формы входа и showcase-блока
- `src/styles.scss` — глобальная тема и фон приложения
- `src/app/app.config.ts` — провайдеры приложения (анимации и настройки Angular Material)
