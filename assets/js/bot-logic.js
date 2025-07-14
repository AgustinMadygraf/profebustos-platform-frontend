// Domain Layer
export class BotLogic {
  constructor(u) {
    this.ui = u;
    this.botAnswered = false;
  }
  startBotTyping() {
    this.ui.setBotTyping('escribiendo...');
    setTimeout(() => {
      this.streamBotResponse('¡Hola! ¿En qué puedo ayudarte?');
    }, 1200);
  }
  streamBotResponse(t) {
    this.ui.setBotTyping('');
    let i = 0;
    const typeLetter = () => {
      if (i < t.length) {
        this.ui.botTyping.textContent += t[i];
        i++;
        setTimeout(typeLetter, 40);
      } else {
        this.botAnswered = true;
        setTimeout(() => {
          this.ui.setBadge(true);
        }, 3000);
      }
    };
    typeLetter();
  }
}
