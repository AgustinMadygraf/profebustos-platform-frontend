// Domain Layer
import { ChatBotUI } from './chatbot-ui';

export class BotLogic {
  ui: ChatBotUI;
  botAnswered: boolean;

  constructor(u: ChatBotUI) {
    this.ui = u;
    this.botAnswered = false;
  }

  startBotTyping(): void {
    this.ui.setBotTyping('escribiendo...');
    setTimeout(() => {
      this.streamBotResponse('¡Hola! ¿En qué puedo ayudarte?');
    }, 1200);
  }

  streamBotResponse(t: string): void {
    this.ui.setBotTyping('');
    let i = 0;

    const typeLetter = (): void => {
      if (i < t.length && this.ui.botTyping) {
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
