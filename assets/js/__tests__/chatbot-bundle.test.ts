

import { ChatBotApp, createApp } from '../chatbot-bundle';
import { ChatBotUI } from '../chatbot-ui.js';
import { BotLogic } from '../bot-logic.js';
import { SoundPlayer } from '../sound-player.js';
import { NotificationBadge } from '../notification-badge.js';

describe('ChatBotApp (orquestador)', () => {
  let ui: ChatBotUI;
  let logic: BotLogic;
  let soundPlayer: SoundPlayer;
  let notificationBadge: NotificationBadge;

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
  });

  it('inicializa y oculta el badge al crear la app', () => {
    const app = new ChatBotApp({ ui, logic, soundPlayer, notificationBadge });
    expect(ui.badge?.classList.contains('d-none')).toBe(true);
  });

  it('createApp instancia la app y oculta el badge', () => {
    createApp(ui, logic, soundPlayer, notificationBadge);
    expect(ui.badge?.classList.contains('d-none')).toBe(true);
  });

  it('showBadgeWithSound muestra el badge y reproduce sonido', () => {
    jest.useFakeTimers();
    const app = new ChatBotApp({ ui, logic, soundPlayer, notificationBadge });
    const playMock = jest.spyOn(soundPlayer, 'play').mockImplementation(() => {});
    app['showBadgeWithSound']();
    expect(ui.badge?.classList.contains('d-none')).toBe(false);
    jest.runAllTimers();
    expect(playMock).toHaveBeenCalled();
    playMock.mockRestore();
    jest.useRealTimers();
  });
});
