// UI Layer
export class ChatBotUI {
  icon: HTMLElement | null;
  chat: HTMLElement | null;
  badge: HTMLElement | null;
  closeBtn: HTMLElement | null;
  backBtn: HTMLElement | null;
  botTyping: HTMLElement | null;
  botMessageDiv: HTMLElement | null;
  userInput: HTMLInputElement | null;
  sendBtn: HTMLElement | null;
  
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
  }

  showUserMessage(msg: string): void {
    // Implementa esta función según su lógica original
  }
  
  showChat(): void {
    if (this.chat) {
      this.chat.classList.remove('d-none');
    }
  }
  
  hideChat(fadeOut: boolean = false): void {
    if (this.chat) {
      if (fadeOut) {
        this.chat.classList.add('fade-out');
        setTimeout(() => {
          this.chat.classList.add('d-none');
          this.chat.classList.remove('fade-out');
        }, 500);
      } else {
        this.chat.classList.add('d-none');
      }
    }
  }
  
  setBadge(visible: boolean): void {
    if (this.badge) {
      if (visible) {
        this.badge.classList.remove('d-none');
      } else {
        this.badge.classList.add('d-none');
      }
    }
  }
  
  setBotTyping(text: string): void {
    if (this.botTyping) {
      this.botTyping.textContent = text;
    }
  }
  
  adjustChatSize(): void {
    // Implementa según la lógica original
  }
}