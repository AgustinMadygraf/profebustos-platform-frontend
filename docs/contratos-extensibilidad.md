# Contratos y Puntos de Extensión

## 1. Facades y Servicios

- **IUIFacade**: Contrato para acceso al DOM. Permite reemplazar el acceso directo por mocks o adaptadores.
- **IAudioFacade**: Contrato para manipulación de audio. Permite testear y extender la lógica de reproducción.
- **IBadgeService**: Contrato para el servicio de badge. Permite cambiar la implementación visual o lógica.

## 2. Orquestador (ChatBotApp)

- **Constructor**: Recibe todas las dependencias por DI. Permite inyectar mocks, stubs o servicios alternativos.
- **createApp**: Punto de entrada extensible. Puede recibir instancias personalizadas de los servicios.

## 3. Puntos de Extensión

- **Servicios**: Puedes crear nuevas implementaciones de las interfaces y pasarlas al orquestador.
- **Eventos**: Los listeners de interacción pueden ser extendidos o reemplazados.
- **UI**: El facade de DOM permite adaptar la lógica para Vue, React, etc.
- **Audio**: El facade permite cambiar la fuente o el motor de audio sin modificar el orquestador.
- **Badge**: El servicio puede ser reemplazado por una implementación Vue, SFC, etc.

## 4. Ejemplo de Extensión

```typescript
import { ChatBotUI } from './chatbot-ui';
import { BotLogic } from './bot-logic';
import { SoundPlayer } from './sound-player';
import { NotificationBadge } from './notification-badge';
import { createApp } from './chatbot-bundle';

// Implementación custom de AudioFacade
class CustomAudioFacade implements IAudioFacade {
  // ...implementación personalizada...
}

const ui = new ChatBotUI();
const logic = new BotLogic(ui);
const soundPlayer = new SoundPlayer('assets/sounds/whatsapp-notification.m4a', new CustomAudioFacade());
const notificationBadge = new NotificationBadge(ui.badge);

createApp(ui, logic, soundPlayer, notificationBadge);
```

## 5. Documentar nuevos contratos

- Toda nueva funcionalidad debe definir su interfaz y documentar los métodos públicos.
- Los puntos de extensión deben estar descritos en los README y docs.
