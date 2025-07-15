// Interfaz para la capa UI
export interface IUI {
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
  showUserMessage(msg: string): void;
  showChat(): void;
  hideChat(fadeOut?: boolean): void;
  setBadge(visible: boolean): void;
  setBotTyping(text: string): void;
  adjustChatSize(): void;
}
