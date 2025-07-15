import { ChatBotUI } from './chatbot-ui.js';
import { BotLogic } from './bot-logic.js';
import { SoundPlayer } from './sound-player.js';
import { NotificationBadge } from './notification-badge.js';
import { logInfo } from './helpers/logging.js';

console.log('[chatbot-bundle.js] Script cargado');

interface ChatBotAppDependencies {
  ui: ChatBotUI;
  logic: BotLogic;
  soundPlayer: SoundPlayer;
  notificationBadge: NotificationBadge;
}

export class ChatBotApp {
  private ui: ChatBotUI;
  private logic: BotLogic;
  private soundPlayer: SoundPlayer;
  private notificationBadge: NotificationBadge;
  private userInteracted: boolean = false;
  private badgePending: boolean = false;
  private preventNotification: boolean = false;
  private isChatOpen: boolean = false;
  
  constructor({ ui, logic, soundPlayer, notificationBadge }: ChatBotAppDependencies) {
    this.ui = ui;
    this.logic = logic;
    this.soundPlayer = soundPlayer;
    this.notificationBadge = notificationBadge;
    
    this.notificationBadge.hide();
    console.log('[ChatBotApp] constructor, isChatOpen:', this.isChatOpen);
    
    // Detectar interacción del usuario
    const interactionHandler = () => {
      this.userInteracted = true;
      if (this.badgePending && !this.preventNotification && !this.isChatOpen) {
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
    if (this.ui.icon) {
      this.ui.icon.addEventListener('click', () => {
        logInfo('WhatsApp icon clicked');
        this.ui.showChat();
        this.notificationBadge.hide();
        this.isChatOpen = true;
        console.log('[ChatBotApp] chat abierto, isChatOpen:', this.isChatOpen);
        this.logic.startBotTyping();
        
        if (!this.badgePending) {
          this.preventNotification = true;
        }
      });
    }
    
    // Evento para enviar mensaje
    if (this.ui.sendBtn && this.ui.userInput) {
      this.ui.sendBtn.addEventListener('click', () => {
        const msg = this.ui.userInput?.value.trim() || '';
        if (msg) {
          logInfo('Mensaje de usuario enviado: ' + msg);
          this.ui.showUserMessage(msg);
          if (this.ui.userInput) {
            this.ui.userInput.value = '';
          }
        }
      });
    }
    
    // Eventos para cerrar el chat
    if (this.ui.closeBtn) {
      this.ui.closeBtn.addEventListener('click', () => {
        logInfo('Minimize (close) button clicked');
        this.ui.hideChat();
        this.isChatOpen = false;
        console.log('[ChatBotApp] chat cerrado, isChatOpen:', this.isChatOpen);
      });
    }
    
    if (this.ui.backBtn) {
      this.ui.backBtn.addEventListener('click', () => {
        logInfo('Minimize (back) button clicked');
        this.ui.hideChat();
        this.isChatOpen = false;
        console.log('[ChatBotApp] chat cerrado (back), isChatOpen:', this.isChatOpen);
      });
    }
    
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
      console.log(
        '[ChatBotApp] setTimeout fired, isChatOpen:',
        this.isChatOpen,
        'preventNotification:',
        this.preventNotification,
      );
    }, 5000);
  }

  showBadgeWithSound(): void {
    this.notificationBadge.show(1);
    setTimeout(() => {
      this.soundPlayer.play();
    }, 0);
  }
}

function createApp(): void {
  const ui = new ChatBotUI();
  const logic = new BotLogic(ui);
  const soundPlayer = new SoundPlayer('assets/sounds/whatsapp-notification.m4a');
  const notificationBadge = new NotificationBadge(ui.badge);
  
  new ChatBotApp({
    ui,
    logic,
    soundPlayer,
    notificationBadge
  });
}

// Solo ejecuta createApp automáticamente si no está en entorno de test (Jest)
declare const process: any;
if (typeof process === 'undefined' || !process.env.JEST_WORKER_ID) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('[chatbot-bundle.js] DOMContentLoaded');
      createApp();
    });
  } else {
    console.log('[chatbot-bundle.js] DOM ya cargado');
    createApp();
  }
}

console.log('[chatbot-bundle.js] Script ejecutado');