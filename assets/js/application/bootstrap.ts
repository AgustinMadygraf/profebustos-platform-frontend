import { ChatBotUI } from '../ui/chatbot-ui.js';
import { BotLogic } from '../domain/bot-logic.js';
import { SoundPlayer } from '../services/sound-player.js';
import { NotificationBadge } from '../services/notification-badge.js';
import { ChatBotApp } from './chatbot-bundle.js';
import { EventBus } from '../helpers/event-bus.js';

// Bootstrap: wiring de dependencias y arranque de la app con EventBus
export function bootstrapChatBotApp(): void {
  const eventBus = new EventBus();
  const ui = new ChatBotUI();
  const logic = new BotLogic(ui);
  const soundPlayer = new SoundPlayer('assets/sounds/whatsapp-notification.m4a');
  const notificationBadge = new NotificationBadge(ui.badge);

  // Integración de EventBus: ejemplo de eventos
  eventBus.on('user:sendMessage', (msg: string) => {
    ui.showUserMessage(msg);
    logic.startBotTyping();
  });

  eventBus.on('ui:showBadge', () => {
    notificationBadge.show(1);
    soundPlayer.play();
  });

  // Listeners UI → EventBus
  if (ui.sendBtn && ui.userInput) {
    ui.sendBtn.addEventListener('click', () => {
      const msg = ui.userInput?.value.trim() || '';
      if (msg) {
        eventBus.emit('user:sendMessage', msg);
        ui.userInput.value = '';
      }
    });
  }

  // Ejemplo: disparar badge tras 5s
  setTimeout(() => {
    eventBus.emit('ui:showBadge');
  }, 5000);

  // Instanciar la app principal (puede recibir eventBus si se desea)
  new ChatBotApp({
    ui,
    logic,
    soundPlayer,
    notificationBadge
  });
}

// Arranque automático si no es entorno de test
if (typeof process === 'undefined' || !process.env?.JEST_WORKER_ID) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapChatBotApp);
  } else {
    bootstrapChatBotApp();
  }
}
