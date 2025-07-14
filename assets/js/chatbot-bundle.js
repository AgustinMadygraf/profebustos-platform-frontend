console.log('[chatbot-bundle.js] Script cargado');

import { ChatBotUI } from './chatbot-ui.js';
import { BotLogic } from './bot-logic.js';
import { SoundPlayer } from './sound-player.js';
import { NotificationBadge } from './notification-badge.js';
import { logInfo } from './helpers/logging.js';

class ChatBotApp {
  constructor({ ui, logic, soundPlayer, notificationBadge }) {
    this.ui = ui;
    this.logic = logic;
    this.soundPlayer = soundPlayer;
    this.notificationBadge = notificationBadge;
    this.userInteracted = false;
    this.badgePending = false;
    this.chatOpenedEarly = false;
    this.preventNotification = false; // NUEVO

    this.notificationBadge.hide();

    // Detectar interacción del usuario
    const interactionHandler = () => {
      this.userInteracted = true;
      if (this.badgePending && !this.preventNotification) {
        this.showBadgeWithSound();
        this.badgePending = false;
      }
      window.removeEventListener('click', interactionHandler);
      window.removeEventListener('touchstart', interactionHandler);
      window.removeEventListener('keydown', interactionHandler);
    };

    window.addEventListener('click', interactionHandler);
    window.addEventListener('touchstart', interactionHandler);
    window.addEventListener('keydown', interactionHandler);
    logInfo('Listeners de interacción agregados');

    // Evento para abrir el chat
    this.ui.icon.addEventListener('click', () => {
      logInfo('WhatsApp icon clicked');
      this.ui.showChat();
      this.logic.startBotTyping();
      // Si el chat se abre antes de los 5 segundos, marca la bandera para omitir notificaciones
      if (!this.badgePending) {
        this.preventNotification = true;
      }
    });

    // Evento para enviar mensaje
    this.ui.sendBtn.addEventListener('click', () => {
      const msg = this.ui.userInput.value.trim();
      if (msg) {
        logInfo('Mensaje de usuario enviado: ' + msg);
        this.ui.showUserMessage(msg);
        this.ui.userInput.value = '';
      }
    });

    // Evento para cerrar el chat
    this.ui.closeBtn.addEventListener('click', () => {
      logInfo('Minimize (close) button clicked');
      this.ui.hideChat();
    });

    this.ui.backBtn.addEventListener('click', () => {
      logInfo('Minimize (back) button clicked');
      this.ui.hideChat();
    });

    // Esperar 5 segundos
    setTimeout(() => {
      if (!this.preventNotification) {
        if (this.userInteracted) {
          this.showBadgeWithSound();
        } else {
          this.notificationBadge.show(1);
          this.badgePending = true;
        }
      }
    }, 5000);
  }

  showBadgeWithSound() {
    this.soundPlayer.play(() => {
      this.notificationBadge.show(1);
    });
  }
}


function createApp() {
  var ui = new ChatBotUI();
  var logic = new BotLogic(ui);
  var soundPlayer = new SoundPlayer('assets/sounds/whatsapp-notification.m4a');
  var notificationBadge = new NotificationBadge(ui.badge);
  new ChatBotApp({ ui: ui, logic: logic, soundPlayer: soundPlayer, notificationBadge: notificationBadge });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('[chatbot-bundle.js] DOMContentLoaded');
    createApp();
  });
} else {
  console.log('[chatbot-bundle.js] DOM ya cargado');
  createApp();
}

console.log('[chatbot-bundle.js] Script ejecutado');
