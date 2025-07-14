import { ChatBotUI } from '../chatbot-ui.js';
import { BotLogic } from '../bot-logic.js';
import { SoundPlayer } from '../sound-player.js';
import { NotificationBadge } from '../notification-badge.js';
import { ChatBotApp } from '../chatbot-bundle.js';

describe('ChatBotApp - envío de mensajes', () => {
  let ui, logic, soundPlayer, notificationBadge, app;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="whatsapp-icon"></div>
      <div id="whatsapp-chat"></div>
      <div id="whatsapp-badge"></div>
      <button id="whatsapp-close"></button>
      <button id="whatsapp-back"></button>
      <div id="bot-typing"></div>
      <div id="bot-message"></div>
      <input id="whatsapp-user-input" />
      <button id="whatsapp-send-btn"></button>
      <div id="whatsapp-messages"></div>
    `;
    ui = new ChatBotUI();
    logic = new BotLogic(ui);
    soundPlayer = new SoundPlayer('test.mp3');
    notificationBadge = new NotificationBadge(ui.badge);
    app = new ChatBotApp({ ui, logic, soundPlayer, notificationBadge });
  });

  it('muestra el mensaje del usuario y limpia el input al enviar', () => {
    ui.userInput.value = 'Hola mundo';
    ui.sendBtn.click();
    const mensajes = ui.messagesContainer.querySelectorAll('.user-message');
    expect(mensajes.length).toBe(1);
    expect(mensajes[0].textContent).toBe('Hola mundo');
    expect(ui.userInput.value).toBe('');
  });
});
