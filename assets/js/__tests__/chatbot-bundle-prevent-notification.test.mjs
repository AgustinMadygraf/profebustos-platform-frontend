import { ChatBotUI } from '../chatbot-ui.js';
import { BotLogic } from '../bot-logic.js';
import { SoundPlayer } from '../sound-player.js';
import { NotificationBadge } from '../notification-badge.js';
import { ChatBotApp } from '../chatbot-bundle.js';

describe('ChatBotApp - apertura temprana del chat', () => {
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

  it('establece preventNotification=true al abrir el chat antes del timeout', () => {
    app.badgePending = false;
    app.preventNotification = false;
    // Simular click en el icono para abrir el chat
    ui.icon.click();
    expect(app.preventNotification).toBe(true);
  });

  it('no cambia preventNotification si badgePending es true al abrir el chat', () => {
    app.badgePending = true;
    app.preventNotification = false;
    ui.icon.click();
    // preventNotification debe seguir igual
    expect(app.preventNotification).toBe(false);
  });
});
