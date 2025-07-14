console.log("[chatbot-bundle.js] Script cargado");
class ChatBotUI{constructor(){this.icon=document.getElementById("whatsapp-icon");this.chat=document.getElementById("whatsapp-chat");this.badge=document.getElementById("whatsapp-badge");this.closeBtn=document.getElementById("whatsapp-close");this.backBtn=document.getElementById("whatsapp-back");this.botTyping=document.getElementById("bot-typing");this.botMessageDiv=document.getElementById("bot-message");}showChat(){this.chat.classList.remove("d-none");this.icon.classList.add("d-none");this.badge.classList.add("d-none");}hideChat(b){this.chat.classList.add("d-none");this.icon.classList.remove("d-none");if(!b)this.badge.classList.remove("d-none");}setBadge(v){this.badge.classList.toggle("d-none",!v);}setBotTyping(t){this.botTyping.textContent=t;}adjustChatSize(){if(window.innerWidth<768){this.chat.style.width="100vw";this.chat.style.height="100vh";this.chat.style.borderRadius="0";}else{this.chat.style.width="350px";this.chat.style.height="420px";this.chat.style.borderRadius="1.5rem";}}}
class BotLogic{constructor(u){this.ui=u;this.botAnswered=false;}startBotTyping(){this.ui.setBotTyping("escribiendo...");setTimeout(()=>{this.streamBotResponse("¡Hola! ¿En qué puedo ayudarte?");},1200);}streamBotResponse(t){this.ui.setBotTyping("");let i=0;const typeLetter=()=>{if(i<t.length){this.ui.botTyping.textContent+=t[i];i++;setTimeout(typeLetter,40);}else{this.botAnswered=true;this.ui.setBadge(true);}};typeLetter();}}
class ChatBotApp{constructor(){this.ui=new ChatBotUI;this.logic=new BotLogic(this.ui);this.ui.icon.addEventListener("click",()=>{this.ui.showChat();this.logic.startBotTyping();});this.ui.closeBtn.addEventListener("click",()=>{this.ui.hideChat(this.logic.botAnswered);});this.ui.backBtn.addEventListener("click",()=>{this.ui.hideChat(this.logic.botAnswered);});this.ui.chat.addEventListener("transitionend",()=>{if(!this.ui.chat.classList.contains("d-none")){this.logic.botAnswered=false;this.ui.setBadge(false);}});window.addEventListener("resize",()=>this.ui.adjustChatSize());this.ui.adjustChatSize();}}
if (document.readyState === "loading") {
if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",()=>{console.log("[chatbot-bundle.js] DOMContentLoaded");new ChatBotApp;});
}else{
  console.log("[chatbot-bundle.js] DOM ya cargado");
  new ChatBotApp;
}
} else {
  new ChatBotApp();
}
