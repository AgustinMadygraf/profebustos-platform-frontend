// Domain Layer
import { IBotLogic } from '../interfaces/IBotLogic.js';
import { IUI } from '../interfaces/IUI.js';

export class BotLogic implements IBotLogic {
  private ui: IUI;
  private botAnswered: boolean;

  constructor(u: IUI) {
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
      if (i < t.length && (this.ui as any).botTyping) {
        ((this.ui as any).botTyping as HTMLElement).textContent += t[i];
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