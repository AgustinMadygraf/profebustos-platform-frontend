// UI Layer
export class ChatBotUI{
  constructor()
  {
    this.icon = document.getElementById("whatsapp-icon");
    this.chat = document.getElementById("whatsapp-chat");
    this.badge = document.getElementById("whatsapp-badge");
    this.closeBtn = document.getElementById("whatsapp-close");
    this.backBtn = document.getElementById("whatsapp-back");
    this.botTyping = document.getElementById("bot-typing");
    this.botMessageDiv = document.getElementById("bot-message");
    this.userInput = document.getElementById("whatsapp-user-input");
    this.sendBtn = document.getElementById("whatsapp-send-btn");
    this.messagesContainer = document.getElementById("whatsapp-messages");
  }

  showUserMessage(msg) {
    if (this.messagesContainer) {
      const div = document.createElement("div");
      div.className = "user-message mb-2 text-end";
      div.textContent = msg;
      this.messagesContainer.appendChild(div);
    }
  }
  showChat(){
    this.chat.classList.remove("d-none");
    this.icon.classList.add("d-none");
    this.badge.classList.add("d-none");
  }
  hideChat(b){
    this.chat.classList.add("d-none");
    this.icon.classList.remove("d-none");
    if(!b)this.badge.classList.remove("d-none");
  }
  setBadge(v){
    this.badge.classList.toggle("d-none",!v);
  }
  setBotTyping(t){
    this.botTyping.textContent=t;
  }
  adjustChatSize(){
    if(window.innerWidth<768){
      this.chat.style.width="100vw";
      this.chat.style.height="100vh";
      this.chat.style.borderRadius="0";
    }else{
      this.chat.style.width="350px";
      this.chat.style.height="420px";
      this.chat.style.borderRadius="1.5rem";
    }
  }
}