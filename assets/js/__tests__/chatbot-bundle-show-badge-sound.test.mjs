
import { ChatBotUI } from '../chatbot-ui.js';
import { BotLogic } from '../bot-logic.js';
import { SoundPlayer } from '../sound-player.js';
import { NotificationBadge } from '../notification-badge.js';
import { ChatBotApp } from '../chatbot-bundle.js';
import { jest } from '@jest/globals';

describe('ChatBotApp - showBadgeWithSound', () => {

  it('maneja un error si soundPlayer.play lanza una excepción', () => {
    jest.useFakeTimers();
    notificationBadge.show = () => {};
    soundPlayer.play = () => { throw new Error('Playback failed'); };
    app.notificationBadge = notificationBadge;
    app.soundPlayer = soundPlayer;
    expect(() => {
      app.showBadgeWithSound();
      jest.runAllTimers();
    }).toThrow('Playback failed');
    jest.useRealTimers();
  });

  it('ejecuta el callback de setTimeout y llama soundPlayer.play usando fake timers', () => {
    jest.useFakeTimers();
    let playCalled = false;
    notificationBadge.show = () => {};
    soundPlayer.play = () => { playCalled = true; };
    app.notificationBadge = notificationBadge;
    app.soundPlayer = soundPlayer;
    app.showBadgeWithSound();
    // Avanza el timer para ejecutar el callback
    jest.runAllTimers();
    expect(playCalled).toBe(true);
    jest.useRealTimers();
  });
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

  it('llama notificationBadge.show y soundPlayer.play', () => {
    let badgeShowCalled = false;
    let soundPlayCalled = false;
    notificationBadge.show = () => { badgeShowCalled = true; };
    soundPlayer.play = () => { soundPlayCalled = true; };
    app.notificationBadge = notificationBadge;
    app.soundPlayer = soundPlayer;
    app.showBadgeWithSound();
    // El sonido se reproduce en un setTimeout, así que avanzamos el timer
    setTimeout(() => {
      expect(badgeShowCalled).toBe(true);
      expect(soundPlayCalled).toBe(true);
    }, 0);
  });

  it('llama soundPlayer.play en múltiples llamadas a showBadgeWithSound y badge ya visible', (done) => {
    let playCount = 0;
    notificationBadge.show = () => { ui.badge.classList.remove('d-none'); };
    soundPlayer.play = () => { playCount++; };
    app.notificationBadge = notificationBadge;
    app.soundPlayer = soundPlayer;
    // Badge ya visible
    ui.badge.classList.remove('d-none');
    app.showBadgeWithSound();
    app.showBadgeWithSound();
    setTimeout(() => {
      expect(playCount).toBe(2);
      expect(ui.badge.classList.contains('d-none')).toBe(false);
      done();
    }, 10);
  });
});
