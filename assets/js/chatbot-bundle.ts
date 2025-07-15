import { ChatBotUI } from './chatbot-ui.js';
import { BotLogic } from './bot-logic.js';
import { SoundPlayer } from './sound-player.js';
import { NotificationBadge } from './notification-badge.js';

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
  
  constructor({ ui, logic, soundPlayer, notificationBadge }: ChatBotAppDependencies) {
    this.ui = ui;
    this.logic = logic;
    this.soundPlayer = soundPlayer;
    this.notificationBadge = notificationBadge;
    
    // Implementar inicialización según el código original
  }

  showBadgeWithSound(): void {
    this.notificationBadge.show();
    this.soundPlayer.play();
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
  document.addEventListener('DOMContentLoaded', createApp);
}

console.log('[chatbot-bundle.js] Script ejecutado');