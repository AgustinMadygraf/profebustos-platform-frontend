# profebustos-platform-frontend

## Arquitectura

- **Capas:**
  - UI: `assets/js/chatbot-ui.js`
  - Domain: `assets/js/bot-logic.js`
  - Servicios: `assets/js/sound-player.js`, `assets/js/notification-badge.js`
  - Orquestador: `assets/js/chatbot-bundle.js`

## Extensión

- Para agregar nuevas notificaciones, crear servicios en `assets/js/` y orquestar desde el bundle.
- Tests en `assets/js/__tests__/` usando Jest + JSDOM.

## Instalación y pruebas

```sh
npm install
npm test
```

## Requisitos

- Node >= 18
- npm >= 9

## Contacto

- Arquitectura: Clean JS, SOLID, sin bundler
- Para dudas, ver `docs_aux/prompt.md`
