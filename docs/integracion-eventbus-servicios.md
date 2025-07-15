# Integración y Dependencias: EventBus y Servicios

## Patrón de Integración
El sistema utiliza un EventBus para desacoplar la comunicación entre la UI, los servicios y la lógica de dominio. Los servicios no se comunican directamente entre sí ni con la UI, sino que responden a eventos emitidos por el EventBus.

## Flujo de eventos principal
- **user:sendMessage**
  - Emisor: UI (al enviar un mensaje)
  - Receptor: Lógica de dominio (BotLogic)
- **ui:showBadge**
  - Emisor: Lógica de dominio o bootstrap
  - Receptor: Servicio de notificación (NotificationBadge) y servicio de sonido (SoundPlayer)

## Ejemplo de integración
```typescript
// En bootstrap.ts
const eventBus = new EventBus();
eventBus.on('user:sendMessage', (msg: string) => {
  ui.showUserMessage(msg);
  logic.startBotTyping();
});
eventBus.on('ui:showBadge', () => {
  notificationBadge.show(1);
  soundPlayer.play();
});
```

## Ventajas
- Desacoplamiento total entre capas.
- Facilidad para agregar nuevos servicios o modificar el flujo de eventos.
- Mejor testabilidad y mantenibilidad.

## Recomendaciones
- Mantener la integración de nuevos servicios siempre a través del EventBus.
- Documentar nuevos eventos y sus emisores/receptores en este archivo.
