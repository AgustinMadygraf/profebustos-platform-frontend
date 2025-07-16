# profebustos-platform-frontend

## Arquitectura

- **Capas:**
  - UI: `assets/js/chatbot-ui.js`
  - Domain: `assets/js/bot-logic.js`
  - Servicios: `assets/js/sound-player.js`, `assets/js/notification-badge.js`
  - Orquestador: `assets/js/chatbot-bundle.js`


## Contratos y Extensibilidad

- Los servicios principales implementan interfaces: `IUIFacade`, `IAudioFacade`, `IBadgeService` (ver `assets/js/helpers/interfaces.ts`).
- El orquestador (`ChatBotApp`) recibe dependencias por constructor y puede usarse con mocks o servicios personalizados.
- El punto de entrada `createApp` permite inyectar cualquier implementación compatible.
- Ejemplo y detalles en `docs/contratos-extensibilidad.md`.

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
