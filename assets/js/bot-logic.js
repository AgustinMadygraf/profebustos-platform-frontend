
// Domain Layer
export class BotLogic {
  constructor(ui) {
    this.ui = ui;
    this.botAnswered = false;
  }

  startBotTyping() {
    this.ui.setBotTyping("escribiendo...");
    setTimeout(() => {
      this.streamBotResponse("¡Hola! ¿En qué puedo ayudarte?");
    }, 1200);
  }

  streamBotResponse(text) {
    this.ui.setBotTyping("");
    let i = 0;
    const typeLetter = () => {
      if (i < text.length) {
        this.ui.botTyping.textContent += text[i];
        i++;
        setTimeout(typeLetter, 40);
      } else {
        this.botAnswered = true;
        this.ui.setBadge(true);
      }
    };
    typeLetter();
  }
}