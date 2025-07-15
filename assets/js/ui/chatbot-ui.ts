import { IUI } from '../interfaces/IUI.js';
import { getElement, showElement, hideElement, toggleElement, setElementStyle, createDiv } from '../helpers/dom';
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
    this.icon = getElement('whatsapp-icon');
    this.chat = getElement('whatsapp-chat');
    this.badge = getElement('whatsapp-badge');
    this.closeBtn = getElement('whatsapp-close');
    this.backBtn = getElement('whatsapp-back');
    this.botTyping = getElement('bot-typing');
    this.botMessageDiv = getElement('bot-message');
    this.userInput = getElement('whatsapp-user-input') as HTMLInputElement;
    this.sendBtn = getElement('whatsapp-send-btn');
    this.messagesContainer = getElement('whatsapp-messages');
  }

  showUserMessage(msg: string): void {
    if (this.messagesContainer) {
      const div = createDiv('user-message mb-2 text-end');
      div.textContent = msg;
      this.messagesContainer.appendChild(div);
    }
  }

  showChat(): void {
    if (this.chat && this.icon && this.badge) {
      showElement(this.chat);
      hideElement(this.icon);
      hideElement(this.badge);
    }
  }

  hideChat(fadeOut: boolean = false): void {
    if (this.chat && this.icon) {
      hideElement(this.chat);
      showElement(this.icon);
      if (!fadeOut && this.badge) {
        showElement(this.badge);
      }
    }
  }

  setBadge(visible: boolean): void {
    if (this.badge) {
      toggleElement(this.badge, visible);
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
        setElementStyle(this.chat, {
          width: '100vw',
          height: '100vh',
          borderRadius: '0'
        });
      } else {
        setElementStyle(this.chat, {
          width: '350px',
          height: '420px',
          borderRadius: '1.5rem'
        });
      }
    }
  }
}