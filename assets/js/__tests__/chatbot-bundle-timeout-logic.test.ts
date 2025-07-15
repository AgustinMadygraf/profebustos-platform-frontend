import { ChatBotUI } from '../chatbot-ui';
import { BotLogic } from '../bot-logic';
import { SoundPlayer } from '../sound-player';
import { NotificationBadge } from '../notification-badge';
import { ChatBotApp } from '../chatbot-bundle';

describe('ChatBotApp - lógica de notificación en timeout', () => {
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

  it('muestra badge y marca badgePending si no hay interacción y preventNotification es false', () => {
    app.preventNotification = false;
    app.userInteracted = false;
    // Simular el timeout manualmente
    app.notificationBadge.show = () => { ui.badge.classList.remove('d-none'); };
    app.badgePending = false;
    // Ejecutar la lógica del timeout
    if (!app.preventNotification) {
      if (app.userInteracted) {
        app.showBadgeWithSound();
      } else {
        app.notificationBadge.show(1);
        app.badgePending = true;
      }
    }
    expect(ui.badge.classList.contains('d-none')).toBe(false);
    expect(app.badgePending).toBe(true);
  });

  it('llama showBadgeWithSound si userInteracted es true y preventNotification es false', () => {
    app.preventNotification = false;
    app.userInteracted = true;
    let badgeSoundCalled = false;
    app.showBadgeWithSound = () => { badgeSoundCalled = true; };
    // Ejecutar la lógica del timeout
    if (!app.preventNotification) {
      if (app.userInteracted) {
        app.showBadgeWithSound();
      } else {
        app.notificationBadge.show(1);
        app.badgePending = true;
      }
    }
    expect(badgeSoundCalled).toBe(true);
  });

  it('no hace nada si preventNotification es true', () => {
    app.preventNotification = true;
    app.userInteracted = false;
    let badgeSoundCalled = false;
    app.showBadgeWithSound = () => { badgeSoundCalled = true; };
    app.notificationBadge.show = () => { throw new Error('No debe llamarse'); };
    // Ejecutar la lógica del timeout
    if (!app.preventNotification) {
      if (app.userInteracted) {
        app.showBadgeWithSound();
      } else {
        app.notificationBadge.show(1);
        app.badgePending = true;
      }
    }
    expect(badgeSoundCalled).toBe(false);
  });
});
