// Test para validar que el badge no reaparece si el chat está abierto
import { ChatBotUI } from '../chatbot-ui.js';
import { BotLogic } from '../bot-logic.js';
import { SoundPlayer } from '../sound-player.js';
import { NotificationBadge } from '../notification-badge.js';
import { ChatBotApp } from '../chatbot-bundle.js';

describe('Integración: El badge no reaparece si el chat está abierto', () => {
  let ui, logic, soundPlayer, notificationBadge, iconElem, badgeElem;

  beforeEach(() => {
    document.body.innerHTML = `
      <span id="whatsapp-badge">1</span>
      <button id="whatsapp-icon"></button>
      <div id="whatsapp-chat" class="d-none"></div>
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
    soundPlayer = new SoundPlayer('');
    notificationBadge = new NotificationBadge(ui.badge);
    new ChatBotApp({ ui, logic, soundPlayer, notificationBadge });
    badgeElem = ui.badge;
    iconElem = ui.icon;
  });

  test('El badge no se muestra tras abrir el chat y esperar notificación', async () => {
    // Simular apertura de chat
    iconElem.click();
    // Esperar el timeout de notificación (5s)
    await new Promise((resolve) => setTimeout(resolve, 5200));
    expect(badgeElem.classList.contains('d-none')).toBe(true);
  }, 7000);
});
