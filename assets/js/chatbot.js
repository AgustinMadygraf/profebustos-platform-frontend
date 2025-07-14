console.log("assets/js/chatbot.js script loaded");
import { ChatBotUI } from './chatbot-ui.js';
import { BotLogic } from './bot-logic.js';

// Application Layer
class ChatBotApp {
  constructor() {
    this.ui = new ChatBotUI();
    this.logic = new BotLogic(this.ui);

    this.ui.icon.addEventListener("click", () => {
      this.ui.showChat();
      this.logic.startBotTyping();
    });
    this.ui.closeBtn.addEventListener("click", () => {
      this.ui.hideChat(this.logic.botAnswered);
    });
    this.ui.backBtn.addEventListener("click", () => {
      this.ui.hideChat(this.logic.botAnswered);
    });
    this.ui.chat.addEventListener("transitionend", () => {
      if (!this.ui.chat.classList.contains("d-none")) {
        this.logic.botAnswered = false;
        this.ui.setBadge(false);
      }
    });
    window.addEventListener("resize", () => this.ui.adjustChatSize());
    this.ui.adjustChatSize();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ChatBotApp();
});
