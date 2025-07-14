console.log("[chatbot-bundle.js] Script cargado");

import { ChatBotUI } from './chatbot-ui.js';
import { BotLogic } from './bot-logic.js';
import { SoundPlayer } from './sound-player.js';
import { NotificationBadge } from './notification-badge.js';

class ChatBotApp {
  constructor() {
    this.ui = new ChatBotUI();
    this.logic = new BotLogic(this.ui);

    this.userInteracted = false;
    this.badgePending = false;
    this.chatOpenedEarly = false;
    this.preventNotification = false; // NUEVO


    this.notificationBadge = new NotificationBadge(this.ui.badge);
    this.soundPlayer = new SoundPlayer('assets/sounds/whatsapp-notification.m4a');
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

    // Evento para abrir el chat
    this.ui.icon.addEventListener("click", () => {
      console.log("[ChatBotApp] WhatsApp icon clicked");
      this.ui.showChat();
      this.logic.startBotTyping();
      // Si el chat se abre antes de los 5 segundos, marca la bandera para omitir notificaciones
      if (!this.badgePending) {
        this.preventNotification = true;
      }
    });

    // Evento para enviar mensaje
    this.ui.sendBtn.addEventListener("click", () => {
      const msg = this.ui.userInput.value.trim();
      if (msg) {
        this.ui.showUserMessage(msg);
        this.ui.userInput.value = "";
      }
    });

    // Evento para cerrar el chat
    this.ui.closeBtn.addEventListener("click", () => {
      console.log("[ChatBotApp] Minimize (close) button clicked");
      this.ui.hideChat();
    });

    this.ui.backBtn.addEventListener("click", () => {
      console.log("[ChatBotApp] Minimize (back) button clicked");
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


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded",()=>{console.log("[chatbot-bundle.js] DOMContentLoaded");
  new ChatBotApp();
});

}else{
  console.log("[chatbot-bundle.js] DOM ya cargado");

  new ChatBotApp();

}
console.log("[chatbot-bundle.js] Script ejecutado");
