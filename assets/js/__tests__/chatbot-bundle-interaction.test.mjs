
// import { useFakeTimers, runAllTimers, useRealTimers } from '@jest/globals';
import { ChatBotUI } from '../chatbot-ui.js';
import { BotLogic } from '../bot-logic.js';
import { SoundPlayer } from '../sound-player.js';
import { NotificationBadge } from '../notification-badge.js';
import { ChatBotApp } from '../chatbot-bundle.js';

describe('ChatBotApp - interacción y notificación', () => {
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

  it('marca userInteracted y muestra badge con sonido tras interacción', () => {
    // Estado inicial para cubrir la lógica real
    app.badgePending = true;
    app.preventNotification = false;
    app.isChatOpen = false;
    app.userInteracted = false;
    // Simular interacción del usuario
    window.dispatchEvent(new Event('click'));
    expect(app.userInteracted).toBe(true);
    // badgePending debe ser false después de la interacción
    expect(app.badgePending).toBe(false);
  });

  it('cierra el chat al hacer click en el botón de cerrar', () => {
    app.isChatOpen = true;
    ui.closeBtn.click();
    expect(app.isChatOpen).toBe(false);
    expect(ui.chat.classList.contains('d-none')).toBe(true);
  });

  it('cierra el chat al hacer click en el botón de volver', () => {
    app.isChatOpen = true;
    ui.backBtn.click();
    expect(app.isChatOpen).toBe(false);
    expect(ui.chat.classList.contains('d-none')).toBe(true);
  });

});
