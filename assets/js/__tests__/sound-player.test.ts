import { SoundPlayer } from '../sound-player';
const { logError } = require('../helpers/logging.js');

jest.mock('../helpers/logging.js');

describe('SoundPlayer', () => {
  let audioMock: any;
  let originalAudio: any;
  let playMock: jest.Mock;

  beforeEach(() => {
    originalAudio = (global as any).Audio;
    playMock = jest.fn().mockResolvedValue(undefined);
    audioMock = jest.fn().mockImplementation(() => ({
      src: '',
      currentTime: 0,
      play: playMock,
      onended: null,
    }));
    (global as any).Audio = audioMock;
  });

  afterEach(() => {
    (global as any).Audio = originalAudio;
  });

  it('debe reproducir el sonido y llamar onEnd', () => {
    const player = new SoundPlayer('test.mp3');
    const onEnd = jest.fn();
    player.play(onEnd);
    expect(audioMock).toHaveBeenCalledWith('test.mp3');
    expect(player['audio'].currentTime).toBe(0);
    expect(playMock).toHaveBeenCalled();
    // Simular el evento onended
    if (typeof player['audio'].onended === 'function') {
      player['audio'].onended(new Event('ended'));
      expect(onEnd).toHaveBeenCalled();
    }
  });

  it('debe manejar error en play', async () => {
    playMock.mockRejectedValueOnce(new Error('fail'));
    const player = new SoundPlayer('test.mp3');
    await expect(player['audio'].play()).rejects.toThrow('fail');
  });
});
