// UI Layer
import { DomFacade } from "./helpers/dom-facade.js";
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
  messagesContainer: HTMLElement | null;
  dom: DomFacade;

  constructor(domFacade?: DomFacade) {
    // Permite inyectar un facade custom para test
    this.dom = domFacade || new DomFacade();
    this.icon = this.dom.getById("whatsapp-icon");
    console.log("[ChatBotUI] icon encontrado:", this.icon);
    if (this.icon) {
      console.log("[ChatBotUI] icon classList:", this.icon.classList.value);
    }
    this.chat = this.dom.getById("whatsapp-chat");
    this.badge = this.dom.getById("whatsapp-badge");
    this.closeBtn = this.dom.getById("whatsapp-close");
    this.backBtn = this.dom.getById("whatsapp-back");
    this.botTyping = this.dom.getById("bot-typing");
    this.botMessageDiv = this.dom.getById("bot-message");
    this.userInput = this.dom.getById("whatsapp-user-input") as HTMLInputElement;
    this.sendBtn = this.dom.getById("whatsapp-send-btn");
    this.messagesContainer = this.dom.getById("whatsapp-messages");
  }

  showUserMessage(msg: string): void {
    if (this.messagesContainer) {
      const div = this.dom.createElement("div");
      div.className = "user-message mb-2 text-end";
      div.textContent = msg;
      this.dom.appendChild(this.messagesContainer, div);
    }
  }

  showChat(): void {
    if (this.chat && this.icon && this.badge) {
      this.chat.classList.remove("d-none");
      this.icon.classList.add("d-none");
      this.badge.classList.add("d-none");
    }
  }

  hideChat(fadeOut: boolean = false): void {
    if (this.chat && this.icon) {
      this.chat.classList.add("d-none");
      this.icon.classList.remove("d-none");
      if (!fadeOut && this.badge) {
        this.badge.classList.remove("d-none");
      }
    }
  }

  setBadge(visible: boolean): void {
    if (this.badge) {
      this.badge.classList.toggle("d-none", !visible);
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
        this.chat.style.width = "100vw";
        this.chat.style.height = "100vh";
        this.chat.style.borderRadius = "0";
      } else {
        this.chat.style.width = "350px";
        this.chat.style.height = "420px";
        this.chat.style.borderRadius = "1.5rem";
      }
    }
  }
}
