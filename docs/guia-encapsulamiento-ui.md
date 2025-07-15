# Guía de Encapsulamiento para la UI

## Objetivo
Estandarizar la manipulación del DOM en los componentes UI mediante helpers reutilizables, facilitando la refactorización y futura migración a React.

## Patrón Propuesto
1. **No acceder directamente al DOM en los componentes.** Usar helpers de `helpers/dom.ts`.
2. **Encapsular la lógica de presentación en métodos claros:**
   - Ejemplo: `show()`, `hide()`, `renderMessage(msg)`.
3. **Definir interfaces para cada componente UI.**
   - Ejemplo: `IChatBotUI`, `INotificationBadgeUI`.
4. **Refactorizar progresivamente cada componente para usar solo helpers y exponer métodos según la interfaz.**
5. **Documentar dependencias y puntos de integración.**

## Ejemplo de Uso
```typescript
import { getElement, showElement, hideElement, setElementStyle } from '../helpers/dom';

class ChatBotUI implements IChatBotUI {
  private chat: HTMLElement;
  constructor() {
    this.chat = getElement('whatsapp-chat');
  }
  show() { showElement(this.chat); }
  hide() { hideElement(this.chat); }
  setSize(width: string, height: string) {
    setElementStyle(this.chat, { width, height });
  }
}
```

## Beneficios
- Código más limpio y mantenible.
- Reducción de duplicidad y errores.
- Facilita la migración a React y la colaboración en equipo.
