// Test para verificar que el badge se oculta al abrir el chat
import { NotificationBadge } from '../notification-badge.js';
import { ChatBotUI } from '../chatbot-ui.js';
import { BotLogic } from '../bot-logic.js';
import { SoundPlayer } from '../sound-player.js';
import { ChatBotApp } from '../chatbot-bundle.js';

describe('Integración: Ocultar badge al abrir chat', () => {
  let badgeElem, iconElem, ui, logic, soundPlayer, notificationBadge;

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
    ui.badge.textContent = '1';
    ui.badge.classList.remove('d-none');
    badgeElem = ui.badge;
    iconElem = ui.icon;
  });

  test('El badge se oculta al hacer click en el icono', () => {
    expect(badgeElem.classList.contains('d-none')).toBe(false);
    iconElem.click();
    expect(badgeElem.classList.contains('d-none')).toBe(true);
  });
});
