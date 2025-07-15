import { IUI } from '../interfaces/IUI.js';
// UI Layer
export class ChatBotUI implements IUI {
  icon: HTMLElement | null;
  chat: HTMLElement | null;
  badge: HTMLElement | null;
  closeBtn: HTMLElement | null;
  backBtn: HTMLElement | null;
  botTyping: HTMLElement | null;
  botMessageDiv: HTMLElement | null;
  userInput: HTMLInputElement | null;
  sendBtn: HTMLElement | null;
  messagesContainer: HTMLElement | null;

  constructor() {
    this.icon = document.getElementById('whatsapp-icon');
    this.chat = document.getElementById('whatsapp-chat');
    this.badge = document.getElementById('whatsapp-badge');
    this.closeBtn = document.getElementById('whatsapp-close');
    this.backBtn = document.getElementById('whatsapp-back');
    this.botTyping = document.getElementById('bot-typing');
    this.botMessageDiv = document.getElementById('bot-message');
    this.userInput = document.getElementById('whatsapp-user-input') as HTMLInputElement;
    this.sendBtn = document.getElementById('whatsapp-send-btn');
    this.messagesContainer = document.getElementById('whatsapp-messages');
  }

  showUserMessage(msg: string): void {
    if (this.messagesContainer) {
      const div = document.createElement('div');
      div.className = 'user-message mb-2 text-end';
      div.textContent = msg;
      this.messagesContainer.appendChild(div);
    }
  }

  showChat(): void {
    if (this.chat && this.icon && this.badge) {
      this.chat.classList.remove('d-none');
      this.icon.classList.add('d-none');
      this.badge.classList.add('d-none');
    }
  }

  hideChat(fadeOut: boolean = false): void {
    if (this.chat && this.icon) {
      this.chat.classList.add('d-none');
      this.icon.classList.remove('d-none');
      if (!fadeOut && this.badge) {
        this.badge.classList.remove('d-none');
      }
    }
  }

  setBadge(visible: boolean): void {
    if (this.badge) {
      this.badge.classList.toggle('d-none', !visible);
    }
  }

  setBotTyping(text: string): void {
    if (this.botTyping) {
      this.botTyping.textContent = text;
    }
  }

  adjustChatSize(): void {
    if (this.chat) {
      if (window.innerWidth < 768) {
        this.chat.style.width = '100vw';
        this.chat.style.height = '100vh';
        this.chat.style.borderRadius = '0';
      } else {
        this.chat.style.width = '350px';
        this.chat.style.height = '420px';
        this.chat.style.borderRadius = '1.5rem';
      }
    }
  }
}