import { BotLogic } from '../domain/bot-logic';

describe('BotLogic', () => {
  let uiMock: any;
  let logic: BotLogic;

  beforeEach(() => {
    uiMock = {
      setBotTyping: jest.fn(),
      setBadge: jest.fn(),
      botTyping: { textContent: '' }
    };
    logic = new BotLogic(uiMock);
  });

  it('debe iniciar el typing del bot', () => {
    jest.useFakeTimers();
    logic.startBotTyping();
    expect(uiMock.setBotTyping).toHaveBeenCalledWith('escribiendo...');
    jest.runAllTimers();
    expect(uiMock.setBotTyping).toHaveBeenCalledWith('');
    jest.useRealTimers();
  });

  it('debe mostrar el mensaje del bot letra por letra y luego llamar setBadge', () => {
    jest.useFakeTimers();
    logic.streamBotResponse('ok');
    // Simular el tipeo letra por letra
    for (let i = 0; i < 2; i++) {
      jest.advanceTimersByTime(40);
    }
    // Después de escribir, debe llamar setBadge tras 3s
    jest.advanceTimersByTime(3000);
    expect(uiMock.setBadge).toHaveBeenCalledWith(true);
    jest.useRealTimers();
  });
});
